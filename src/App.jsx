import { useState, useRef } from 'react'
import './App.css'
import Music from '/Music/3.mp3';


function App() {
  const [count, setCount] = useState(0);
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    audioRef.current.play();
  };

  return (
    <>
      <h1>Oliwia Maruszak-Zawodnik</h1>
      <h2>Nr.Albumu: 113783</h2>
      <div>
        <img src="/image/1.jpg" alt=""/>
      </div>
      <div className="card">
        <p>
        <button onClick={handlePlayAudio}>Music</button>
      </p>
      <audio ref={audioRef}>
          <source src={Music} type="audio/mp3" />
      </audio>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
