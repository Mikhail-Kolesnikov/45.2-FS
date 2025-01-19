import { fellowship } from "./fellowship";
import "./lesson05.css";

function Lesson05() {
  console.log(fellowship);
  return (
    <div>
      <h2>React map() components </h2>
      {fellowship.map((hero, index) => (
        <div className="heroCard" key={index}>
          <p>{hero.name}</p>
          <p>{hero.isDark ? 'Villan 🧌' : 'Hero🦸'}</p>
          <p>{hero.age} years old</p>
          <img src={hero.image} alt="" />
        </div>
      ))}
    </div>
  );
}
export default Lesson05;
