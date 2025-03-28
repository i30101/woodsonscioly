/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 14 March 2025
 */


// external libraries
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import {useEffect} from "react";
import Aos from 'aos';


//styling
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './scss/global.scss';


// local
import PageRegistry from './page/PageRegistry';



// activate animate on scroll library
const useAos = () => {
    useEffect(() => {
        Aos.init({
            duration: 600,
            delay: 100,
            once: true
        })
    })
}



/**
 * Dynamically creates list of pages
 * @constructor main app container
 */
const App: React.FC = () => {
    useAos();

    return <Router>
        <Routes>
            {PageRegistry.getPages().map((page, index) => (
                <Route key={index} path={page.path} element={<page.components />} />
            ))}
            <Route path={"*"} element={<Navigate to={"/404"} />} />
        </Routes>
    </Router>
}


export default App;
