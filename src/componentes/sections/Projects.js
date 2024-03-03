import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card.js'
import lpdnc from '../../image/projects/lpdnc.svg'
import portifolio from '../../image/projects/portifolio.svg'
import desafio from '../../image/projects/desafio.svg'
import ButtonA from '../elements/ButtonA.js'
function Projects (){
    return(
        <div id="Projects" className={styles.projects}>
        <h1>Projetos</h1>
    <div className={styles.cards}>
       <div className={styles.border}><img src={desafio} alt='error'></img>
       <h4>PROJETO 1</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <ButtonA text="Clique Aqui"></ButtonA>
       </div>
       <div className={styles.border}><img src={desafio} alt='error'></img>
       <h4>PROJETO 2</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <ButtonA text="Clique Aqui"></ButtonA>
       </div>
       <div className={styles.border}><img src={desafio} alt='error'></img>
       <h4>PROJETO 3</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <ButtonA text="Clique Aqui"></ButtonA>
       </div>
       <div className={styles.border}><img src={desafio} alt='error'></img>
       <h4>PROJETO 4</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <ButtonA text="Clique Aqui"></ButtonA>
       </div>
       </div>
       </div>
    )
}


export default Projects