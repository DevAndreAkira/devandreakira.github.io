import { React } from 'react';

import Header from '../../components/Header';
import i18n from '../../components/translate/i18n';
import { Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import { CgBrowser, CgWindows } from "react-icons/cg";

// import brasil from '../../assets/img/brasil.png';
// import eua from '../../assets/img/eua.png';
import Redes from "../../components/redesSociais";

import box from '../../assets/img/front-box.png';
import arcane from '../../assets/img/arcane.png';
import memory from '../../assets/img/memory.png';
import soccer from '../../assets/img/soccer.png';
import bug from '../../assets/img/bug.jpg';
import velha from '../../assets/img/velha.png';
import noImage from '../../assets/img/no_image.png';
import mega from '../../assets/img/mega.jpg';
// import divinity from '../../assets/img/divinity.png';

// import divTrans from '../../assets/downloads/Divinity_Fatum_-_PT_BR.zip'

import './style.scss'

const Hobbies = () => {

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

    var hobbies = {
        games: [
            `${i18n.t('hobbies.game1')}`,
            `${i18n.t('hobbies.game2')}`,
            `${i18n.t('hobbies.game3')}`,
            `${i18n.t('hobbies.game4')}`,
            `${i18n.t('hobbies.game5')}`,
            `${i18n.t('hobbies.game6')}`,
        ],
        imgGames: [
            box,
            arcane,
            memory,
            soccer,
            bug,
            velha,
        ],
        urlGames: [
            'https://devandreakira.github.io/front-box',
            'https://devandreakira.github.io/jo-ken-po/',
            'https://devandreakira.github.io/memory-game/',
            'https://devandreakira.github.io/soccer_pixijs/',
            'https://devandreakira.github.io/bug_swat/',
            'https://devandreakira.github.io/jogo_velha/',
        ],
        gameTrans: [
            // `${i18n.t('hobbies.generator1')}`,
            `${i18n.t('hobbies.generator2')}`,
            `${i18n.t('hobbies.generator3')}`,
        ],
        imgTrans: [
            // mega,
            noImage,
            noImage,
        ],
        urlTrans: [
            // 'https://gerador-de-mega-senna.devandreakira.repl.co/',
            'https://devandreakira.github.io/generator_plugin_commit/',
            'https://codepen.io/DevAndreAkira/full/qBLMzPe'
        ]
    }

    let totalGames = hobbies.games.length;
    let totalTraducoes = hobbies.gameTrans.length;
    return (
        <>
            <Header />
            <main className="col-md-10 p-4 col-sm-12 slide2">
                <Redes />
                <section>
                    <div className="titulo">
                        <h1 className='titles text-white pt-3 pb-3 pb-md-0 h3'>{i18n.t('hobbies.titulo')}</h1>
                        <div className='mb-4 idiomas'>
                            <button type="button" className="btn btn_small" onClick={handleSelectChange1} aria-label="Button" title={i18n.t('btn_access.title_en')}>
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
                            <button type="button" className="btn btn_small" onClick={handleSelectChange2} aria-label="Button" title={i18n.t('btn_access.title_pt')}>
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
                </section>

                <div className="row-cols-xl-12 mt-2 gx-2 hobbies">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3" aria-labelledby="Games">
                        <Tab eventKey="home" title="Games" className=''>
                            <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                                {Array.from({ length: totalGames }).map((_, idx) => (
                                    <Col>
                                        <Card>
                                            <a href={hobbies.urlGames[idx]} target="_blank" rel="noreferrer" className='' name={hobbies.games[idx]}>
                                                <Card.Img variant="bottom" src={hobbies.imgGames[idx]} width="300" height="200" alt={hobbies.games[idx]} />
                                                <Card.Body>
                                                    <Card.Title>{hobbies.games[idx]} <CgBrowser /></Card.Title>
                                                    <Card.Title className='subTitle-card'>{idx >= 4 ? '2023' : '2022'}</Card.Title>
                                                </Card.Body>
                                            </a>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="profile" title={`${i18n.t('hobbies.traducao')}`}>
                            <Row xs={1} sm={2} md={3} lg={3} className="g-4">

                                {Array.from({ length: totalTraducoes }).map((_, idx) => (
                                    <Col>
                                        <Card className="">
                                            <a href={hobbies.urlTrans[idx]} target="_blank" rel="noreferrer" className='' name={hobbies.gameTrans[idx]}>
                                                <Card.Img variant="bottom" src={hobbies.imgTrans[idx]} width="300" height="200" alt={hobbies.gameTrans[idx]} />
                                                <Card.Body>
                                                    <Card.Title>{hobbies.gameTrans[idx]} <CgBrowser /></Card.Title>
                                                    <Card.Title className='subTitle-card'>{hobbies.gameTrans[idx] === 'Gerador Commit Plugin WP' ? "2020" : "2022"}</Card.Title>
                                                    {/* <Card.Text>
                                            {i18n.t('hobbies.descTrans1')}
                                        </Card.Text>
                                        <a href="../../assets/downloads/Divinity_Fatum_-_PT_BR.zip" download>
                                            <Button className='--primary-color-bg mt-5'>Download</Button>
                                        </a> */}
                                                </Card.Body>
                                            </a>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Tab>
                        {/* <Tab eventKey="contact" title="Contact">
                            <h1>3</h1>
                        </Tab> */}
                    </Tabs>


                </div>
            </main>
        </>
    );
}

export default Hobbies;