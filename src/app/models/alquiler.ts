export class Alquiler {
	
	constructor(
			public ideAlquiler: number,
			public ideJuego: number,
			public ideCliente: string,
			public ideTecnologiaJuego: number,
			public fechaInicio: any,
			public fechaFin: any,
			public precioAlquiler: number
		) {
	}
}