(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    var result = "";
    var Champion = '';

    class FormHandler {
        constructor(selector) {
            console.log('In FormHandler constructor...');

            if (!selector) { throw new Error('No selector provided'); }

            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }

        addSubmitHandler(fn) {
            console.log('Setting submit handler for form');
            // TODO: 
            this.$formElement.on('submit', function (event) {
                event.preventDefault();

                // var data = $(this).serializeArray();
                var data = {};
                var data2 = {};
                $(this).serializeArray().forEach(function (item) { 
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                    if (item.name != 'username'){
                        result += item.value;
                    }
                });
                switch(result){
                    case '00000':
                        Champion = 'Garen';
                        break;
                    case '00001':
                        Champion = 'Master Yi';
                        break;
                    case '00010':
                        Champion = 'Urgot';
                        break;
                    case '00011':
                        Champion = 'Akshan';
                        break;
                    case '00100':
                        Champion = 'Skarner';
                        break;
                    case '00101':
                        Champion = 'Fizz';
                        break;
                    case '00110':
                        Champion = 'Malphite';
                        break;
                    case '00111':
                        Champion = 'Velkoz';
                        break;
                    case '01000':
                        Champion = 'Rammus';
                        break;
                    case '01001':
                        Champion = 'Zed';
                        break;
                    case '01010':
                        Champion = 'Nidalee';
                        break;
                    case '01011':
                        Champion = 'Vayne'
                        break;
                    case '01100':
                        Champion = 'Singed';
                        break;
                    case '01101':
                        Champion = 'Aurlion Sol'
                        break;
                    case '01110':
                        Champion = 'Ryze';
                        break;
                    case '01111':
                        Champion = 'Teemo';
                        break;
                    case '10000':
                        Champion = 'Udyr';
                        break;
                    case '10001':
                        Champion = 'Sett';
                        break;
                    case '10010':
                        Champion = 'Graves';
                        break;
                    case '10011':
                        Champion = 'Quinn';
                        break;
                    case '10100':
                        Champion = 'Cho Gath';
                        break;
                    case '10101':
                        Champion = 'Kassadin';
                        break;
                    case '10110':
                        Champion = 'Kennen';
                        break;
                    case '10111':
                        Champion = 'KogMaw';
                        break;
                    case '11000':
                        Champion = 'Alistar';
                        break;
                    case '11001':
                        Champion = 'Shaco';
                        break;
                    case '11010':
                        Champion = 'Rakan';
                        break;
                    case '11011':
                        Champion = 'Kindred';
                        break;
                    case '11100':
                        Champion = 'Blitzcrank';
                        break;
                    case '11101':
                        Champion = 'Braum';
                        break;
                    case '11110':
                        Champion = 'MaoKai';
                        break;
                    case '11111':
                        Champion = 'Janna';
                        break;
                }

                console.log(result);
                console.log('Champion in formhandler: ' + Champion);
                data2['username']=data['username'];
                data2['champion']=Champion;
                console.log(data2);
                fn(data2)    // truck createOrder is currently fn
                .then(function () {
                    this.reset();
                    this.elements[0].focus();
                    result='';
                }.bind(this));         
            });
            
        }

        addInputHandler(fn) {
            console.log('Setting input handler for form');
            this.$formElement.on('input', '[name="name"]', function (event) {
                // Event handler code will go here
                var name = event.target.value;
                // console.log(fn(emailAddress));
                var message = '';
                if (fn(name)) {
                    event.target.setCustomValidity('');
                } else {
                    message = name + ' is not an authorized name!'
                    event.target.setCustomValidity(message);
                }
            });
        }
    }

   
    App.FormHandler = FormHandler;
    window.App = App;
  })(window);