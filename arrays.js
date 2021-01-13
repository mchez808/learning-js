var myArray = [];
myArray;

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];
daysOfTheWeek;

// Secretly, an array in JavaScript is actually an object that gets special treatment. 
// In many programming languages objects and arrays and are totally different. 
// In JavaScript they're effectively the same. But arrays have a few special qualities. 

// 1) the order is preserved.
// 2 the keys are automatically assigned, as numbers, starting with zero. 
// So I can fill an array with a list of stuff and not have to think about naming the key for each stored value,
// even if I don't care about order.

// you can create arrays with any kind of data. All different types.
// Arrays are guaranteed to appear in the same order as construction.
var myArray = [
0, 1, 2,
'string1', 'string2', 'string3',
true, false
];
myArray;

var counties = [
	'Belknap',
	'Strafford',
	'Carroll',
	'Rockingham'
];
counties;

var arrayOfStuff = [
    // Arrays can contain objects. So the first item in my array is an object.
    {'name' : 'value'},
    // You can even have another array inside your array.
    [1, 2, 3],
	true,
	'nifty'
];
arrayOfStuff;

// one more thing about arrays that's different from regular objects:
// All arrays have a length property, the length at the root level of the array.
arrayOfStuff.length;

////////////////
// Array Methods
////////////////
var counties = [
	'Belknap',
	'Strafford',
	'Carroll',
	'Rockingham'
];

counties[0];
counties[2];

counties[2] = 'Cheshire';
counties;

counties[4] = 'Carroll';
counties;

counties[counties.length] = 'Merrimack';
counties;

counties.push('Coos');
counties;

counties.pop();

delete counties[2];
counties;

counties.splice(2, 1);
counties;
counties.length;
