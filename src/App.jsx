import React, { useState } from 'react';
import '../src/App.css';

function App() {
  const [backgroundPosition, setBackgroundPosition] = useState('center center');

  // Функция для обработки движения мыши
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    // Значения для смещения фона относительно центра экрана
    const moveX = (clientX / window.innerWidth) * 50 - 25;
    const moveY = (clientY / window.innerHeight) * 50 - 25;

    setBackgroundPosition(`${50 - moveX}% ${50 - moveY}%`);
  };

  return (
    // Добавьте обработчик событий onMouseMove на ваш контейнер
    <div className="authorization-container" onMouseMove={handleMouseMove} style={{ backgroundPosition }}>
      <div className="authorization-box">
        <div className="authorization-title">АВТОРИЗАЦИЯ</div>
        <p>Прежде чем продолжить, нам нужно узнать вас</p>
        <div className="auth-icon">
          <img src="src/assets/dis.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
