import styles from './styles.module.scss'
import ptBR from 'date-fns/locale/pt-BR'

export default function Player() {
    return (
        <div className= {styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando agora</strong>
            </header>
        </div>
    )
}