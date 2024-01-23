import { FaInstagram, FaLinkedin, FaGithub, FaLinkedinIn} from "react-icons/fa";
import styles from './Footer.module.css'
function Footer (){
    return(
        <div className={styles.footer}>
        <ul> 
                <li><a href='https://www.instagram.com/veronicasntana/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/veronica-nascimento-santana/'><FaLinkedinIn size={30}/></a></li>
                <li><a href='https://github.com/veronicasantana1'><FaGithub size={30}/></a></li>
                </ul>
                <p>santanaveronica858@gmail.com</p>
                <p>Verônica Santana © 2024</p>
                </div>
    )
}
export default Footer