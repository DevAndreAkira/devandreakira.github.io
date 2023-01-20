import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle } from "react-icons/fa";
import { GiSkills, GiMusicalNotes } from "react-icons/gi";
import { BiHistory, BiBookHeart } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import i18n from '../translate/i18n';
import 'animate.css';
import ReactAudioPlayer from 'react-audio-player';

//~ IMAGES
import logo from '../../assets/img/mee.png';
import logoNatal from '../../assets/img/mee-natal.png';
import logoBruxo from '../../assets/img/mee-bruxo.png';
import logoPascoa from '../../assets/img/mee-egg.png';
// import egg from '../../assets/img/egg.svg';
// import abobora from '../../assets/img/abobora.svg';
// import tree from '../../assets/img/tree.svg';

// import brasil from '../../assets/img/brasil.png';
// import eua from '../../assets/img/eua.png';

//? SOUND
import laugh from '../../assets/sound/laugh.mp3';

import './style.scss';

const Painel = () => {

    const I18N_STORAGE_KEY = 'i18nextLng'

    
    const handleSelectChange2 = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            "pt-BR"
        )
        window.location.reload()
    }

    const handleSelectChange1 = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            "en-US"
        )
        window.location.reload()
    }

    if (localStorage.getItem(I18N_STORAGE_KEY) === 'en') {
        document.querySelector("html").lang = localStorage.getItem(I18N_STORAGE_KEY);
    }
    else {
        document.querySelector("html").lang = localStorage.getItem(I18N_STORAGE_KEY);
    }

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

    // sazonImages([logo, logoNatal, logoBruxo])

    return (
        <>
            <header className="col-12 painel slideUp">
                <nav className="navbar navbar-expand-lg navbar-light flex-column">
                    <a href="#main" className='px-5 pt-0 d-none d-lg-block' title='Accesskey: Alt + 1 ou Alt + Shit + 1' accesskey="1" style={{position: 'absolute', top: 20}}>1- Principal</a>
                    <div className="container-fluid">
                        <button className="navbar-toggler" value="Menu" title={i18n.t('btn_access.menu')} type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse flex-column" id="navbarSupportedContent">
                            <div style={{ position: 'relative;' }} className="m-auto">
                                <hgroup id='main' role="group" aria-roledescription="Heading group" className='position-relative d-flex flex-column text-white align-items-center' title="Olá, meu nome é André Akira. Sou desenvolvedor front-end">
                                    <h1 className='mt-4 azul painel_nome'>Portfolio | DevAndreAkira</h1>
                                    <img src={sazonImages([logoPascoa, logoPascoa, logoBruxo, logoNatal], logo)} alt="DevAndreAkira" width="250" height="250" className="logo" title="DevAndreAkira" />
                                    <ReactAudioPlayer
                                        src={laugh}
                                        controls
                                    />
                                    <h2 className='painel_nome p-0 m-0 mb-1' aria-roledescription={i18n.t('dev.front')}>{i18n.t('dev.front')}</h2>
                                    <h3 className='painel_nome p-0 m-0 mb-4'>{i18n.t('ola.ola')} André Akira</h3>
                                </hgroup>
                                <div className='mb-4 idiomas'>
                                    <button type="button" className="btn btn_small" onClick={handleSelectChange1} aria-label="Button" value="Inglês" title={i18n.t('btn_access.title_en')}>
                                        <div className="container_icon_flag">
                                            <div className="_en-US">
                                                <div className="squad_eua">
                                                </div>
                                                <div className="star1">
                                                </div>
                                                <div className="star2">
                                                </div>
                                                <div className="star3">
                                                </div>
                                                <div className="star4">
                                                </div>
                                            </div>
                                        </div>
                                        {/* <img loading="lazy" title="Idioma inglês" src={eua} alt="Idioma - Inglês" className="_en-US" width="45" height="45" /> */}
                                    </button>
                                    <button type="button" className="btn btn_small" onClick={handleSelectChange2} aria-label="Button" value="Português brasileiro" title={i18n.t('btn_access.title_pt')}>
                                        <div className="container_icon_flag">
                                            <div className="_pt-BR">
                                                <div className="gold_br">
                                                    <div className="circle_blue_br">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <img loading="lazy" title="Idioma português" src={brasil} alt="Idioma - Português" className="_pt-BR" width="45" height="45" /> */}
                                    </button>
                                </div>
                            </div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Saiba mais" className="nav-link" aria-current="page" to="/sobre"><FaInfoCircle className='icons' aria-hidden="true" />{i18n.t('nav.sobre')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Ver histórico" className="nav-link" to="/historico"><BiHistory className='icons' aria-hidden="true" />{i18n.t('nav.historico')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Ver habilidades" className="nav-link" to="/habilidades"><GiSkills className='icons' aria-hidden="true" />{i18n.t('nav.habilidades')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Ver projetos realizados" className="nav-link" to="/portfolio"><BiBookHeart className='icons' aria-hidden="true" />{i18n.t('nav.portfolio')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Ver hobbies" className="nav-link" to="/hobbies"><GiMusicalNotes className='icons' aria-hidden="true" />{i18n.t('nav.hobbies')}</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link title="Entrar em contato" className="nav-link" to="/contato"><SiMinutemailer className='icons' aria-hidden="true" />{i18n.t('nav.contato')}</Link>
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

export default Painel;