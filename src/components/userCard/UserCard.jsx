import MyButton from "../myButton/MyButton";
import styles from './UserCard.module.css'

//на место props 
function UserCard(name, age) {
  const handleClick = () =>{
    alert(`Hello, ${name}!`)
  }
  return (
    <div className={styles.user_card}>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <div className={styles.button_container}>
      <MyButton func={handleClick} text={`Knockout ${name}`}/>
      </div>
    </div>
  )
};
export default UserCard;
