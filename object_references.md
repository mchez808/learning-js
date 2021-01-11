# references

```js
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
```

This JavaScript statement does **not*** make a copy of this object.

`var animal2 = animal;`

Rather, it's a reference to the same memory address.

```js
animal2.genus = "ursus"
animal.genus
```
This is only how objects behave.
To make a complete copy of an object safely:

```js
animal2 = JSON.parse(JSON.stringify(animal));
```

This is how most JS developers do it now.
