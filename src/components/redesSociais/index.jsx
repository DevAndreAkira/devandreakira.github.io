import React from 'react';
import { FaSearch, FaLinkedinIn, FaGithubAlt, } from "react-icons/fa";
import { SiReplit } from "react-icons/si";
import i18n from '../translate/i18n';


const RedesSociais = () => {
    return (
        <>
            <div className="d-flex align-items-start justify-content-between">
                <form className="d-flex">
                    {/* <input className="form-control me-2" type="search" placeholder={i18n.t('buscar.buscar')} aria-label="Search" />
                    <button className="btn position-absolute" type="submit"><FaSearch style={{ color: "#A4B6C9" }} /></button> */}
                </form>
                <ul className="d-flex align-items-center mobile_social">
                    <li>
                        <a href="https://www.linkedin.com/in/andr%C3%A9-a-257510138/" className="nav-link" aria-label="Linkedin" target="_blank" title='Linkedin' name='Linkedin' rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    {/* <li>
                        <a className="nav-link" href="https://www.youtube.com/channel/UC_1lNd_pFiHd357IoMuRJRQ" target="_blank" rel="noreferrer">
                            <FaYoutube />
                        </a>
                    </li> */}
                    {/* <li>
                        <a href="https://codepen.io/DevAndreAkira" className="nav-link" target="_blank" rel="noreferrer">
                            <FaCodepen />
                        </a>
                    </li> */}
                    <li>
                        <a href="https://github.com/DevAndreAkira" className="nav-link" aria-label="Github" target="_blank" title='Github' name='Github' rel="noreferrer">
                            <FaGithubAlt />
                        </a>
                    </li>
                    <li>
                        <a href="https://replit.com/@DevAndreAkira/" className="nav-link" aria-label="Replit" target="_blank" title='Repl.it' name='Repl.it' rel="noreferrer">
                            <SiReplit />
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://www.buymeacoffee.com/devandreakira" className="nav-link" aria-label="Buymeacoffee" target="_blank" rel="noreferrer">
                            <SiBuymeacoffee />
                        </a>
                    </li> */}
                </ul>
            </div>
        </>
    );
}

export default RedesSociais;