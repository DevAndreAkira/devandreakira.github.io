import { React } from 'react';

import Header from '../../components/Header';
import i18n from '../../components/translate/i18n';
import { Row, Col, Card } from 'react-bootstrap';

// import brasil from '../../assets/img/brasil.png';
// import eua from '../../assets/img/eua.png';
import Redes from "../../components/redesSociais";
import input from '../../assets/img/input.jpg';
import rlti from '../../assets/img/rlti.jpg';
import amz from '../../assets/img/amz.jpg';
import elo from '../../assets/img/elo.png';
import hands from '../../assets/img/hands.png';
import './style.scss'

const Historico = () => {

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

    function dataNow() {
        var dataAtual = new Date();
        var mes = (dataAtual.getMonth() + 1);
        var ano = dataAtual.getFullYear();
        return ((mes < 12 ? `0${mes}` : mes) + "/" + ano);
    }

    var cardsInfos = {
        title: [
            "Input Center Informatica",
            "RLTI - Serviços de Tecnologia",
            "Amz|Mp Agência de Comunicação",
            "Elo Editora e Distribuidora",
            "Hands-On Tecnologia da Informação",
        ],
        info: [
            `${i18n.t('cargos.cargo1')}`,
            `${i18n.t('cargos.cargo2')}`,
            `${i18n.t('cargos.cargo3')}`,
            `${i18n.t('cargos.cargo4')}`,
            `${i18n.t('cargos.cargo5')}`,
        ],
        quantidadeNum: [
            `${i18n.t('duracao.duracao1.num')}`,
            `${i18n.t('duracao.duracao2.num')}`,
            `${i18n.t('duracao.duracao3.num')}`,
            `${i18n.t('duracao.duracao4.num')}`,
            `${i18n.t('duracao.duracao5.num')}`,
        ],
        periodo: [
            '02/2020 - 04/2020',
            '06/2020 - 10/2021',
            '06/2021 - 10/2021',
            '09/2021 - 11/2021',
            `01/2022 - ${dataNow()}`,
        ],
        status: [
            `${i18n.t('duracao.status')}`,
        ],
        imgs: [input, rlti, amz, elo, hands]
    }

    function formatacao(element) {
        let arrayDatas = element.split(" - ");
        let mapData = arrayDatas.map((x) => x.split("/"))

        return mapData
    }

    let obj_Calculo = {
        arrayTotal: [],

        contadorTempo(element) {
            dataNow();

            let result;
            let mapData = formatacao(element);

            if (mapData[0][1] === mapData[1][1]) {
                result = mapData[1][0] - mapData[0][0];
                obj_Calculo.arrayTotal.push(result);
                return result + ' meses'
            }
            else {
                let resultMeses = mapData[1][0] - mapData[0][0];
                let resultAno = mapData[1][1] - mapData[0][1];
                const pluralMes = resultMeses > 1 ? 'meses' : 'mês';
                const pluralAno = resultAno > 1 ? 'anos' : 'ano';
                obj_Calculo.arrayTotal.push(Number(resultMeses) + Number(resultAno) * 12);
                console.log(obj_Calculo.arrayTotal);

                const agregador = obj_Calculo.arrayTotal.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0,
                );
                localStorage.setItem("totalTempo", agregador)

                return resultAno + " " + pluralAno + " e " + resultMeses + " " + pluralMes;
            }
        },
        totalTempo() {
            let total = localStorage.getItem("totalTempo");
            let result = `${Math.round(total / 12)} anos e ${total % 12} ${total % 12 > 1 ? 'meses' : 'mês'}`;
            return <span id="totalN">{result}</span>
        }
    }

    return (
        <>
            <div className="App d-flex">
                <Header />
                <main className="col-md-10 p-4 col-sm-12 slide2">
                    <Redes />
                    <section>
                        <div className="titulo">
                            <h1 className='titles text-white pt-3 pb-3 pb-md-0 h3'>{i18n.t('titles.phistorico')}</h1>
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
                                </button>
                            </div>
                        </div>
                        <h2 className='m-0 p-0'>{i18n.t('tempoExp')} {obj_Calculo.totalTempo()}</h2>
                    </section>
                    <div className="row row-cols-1 row-cols-md-12 m-auto">
                        <Row xs={1} md={2} className="g-2">
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <Col>
                                    <Card className="bg-dark text-white">
                                        <Card.Title>{cardsInfos.title[idx]}</Card.Title>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <Card.Text>
                                                    {cardsInfos.info[idx]}
                                                </Card.Text>
                                                <Card.Text>
                                                    <span className='time'>
                                                        {obj_Calculo.contadorTempo(cardsInfos.periodo[idx])}
                                                    </span>
                                                </Card.Text>
                                                <Card.Text>
                                                    {(cardsInfos.title[idx] === "Hands-On Tecnologia da Informação") ? cardsInfos.status : <br />}
                                                </Card.Text>
                                            </div>
                                            <img src={cardsInfos.imgs[idx]} className="logoEmpresas my-auto" width='50px' height="50px" alt="empresa" />
                                        </div>
                                        <Card.Text>{cardsInfos.periodo[idx]}</Card.Text>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Historico;