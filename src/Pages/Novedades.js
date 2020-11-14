import React from 'react';
import './../App.css';

//Componentes
import NavBar from './../components/NavBar.js'
import HeaderGrid from '../components/HeaderGrid.js'
import Footer from "./../components/Footer"


import img1 from './../assets/img/img1.jpg';

export default function Novedades(props) {

  return (
    <div className="App">
      <header className="App-barraTitulo">
        <HeaderGrid sesion={props.sesion} cambio={props.cambiar}/>
      </header>
      <div className="App-header">
        <NavBar/>
      </div>
      <div className="App-principal"  style={{paddingTop: "15px"}}>
          <h1>Título</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non vehicula metus, sed viverra felis. Aenean fringilla massa a dolor laoreet, et rhoncus diam fringilla. Phasellus elementum lorem arcu, quis faucibus erat efficitur vel. Donec porttitor vel nisl non efficitur. Morbi nec odio bibendum, dapibus arcu quis, tristique mi. Vivamus dapibus eros ante, a tempus urna vulputate sed. Suspendisse pharetra sodales vehicula. Curabitur id tortor sagittis diam aliquam eleifend. Suspendisse dictum diam ac nisl sodales iaculis. Sed eu mattis leo, id euismod neque. Maecenas eu nisi enim. Suspendisse laoreet, velit sed viverra varius, justo nisl aliquam ante, in luctus leo turpis nec turpis.<br/>Maecenas egestas urna nibh, nec viverra dolor efficitur at. Proin quis nisl at ex vestibulum rutrum in at felis. Cras et feugiat tortor, id auctor lectus. In eget mi id est fermentum dictum a eget nunc. Phasellus molestie nec ex sit amet finibus. Nullam vehicula fringilla congue. Duis ac gravida augue. Integer eros arcu, tincidunt eget purus nec, viverra blandit metus. In molestie sollicitudin purus, vitae tincidunt ante convallis eget. Donec pharetra leo dui, id tincidunt ante fermentum ac. Pellentesque ornare porta varius. Donec rhoncus magna eu maximus rutrum. Nunc eu enim vel erat porttitor congue at tincidunt lectus. Etiam quis vulputate lectus.</p>
          <img src={img1} alt=""/>
          <p>In quis justo venenatis orci malesuada facilisis id ac massa. Nulla facilisi. Nam ante lorem, aliquam non ligula non, elementum ultricies ligula. Nullam nec elit blandit, vulputate diam quis, rhoncus ipsum. Vestibulum vitae leo scelerisque, faucibus magna eu, dignissim diam. Sed at varius orci, in vestibulum libero. Sed gravida diam justo, non interdum dolor consequat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget nulla augue. Integer ut dolor sapien. Nulla facilisi. Cras in aliquet turpis. Nullam pellentesque tellus odio, quis egestas tellus congue eu.</p>
      </div>
      <Footer/>
    </div>
  );
}