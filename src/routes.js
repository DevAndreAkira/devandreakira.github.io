import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './assets/img/mee.webp';

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Histórico from './Pages/Histórico';
import Habilidades from './Pages/Habilidades';
import Portfolio from './Pages/Portfolio';
import Hobbies from './Pages/Hobbies';
import Contato from './Pages/Contato';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes basename="/portfolio_devandreakira">
                <Route path='*' element={<><div className='d-flex justify-content-center align-items-center flex-column' style={{ width: '100%', height: '100%' }}>
                    <h1 style={{ color: "#05c3c3" }}>Not Found 404</h1><img style={{ width: '250px', height: '250px' }} src={logo} alt="" /><br /><h2>Página não encontrada</h2>
                    <Link className="navbar-brand nav-link d-flex justify-content-center align-items-center"  style={{background: 'var(--secondary-color)', width: '300px'}} to="/portfolio_devandreakira">
                        <p className='py-2'>Voltar</p>
                    </Link>
                </div></>} />
                <Route path="/portfolio_devandreakira/" element={<Home />} />
                <Route path="/portfolio_devandreakira/sobre" exact element={<Sobre />} />
                <Route path="/portfolio_devandreakira/historico" exact element={<Histórico />} />
                <Route path="/portfolio_devandreakira/habilidades" exact element={<Habilidades />} />
                <Route path="/portfolio_devandreakira/portfolio" exact element={<Portfolio />} />
                <Route path="/portfolio_devandreakira/hobbies" exact element={<Hobbies />} />
                <Route path="/portfolio_devandreakira/contato" exact element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;