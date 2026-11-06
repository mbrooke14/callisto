export default function CompareSection() {
    return <>
        <style>{`
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 2rem;

                & * {
                    border: 0;
                    outline: 0;
                }

                & .fst {
                    max-width: 160px;
                    text-align: right;
                    padding-right: 1em;
                    line-height: 1.2rem;
                }

                & tr {
                    height: 4rem;
                }

                & th {
                    border: 1px solid #999999;
                }

                & td {
                    text-align: center;
                    border-inline: 1px solid #999999;
                }
                
                & .green {
                    background-color: #9affa6;
                    color: #0e3826;
                }

                & .yellow {
                    background-color: #fffc9a;
                    color: #38270e;
                }

                & .orange {
                    background-color: #ffc29a;
                    color: #38150e;
                }

                & .red {
                    background-color: #ff9aba;
                    color: #380e32;
                }

                & tbody {
                    border-bottom: 1px solid #999999;
                }
            }
        `}</style>
        <h2>Section 7</h2>
        <h1>Comparaison</h1>
        <table>
            <thead>
                <tr>
                    <th className="fst">Critère</th>
                    <th>Callisto</th>
                    <th>Mars</th>
                    <th>Titan</th>
                    <th>Lune</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="fst">Glace disponible</td>
                    <td className="green">Oui</td>
                    <td className="yellow">Surtout au poles</td>
                    <td className="green">Oui</td>
                    <td className="yellow">Certaines régions</td>
                </tr>
                <tr>
                    <td className="fst">Atmosphère</td>
                    <td className="red">Négligable</td>
                    <td className="red">Très mince</td>
                    <td className="orange">1.5bar, non-respirable</td>
                    <td className="red">Aucune</td>
                </tr>
                <tr>
                    <td className="fst">Température moyenne</td>
                    <td className="red">-140°C</td>
                    <td className="orange">-60°C</td>
                    <td className="red">-180°C</td>
                    <td className="red">-23°C (varie intensément)</td>
                </tr>
                <tr>
                    <td className="fst">Proximité minimale</td>
                    <td className="orange">~4.2UA</td>
                    <td className="yellow">~0.52UA</td>
                    <td className="red">~8.5UA</td>
                    <td className="green">~2.6×10¯³UA</td>
                </tr>
                <tr>
                    <td className="fst">Gravité (g=9.81ms¯²)</td>
                    <td className="red">0.13g</td>
                    <td className="orange">0.38g</td>
                    <td className="red">0.14g</td>
                    <td className="red">0.17g</td>
                </tr>
                <tr>
                    <td className="fst">Luminosité apparente</td>
                    <td className="orange">50.3Wm¯²</td>
                    <td className="yellow">588.6Wm¯²</td>
                    <td className="red">1Wm¯² (avec atmosphère)</td>
                    <td className="green">1366Wm¯²</td>
                </tr>
                <tr>
                    <td className="fst">Rayonnement (50mSv/yr max pour<br/>des travailleurs en énergie nucléaire)</td>
                    <td className="green">36.5mSv/yr</td>
                    <td className="red">240–300mSv/yr</td>
                    <td className="green">Proche de 0mSv/yr</td>
                    <td className="red">110–380mSv/yr</td>
                </tr>
            </tbody>
        </table>
    </>
}
