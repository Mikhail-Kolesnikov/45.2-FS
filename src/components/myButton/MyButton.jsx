import styles from './MyButton.css'
export default function MyButton(func, text){
    return <button className={styles.button} onClick={func}>{text}</button>
}