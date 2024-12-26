import MyButton from "../../components/myButton/MyButton"

function Lesson02(){
    const element = <h4>Это JSX из переменной element!</h4>
    const text = 'Это строка пришла из переменной text...'
    

  const react = {
    developer: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
  }
  function showDeveloper(obj){
    if(obj.developer){
    return 'Developer:' + obj.developer
  }
  return "передайте валидный объект"
    }
    const isLoggedIn = false
    return (
    <div>
        <h2>JSX components </h2>
        <p>
        В JSX мы можем пользоваться динамическими данными, 
        которые приходят из тела react компонента или других файлов:</p>
        {element}
        <p>{text}</p>
        <p>Это вычисление случилось в JSX: {20 + 22}</p>
        <img width={'100px'} src={react.logo} alt="react.logo" />
        <p>React developer: {react.developer}</p>
        <p>{showDeveloper(react)}</p>
        <p>Пользователь <b>{isLoggedIn? "в данный момент ":"не "}</b>авторизирован</p>
        <MyButton />

    </div>
    );
    }

export default Lesson02;
