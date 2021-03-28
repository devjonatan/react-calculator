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
		let novoEstado = this.state.informacoesDigitadas + caractere;
		if (novoEstado.indexOf("ERRO") > -1)
			novoEstado = caractere;

		if (caractere === "C")
			novoEstado = "";

		if (caractere === "=")
			this.calcular();

		else
			this.imprimirNaTela(novoEstado);
	}

	calcular() {
		try {
			const args = this.retornarNumerosParaCalculo();
			if (args.length < 2)
				throw ("Operação precisa de dois conjuntos para a operação!");

			const resultado = this.executarCalculo(args[0], args[1]);
			this.imprimirNaTela(resultado);
		} catch (error) {
			this.imprimirNaTela("ERRO");
			console.log(error);
		}
	}

	executarCalculo(primeiroNumero, segundoNumero) {
		var resultado = 0;
		const operador = this.retornarOperador();

		primeiroNumero = parseFloat(primeiroNumero.replace(".", "").replace(",", "."));
		segundoNumero = parseFloat(segundoNumero.replace(".", "").replace(",", "."));

		switch (operador) {
			case "+":
				resultado = primeiroNumero + segundoNumero;
				break;

			case "-":
				resultado = primeiroNumero - segundoNumero;
				break;

			case "/":
				resultado = primeiroNumero / segundoNumero;
				break;

			case "*":
				resultado = primeiroNumero * segundoNumero;
				break;

			default:
				throw ("Operador não definido!");
		}

		resultado = resultado.toString().replace(".", ",");

		if (resultado === "NaN" || resultado === "Infinity")
			throw ("Resultado resultou em número inválido!");

		return resultado;
	}

	imprimirNaTela(texto) {
		this.setState({
			informacoesDigitadas: texto
		});
	}

	retornarNumerosParaCalculo() {
		const operador = this.retornarOperador();
		return this.state.informacoesDigitadas.split(operador);
	}

	retornarOperador() {
		const args = this.state.informacoesDigitadas;
		const operadores = "-*+/";
		for (let index = 0; index < operadores.length; index++) {
			const operador = operadores[index];
			if (args.indexOf(operador) > -1)
				return operador;
		}

		throw ("Operador não definido!");
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