class Animal {
    constructor(genus, species, domesticated, colour) {
        this.genus = genus;
        this.species = species;
        this.isDomesticated = domesticated;
        this.colour = colour;
    }

    get latinName() {
        return this.genus + " " + this.species;
    }
}

class Wolf extends Animal {
    constructor(genus, species, domesticated, colour, numOfTeeth) {
        super(genus, species, domesticated, colour);
        this.numOfTeeth = numOfTeeth;
    }
}