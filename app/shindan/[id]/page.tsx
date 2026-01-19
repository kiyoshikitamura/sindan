'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { yorushokuDiagnosis } from '@/data/yorushoku';
import { DiagnosisData, JobType } from '@/types/shindan';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { StatusChart } from '@/components/ui/StatusChart';
import { ShareButtons } from '@/components/ui/ShareButtons';

import { renaiDiagnosis } from '@/data/renai';
import { furindoDiagnosis } from '@/data/furindo';

const diagnosisMap: Record<string, DiagnosisData> = {
    yorushoku: yorushokuDiagnosis,
    renai: renaiDiagnosis,
    furindo: furindoDiagnosis,
};

export default function ShindanPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const diagnosis = diagnosisMap[resolvedParams.id];

    if (!diagnosis) {
        notFound();
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [scores, setScores] = useState<Record<string, number>>({});
    const [finished, setFinished] = useState(false);
    const [resultId, setResultId] = useState<JobType | null>(null);

    const handleAnswerExplicit = (isYes: boolean) => {
        let nextScores = { ...scores };

        if (isYes) {
            const currentQuestion = diagnosis.questions[currentIndex];
            Object.entries(currentQuestion.scoreChanges).forEach(([job, score]) => {
                nextScores[job] = (nextScores[job] || 0) + score;
            });
        }

        setScores(nextScores);

        if (currentIndex < diagnosis.questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            let topJob: JobType | null = null;

            if (diagnosis.logicType === 'total_score') {
                const totalScore = nextScores['score'] || 0;
                // 0-100のスコアをlevel_0, level_10...にマッピング
                // 設問10問×10点 = 100点満点と仮定
                const level = Math.floor(totalScore / 10) * 10;
                const constrainedLevel = Math.max(0, Math.min(100, level));
                topJob = `level_${constrainedLevel}` as JobType;
            } else {
                let maxScore = -1;
                (Object.keys(diagnosis.results) as JobType[]).forEach((job) => {
                    const score = nextScores[job] || 0;
                    if (score > maxScore) {
                        maxScore = score;
                        topJob = job;
                    }
                });
            }

            setResultId(topJob);
            setFinished(true);
        }
    };

    const handleRetry = () => {
        setScores({});
        setCurrentIndex(0);
        setFinished(false);
        setResultId(null);
    };

    if (finished && resultId) {
        const result = diagnosis.results[resultId];
        // データ不整合などのためのガード説
        if (!result) return <div>結果データが見つかりません</div>;

        const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
        const themeStyles = diagnosis.theme ? {
            '--color-baby-pink': diagnosis.theme.primary,
            '--color-neon-pink': diagnosis.theme.accent,
            '--color-dark-gray': diagnosis.theme.secondary,
            '--background': diagnosis.theme.background,
            'color': diagnosis.theme.text,
        } as React.CSSProperties : {};

        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#FFF0F5] to-white" style={diagnosis.theme ? { background: diagnosis.theme.background, color: diagnosis.theme.text } : {}}>
                {diagnosis.theme && (
                    <style jsx global>{`
                        :root {
                            --color-baby-pink: ${diagnosis.theme.primary};
                            --color-neon-pink: ${diagnosis.theme.accent};
                            --color-dark-gray: ${diagnosis.theme.secondary};
                        }
                    `}</style>
                )}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-10 left-10 text-4xl animate-bounce delay-1000">✨</div>
                    <div className="absolute top-40 right-10 text-3xl animate-pulse">💖</div>
                    <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-500">🦄</div>
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="w-full max-w-sm relative z-10"
                >
                    <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border-4 border border-[var(--color-baby-pink)]">
                        <div className="h-32 bg-[var(--color-baby-pink)] relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30" />
                            <div className="text-white font-bold text-lg tracking-widest drop-shadow-md">DIAGNOSIS CERTIFICATE</div>
                            <div className="absolute -bottom-8 w-full h-16 bg-white rounded-t-[50%]" />
                        </div>

                        <div className="px-6 pb-8 -mt-4 text-center">
                            <div className="w-20 h-20 mx-auto bg-white rounded-full border-4 border-[var(--color-neon-pink)] flex items-center justify-center text-4xl shadow-md mb-4 relative z-10">
                                👑
                            </div>

                            <div className="text-[var(--color-neon-pink)] font-bold text-sm mb-1 px-2 py-1 bg-pink-50 inline-block rounded-full">
                                {result.catchphrase}
                            </div>

                            <h2 className="text-3xl font-black text-[var(--color-dark-gray)] mb-4 mt-2">
                                {result.title}
                            </h2>

                            <p className="text-sm text-neutral-600 font-medium leading-relaxed mb-6 text-left bg-gray-50 p-3 rounded-xl border border-gray-100">
                                {result.description}
                            </p>

                            <div className="mb-6">
                                <StatusChart status={result.status} />
                            </div>

                            <div className="mb-6 flex items-center justify-center gap-2 text-sm font-bold text-neutral-500">
                                <span>Best Partner:</span>
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-xs">
                                    {diagnosis.results[result.compatibleJob]?.title}
                                </span>
                            </div>

                            <div className="w-full border-t-2 border-dashed border-gray-200 my-6" />

                            <div className="mb-6">
                                <ShareButtons
                                    title={result.title}
                                    catchphrase={result.catchphrase}
                                    shareUrl={shareUrl}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <Button
                                    onClick={handleRetry}
                                    variant="secondary"
                                    className="w-full py-3 text-sm !border-gray-200"
                                >
                                    もう一度診断する
                                </Button>

                                <Link href="/" className="w-full">
                                    <div className="text-xs text-gray-400 underline mt-2 hover:text-gray-600">
                                        トップページへ戻る
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    const question = diagnosis.questions[currentIndex];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4" style={diagnosis.theme ? { background: diagnosis.theme.background, color: diagnosis.theme.text } : {}}>
            {diagnosis.theme && (
                <style jsx global>{`
                        :root {
                            --color-baby-pink: ${diagnosis.theme.primary};
                            --color-neon-pink: ${diagnosis.theme.accent};
                            --color-pastel-purple: ${diagnosis.theme.secondary}; 
                        }
                    `}</style>
            )}
            <div className="fixed top-20 left-10 text-6xl animate-bounce duration-[3000ms] opacity-20">🐰</div>
            <div className="fixed bottom-20 right-10 text-6xl animate-pulse duration-[2000ms] opacity-20">💊</div>

            <div className="w-full max-w-lg">
                <ProgressBar current={currentIndex + 1} total={diagnosis.questions.length} />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <Card className="mb-8 min-h-[200px] flex items-center justify-center text-center relative overflow-visible">
                            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[var(--color-neon-pink)] rounded-full border-2 border-white" />
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-[var(--color-baby-pink)] rounded-full border-2 border-white" />

                            <h2 className="text-2xl font-bold text-[var(--color-dark-gray)] leading-relaxed">
                                {question.text}
                            </h2>
                        </Card>
                    </motion.div>
                </AnimatePresence>

                <div className="grid grid-cols-2 gap-6">
                    <Button
                        variant="primary"
                        onClick={() => handleAnswerExplicit(true)}
                        className="text-2xl"
                    >
                        YES
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => handleAnswerExplicit(false)}
                        className="text-2xl !border-[var(--color-pastel-purple)] !text-[var(--color-pastel-purple)]"
                    >
                        NO
                    </Button>
                </div>
            </div>
        </div>
    );
}
