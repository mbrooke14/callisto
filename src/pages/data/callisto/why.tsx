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
            <CarouselItem index={1} title="Radiation Faible" photo="url('/jupiter.png')" focused="true">Callisto se trouve dans une zone moins intense de la magnétosphère Jovienne. Comparé aux autres lunes intérieures, elle reçoit une quantité de radiation très petite... Seulement 36.5 mSv/yr; elle est une des places les moins irradiées du système solaire!</CarouselItem>
            <CarouselItem index={2} title="Infrastructure" photo="url('/0x0.webp')">Son terrain et atmosphère ne pose aucun difficultés à l'établissement/installation d'infrastructure pour supporter des colonies.</CarouselItem>
            <CarouselItem index={3} title="Abondance d'eau glacée" photo="url('/ice.webp')" col="black">Environ 40-55% de la masse lunaire de Callisto est composé d'eau si nous considérons l'océan sousterrain.</CarouselItem>
            <CarouselItem index={4} title="Resources chimiques/minérales" photo="url('/uranium.png')">Callisto possède naturellement des métalliques et rocheuses comme le fer, magnésium, chlore, sodium et silicium. De plus, sa composition chondritique indique la présence de radioisotopes en petites quantités, mais il est inconnu si ils se retrouvent de concentrations usables/extractable ou si elle est trop diffuse.</CarouselItem>
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
    index: number,
    col?: string
}

function CarouselItem({title, children, focused, className, photo, index, col="white"}: CarouselItemProps) { // @ts-ignore
    return <div className={`carousel-item ${className}`} onClick={() => window.scrollTo({top: window.scrollY + document.querySelector("section#section-2")!.getBoundingClientRect().top + (index*0.9)*1000})} style={{ "--fg-col": col } as React.CSSProperties} focused={focused}>
        <div className="content" style={{backgroundImage: photo}}>
            <h3>{title}</h3>
            {children}
        </div>
    </div>
}
