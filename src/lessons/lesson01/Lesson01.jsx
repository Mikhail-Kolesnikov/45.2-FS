//!как создать реакт компонент -
//фаил называется с большой буквы
//имеет расширение .jsx
//внутри есть функции, у которой в return  верстка
//функция называется именем файла
//функция экспортируется с файла
import './lesson01.css'
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";

function Lesson01() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Привет, это я и React</h1>

      <p className="read-the-docs">Это реакт проект, собран на сборщике Vite</p>
    </>
  );
}

export default Lesson01;
