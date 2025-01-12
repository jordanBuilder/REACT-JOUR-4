import { useState } from "react"


function App() {
  const [showedText, setShowedText] = useState(true);
  const [showedImage, setShowedImage] = useState(true);


  const handleTextToggle = () => {
    setShowedText(!showedText);
  };
  const handleImageToggle = () => {
    setShowedImage(!showedImage);
  };

  

  return <div className="toggle-things">
   { showedText && <p>
      Ce texte est affiché
    </p>}
    <button onClick={handleTextToggle}>
      {showedText ? "Masquer le texte" :"Afficher le texte"}
    </button>

    {showedImage && <img src="../public/image1.jpg" alt="" style={{
      width: "100px",
      height:"100px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }} />}

    <button onClick={handleImageToggle}>
      {showedText ? "Masquer l'image " : "Afficher l'image"}
    </button>
    

  </div>
}

export default App
