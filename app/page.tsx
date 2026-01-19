import Link from 'next/link';
import { yorushokuDiagnosis } from '@/data/yorushoku';
import { renaiDiagnosis } from '@/data/renai';
import { furindoDiagnosis } from '@/data/furindo';
import { aisaredoDiagnosis } from '@/data/aisaredo';
import { Card } from '@/components/ui/Card';

export default function Home() {
  const diagnoses = [yorushokuDiagnosis, renaiDiagnosis, furindoDiagnosis, aisaredoDiagnosis];

  return (
    <div className="min-h-screen p-6 sm:p-20 relative overflow-hidden">
      {/* 装飾用背景要素（ぼんやりした光） */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-baby-pink)] rounded-full blur-[100px] opacity-40 -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-pastel-purple)] rounded-full blur-[100px] opacity-40 -z-10" />

      <main className="max-w-2xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center relative">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-neon-pink)] drop-shadow-sm mb-2">
            診断一覧
          </h1>
          <div className="text-[var(--color-dark-gray)] font-bold">Diagnoses List</div>
          <span className="absolute -top-6 -right-8 text-4xl animate-bounce">👿</span>
          <span className="absolute -bottom-4 -left-8 text-4xl animate-pulse">🎀</span>
        </div>

        <div className="grid gap-6 w-full">
          {diagnoses.map((diagnosis) => (
            <Link
              key={diagnosis.id}
              href={`/shindan/${diagnosis.id}`}
              className="block group"
            >
              <Card className="hover:scale-[1.02] transition-transform duration-300 border-2 border-transparent hover:border-[var(--color-baby-pink)]">
                <h2 className="text-2xl font-bold mb-3 text-[var(--color-neon-pink)] group-hover:text-[var(--color-baby-pink)] transition-colors">
                  {diagnosis.title}
                </h2>
                <p className="text-neutral-600 font-medium">
                  {diagnosis.description}
                </p>
                <div className="mt-4 text-right text-[var(--color-baby-pink)] font-bold">
                  診断する ➜
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
