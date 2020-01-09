

var today = new Date();
var hz = new Date(2019, 5);

var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
var date1 = today.getMonth();

var months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
var days = [];

//date.getDay()

//console.log(today.getDay());

module.exports = function (type) {

    $( document ).ready(function() {
        
        var headerMonthView = function(){
            $(".calendar-header__month-year").html(months[today.getMonth()]+" "+today.getFullYear());
        };

        var dayOfMonthCount = function(){
            
            var d1 = new Date(today.getYear(), today.getMonth() + 1, 0);
            return d1.getDate();
        }

        var normalDate = function(){

            //console.log(d1.getDate());
            var day = today.getDate();
            if (day < 10) day = '0' + day;
            var month = today.getMonth() + 1;
            if (month < 10) month = '0' + month;
            return day+"."+month+"."+today.getFullYear();
        }

        var headerDateView = function(){
            $("#dropdown__field-text-calendar").html(normalDate());
        };

        headerDateView();
        headerMonthView();

        $( "#calendar-header__arrow-left" ).on( "click", function( event ) {
            
            today.setMonth(today.getMonth() - 1);
            headerMonthView();
            console.log(dayOfMonthCount());
          });
        
        $( "#calendar-header__arrow-right" ).on( "click", function( event ) {

            today.setMonth(today.getMonth() + 1);
            headerMonthView();
            console.log(dayOfMonthCount());
          });
     
    });
    
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
