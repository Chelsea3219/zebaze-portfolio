import Image from "next/image";

type CircularImageProps = {
    src: string;
    alt: string;
    className?: string;
    };

export function CircularImage({ src, alt, className = "" }: CircularImageProps) {
    return (
        <div
        className={`
            relative aspect-square w-full overflow-hidden rounded-full 
            border-8 border-primary 
            outline-4 outline-primary outline-offset-8
            ${className}
        `}
        >
        <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(min-width: 768px) 40vw, 80vw"
            className="object-cover"
        />
        </div>
    );
}
