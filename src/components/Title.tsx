/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 28 May 2025
 */


interface TitleProps {
    start: string;
    highlight: string;
    after: string;
    subtitle: string;
}


function Title({start, highlight, after, subtitle}: TitleProps) {
    return <div id="intro">
        <h1 data-aos="fade-up" id="title">
            {start} <span className="highlight">{highlight}</span> {after}
        </h1>
        <h6 data-aos="fade-up" data-aos-delay="150" id="subtitle">{subtitle}</h6>
    </div>
}


export default Title;