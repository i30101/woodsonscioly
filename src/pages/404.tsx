/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 26 March 2025
 */


// local
import DefaultPage from "../page/DefaultPage";

new DefaultPage({
    title: "Page Not Found | Woodson Science Olympiad",
    path: "/404",
    components: () => (
        <>Page not found</>
    )
})

export {}