interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`
      bg-white/80 backdrop-blur-sm 
      rounded-3xl 
      shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
      border border-white/50
      p-8
      ${className}
    `}>
            {children}
        </div>
    );
}
