import React from 'react';
import { Link } from 'react-router-dom';

import { FaInfoCircle } from "react-icons/fa";
import { GiSkills, GiMusicalNotes } from "react-icons/gi";
import { BiHistory, BiBookHeart } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import i18n from '../translate/i18n';

//~ IMAGENS 
import logo from '../../assets/img/mee.webp';
import logoNatal from '../../assets/img/mee-natal.png';
import logoBruxo from '../../assets/img/mee-bruxo2.png';
import logoPascoa from '../../assets/img/mee-egg2.png';
import logoArvore from '../../assets/img/mee-tree.png';

import './style.scss';

const Header = () => {

    function sazonImages(arrayLogo = [], logoPadrao) {
        let arrayholidays = localStorage.getItem("Holiday").split(",");
        let setter = '';
        arrayholidays.forEach((e, i) => {
            if (document.querySelector("html").classList.value === arrayholidays[i]) {
                setter = i;
            }
            else {
                if (setter !== '') {
                }
                else {
                    setter = '';
                }
            }
        })

        if (setter !== '') {
            return arrayLogo[setter];
        }
        else {
            return logoPadrao;
        }
    }

    return (
        <>
            <header className="col-md-2 header" >
                <nav className="navbar navbar-expand-lg navbar-light flex-column slide">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" aria-label="Painel" to="/portfolio_devandreakira">
                            <img src={sazonImages([logoPascoa, logoArvore, logoBruxo, logoNatal], logo)} alt="Dev André Akira" width="120" height="120"
                                className="logo-mob" /></Link>

                        <div className="collapse navbar-collapse flex-column" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
                                <li className="nav-item">
                                    <Link className="navbar-brand nav-link" to="/portfolio_devandreakira"><img src={sazonImages([logoPascoa, logoArvore, logoBruxo, logoNatal], logo)} alt="Dev André Akira"
                                        width="120" height="120" className="logo" />
                                        <p className='mb-4'>{i18n.t('ola.ola')}<br />André Akira</p>
                                    </Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Sobre" className="nav-link" aria-current="page" to="/portfolio_devandreakira/sobre"><FaInfoCircle className='icons' />{i18n.t('nav.sobre')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Histórico" className="nav-link" to="/portfolio_devandreakira/historico"><BiHistory className='icons' />{i18n.t('nav.historico')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Habilidades" className="nav-link" to="/portfolio_devandreakira/habilidades"><GiSkills className='icons' />{i18n.t('nav.habilidades')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Portfólio" className="nav-link" to="/portfolio_devandreakira/portfolio"><BiBookHeart className='icons' />{i18n.t('nav.portfolio')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Hobbies" className="nav-link" to="/portfolio_devandreakira/hobbies"><GiMusicalNotes className='icons' />{i18n.t('nav.hobbies')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Contato" className="nav-link" to="/portfolio_devandreakira/contato"><SiMinutemailer className='icons' />{i18n.t('nav.contato')}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="upgrade text-center mt-3">
                        <p className="text-center upgrade-text">Acessar novos recursos e disponibilize mais espaço de armazenamento!
                        </p>
                        <button className="btn-upgrade mt-3">Upgrade de plano</button>
                    </div> */}
                </nav>
            </header>
        </>
    )
}

export default Header;