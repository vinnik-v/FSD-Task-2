
// var guestsCount = 0;
// var babiesCount = 0;
// var bedroomsCount = 0;
// var bedsCount = 0;
// var bathroomsCount = 0;

// var dropdownCounts = function (type, val_id) {

//     const elem_id = '#dropdown__' + val_id + '-count';

//     let defVal = document.querySelector(elem_id);
//     let fieldTextVal = document.querySelector('#dropdown__field-text-'+ type);
//     let dropdownContent = document.querySelector('.dropdown__content');

//     let value = 0;

//     defVal.innerHTML = value;

//     let plus = document.querySelector(elem_id + '-plus');
//     let minus = document.querySelector(elem_id + '-minus');
//     let clear = document.querySelector('.dropdown__footer-clear');
//     let apply = document.querySelector('.dropdown__footer-apply');

//     clear.style.visibility = "hidden";

//     if (value == 0) {
//         minus.classList.add('dropdown__content-btns-rectgl_light');
//     }

//     plus.addEventListener('click', function (event) {
//         if (value < 4) {
//             value++;
//             if (val_id == 'adults' || val_id == 'kids') {
//                 guestsCount++;
//             }
//             if (val_id == 'babies') {
//                 babiesCount++;
//             }
//             if (val_id == 'bedrooms') {
//                 bedroomsCount++;
//             }
//             if (val_id == 'beds') {
//                 bedsCount++;
//             }
//             if (val_id == 'bath') {
//                 bathroomsCount++;
//             }
//             defVal.innerHTML = value;
//         }
//         if (value > 0) {
//             minus.classList.remove('dropdown__content-btns-rectgl_light');
//         }
//         GuestsFieldText(fieldTextVal, guestsCount, babiesCount);
//         roomsFieldText(fieldTextVal, bedroomsCount, bedsCount);

//         if (guestsCount > 0 || babiesCount > 0){
//             clear.style.visibility = "visible";
//         }
//     });

//     minus.addEventListener('click', function (event) {
//         if (value > 0) {
//             value--;
//             if (val_id == 'adults' || val_id == 'kids') {
//                 guestsCount--;
//             }
//             if (val_id == 'babies') {
//                 babiesCount--;
//             }
//             if (val_id == 'bedrooms') {
//                 bedroomsCount--;
//             }
//             if (val_id == 'beds') {
//                 bedsCount--;
//             }
//             if (val_id == 'bath') {
//                 bathroomsCount--;
//             }
//             defVal.innerHTML = value;
//         }
//         if (value == 0) {
//             minus.classList.add('dropdown__content-btns-rectgl_light');
//         }
//         GuestsFieldText(fieldTextVal, guestsCount, babiesCount);
//         roomsFieldText(fieldTextVal, bedroomsCount, bedsCount);

//         if (guestsCount == 0 && babiesCount == 0){
//             clear.style.visibility = "hidden";
//         }
//     });

//     clear.addEventListener('click', function (event) {
//         value = 0;
//         guestsCount = 0;
//         babiesCount = 0;
//         minus.classList.add('dropdown__content-btns-rectgl_light');
//         GuestsFieldText(fieldTextVal, guestsCount, babiesCount);
//         defVal.innerHTML = value;
//         clear.style.visibility = "hidden";
//     });

//     apply.addEventListener('click', function (event) {
//         dropdownContent.classList.remove('dropdown__content_expanded');
//     });

//     let roomsFieldText = function (fieldTextVal, bedroomsCount, bedsCount) {

//         let wordFormBedrooms = function (bedroomsCount) {
//             if (bedroomsCount == 1) {
//                 return ' спальня';
//             }
//             if (bedroomsCount > 1) {
//                 return ' спальни';
//             }
//         }

//         let wordFormBeds = function (bedsCount) {
//             if (bedsCount == 1) {
//                 return ' кровать';
//             }
//             if (bedsCount > 1) {
//                 return ' кровати';
//             }
//         }

//         if (bedroomsCount > 0 && bedsCount == 0) {
//             fieldTextVal.innerHTML = bedroomsCount + wordFormBedrooms(bedroomsCount);
//         }
//         if (bedroomsCount > 0 && bedsCount > 0) {
//             fieldTextVal.innerHTML = bedroomsCount + wordFormBedrooms(bedroomsCount) + ', ' + bedsCount + wordFormBeds(bedsCount) + '...';
//         }
//         if (bedroomsCount == 0){
//             fieldTextVal.innerHTML = 'Сколько спален';
//         }
//     }

//     let GuestsFieldText = function (fieldTextVal, guestsCount, babiesCount) {

//         let wordFormGuests = function (guestsCount) {
//             if (guestsCount == 1) {
//                 return ' гость';
//             }
//             if (guestsCount > 1 && guestsCount < 5) {
//                 return ' гостя';
//             }
//             if (guestsCount >= 5 && guestsCount < 10) {
//                 return ' гостей';
//             }
//         };

//         let wordFormBabies = function (guestsCount) {
//             if (guestsCount == 1) {
//                 return ' младенец';
//             }
//             if (guestsCount > 1 && guestsCount < 5) {
//                 return ' младенца';
//             }
//             if (guestsCount >= 5 && guestsCount < 10) {
//                 return ' младенцев';
//             }
//         };

//         if (guestsCount > 0 && babiesCount == 0) {
//             fieldTextVal.innerHTML = guestsCount + wordFormGuests(guestsCount);
//         }
//         if (guestsCount > 0 && babiesCount > 0) {
//             fieldTextVal.innerHTML = guestsCount + wordFormGuests(guestsCount) + ', ' + babiesCount + wordFormBabies(babiesCount);
//         }
//         if (guestsCount == 0){
//             fieldTextVal.innerHTML = 'Сколько гостей';
//         }
//     };
// };
var today = new Date();

var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
var date1 = today.getMonth();
console.log(date1);

module.exports = function (type) {
    
    document.querySelector('#dropdown-'+type).style.width = "150px";
    document.querySelector('#dropdown__field-text-'+type).style.width = (150-44)+"px";
    document.querySelector('#dropdown__content-'+type).style.height = "369px";
    document.querySelector('#dropdown__content-'+type).style.width = "320px";

    var dropdownHoverFieldStyle = document.querySelector('#dropdown__content-'+type);
    var HoverField = document.querySelector('#dropdown__field-'+type);

    HoverField.addEventListener('click', function (event) {
        dropdownHoverFieldStyle.classList.add('dropdown__content-calendar');
    });

    // HoverField.addEventListener('mouseout', function (event) {
    //     dropdownHoverFieldStyle.classList.remove('dropdown__content-calendar');
    // });

    dropdownHoverFieldStyle.addEventListener('mouseover', function (event) {
        HoverField.classList.add('dropdownHoverFieldStyle');
        dropdownHoverFieldStyle.classList.add('dropdown__content-calendar');
    });

    dropdownHoverFieldStyle.addEventListener('mouseout', function (event) {
        HoverField.classList.remove('dropdownHoverFieldStyle');
        dropdownHoverFieldStyle.classList.remove('#dropdown__content-calendar');
    });
};
