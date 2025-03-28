/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 14 March 2025
 */


// assets
import cog from '../assets/site/cog.png'


/**
 * Mobile and desktop compatible navbar
 * @constructor Navbar element
 */
export default function Navbar() {
    return (
        <nav className={"navbar navbar-expand-lg bg-light"}>
            <div className={"container-fluid"} id={"navbar-contents"}>
                <a className={"navbar-brand"} href={"/"} data-aos={"fade-up"}>
                    <img src={cog} id={"cog-logo"} alt={cog} />
                    <span className="link d-none d-md-inline-block" id={"logo-text"}>Woodson Scioly</span>
                </a>

                <a href={"/"} className={"d-lg-none d-xl-none"} id={"mobile-title"} data-aos={"fade-up"}>Woodson Scioly</a>

                <button className={"navbar-toggler"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#navbarSupportedContent"} aria-controls={"navbarSupportedContent"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"collapse navbar-collapse"} id={"navbarSupportedContent"}>
                    <ul className={"navbar-nav mb-2 mb-md-0"} data-aos={"fade-up"} data-aos-delay={200}>
                        <li className={"nav-item"}>
                            <a className="nav-link navbar-link link" href="../team">Our Team</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link navbar-link link"} href={"../leadership"}>Leadership</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link navbar-link link"} href={"../blog"}>Blog</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link navbar-link link"} href={"../tryouts"}>Tryouts</a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link navbar-link link"} href={"../contribute"}>Contribute</a>
                        </li>
                    </ul>
                    <form className={"d-flex"} role={"search"} data-aos={"fade-up"} data-aos-delay={300}>
                        <a href={"../login"} className={"btn sign-in-button"}>Log in</a>
                    </form>
                </div>
            </div>
        </nav>
    );
}