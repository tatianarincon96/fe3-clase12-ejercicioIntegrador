import React from "react";
import "./styles/App.css";
import Swal from "sweetalert2";

class App extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0, tipoRespuesta: "", text: "" };
  }

  componentDidMount() {
    this.setState({ contador: 5 });
  }

  componentDidUpdate() {
    if (this.state.contador === 0 || this.state.contador === 10) {
      Swal.fire(this.state.text);
    }
  }

  handleChange = (event) => {
    this.setState({ tipoRespuesta: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.tipoRespuesta === "Gato") {
      this.setState({
        text:
          "Egyptian mau Ocicat savannah birman mouser or bengal british shorthair. Maine coon norwegian forest persian. Kitten turkish angora sphynx or sphynx but himalayan. Siamese tom for cheetah tom or cornish rex leopard. Bengal tom or bobcat turkish angora, siberian jaguar."
      });
      Swal.fire("Respuesta registrada!");
    } else if (this.state.tipoRespuesta === "Zombie") {
      this.setState({
        text:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror."
      });
      Swal.fire("Respuesta registrada!");
    } else {
      Swal.fire({
        title: "Error!",
        text: 'Debes ingresar "Gato" o "Zombie"',
        icon: "error",
        confirmButtonText: "Cool"
      });
    }
    this.setState({ tipoRespuesta: "" });
  };

  decrementar = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h1>~ Make some magic ~</h1>
        <h4>
          Elegí si querés recibir un mensaje de gatos o zombies y llevá el
          contador hasta 0 o 10 ;)
        </h4>
        <form onSubmit={this.handleSubmit}>
          <label> Ingresa "Gato" o "Zombie" </label>
          <input
            type="text"
            value={this.state.tipoRespuesta}
            onChange={this.handleChange}
          />
          <input type="submit" value="Enviar" />
        </form>
        <div className="container">
          <button className="button" onClick={this.decrementar}>
            -
          </button>
          <p>{this.state.contador}</p>
          <button className="button" onClick={this.incrementar}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
