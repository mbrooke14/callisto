import Calliso from "@/modules/solar_system/callisto"

export default function LogSection() {
    return <>
        <style>{`
            section#section-6 .title,
            section#section-6 .log-main {
                transition: translate 200ms;
            }
            
            div.log-card {
                transition-property: translate opacity;
                transition-duration: 200ms;
            }
        `}</style>

        <div className="title" style={{translate: "100dvw"}}>
            <h2>Section 6</h2>
            <h1>Défis logistiques</h1>
        </div>
        <div className="log-main" style={{display: "flex", alignItems: "center", translate: "100dvw", gap: "8rem"}}>
            <Calliso width={600} height={600} />
            <div className="log-cards" style={{position: "relative", height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center"}}>
                <Card>
                    <h3>Distance de la terre</h3>
                    <ul>
                        <li>environ 5 unités astronomiques du soleil (4 de la terre pendant le plus proche approche)</li>
                        <li>Requiert de la technologie de propulsion avancée pour s'y rendre en temps réaliste</li>
                        <li>Des resources d'urgence ou de support ne sont pas réalisables</li>
                    </ul>
                </Card>
                <Card>
                    <h3>Coûts de construction</h3>
                    <ul>
                        <li>Équipement essentiel serait transporté de la terre</li>
                        <li>Des machines spécialisées seront oubligatoires pour l'extraction des matériaux</li>
                        <li>Établir toute une colonie autosuffisante serait incroyablement dispendieux</li>
                    </ul>
                </Card>
                <Card>
                    <h3>Dépendance sur la technologie</h3>
                    <ul>
                        <li>Dépendance sur des systèmes artificiels pour l'oxygène, pression, chaleur et la nourriture.</li>
                        <li>Une simple malfonction d'un système vitale pourrait menacer toute la population</li>
                    </ul>
                </Card>
            </div>
        </div>
    </>
}

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}

function Card({children}: CardProps) {
    return <div className="log-card" style={{position: "absolute", width: "40rem", height: "fit-content"}}>
        {children}
    </div>
}
