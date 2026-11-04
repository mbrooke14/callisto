import { forwardRef } from "react";
import "@components/styles/section.css"

interface SectionArgs extends React.ComponentPropsWithoutRef<"section"> {
    children: any;
    background?: React.JSX.Element;
};

const Section = forwardRef<HTMLDivElement,SectionArgs>(({ children, background, ...props }, ref) => {
    return (<section ref={ref} {...props}>
        <div className="section-background">{ background }</div>
        <div className="section-foreground">{ children   }</div>
    </section>);
});

export default Section;
