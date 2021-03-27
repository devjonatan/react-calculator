import { Component } from "react";
import "./style.css";

class Teclado extends Component {

	constructor() {
		super();

		this.teclas = [];

		const teclas = "123+456-789/.0,*=";
		for (let indice = 0; indice < teclas.length; indice++) {
			const tecla = teclas[indice];
			this.teclas.push(tecla);
		}
	}

	render() {
		return (
			<div className="teclado">
				{this.teclas.map((tecla, index) => {
					return (
						<button className="button" key={index}>
							<div className="button__content">
								<p className="button__text">{tecla}</p>
							</div>
						</button>
					)
				})}
			</div>
		)
	}
}

export default Teclado;