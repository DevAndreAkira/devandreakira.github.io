import { React } from 'react';

import Header from '../../components/Header';
import i18n from '../../components/translate/i18n';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
// import { TiHtml5 } from "react-icons/ti";
// import { FaDownload } from "react-icons/fa";

// import brasil from '../../assets/img/brasil.png';
// import eua from '../../assets/img/eua.png';
import Redes from "../../components/redesSociais";

import html from '../../assets/img/html.png';
import css from '../../assets/img/css.png';
import js from '../../assets/img/js.png';
import jquery from '../../assets/img/jquery.png';
import bootstrap from '../../assets/img/bootstrap.png';
import php from '../../assets/img/php.png';
import wordpress from '../../assets/img/wordpress.png';
import react from '../../assets/img/react.png';
import ai from '../../assets/img/ai.png';
import canva from '../../assets/img/canva.png';
import ps from '../../assets/img/ps.png';
import cordova from '../../assets/img/cordova.png';
import electron from '../../assets/img/electron.png';
import figma from '../../assets/img/figma.png';
import file from '../../assets/img/file.png';
import git from '../../assets/img/git.png';
import github from '../../assets/img/github.png';
import gradle from '../../assets/img/gradle.png';
import sqlServer from '../../assets/img/sqlServer.png';
import mySql from '../../assets/img/mySql.png';
import xd from '../../assets/img/xd.png';
import sass from '../../assets/img/sass.png';
import seleniumIde from '../../assets/img/seleniumIde.png';

import './style.scss'

const Habilidades = () => {

    // const [show1, setShow1] = useState(false);

    // const handleClose1 = () => setShow1(false);
    // const handleShow1 = () => setShow1(true);

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

    var icon = {
        linguagens: [
            "HTML5",
            "CSS3",
            "Javascript",
            "Bootstrap",
            "Jquery",
            "Sass (Scss)",
            "React",
            "Wordpress",
            "Php",
            "SQL Server",
            "MySQL",
            "FileZilla",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Adobe Xd",
            "Figma",
            "Canva",
            "Git",
            "Github",
            "Cordova",
            "Gradle",
            "Electron",
            "Selenium IDE"
        ],
        img: [
            html,
            css,
            js,
            bootstrap,
            jquery,
            sass,
            react,
            wordpress,
            php,
            sqlServer,
            mySql,
            file,
            ps,
            ai,
            xd,
            figma,
            canva,
            git,
            github,
            cordova,
            gradle,
            electron,
            seleniumIde
        ]
    }

    let totalLinguagens = icon.linguagens.length;
    return (
        <>
            <Header />
            <main className="col-md-10 p-4 col-sm-12 slide2">
                <Redes />
                <section>
                    <div className="titulo">
                        <h1 className='titles text-white pt-3 pb-3 pb-md-0 h3'>{i18n.t('titles.phabilidades')}</h1>
                        <div className='mb-4 idiomas'>
                            <button type="button" className="btn btn_small" onClick={handleSelectChange1} aria-label="Button">
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
                            <button type="button" className="btn btn_small" onClick={handleSelectChange2} aria-label="Button">
                                <div className="container_icon_flag">
                                    <div className="_pt-BR">
                                        <div className="gold_br">
                                            <div className="circle_blue_br">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
                <div className="row-cols-xl-6 mt-2 gx-2">
                    {Array.from({ length: totalLinguagens }).map((_, idx) => (
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">{icon.linguagens[idx]}</Tooltip>}>
                            <img src={icon.img[idx]} alt="" width="auto" height="auto" />
                        </OverlayTrigger>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Habilidades;