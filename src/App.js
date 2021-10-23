import { useState } from 'react';
import './App.css';
import './index.css';
import html2canvas from 'html2canvas';

function App() { //Componente
    
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("confused");
  
  const cambiarLinea1 = function(texto) {
    setLinea1(texto.target.value);
  }
  const cambiarLinea2 = function(texto) {
    setLinea2(texto.target.value);
  }
  const cambiarImagen = function(foto) {
    setImagen(foto.target.value);
  }
  const fExportar = function() {
    html2canvas(document.querySelector("#meme")).then(canvas => { //Libreria para Screenshots
      var img= canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
}

  return ( //Se pone el paréntesis para escribir el código abajo
    <div className="App">

      <h1>Meme Generator</h1>

      <select onChange={cambiarImagen}>
        <option value= "confused">Confudido</option>
        <option value="desconfiar">Desconfiado</option>
        <option value="disaster">Desastre</option>
        <option value="homero">Homero</option>
        <option value="Think">Pensando</option>
      </select><br />
      
      <input onChange={cambiarLinea1} type="text" placeholder="Linea uno"/><br />
      <input onChange={cambiarLinea2} type="text" placeholder="Linea dos"/><br />
      <button onClick={fExportar}>Descargar</button>

      <div id="meme" className="meme">
        <div className="linea1">
          <span className="texto1">{linea1.toUpperCase()}</span> <br />
        </div>
        <div className="linea2">
          <span className="texto2">{linea2.toUpperCase()}</span> <br />
        </div>
        <img src={"img/"+ imagen + ".jpg"}/>

      </div>

    </div>
  );
}

export default App;
