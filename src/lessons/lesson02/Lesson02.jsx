import MyButton from "../../components/myButton/MyButton";

function Lesson02() {
  const element = <h4>Это JSX из переменной element!</h4>;
  const text = "Это строка пришла из переменной text...";

  const react = {
    developer: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  };
  function showDeveloper(obj) {
    if (obj.developer) {
      return "Developer:" + obj.developer;
    }
    return "передайте валидный объект";
  }
  const isLoggedIn = true;
  return (
    <div>
      <h2>JSX components </h2>
      <p>
        В JSX мы можем пользоваться динамическими данными, которые приходят из
        тела react компонента или других файлов:
      </p>
      {element}
      <p>Здесь будет сьрока: {text}</p>
      <p>Это вычисление случилось в JSX: {20 + 22}</p>
      <img width={"100px"} src={react.logo} alt="react.logo" />
      <p>React developer: {react.developer}</p>
      {isLoggedIn ?  <img width={"100px"} src={react.logo} alt="react.logo" /> : "" }
      <p>{showDeveloper(react)}</p>
      <h4>Пример тернарного оператора</h4>
      <p>
        Пользователь <b>{isLoggedIn ? "в данный момент " : "не "}</b>
        авторизирован
      </p>
      <p>Пример переиспользования компонентов</p>
      {/* <MyButton />
      <MyButton />
      <MyButton /> */}
    </div>
  );
}

export default Lesson02;
