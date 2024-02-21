import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './content/home/Home'; // Предполагается, что вы создали этот компонент
import Steam from './content/steam/Steam';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/steam" element={<Steam />} />
      {/* Добавьте другие маршруты здесь */}
    </Routes>
  );
}

export default App;
