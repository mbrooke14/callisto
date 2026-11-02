import "@components/styles/section.css"

interface SectionArgs {
    children: any;
    background?: React.JSX.Element;
    props: React.JSX.ElementAttributesProperty
};

export default function SectionHeader({ children, background, ...props }: SectionArgs) {
    return <header {...props}>
        <div className="section-background">
            { background }
        </div>
        <div className="section-foreground">
            { ...children }
        </div>
    </header>;
};
