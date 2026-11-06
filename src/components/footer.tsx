export default function Footer() {
    return <footer>
        <style>{`
            footer {
                background-color: #111111;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                padding-block: 4rem;

                & img {
                    height: 4rem;
                }
            }
        `}</style>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Linux_mascot_tux.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" />
        <p>Fait par les pengouins</p>
    </footer>
}
