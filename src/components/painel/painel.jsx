import { Component } from "react";
import "./style.css";

class Painel extends Component {
	render() {
		return (
			<div className="painelDigital">
				<span>{this.props.textoParaExibicao}</span>
			</div>
		)
	}
}

export default Painel;