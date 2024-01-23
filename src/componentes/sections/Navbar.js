import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub, FaLinkedinIn} from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar (){
    return(
        <div className={styles.navbar}>
            <ul> 
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                </ul>
                <ul> 
                <li><a href='https://www.instagram.com/veronicasntana/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/veronica-nascimento-santana/'><FaLinkedinIn size={30}/></a></li>
                <li><a href='https://github.com/veronicasantana1'><FaGithub size={30}/></a></li>
                </ul>
        </div>
    )
}

export default Navbar