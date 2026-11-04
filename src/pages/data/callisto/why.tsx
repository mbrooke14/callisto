export default function WhySection() {
    return <>
        <style>{`
            .carousel {
                min-height: 0;
                // width: 100%;
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 1rem;
            }

            .carousel .carousel-item {
                border: 1px solid white;
                border-radius: 0.5em;
                display: flex;
                flex-direction: column;
                justify-content: end;
                padding: 1em 2em;
                color: transparent;
                overflow: hidden;
                min-height: 0;
                transition: grid-column 200ms;
                background-size: cover;
                background-position: center;
            }

            .carousel .carousel-item[focused] {
                grid-column: span 4;
                color: var(--fg-col);
            }
        `}</style>
        <div className="title">
            <h2>Section 2</h2>
            <h1>Pourquoi Callisto?</h1>
        </div>
        <Carousel>
            <CarouselItem title="Radiation Faible" photo="url('/jupiter.png')" focused="true">L'orbite de callisto est toujours dans le magnétosphère de Jupitère, mais sa distance atténue la quantité de radiation reçue. À environ 36.5mSv/a, elle est parmi les meilleurs candidats en termes de protection contre la radiation.</CarouselItem>
            <CarouselItem title="Infrastructure" photo="url('/valhalla.jpg')">Son terrain et atmosphère ne pose aucun difficultés à l'établissement/installation d'infrastructure pour supporter des colonies.</CarouselItem>
            <CarouselItem title="Abondance d'eau" photo="url('/water.webp')">Environ 40-55% de la masse lunaire de Callisto est composé d'eau.</CarouselItem>
            <CarouselItem title="Resources chimiques/minérales" photo="url('/uranium.png')"></CarouselItem>
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
    photo?: string
}

function CarouselItem({title, children, focused, className, photo}: CarouselItemProps) { // @ts-ignore
    return <div style={{backgroundImage: photo}} className={`carousel-item ${className}`} focused={focused}>
        <h3>{title}</h3>
        {children}
    </div>
}
