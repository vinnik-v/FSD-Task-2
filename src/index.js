import styles from './1.scss';
//import  './src/components/dropdown/dropdown.js';
//var dropdownCounts = require('./components/dropdown/dropdown.js');

var dropdownCounts = require('./components/count-buttons/count-buttons.js');

dropdownCounts('adults');
dropdownCounts('kids');
dropdownCounts('babies');

dropdownCounts('bedrooms');
dropdownCounts('beds');
dropdownCounts('bath');

console.log(dropdownCounts.value)
//['bedrooms','спальни'],['beds','кровати'],['bath','ванные комнаты']

// dropdownCounts('adults');
// dropdownCounts('kids');
// dropdownCounts('babies');

//console.log(document.querySelectorAll('#dropdown__adults-count'));