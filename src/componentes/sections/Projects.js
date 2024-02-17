import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card.js'
import lpdnc from '../../image/projects/lpdnc.svg'
import portifolio from '../../image/projects/portifolio.svg'
function Projects (){
    return(
        <div id="Projects" className={styles.projects}>
        <h1>Projetos</h1>
       <Card 
       img={lpdnc} 
       title='LP - DNC'
        tech='HTML, CSS E JS' description='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia' repo='https://github.com/veronicasantana1/projeto-landing-page.git' site='https://desafiolandingpage1.netlify.app/'></Card>
       <Card 
       title='LP - DNC'
        tech='HTML, CSS E JS' description='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia' repo='https://github.com/veronicasantana1/projeto-landing-page.git' site='https://desafiolandingpage1.netlify.app/'></Card>
       <Card></Card>
        <ButtonB text='Acesse meu repositório' link='https://github.com/veronicasantana1?tab=repositories'></ButtonB>
        </div>
    )
}

export default Projects