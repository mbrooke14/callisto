import "@components/styles/section.css"

interface SectionArgs {
    children: any;
    background?: React.JSX.Element;
    props?: React.JSX.ElementAttributesProperty
};

export default function Section({ children, background, ...props }: SectionArgs) {
    return <section {...props}>
        <div className="section-background">
            { background }
        </div>
        <div className="section-foreground">
            { ...children }
        </div>
    </section>;
};
