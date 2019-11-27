export const solve = (x, y) => {

	const outside = 0;
	const outerCircle = 1;
	const middleCircle = 5;
	const innerCircle = 10;
	//h es la hipotenusa. Según el teorema de Pitágoras la suma de los cuadrados
	//de los catetos es igual a lahipotenusa al cuadrado
	let h = Math.sqrt(Math.pow(x, 2) + Math.pow(y,2));

	if (isNaN(x) || isNaN(y)){
		return null;
	} 

	if (h <= 1){
		return innerCircle;
	}

	if (h > 1 && h <= 5){
		return middleCircle;
	}

	if (h > 5 && h <= 10) {
		return outerCircle
	}

	if (h > 10) {
		return outside;
	}

}