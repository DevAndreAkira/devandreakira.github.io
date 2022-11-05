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
// import divinity from '../../assets/img/divinity.png';

// import divTrans from '../../assets/downloads/Divinity_Fatum_-_PT_BR.zip'

import './style.scss'

const Hobbies = () => {

    // function responsiveW() {
    //     let imgs = document.querySelectorAll(".hobbies img");
    //     imgs.forEach((e, index) => {
    //         // WIDTH
    //         // console.log(document.querySelectorAll(".card")[index].offsetWidth);
    //         imgs[index].style.width = `${(document.querySelectorAll(".card")[index].offsetWidth - 20)}px`;
    //     })
    // }

    // window.onresize = function () {
    //     responsiveW();
    // }


    const I18N_STORAGE_KEY = 'i18nextLng'

    const handleSelectChange = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            event.target.className
        )
        window.location.reload();
    }

    // window.onload = () => {
    //     document.querySelector("#navbarSupportedContent > ul > li:nth-child(6) > a").classList.add("active");

    //     let array = document.querySelectorAll("div > div:nth-child(n) > div > a > img");
    //     array.forEach((e, index) => {
    //         const heightOutput = document.querySelector("#uncontrolled-tab-example-tabpane-home > div > div:nth-child(1) > div > a > img").offsetHeight;
    //         const widthOutput = document.querySelector("#uncontrolled-tab-example-tabpane-home > div > div:nth-child(1) > div > a > img").offsetWidth;
    //         array[index].style.minHeight = `${heightOutput}px`;
    //         array[index].style.width = `${widthOutput}px`;
    //     })

    //     // TENTANDO ARRUMAR A LARGURA
    //     let arrayBtn = document.querySelectorAll("main .hobbies button");
    //     arrayBtn.forEach((e, index) => {
    //         arrayBtn[index].onclick = function () {
    //             responsiveW();
    //         }
    //     })
    // 
    // }

    var hobbies = {
        games: [
            `${i18n.t('hobbies.game1')}`,
            `${i18n.t('hobbies.game2')}`,
            `${i18n.t('hobbies.game3')}`,
            `${i18n.t('hobbies.game4')}`,
        ],
        imgGames: [
            box,
            arcane,
            memory,
            soccer
        ],
        urlGames: [
            'https://devandreakira.github.io/front-box',
            'https://devandreakira.github.io/jo-ken-po/',
            'https://devandreakira.github.io/memory-game/',
            'https://devandreakira.github.io/soccer_pixijs/'
        ],
        gameTrans: [
            // "Divinity Fatum PT-BR"
        ],
        imgTrans: [
            // divinity
        ],
        urlTrans: [
            // ""
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
                            <button type="button" className="btn btn_small" onClick={handleSelectChange} aria-label="Button">
                                <div class="container_icon_flag">
                                    <div class="en-US">
                                        <div class="squad_eua">
                                        </div>
                                        <div class="star1">
                                        </div>
                                        <div class="star2">
                                        </div>
                                        <div class="star3">
                                        </div>
                                        <div class="star4">
                                        </div>
                                    </div>
                                </div>
                                {/* <img loading="lazy" title="Idioma inglês" src={eua} alt="Idioma - Inglês" className="en-US" width="45" height="45" /> */}
                            </button>
                            <button type="button" className="btn btn_small" onClick={handleSelectChange} aria-label="Button">
                                <div class="container_icon_flag">
                                    <div class="pt-BR">
                                        <div class="gold_br">
                                            <div class="circle_blue_br">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <img loading="lazy" title="Idioma português" src={brasil} alt="Idioma - Português" className="pt-BR" width="45" height="45" /> */}
                            </button>
                        </div>
                    </div>
                </section>

                <div className="row-cols-xl-12 mt-2 gx-2 hobbies">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Games" className=''>
                            <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                                {Array.from({ length: totalGames }).map((_, idx) => (
                                    <Col>
                                        <Card>
                                            <a href={hobbies.urlGames[idx]} target="_blank" rel="noreferrer" className=''>
                                                <Card.Img variant="bottom" src={hobbies.imgGames[idx]} width="300" height="200" alt={hobbies.games[idx]} />
                                                <Card.Body>
                                                    <Card.Title>{hobbies.games[idx]} <CgBrowser /></Card.Title>
                                                    <Card.Title className='subTitle-card'>2022</Card.Title>
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
                                            <a href="/">
                                                <Card.Img variant="bottom" src={hobbies.imgTrans[idx]} width="300" height="200" alt={hobbies.gameTrans[idx]} />
                                                <Card.Body>
                                                    <Card.Title>{hobbies.gameTrans[idx]} <CgWindows /></Card.Title>
                                                    <Card.Title className='subTitle-card'>2022</Card.Title>
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