import styles from './1.scss';

var dropdown = require('./components/dropdown/dropdown.js');
var dateDropdown = require('./components/date-dropdown/date-dropdown.js');

dropdown('guests');
dropdown('rooms');

dateDropdown('calendar');


// module.exports = {
//     plugins: [
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery'
//       }),
//     ]
//   };

  $( "button.continue" ).html( "Next Step..." )
