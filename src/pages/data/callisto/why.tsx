export default function WhySection() {
    return <>
        <style>{`
            section#section-2 {
                z-index: -2;
            }

            .carousel {
                min-height: 0;
                // width: 100%;
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 1rem;
            }

            .carousel .carousel-item {
                display: flex;
                color: transparent;
                overflow: hidden;
                align-items: center;
                justify-content: center;
                // width: fit-content;
                // transition: grid-column 200ms;
            }

            .carousel .carousel-item .content {
                border: 1px solid white;
                border-radius: 0.5em;
                display: flex;
                flex-direction: column;
                justify-content: end;
                padding: 1em 2em;
                height: 100%;
                background-size: cover;
                background-position: center;
                width: 100%;
                scale: 0.95;
                opacity: 0.25;
                transition-property: width, scale, color, opacity;
                transition-duration: 200ms;
                cursor: pointer;
            }

            .carousel .carousel-item[focused] {
                grid-column: span 4;
                color: var(--fg-col);
                // width: 100%;

                & .content {
                    scale: 1;
                    opacity: 1;
                }
            }
        `}</style>
        <div className="title">
            <h2>Section 2</h2>
            <h1>Pourquoi Callisto?</h1>
        </div>
        <Carousel>
            <CarouselItem index={1} title="Radiation Faible" photo="url('/jupiter.png')" focused="true">L'orbite de callisto est toujours dans le magnétosphère de Jupitère, mais sa distance atténue la quantité de radiation reçue. À environ 36.5mSv/a, elle est parmi les meilleurs candidats en termes de protection contre la radiation.</CarouselItem>
            <CarouselItem index={2} title="Infrastructure" photo="url('/0x0.webp')">Son terrain et atmosphère ne pose aucun difficultés à l'établissement/installation d'infrastructure pour supporter des colonies.</CarouselItem>
            <CarouselItem index={3} title="Abondance d'eau glacée" photo="url('/ice.webp')">Environ 40-55% de la masse lunaire de Callisto est composé d'eau.</CarouselItem>
            <CarouselItem index={4} title="Resources chimiques/minérales" photo="url('/uranium.png')"></CarouselItem>
        </Carousel>
    </>
}

interface CarouselProps extends React.ComponentPropsWithoutRef<"div"> {}

function Carousel({children}: CarouselProps) {
    return <div className="carousel">
        {children}
    </div>
}

interface CarouselItemProps extends React.ComponentPropsWithoutRef<"div"> {
    title: string,
    focused?: string,
    photo?: string,
    index: number
}

function CarouselItem({title, children, focused, className, photo, index}: CarouselItemProps) { // @ts-ignore
    return <div className={`carousel-item ${className}`} onClick={() => window.scrollTo({top: window.scrollY + document.querySelector("section#section-2")!.getBoundingClientRect().top + (index*0.9)*1000})} focused={focused}>
        <div className="content" style={{backgroundImage: photo}}>
            <h3>{title}</h3>
            {children}
        </div>
    </div>
}
