import { React } from 'react';

import Header from '../../components/Header';
import i18n from '../../components/translate/i18n';
import { Carousel } from 'react-bootstrap';

// import brasil from '../../assets/img/brasil.png';
// import eua from '../../assets/img/eua.png';
import Redes from "../../components/redesSociais";

import roma from '../../assets/img/roma.jpeg';
import a3 from '../../assets/img/a3tech.jpeg';
import labu from '../../assets/img/labufalina.jpeg';
// import we from '../../assets/img/wefood.jpeg';
import remove from '../../assets/img/remove-dotspace-min.jpeg';
import cloudy from '../../assets/img/cloudy.jpeg';
import anfarmag from '../../assets/img/anfarmag.png';
import bunge from '../../assets/img/bunge1.jpg';
import interativa from '../../assets/img/interativa.jpg';

import roma2 from '../../assets/img/roma2.jpg';
import a32 from '../../assets/img/a3tech2.jpg';
import labu2 from '../../assets/img/la2.jpg';
// import we2 from '../../assets/img/we2.jpg';
import remove2 from '../../assets/img/dot2.jpg';
import cloudy2 from '../../assets/img/clo2.jpg';
import anfarmag2 from '../../assets/img/anfarmag2.jpg';
import bunge2 from '../../assets/img/bunge2.jpg';
import interativa2 from '../../assets/img/interativa2.jpg';

import roma3 from '../../assets/img/roma3.jpg';
import a33 from '../../assets/img/a3tech3.jpg';
import labu3 from '../../assets/img/la3.jpg';
// import we3 from '../../assets/img/we3.jpg';
import remove3 from '../../assets/img/dot3.jpg';
import cloudy3 from '../../assets/img/clo3.jpg';
import anfarmag3 from '../../assets/img/anfarmag3.jpg';
import bunge3 from '../../assets/img/bunge3.jpg';
import interativa3 from '../../assets/img/interativa3.jpg';

import html from '../../assets/img/html.png';
import css from '../../assets/img/css.png';
import js from '../../assets/img/js.png';
// import jquery from '../../assets/img/jquery.png';
import bootstrap from '../../assets/img/bootstrap.png';
import php from '../../assets/img/php.png';
import wordpress from '../../assets/img/wordpress.png';
import react from '../../assets/img/react.png';
// import ai from '../../assets/img/ai.png';
// import canva from '../../assets/img/canva.png';
import ps from '../../assets/img/ps.png';
import cordova from '../../assets/img/cordova.png';
import electron from '../../assets/img/electron.png';
// import figma from '../../assets/img/figma.png';
// import file from '../../assets/img/file.png';
// import git from '../../assets/img/git.png';
// import github from '../../assets/img/github.png';
import gradle from '../../assets/img/gradle.png';
// import sqlServer from '../../assets/img/sqlServer.png';
// import mySql from '../../assets/img/mySql.png';
// import xd from '../../assets/img/xd.png';
import sass from '../../assets/img/sass.png';
import seleniumIde from '../../assets/img/seleniumIde.png';


import './style.scss'

const Portfolio = () => {

    const I18N_STORAGE_KEY = 'i18nextLng'

    const handleSelectChange1 = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            "en-US"
        )
        window.location.reload()
    }

    const handleSelectChange2 = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            "pt-BR"
        )
        window.location.reload()
    }

    window.onload = () => {
        document.querySelector("#navbarSupportedContent > ul > li:nth-child(5) > a").classList.add("active");
    }

    var projetos = {
        titulo: [
            "A3Tech - 2020",
            "La Bufalina - 2020",
            // "We-food - 2021",
            "Remove DotSpace - 2021",
            "Roma - 2021",
            "Cloudy - 2022",
            "Anfarmag - 2022",
            "Academia de negócios Bunge - 2022",
            "Promoção Interativa - 2022"
        ],
        img: [
            a3,
            labu,
            // we,
            remove,
            roma,
            cloudy,
            anfarmag,
            bunge,
            interativa
        ],
        img2: [
            a32,
            labu2,
            // we2,
            remove2,
            roma2,
            cloudy2,
            anfarmag2,
            bunge2,
            interativa2
        ],
        img3: [a33,
            labu3,
            // we3,
            remove3,
            roma3,
            cloudy3,
            anfarmag3,
            bunge3,
            interativa3
        ],
        url: [
            "https://www.a3tech.com.br/",
            "https://www.labufalina.com.br/",
            // "https://selecao-wefood.devandreakira.repl.co/",
            "https://devandreakira.github.io/remove_dotspace/",
            "https://roma.ind.br/",
            "https://selecao-businessintegrator.devandreakira.repl.co/",
            "https://areadoassociado.anfarmag.org.br/login",
            "https://academiadenegociosbunge.com.br/",
            "https://promocaointerativa.com.br/"
        ]
    }

    // var icon = {
    //     linguagens: [
    //         "HTML5",
    //         "CSS3",
    //         "Javascript",
    //         "Bootstrap",
    //         "Jquery",
    //         "Sass (Scss)",
    //         "React",
    //         "Wordpress",
    //         "Php",
    //         "SQL Server",
    //         "MySQL",
    //         "FileZilla",
    //         "Adobe Photoshop",
    //         "Adobe Illustrator",
    //         "Adobe Xd",
    //         "Figma",
    //         "Canva",
    //         "Git",
    //         "Github",
    //         "Cordova",
    //         "Gradle",
    //         "Electron",
    //         "Selenium IDE"
    //     ]
    // }

    let totalProjetos = projetos.url.length;
    return (
        <>
            <Header />
            <main className="col-md-10 p-4 col-sm-12 slide2">
                <Redes />
                <section>
                    <div className="titulo">
                        <h1 className='titles text-white pt-3 pb-3 pb-md-0 h3'>{i18n.t('projetos.titulo')}</h1>
                        <div className='mb-4 idiomas'>
                            <button type="button" className="btn btn_small" onClick={handleSelectChange1} aria-label="Button">
                                <div className="container_icon_flag">
                                    <div className="en-US">
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
                                {/* <img loading="lazy" title="Idioma inglês" src={eua} alt="Idioma - Inglês" className="en-US" width="45" height="45" /> */}
                            </button>
                            <button type="button" className="btn btn_small" onClick={handleSelectChange2} aria-label="Button">
                                <div className="container_icon_flag">
                                    <div className="pt-BR">
                                        <div className="gold_br">
                                            <div className="circle_blue_br">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <img loading="lazy" title="Idioma português" src={brasil} alt="Idioma - Português" className="pt-BR" width="45" height="45" /> */}
                            </button>
                        </div>
                    </div>
                </section>

                <div className="d-flex justify-content-center flex-wrap flow">
                    <Carousel keyboard fade className="mt-3 col-lg-12 col-12 desk">
                        {Array.from({ length: totalProjetos }).map((_, idx) => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={projetos.img[idx]}
                                    alt="First slide"
                                    width="auto"
                                    height="auto"
                                />
                                <Carousel.Caption className="teste">
                                    <h2 className="p-0 h1">{projetos.titulo[idx]}</h2>
                                    <div className='mb-5'>
                                        <img width="50" height="50" src={html} alt="" />
                                        <img width="50" height="50" src={css} alt="" />
                                        <img width="50" height="50" src={js} alt="" />
                                        {projetos.titulo[idx] === "A3Tech - 2020" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "CF Gestão Comercial - 2020" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "La Bufalina - 2020" ? <><img width="50" height="50" src={bootstrap} alt="" /><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Vex Revestimentos - 2020" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Aqui no Taboão - 2021" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "We-food - 2021" ? <><img width="50" height="50" src={bootstrap} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Remove DotSpace - 2021" ? <><img width="50" height="50" src={cordova} alt="" /><img width="50" height="50" src={gradle} alt="" /><img width="50" height="50" src={electron} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Roma - 2021" ? <><img width="50" height="50" src={sass} alt="" /><img width="50" height="50" src={react} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Cloudy - 2022" ? <><img width="50" height="50" src={bootstrap} alt="" /><img width="50" height="50" src={sass} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Anfarmag - 2022" ? <><img width="50" height="50" src={seleniumIde} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Academia de negócios Bunge - 2022" ? <><img width="50" height="50" src={php} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Promoção Interativa - 2022" ? <><img width="50" height="50" alt="" src={bootstrap} /></> : <></>}
                                    </div>

                                    <a href={projetos.url[idx]} target="_blank" rel="noreferrer" className="btn_slider">{i18n.t('projetos.botao')}</a>

                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Carousel keyboard fade className="mt-3 col-lg-12 col-12 tablet">
                        {Array.from({ length: totalProjetos }).map((_, idx) => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={projetos.img2[idx]}
                                    alt="First slide"
                                    width="auto"
                                    height="auto"
                                />
                                <Carousel.Caption className="teste">
                                    <h3>{projetos.titulo[idx]}</h3>
                                    <div>
                                        <img width="50" height="50" src={html} alt="" />
                                        <img width="50" height="50" src={css} alt="" />
                                        <img width="50" height="50" src={js} alt="" />
                                        {projetos.titulo[idx] === "A3Tech - 2020" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "CF Gestão Comercial - 2020" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "La Bufalina - 2020" ? <><img width="50" height="50" src={bootstrap} alt="" /><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Vex Revestimentos - 2020" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Aqui no Taboão - 2021" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "We-food - 2021" ? <><img width="50" height="50" src={bootstrap} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Remove DotSpace - 2021" ? <><img width="50" height="50" src={cordova} alt="" /><img width="50" height="50" src={gradle} alt="" /><img width="50" height="50" src={electron} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Roma - 2021" ? <><img width="50" height="50" src={sass} alt="" /><img width="50" height="50" src={react} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Cloudy - 2022" ? <><img width="50" height="50" src={bootstrap} alt="" /><img width="50" height="50" src={sass} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Anfarmag - 2022" ? <><img width="50" height="50" src={seleniumIde} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Academia de negócios Bunge - 2022" ? <><img width="50" height="50" src={php} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Promoção Interativa - 2022" ? <><img width="50" height="50" alt="" src={bootstrap} /></> : <></>}
                                    </div>
                                    <br /><br />
                                    <a href={projetos.url[idx]} target="_blank" rel="noreferrer" className="btn_slider">{i18n.t('projetos.botao')}</a>
                                    <br /><br />
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Carousel keyboard fade className="mt-3 col-lg-12 col-12 cel">
                        {Array.from({ length: totalProjetos }).map((_, idx) => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={projetos.img3[idx]}
                                    alt="First slide"
                                    width="auto"
                                    height="auto"
                                />
                                <Carousel.Caption className="teste">
                                    <h3>{projetos.titulo[idx]}</h3>
                                    <div>
                                        <img width="50" height="50" src={html} alt="" />
                                        <img width="50" height="50" src={css} alt="" />
                                        <img width="50" height="50" src={js} alt="" />
                                        {projetos.titulo[idx] === "A3Tech - 2020" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "CF Gestão Comercial - 2020" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "La Bufalina - 2020" ? <><img width="50" height="50" src={bootstrap} alt="" /><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Vex Revestimentos - 2020" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Aqui no Taboão - 2021" ? <><img width="50" height="50" src={wordpress} alt="" /><img width="50" height="50" src={ps} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "We-food - 2021" ? <><img width="50" height="50" src={bootstrap} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Remove DotSpace - 2021" ? <><img width="50" height="50" src={cordova} alt="" /><img width="50" height="50" src={gradle} alt="" /><img width="50" height="50" src={electron} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Roma - 2021" ? <><img width="50" height="50" src={sass} alt="" /><img width="50" height="50" src={react} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Cloudy - 2022" ? <><img width="50" height="50" src={bootstrap} alt="" /><img width="50" height="50" src={sass} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Anfarmag - 2022" ? <><img width="50" height="50" src={seleniumIde} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Academia de negócios Bunge - 2022" ? <><img width="50" height="50" src={php} alt="" /></> : <></>}
                                        {projetos.titulo[idx] === "Promoção Interativa - 2022" ? <><img width="50" height="50" alt="" src={bootstrap} /></> : <></>}
                                    </div>
                                    <br /><br />
                                    <a href={projetos.url[idx]} target="_blank" rel="noreferrer" className="btn_slider">{i18n.t('projetos.botao')}</a>
                                    <br /><br />
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </main>
        </>
    );
}

export default Portfolio;