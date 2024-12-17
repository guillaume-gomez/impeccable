import { useRef } from "react";

interface cardInterface {
    title: string;
    content: string;
    color: string;
    imageSrc: string;
    borderBackground: string;
    level: number;
    totalSeries: number;
    seriesPosition: number;
}

function Card({
    title,
    content,
    color,
    imageSrc,
    borderBackground,
    level,
    seriesPosition,
    totalSeries
} : cardInterface ) {
    const boundingRef = useRef<DOMRect|null>(null);
    return (
        <div
            onMouseEnter={(event) => {
                boundingRef.current = event.currentTarget.getBoundingClientRect();
            }}
            onMouseLeave={() => {
                boundingRef.current = null;
            }}
            onMouseMove={(event) => {
                if(!boundingRef.current) {
                    return;
                }
                const x = event.clientX - boundingRef.current.left;
                const y = event.clientY - boundingRef.current.top;

                const xPercentage = x / boundingRef.current.width;
                const yPercentage = y / boundingRef.current.height;

                //xPercentage and yPercentage has in interval between [0, 1];
                const centerRotation = 0.5;
                const angle = 20;
                const xRotation = (xPercentage - centerRotation) * angle;
                const yRotation = (centerRotation - yPercentage) * angle;

                event.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
                event.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
                event.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
                event.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
            }}
            className="group relative card w-96 shadow-xl p-4 image-full
                        hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]
                        transition-transform ease-out
                    "
            style={{ background: borderBackground, height: 500 }}
        >
            <div className="card-body rounded-xl items-center text-black text-center bg-white p-0">
                <figure className="h-full">
                <img
                  src={imageSrc}
                  alt="background"
                  className="rounded-xl h-full" />
                </figure>
                <div className="absolute inset-0 text-black">
                    <div className="p-4 rounded-xl" style={{width: 50, background: color}}>
                        <span className="font-bold">{level}</span>
                    </div>
                </div>
                <div className="absolute text-black text-center w-full flex flex-col items-center gap-1" style={{bottom: 5}}>
                    <div>
                        <h2 className="font-extrabold text-bold bg-secondary p-4 text-2xl w-full" style={{background: color}}>{title}</h2>
                        <p style={{background: color}}>{content}</p>
                    </div>
                    <span className="rounded-xl p-2 text-xs" style={{width: 50, background: color}}>
                        {seriesPosition}/{totalSeries}
                    </span>
                </div>
                <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]"
                >
                </div>
            </div>
        </div>
    );
}

export default Card;