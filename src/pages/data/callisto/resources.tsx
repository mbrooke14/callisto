export default function ResourcesSection() {
    return <>
        <style>{`
            section#section-3 .section-foreground {
                transition: background-color 400ms;
                border-top-left-radius: 1em;
                border-bottom-left-radius: 1em;
            }
            section#section-3 .section-background {
                transition: background-color 400ms;
            }
            div.res-info-cards {
                transition: opacity 400ms;
                display: flex;
                flex-direction: column;
                margin-top: 2rem;
                gap: 2rem;
            }
            div.res-info-card {
                width: 600px;
                padding: 1em 2em;
                border-radius: 0.5em;
                height: 4rem;
                transition: height 200ms;

                & li, p {
                    font-size: 1rem;
                }

                & *:not(h3) {
                    opacity: 0;
                }
            }

            div.res-info-card[active] {
                height: fit-content;

                * {
                    opacity: 1;
                }
            }
        `}</style>
        <div className="title">
            <h2>Section 3</h2>
            <h1>Ressources</h1>
        </div>
        <div className="res-info-cards">
            <div className="res-info-card" style={{backgroundColor: "#8fbbd65f", color: "#ffffff"}}>
                <h3>Eau glacée</h3>
                <h4>Applications</h4>
                <ul>
                    <li>L'extraction, fondement et filtration de la glace pourrait supporter le réserve d'eau potable</li>
                    <li>L'eau produite pourrait aussi être utilisé en agriculure ou en hygène</li>
                    <li>L'électrolyse pourrait produire de l'oxygène</li>
                </ul>
                <p>Sans ces applications, la survie serait simplement impossible, pourtant le traitement de la glace prenderai consédérablement d'énergie.</p>
            </div>
            <div className="res-info-card" style={{backgroundColor: "#d6bc8f5f", color: "#ffffff"}}>
                <h3>Matériaux rocheuses</h3>
                <h4>Applications</h4>
                <ul>
                    <li>Pourrait être utilsé en construction comme renforcements.</li>
                    <li>Production industrielle</li>
                </ul>
            </div>
            <div className="res-info-card" style={{backgroundColor: "#9e8fd65f", color: "#ffffff"}}>
                <h3>Isotopes radiactives</h3>
                <h4>Applications</h4>
                <ul>
                    <li>U-235, U-238, et Th-232 peuvent être utilisées comme matériels fissiles pour l'énergie nucléaire.</li>
                    <li>Produit de l'énergie indépendant de facteurs environmentaux (e.g. soleil adéquat pour les panneaux solaires)</li>
                </ul>
            </div>
        </div>
    </>
}
