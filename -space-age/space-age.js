export class SpaceAge {
  constructor(seconds) {
	 this.seconds = seconds
	}

  calculateEarthAge() {
	 return this.seconds / 31557600
	}

  roundedFloat(floatNum) {
	 return parseFloat(floatNum.toFixed(2));
	}

  calculatePlanetAge(constant) {
	 return this.roundedFloat(this.calculateEarthAge() / constant)
	}

  onEarth() { return this.roundedFloat(this.calculateEarthAge()) }

  onMercury() { return this.calculatePlanetAge(0.2408467) }

  onVenus() { return this.calculatePlanetAge(0.61519726) }

  onMars() { return this.calculatePlanetAge(1.8808158) }

  onJupiter() { return this.calculatePlanetAge(11.862615) }

  onSaturn() { return this.calculatePlanetAge(29.447498) }

  onUranus() { return this.calculatePlanetAge(84.016846) }

  onNeptune() { return this.calculatePlanetAge(164.79132) }
}
