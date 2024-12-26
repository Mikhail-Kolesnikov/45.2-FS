import "react";
import style from "./WelcomeCard.module.css";
import imageOfProfile from "../assets/IMG_7493.jpeg"
// "../assets.IMG_7439.jpeg";


function WelcomeCard(){
    return(
    <div className={style.body}>
        <div className={style.cardClass}>
            <h1 className={style.classHeader}>Hallöchen всем!</h1>
        </div>
        <p>
        Привет!
Меня зовут Михаил. Я увлекаюсь IT и развиваю свои навыки в этой области, 
осваивая современные технологии и подходы. Кроме того, 
я люблю активный образ жизни: спорт помогает мне поддерживать энергию 
и находить баланс.
Чтение книг – моя страсть, я вдохновляюсь историями, 
которые расширяют мой кругозор, и нахожу новые идеи для путешествий. 
Путешествия для меня – это способ открыть мир, познакомиться с разными культурами и 
вдохновиться красотой планеты.
        </p>
        <img src={imageOfProfile} alt="" />
        {/* <img src="https://dic.academic.ru/pictures/wiki/files/83/Su-250-64.jpg" alt="" /> */}

        <footer className={style.footerClass}>Я целеустремленный человек с хорошим чувством юмора, 
            который помогает находить позитив даже в сложных ситуациях.

Буду рад новым знакомствам и интересным проектам!</footer>
    </div>
)}
export default WelcomeCard;

