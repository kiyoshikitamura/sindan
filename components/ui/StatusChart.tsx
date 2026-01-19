'use client';

interface StatusChartProps {
    status: {
        visual: number;
        mental: number;
        money: number;
        alcohol: number;
    };
}

export function StatusChart({ status }: StatusChartProps) {
    const items = [
        { label: 'ビジュアル', value: status.visual, icon: '💄' },
        { label: 'メンタル', value: status.mental, icon: '❤️‍🔥' },
        { label: '稼ぎ', value: status.money, icon: '💰' },
        { label: 'お酒', value: status.alcohol, icon: '🍾' },
    ];

    return (
        <div className="grid grid-cols-2 gap-4 w-full bg-white/50 rounded-xl p-4">
            {items.map((item) => (
                <div key={item.label} className="flex flex-col">
                    <div className="flex items-center gap-1 text-xs font-bold text-[var(--color-dark-gray)] mb-1">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                    </div>
                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`text-sm ${star <= item.value ? 'text-[var(--color-neon-pink)]' : 'text-gray-300'}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
