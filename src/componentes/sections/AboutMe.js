import styles from './AboutMe.module.css'
import timeline from '../../image/AboutMe/timeline.svg'

function AboutMe(){
    return(
        <div className={styles.titulo}>
        <h1>Sobre mim</h1>
        <div className={styles.AboutMe}>
            <div className={styles.anos}>
          <h4>2018</h4>
          <h4>2019</h4>
          <h4>2020</h4>
          <h4>2021</h4>
        </div>
        <img src={timeline} alt='error'></img>
        <div className={styles.descricao}>
            <p>Lorem ipsum dolor sit <br></br> amet, consectetur <br></br>adipiscing elit, sed do <br></br>eiusmod tempor incididunt <br></br> ut labore et dolore magna<br></br> aliqua.</p>
            <p>Lorem ipsum dolor sit <br></br> amet, consectetur <br></br>adipiscing elit, sed do <br></br>eiusmod tempor incididunt <br></br> ut labore et dolore magna<br></br> aliqua.</p>
            <p>Lorem ipsum dolor sit <br></br> amet, consectetur <br></br>adipiscing elit, sed do <br></br>eiusmod tempor incididunt <br></br> ut labore et dolore magna<br></br> aliqua.</p>
            <p>Lorem ipsum dolor sit <br></br> amet, consectetur <br></br>adipiscing elit, sed do <br></br>eiusmod tempor incididunt <br></br> ut labore et dolore magna<br></br> aliqua.</p>
        </div>
        </div>
        </div>
    )
}

export default AboutMe