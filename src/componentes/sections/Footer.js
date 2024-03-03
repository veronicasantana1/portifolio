import { FaInstagram, FaLinkedin, FaGithub, FaLinkedinIn} from "react-icons/fa";
import styles from './Footer.module.css'
function Footer (){
    return(
        <div className={styles.footer}>
            <div className={styles.contato}>
                <p>Meu contato: <br></br>
                    12 988888888</p>
                <p>E-mail: <br></br>xxx@xyz.com</p>
                {/* <p>Verônica Santana © 2024</p> */}
                </div>
                <ul> 
                <li><a href='https://www.instagram.com/veronicasntana/'><FaInstagram size={72}/></a></li>
                <li><a href='https://www.linkedin.com/in/veronica-nascimento-santana/'><FaLinkedinIn size={72}/></a></li>
                <li><a href='https://github.com/veronicasantana1'><FaGithub size={72}/></a></li>
                </ul>
                </div>
    )
}
export default Footer