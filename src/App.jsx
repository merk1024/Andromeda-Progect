import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './content/home/Home'; // Предполагается, что вы создали этот компонент
import Steam from './content/steam/Steam';
import Epic from './content/error/Epic';
import Kvent from './content/kvent/Kventan';
import Atlist from './content/Good/Atlist';
import Registor from './kalector/Start/Registor';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/steam" element={<Steam />} />
      <Route path="/error" element={<Epic />} />
      <Route path="/Kvent" element={<Kvent />} />
      <Route path="/Goodi" element={<Atlist />} />
      <Route path='/Register' element={<Registor />}/>
      {/* Добавьте другие маршруты здесь */}
    </Routes>
  );
}

export default App;
 