export default function EnvSection() {
    return <>
        <style>{`
            section#section-4 .title,
            section#section-4 .card-arrangement {
                transition: translate 200ms;
            }

            .env-card {
                transition-property: scale rotation;
                transition-duration: 200ms;

                & li {
                    font-size: 1rem;
                }
            }
        `}</style>
        <div className="title">
            <h2>Section 4</h2>
            <h1>Défis environmentaux</h1>
        </div>
        <div className="card-arrangement" style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "2em"}}>
            <Card photo="https://explainingscience.org/wp-content/uploads/2020/04/moon-lunar-sky.jpg" bgcol="#ffffff" colour="#000000">
                <h3>Absence d'atmosphère respirable</h3>
                <ul>
                    <li>Exosphère extrèmement mince</li>
                    <li>Pression atmosphérique est non-vivable</li>
                    <li>Absence d'oxygène suffisant pour la respiration</li>
                </ul>
            </Card>
            <Card photo="https://www.westcoastpenguintrust.org.nz/wp-content/uploads/2022/08/Pay-penguins_0714.jpg" bgcol="#e3ebf3" colour="#17183f">
                <h3>Températures extrèmes (-140°C)</h3>
                <ul>
                    <li>Ne supporte pas la vie sans accomodations technologiques avancées</li>
                    <li>Équipement peut malfonctionner</li>
                    <li>Les habitats requiererons du chauffement et insulation constant et reliable</li>
                </ul>
            </Card>
            <Card photo="/valhalla.jpg" bgcol="#efca9b" colour="#371c0c">
                <h3>Impactes</h3>
                <ul>
                    <li>Callisto est l'objet le plus bombardé dans le système solaire</li>
                    <li>La distribution de chocs n'est pas uniforme; l'hémisphère de traîne (trailing hemisphère) reçoit considérablement moins d'impactes, pourtant son niveau de radiation et notablement plus intense que la moyenne globale.</li>
                </ul>
            </Card>
        </div>
    </>
}

interface Card extends React.ComponentPropsWithoutRef<"div"> {
    photo: string,
    colour?: string,
    bgcol?: string
}

function Card({children, photo, colour, bgcol}: Card) {
    return <div className="env-card" style={{
        width: 400, height: 550, 
        backgroundImage: photo,
        backgroundSize: "cover",
        backgroundPosition: "top",
        borderRadius: "0.5em",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        overflow: "hidden",
        color: colour
    }}>
        <img src={photo} style={{flex: "1", minHeight: "0", objectFit: "cover", objectPosition: "top"}}/>
        <div style={{background: bgcol, padding: "1em 2em", flex: "0 0 fit-between"}}>
            {children}
        </div>
    </div>
}
