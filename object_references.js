// references

// setup
var animal = {
	genus : 'corvus',
	species : 'corvax',
	commonName: 'raven',
	callType : 'squawky',
	quote : 'Nevermore',
	maxOffspring : 5,
	noisy : true,
	deadly : false
};

// this JavaScript statement does not make a copy of this object.
var animal2 = animal;
// it's a reference to the same memory address.
animal2.genus = "ursus"
animal.genus
// happens only for objects


// to make a complete copy of an object safely:
animal2 = JSON.parse(JSON.stringify(animal));
// This is how most JS developers do it now.
