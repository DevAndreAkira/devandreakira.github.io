import { React, useRef } from 'react';
// import { Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import Header from '../../components/Header';
import i18n from '../../components/translate/i18n';
import toast, { Toaster } from 'react-hot-toast';
// import { Row, Col, Card, Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
// import { FaDownload } from "react-icons/fa";

// import brasil from '../../assets/img/brasil.png';
// import eua from '../../assets/img/eua.png';
import Redes from "../../components/redesSociais";

import './style.scss'

const Contato = () => {

    const form = useRef();
    let success = false;


    const notify = () => toast((success === true) ? `${i18n.t('contato.msgs.enviado')}` : `${i18n.t('contato.msgs.erro')}`);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jtc3zes', 'template_jhet17a', e.target, 'D2oW_4zBjW6w24Uwk')
            .then((result) => {
                success = true;
                console.log(result.text);
                notify()
            }, (error) => {
                success = false;
                console.log(error.text);
                notify()
            });
        e.target.reset();
    };

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

    return (
        <>
            <Header />
            <main className="col-md-10 p-4 col-sm-12 slide2">
                <Redes />
                <section>
                    <div className="d-flex justify-content-between align-items-center titulo">
                        <h1 className='titles text-white pt-3 pb-3 pb-md-0 h3'>{i18n.t('contato.titulo')}</h1>
                        <div className='mb-2 mb-md-4 idiomas'>
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
                <div className='container-fluid'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="row mx-auto">
                            <div className="col-md-6 col-12 d-flex flex-column mt-2">
                                <label for="name">{i18n.t('contato.labels.nome')}</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="col-md-6 col-12 d-flex flex-column mt-2">
                                <label for="email">{i18n.t('contato.labels.email')}</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="col-md-12 d-flex flex-column mt-2">
                                <label for="subject">{i18n.t('contato.labels.assunto')}</label>
                                <input type="text" id="subject" name="subject" required />
                            </div>
                            <div className="col-md-12 d-flex flex-column mt-2">
                                <label for="msg">{i18n.t('contato.labels.mensagem')}</label>
                                <textarea id="msg" name="message" rows="3" cols="50" required />
                            </div>
                            <div className="col-md-12 mt-2 text-end">
                                <input type="submit" value={i18n.t('contato.botao')} />
                            </div>
                        </div>
                    </form>
                    <Toaster />
                </div>
            </main>
        </>
    );

}

export default Contato;