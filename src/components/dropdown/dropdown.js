

let guestsCount = 0;
let babiesCount = 0;
let bedroomsCount = 0;
let bedsCount = 0;
let bathroomsCount = 0;

let dropdownCounts = function (type, val_id) {

    const elem_id = '#dropdown__' + val_id + '-count';

    let defVal = document.querySelector(elem_id);
    let fieldTextVal = document.querySelector('#dropdown__field-text-' + type);
    let dropdownContent = document.querySelector('.dropdown__content');

    let value = 0;

    defVal.innerHTML = value;

    let plus = document.querySelector(elem_id + '-plus');
    let minus = document.querySelector(elem_id + '-minus');
    let clear = document.querySelector('.dropdown__footer-clear');
    let apply = document.querySelector('.dropdown__footer-apply');

    clear.style.visibility = "hidden";

    if (value == 0) {
        minus.classList.add('dropdown__content-btns-rectgl_light');
    }

    plus.addEventListener('click', function (event) {
        if (value < 4) {
            value++;
            if (val_id == 'adults' || val_id == 'kids') {
                guestsCount++;
            }
            if (val_id == 'babies') {
                babiesCount++;
            }
            if (val_id == 'bedrooms') {
                bedroomsCount++;
            }
            if (val_id == 'beds') {
                bedsCount++;
            }
            if (val_id == 'bath') {
                bathroomsCount++;
            }
            defVal.innerHTML = value;
        }
        if (value > 0) {
            minus.classList.remove('dropdown__content-btns-rectgl_light');
        }
        if (type == 'guests') {
            GuestsFieldText(fieldTextVal, guestsCount, babiesCount);
        }
        if (type == 'rooms') {
            roomsFieldText(fieldTextVal, bedroomsCount, bedsCount);
        }
        if (guestsCount > 0 || babiesCount > 0) {
            clear.style.visibility = "visible";
        }
    });

    minus.addEventListener('click', function (event) {
        if (value > 0) {
            value--;
            if (val_id == 'adults' || val_id == 'kids') {
                guestsCount--;
            }
            if (val_id == 'babies') {
                babiesCount--;
            }
            if (val_id == 'bedrooms') {
                bedroomsCount--;
            }
            if (val_id == 'beds') {
                bedsCount--;
            }
            if (val_id == 'bath') {
                bathroomsCount--;
            }
            defVal.innerHTML = value;
        }
        if (value == 0) {
            minus.classList.add('dropdown__content-btns-rectgl_light');
        }
        if (type == 'guests') {
            GuestsFieldText(fieldTextVal, guestsCount, babiesCount);
        }
        if (type == 'rooms') {
            roomsFieldText(fieldTextVal, bedroomsCount, bedsCount);
        }
        if (guestsCount == 0 && babiesCount == 0) {
            clear.style.visibility = "hidden";
        }
    });

    clear.addEventListener('click', function (event) {
        if (type == 'guests') {
            value = 0;
            guestsCount = 0;
            babiesCount = 0;
            minus.classList.add('dropdown__content-btns-rectgl_light');
            GuestsFieldText(fieldTextVal, guestsCount, babiesCount);
            defVal.innerHTML = value;
            clear.style.visibility = "hidden";
        }
    });

    apply.addEventListener('click', function (event) {
        dropdownContent.classList.remove('dropdown__content_expanded');
    });

    let roomsFieldText = function (fieldTextVal, bedroomsCount, bedsCount) {

        let wordFormBedrooms = function (bedroomsCount) {
            if (bedroomsCount == 1) {
                return ' спальня';
            }
            if (bedroomsCount > 1) {
                return ' спальни';
            }
        }

        let wordFormBeds = function (bedsCount) {
            if (bedsCount == 1) {
                return ' кровать';
            }
            if (bedsCount > 1) {
                return ' кровати';
            }
        }

        if (bedroomsCount > 0 && bedsCount == 0) {
            fieldTextVal.innerHTML = bedroomsCount + wordFormBedrooms(bedroomsCount);
        }
        if (bedroomsCount > 0 && bedsCount > 0) {
            fieldTextVal.innerHTML = bedroomsCount + wordFormBedrooms(bedroomsCount) + ', ' + bedsCount + wordFormBeds(bedsCount) + '...';
        }
        if (bedroomsCount == 0) {
            fieldTextVal.innerHTML = 'Сколько спален';
        }
    }

    let GuestsFieldText = function (fieldTextVal, guestsCount, babiesCount) {

        let wordFormGuests = function (guestsCount) {
            if (guestsCount == 1) {
                return ' гость';
            }
            if (guestsCount > 1 && guestsCount < 5) {
                return ' гостя';
            }
            if (guestsCount >= 5 && guestsCount < 10) {
                return ' гостей';
            }
        };

        let wordFormBabies = function (guestsCount) {
            if (guestsCount == 1) {
                return ' младенец';
            }
            if (guestsCount > 1 && guestsCount < 5) {
                return ' младенца';
            }
            if (guestsCount >= 5 && guestsCount < 10) {
                return ' младенцев';
            }
        };

        if (guestsCount > 0 && babiesCount == 0) {
            fieldTextVal.innerHTML = guestsCount + wordFormGuests(guestsCount);
        }
        if (guestsCount > 0 && babiesCount > 0) {
            fieldTextVal.innerHTML = guestsCount + wordFormGuests(guestsCount) + ', ' + babiesCount + wordFormBabies(babiesCount);
        }
        if (guestsCount == 0) {
            fieldTextVal.innerHTML = 'Сколько гостей';
        }
    };
};

module.exports = function (type) {

    if (type == 'guests') {
        dropdownCounts(type, 'adults');
        dropdownCounts(type, 'kids');
        dropdownCounts(type, 'babies');

        document.querySelector('#dropdown-' + type).style.width = "320px";
        document.querySelector('#dropdown__content-' + type).style.height = "157px";
        document.querySelector('#dropdown__field-text-' + type).style.width = (320 - 44) + "px";
    }

    if (type == 'rooms') {
        dropdownCounts(type, 'bedrooms');
        dropdownCounts(type, 'beds');
        dropdownCounts(type, 'bath');

        document.querySelector('#dropdown-' + type).style.width = "266px";
        document.querySelector('#dropdown__content-' + type).style.height = "119px";
        document.querySelector('#dropdown__field-text-' + type).style.width = (266 - 44) + "px";
    }

    let dropdownHoverFieldStyle = document.querySelector('#dropdown__content-' + type);
    let HoverField = document.querySelector('#dropdown__field-' + type);

    HoverField.addEventListener('mouseover', function (event) {
        dropdownHoverFieldStyle.classList.add('dropdown__content_expanded');
    });

    HoverField.addEventListener('mouseout', function (event) {
        dropdownHoverFieldStyle.classList.remove('dropdown__content_expanded');
    });

    dropdownHoverFieldStyle.addEventListener('mouseover', function (event) {
        HoverField.classList.add('dropdownHoverFieldStyle');
        dropdownHoverFieldStyle.classList.add('dropdown__content_expanded');
    });

    dropdownHoverFieldStyle.addEventListener('mouseout', function (event) {
        HoverField.classList.remove('dropdownHoverFieldStyle');
        dropdownHoverFieldStyle.classList.remove('dropdown__content_expanded');
    });
};