import { Component } from "react";
import Painel from "../painel";
import Teclado from "../teclado";
import "./style.css";

class Calculadora extends Component {

	constructor() {
		super();

		this.state = {
			informacoesDigitadas: ""
		}
	}

	handleInserirCaractereDigitado(caractere) {
		const novoEstado = this.state.informacoesDigitadas + caractere;
		this.setState({
			informacoesDigitadas: novoEstado
		});

		console.log(this.state.informacoesDigitadas);
	}

	render() {
		return (
			<section className="calculadora">
				<Painel textoParaExibicao={this.state.informacoesDigitadas} />
				<Teclado inserirCaractereDigitado={this.handleInserirCaractereDigitado.bind(this)} />
			</section>
		)
	}
}

export default Calculadora;