import React, { useState } from 'react';
import '../Start/kirk.css';

function Registor() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, nickname);
  };

  const [backgroundPosition, setBackgroundPosition] = useState('center center');
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX / window.innerWidth) * 50 - 25;
    const moveY = (clientY / window.innerHeight) * 50 - 25;

    setBackgroundPosition(`${50 - moveX}% ${50 - moveY}%`);
  };

  return (
    <div className="authorization-container" onMouseMove={handleMouseMove} style={{ backgroundPosition }}>
      <div className="authorization-box">
        <div className="authorization-title">РЕГИСТРАЦИЯ</div>
        <p>Давайте заполним некоторую инфомацию о вас<br></br>для представления в нашем Discord-сервере</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Имя" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Никнейм" 
            value={nickname} 
            onChange={(e) => setNickname(e.target.value)} 
          />
          <button type="submit" disabled={!name || !nickname}>Продолжить</button>
        </form>
      </div>
      <img src="https://s3-alpha-sig.figma.com/img/09d1/f776/0be9e707bcd6196e62c9fd41ec217704?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jskyzgR41x9xM3GMUk-jKESPgQbLTMzGn7PeNevByRDdm6j3Xr0cfdjVH74dYEKUqdItJZq53wpuQfqcw1GdtzS4N5GeDO4G4E6v9tGbnyyi3yYFvJP1fF5Y2Ivzer-CF~OjMSglbAQSSRF5cowpnt6KtCTxvzpUOKg4saSic3z3Aw7ujvmkpQoyPWDYNF9Z2Hpxx6pn~d-FgNUS8~lJXVO7GiPhTpBMH0dqX4MYCtdjBJlbf7yswwSMMTO0BpGKb0c5lX9xQrdv790JsGLkFeDfeDc33XtabBjbMuY1a5h3lUNViEnxWBExv79-XCB0iOh8~bOxGjfk86nDuLW5nQ__" alt="Верхний угол" className="upper-right-corner" />
      
      <img src="https://s3-alpha-sig.figma.com/img/f2aa/c083/6a4f1a480de863f05fd1fc705f5d3915?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMGRFbp5~iHqkGet9nEaLg55P5mHweriU24ibtWSK6KhtUC-i8aU2Uskj-AgeU9fmPd0~pAigAa6DIMFxg2IxcqKkIpFGezCdgHgwLRX4xkw~6nTsP6sp8vyt8Jt3neL1yy4V6F2EVLOLwJS-DKAsHsP9HrkT2eXSb2uHBYdKQwvBJzUJdbvpj~IX5GgOAjk-H4NF~3Q4rCNWiZhzMxBJuEemUh8dVuZt9~djjxHJfaFf52j98LQjry5kmhrIXEhUvUWpj9piIUnmhNMnHN8p1YjgB7tmheaVA~ZBVKTRiLBcGxgIoPMAluDK6SM076Mxm0nk44enwHwD6xqYd28Dg__" alt="Нижний угол" className="lower-left-corner" />
    </div>
  );
}

export default Registor;
