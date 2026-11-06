import Calliso from "@/modules/solar_system/callisto"

export default function InfoSection() {
    return <>
        <style>
            {`
                div.title {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                div.title * {
                    width: fit-content;
                    height: fit-content;
                }
                #info-callisto-model-wrapper {
                    position: fixed;
                    inset: 100px 0 0 0;
                    opacity: 0;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    gap: 6rem;
                    z-index: -1;
                    transition: opacity 200ms;
                }
                .flex-left, .flex-right {
                    flex: 1;
                    display: flex;
                    align-items: center;

                    & * {
                        width: fit-content;
                    }
                }
                .flex-left {justify-content: end}
                .flex-right {justify-content: start}
                #info-callisto-model {
                    width: 0px;
                    height: 0px;
                    transition-property: width, height;
                    transition-duration: 200ms;
                }
                #info-info-cards-left,
                #info-info-cards-right {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    position: relative;
                    width: 400px;
                    height: 400px
                }
                .info-info-card {
                    transition-property: translate, opacity;
                    transition-duration: 200ms;
                    position: absolute;
                }
            `}
        </style>
        <div className="title">
            <h2>Section 1</h2>
            <h1>Infos générales</h1>
        </div>
        <div id="info-callisto-model-wrapper">
            <div className="flex-left">
                <div id="info-info-cards-left">
                    <div className="info-info-card">
                        <h3>Composition</h3>
                        <ul>
                            <li>Eau glacée</li>
                            <li>Matériaux rocheuses</li>
                            <li>Minérales hydratées</li>
                            <li>Composés de carbone</li>
                        </ul>
                    </div>
                    <div className="info-info-card">
                        <h3>Exosphère (i.e. atmosphère)</h3>
                        <p>Très mince (1.7×10¯¹² bar); pas respirable. Primairement composé de CO₂ et de O₂.</p>
                    </div>
                </div>
            </div>
            <div style={{width: 500, height: 500, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Calliso width={500} height={500} id="info-callisto-model" />
            </div>
            <div className="flex-right">
                <div id="info-info-cards-right">
                    <div className="info-info-card">
                        <h3>Paramètres lunaires</h3>
                        <ul>
                            <li>Radius: 2410.3 km</li>
                            <li>Demi-grande axe: 1883×10³km</li>
                            <li>Masse: 1076×10²⁰ kg</li>
                            <li>Période orbitale: 16.7 journées</li>
                        </ul>
                    </div>
                    <div className="info-info-card">
                        <h3>Surface</h3>
                        <ul>
                            <li>Extrèmement ancienne</li>
                            <li>Intensément cratéré</li>
                            <li>Manque d'activité géoloquie</li>
                        </ul>
                    </div>
                    <div className="info-info-card">
                        <h3>Océan sousterrain</h3>
                        <p>Il y as de l'évidence convaincante d'un océan sousterrain saliné, mais il faut toujours plus d'études afin de confirmer. Si il est véritable, Callisto est estimé de contenir autant que 40 fois l'eau que possède la terre.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
