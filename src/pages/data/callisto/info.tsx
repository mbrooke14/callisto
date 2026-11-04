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
                        <h3>Atmosphère</h3>
                        <p>Très mince, pas respirable.</p>
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
                            <li>Demi-grande axe: 1882.7 * 10^3 km</li>
                            <li>Masse: 1075.9 * 10^20 kg</li>
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
                        <p>Possède possiblement un océan sousterrain, mais il est toujours le sujet de recherches scientifiques. Si il existe, nous estimons que Callisto pourrait avoir autant que 40 fois l'eau que la terre possède.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
