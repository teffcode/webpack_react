import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render(){
      return(
        <h1>Hola</h1>
      );
  }
}

const app = document.getElementById('app');

// app es donde queremos escribirlo, que es el div
ReactDOM.render(<Layout/>, app);
