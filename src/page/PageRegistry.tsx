/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 15 March 2025
 *
 * Stores pages
 */


// local
import Page from "./Page";


class PageRegistry {
    private static pages: Page[] = [];


    /**
     * Stores new page
     * @param page to add
     */
    public static registerPage(page: Page) {
        this.pages.push(page);
    }


    /**
     * @return stored pages
     */
    public static getPages(): Page[] {
        console.log("getting pages: ", this.pages);
        return this.pages;
    }
}

export default PageRegistry;