import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FaInfoCircle } from "react-icons/fa";
import { GiSkills, GiMusicalNotes } from "react-icons/gi";
import { BiHistory, BiBookHeart } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import i18n from '../translate/i18n';

//~ IMAGENS 
import logo from '../../assets/img/mee.png';
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
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='slide'>
                    <Container className='container-fluid'>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <ul className="navbar-nav mb-2 mb-lg-0 flex-column">
                                    <li className="nav-item">
                                        <Link className="navbar-brand nav-link" to="/"><img src={sazonImages([logoPascoa, logoArvore, logoBruxo, logoNatal], logo)} alt="Dev André Akira"
                                            width="120" height="120" className="logo" />
                                            <p className='mb-0 mb-lg-4'>{i18n.t('ola.ola')}<br />André Akira</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link title="Sobre" className="nav-link" aria-current="page" to="/sobre"><FaInfoCircle className='icons'><title>Icon</title></FaInfoCircle>{i18n.t('nav.sobre')}</Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link title="Histórico" className="nav-link" to="/historico"><BiHistory className='icons'><title>Icon</title></BiHistory>{i18n.t('nav.historico')}</Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link title="Habilidades" className="nav-link" to="/habilidades"><GiSkills className='icons'><title>Icon</title></GiSkills>{i18n.t('nav.habilidades')}</Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link title="Portfólio" className="nav-link" to="/portfolio"><BiBookHeart className='icons'><title>Icon</title></BiBookHeart>{i18n.t('nav.portfolio')}</Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link title="Hobbies" className="nav-link" to="/hobbies"><GiMusicalNotes className='icons'><title>Icon</title></GiMusicalNotes>{i18n.t('nav.hobbies')}</Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link title="Contato" className="nav-link" to="/contato"><SiMinutemailer className='icons' />{i18n.t('nav.contato')}</Link>
                                    </li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header;