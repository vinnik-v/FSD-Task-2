import styles from './1.scss';

var dropdown = require('./components/dropdown/dropdown.js');
var dateDropdown = require('./components/date-dropdown/date-dropdown.js');

dropdown('guests');
dropdown('rooms');

dateDropdown('calendar');

$( document ).ready(function() {
 
    // function Person(first, last, age, gender, interests) {
  
    //     // property and method definitions
    //     this.first = first;
    //     this.last = last;
    //   //...
    //   }

    //   var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

    //   console.log(person1.this)
 
});

