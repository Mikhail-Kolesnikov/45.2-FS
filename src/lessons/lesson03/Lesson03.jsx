import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";

function Lesson03() {

  const handleClick = (buttonName) => {
    alert(`Hello from ${buttonName}`);
  };
  return (
    <div>
      <h2>React Props 🧑‍🍼</h2>
      <p>
        Props используются для передачи данных от родительских компонентов
        дочерним компонентам. Это один из основных механизмов передачи данных в
        React
      </p>
      <MyButton func={() => handleClick('Button 1')} text="Button 1" />
      <MyButton func={() => handleClick('Button 2')} text="Button 2" />
      <MyButton func={() => handleClick('Button 3')} text="Button 3" />
      <UserCard name={'Roy Jones Jr.'} age={32}/>
      <UserCard name={'Rocky Balboa'} age={34}/>
      
    </div>
  );
}
export default Lesson03;
