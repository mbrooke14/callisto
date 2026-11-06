export default function AdaptSection() {
    return <>
        <style>{`
            section#section-8 {
                & li {
                    font-size: 1rem;
                }

                & #adapt-cards {
                    height: 40rem;
                    display: grid;
                    grid-template-rows: 1fr 1fr 1fr;
                    grid-template-columns: 1fr 1fr;
                    gap: 1em;
                }

                & .adapt-card {
                    background-color: #333;
                    padding: 1em 2em;
                    border-radius: 0.25em;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }
        `}</style>

        <h2>Section 8</h2>
        <h1>Adaptations requises</h1>
        <p>Nous avons dressé ci-dessous une liste des avancements et des adaptations que les humains devront franchir afin de rendre Callisto un objectif envisageable. Sans ces initiatives, la survie sur Callisto ne serait pas soutenable.</p>
    
        <div id="adapt-cards">
            <Card style={{gridColumn: "span 2"}}>
                <h3>Nourriture</h3>
                <ul>
                    <li>Seulement une quantité finie de nourriture peut être lancée dans une fusée; la plupart serait consommé avant même atterir sur Callisto.</li>
                    <li>En cela, il est non-négotiable d'avoir de l'agriculture sur Callisto à l'aide de serres/environements controllées</li>
                    <li>Des lampes artificielles peuvent être utilisés en tandem avec des systèmes hydroponiques afin de simuler la lumière solaire et le sol</li>
                    <li>En cas d'urgence, il serait important d'avoir plusieurs sources alimentaires et de garder des réserves.</li>
                </ul>
            </Card>
            <Card>
                <h3>Conditions atmosphèriques</h3>
                <ul>
                    <li>La pression atmosphèrique est près de 0 bar</li>
                    <li>Il est important de maintenir une atmosphère d'un bar oxygéné</li>
                    <li>Pour soutenir la respiration à long-terme, l'eau glaciale de Callisto pourrait subir une électrolyse pour créer de l'oxygène moléculaire</li>
                    <li>Avec un tel système à rendement parfait, l'eau utilisé pour la respiration dans une journée serait environ un litre par personne</li>
                </ul>
            </Card>
            <Card>
                <h3>Protection contre les températures extrèmes</h3>
                <ul>
                    <li>Construire des habitats avec une isolation thermique efficace</li>
                    <li>Developper des systèmes de chauffage reliables</li>
                </ul>
            </Card>
            <Card>
                <h3>Gravité faible</h3>
                <ul>
                    <li>Afin de ne pas s'atrophier les muscles, il est important de contrer les effets de la gravité faible</li>
                    <li>Pour supporter la santé des astronautes, il faudrait élaborer un programme d'exercise physique mandatoire</li>
                    <li>Une attention particulière devrait être porter à se problème afin que la santé des rechercheurs ne soit pas détérioré</li>
                    <li>Avant de lancer une colonie long-terme, les études sur les impactes de la gravité basse sur la jeunesse devrait être conducté</li>
                </ul>
            </Card>
            <Card>
                <h3>Production d'énergie</h3>
                <ul>
                    <li>Callisto ne donne pas beaucoups d'options énergétiques; elle est peu-illuminé, n'as pas de vents, liquides à la surface ou même d'activité géologique</li>
                    <li>La seule source d'énergie soutenable est nucléaire ou radioactive (e.g. <i>RTGs</i>, comme Voyager I/II)</li>
                    <li>Ceci pourrait être soutenu à long-terme par l'extraction des radioisotopes naturellement trouvées sur Callisto</li>
                </ul>
            </Card>
        </div>
    </>
}

interface CarpProps extends React.ComponentPropsWithoutRef<"div"> {}

function Card({children, ...props}: CarpProps) {
    return <div className="adapt-card" {...props}>{children}</div>
}
