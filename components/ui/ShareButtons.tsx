'use client';

import { Button } from './Button';

interface ShareButtonsProps {
    title: string;
    shareUrl: string; // 実際はデプロイ後のURL等が理想だが、今回はwindow.locationを見るかpropsで渡す
    catchphrase: string;
}

export function ShareButtons({ title, shareUrl, catchphrase }: ShareButtonsProps) {
    const text = `私の夜職適性は【${title}】でした！\n${catchphrase}\n#夜職適性診断`;
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(shareUrl);

    const xUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`;

    return (
        <div className="flex flex-col gap-3 w-full">
            <p className="text-center text-sm font-bold text-[var(--color-dark-gray)] mb-1">
                \ 結果をシェアしてね♡ /
            </p>
            <div className="flex gap-3 justify-center">
                <a
                    href={xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <Button className="w-full !bg-black text-white border-0 py-3 text-sm">
                        𝕏 でポスト
                    </Button>
                </a>
                <a
                    href={lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <Button className="w-full !bg-[#06C755] text-white border-0 py-3 text-sm">
                        LINE で送る
                    </Button>
                </a>
            </div>
        </div>
    );
}
