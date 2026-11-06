export default function PhysioSection() {
    return <>
        <style>{`
            section#section-5 .title {
                transition-property: translate;
                transition-duration: 200ms;
                translate: 100dvw;
            }

            .physio-cards {
                transition: translate 200ms;
            }
            
            .physio-card {
                transition: translate 200ms;
                translate: 100dvw;

                & h3 {
                    font-size: 1.5rem;
                    padding-bottom: 0.5rem;
                }
            }
        `}</style>

        <div className="title">
            <h2>Section 5</h2>
            <h1>Défis physiologiques</h1>
        </div>

        <div className="physio-cards">
            <Card photo="https://s16736.pcdn.co/wp-content/uploads/sites/270/2019/07/SpaceJuly-min.jpg.optimal.jpg" bgcol="#ffffff" fgcol="#000000">
                <h3>Gravité faible (1.24ms⁻²)</h3>
                <ul>
                    <li>Densité d'os réduite</li>
                    <li>Changements cardiovasculaires</li>
                    <li>Atrophication des muscles et perte de puissance</li>
                    <li>Complications possibles pendant la grossesse et dévélopement enfant</li>
                </ul>
            </Card>
            <Card photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzeJ9eOZ__EoFRy2oQLGCUCdisXoYQsk_JGx6dbQ5p8VgOeNose9Rh1mbi&s=10" bgcol="#abd5ef" fgcol="#082a3f">
                <h3>Soleil limité</h3>
                <ul>
                    <li>Carence de vitamine D naturel</li>
                    <li>Conséquences probables sur le rhythme circadian</li>
                    <li>Impactes psychologiques possibles (e.g. dépression, perte de motivation, etc.)</li>
                </ul>
            </Card>
        </div>
    </>
}

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
    photo: string,
    bgcol?: string,
    fgcol?: string
};

function Card({children, photo, bgcol, fgcol}: CardProps) {
    return <div className="physio-card" style={{
            left: "6rem", right: "6rem",
            padding: "0.5em", borderRadius: "1em",
            display: "flex", flexDirection: "row",
            gap: "4em", background: bgcol, color: fgcol,
            alignItems: "center"
        }}>
        <img src={photo} style={{width: "400px", height: "250px", objectFit: "cover", borderRadius: "0.5em"}} />
        <div>
            {children}
        </div>
    </div>
}
