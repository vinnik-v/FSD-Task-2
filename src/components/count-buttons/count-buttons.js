var guestsCount = 0;
var babiesCount = 0;

module.exports = function (val_id) {

    const elem_id = '#dropdown__' + val_id + '-count';

    let defVal = document.querySelector(elem_id);
    let fieldTextVal = document.querySelector('.dropdown__field-text');

    let value = 0;

    defVal.innerHTML = value;

    let plus = document.querySelector(elem_id + '-plus');
    let minus = document.querySelector(elem_id + '-minus');

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
            defVal.innerHTML = value;
        }
        if (value > 0) {
            minus.classList.remove('dropdown__content-btns-rectgl_light');
        }
        textFieldRender(fieldTextVal, guestsCount, babiesCount);
        //console.log(babiesCount);
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
            defVal.innerHTML = value;
        }
        if (value == 0) {
            minus.classList.add('dropdown__content-btns-rectgl_light');
        }
        textFieldRender(fieldTextVal, guestsCount, babiesCount);
        //console.log(babiesCount);
    });

    let textFieldRender = function (fieldTextVal, guestsCount, babiesCount) {

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
        if (guestsCount == 0){
            fieldTextVal.innerHTML = 'Сколько гостей';
        }
    };
}

//console.log(globalValCount);