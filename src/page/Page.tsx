/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 14 March 2025
 */


// local
import PageRegistry from "./PageRegistry";



interface PageProps {
    title: string,
    path: string;
    components: React.FC;
}


/**
 * General page class
 * All pages are added to PageRegistry
 */
class Page {
    public title: string;
    public path: string;
    public components: React.FC;

    constructor(props: PageProps) {
        this.title = props.title;
        this.path = props.path;
        this.components = props.components;

        console.log(props.title + " created")

        PageRegistry.registerPage(this);

        document.title = this.title;
    }
}


export default Page;