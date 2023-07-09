import { BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import style from './footer.module.css'


function Footer(){
    return(
        <footer className={style.containerFooter}>
            <div>
                <span className={style.credit}>
                ©Copyright 2023 by Esteban Muchenvicz
                </span>
            </div>

            <div>
            <li className={style.social}>
                    <a href="https://www.linkedin.com/in/rodolfo-esteban-muchenvicz/" target="_blank" rel="noreferrer">
                    <i><BsLinkedin /></i>
                    </a>
                    <a href='https://github.com/Estebanmuchenvicz/' target="_blank" rel="noreferrer">
                        <i><BsGithub /></i>
                        </a>
                    <a href='https://www.instagram.com/esteban.much/' target="_blank" rel="noreferrer">
                        <i><BsInstagram /></i>
                        </a>
                </li>
            </div>
        </footer>
    )
};

export default Footer;