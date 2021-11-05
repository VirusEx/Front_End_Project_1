(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    class CheckList {
        constructor(selector) {
            console.log('In CheckList constructor...');

            if (!selector) { throw new Error('No selector provided'); }

            this.$element = $(selector);
            if (this.$element.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }
        addRow(quiz) { 
            this.removeRow(quiz.username);
            var rowElement = new Row(quiz);
            this.$element.append(rowElement.$element);
        }

        removeRow(username) {
            this.$element
              .find('[value="' + username + '"]')
              .closest('[data-quiz="checkbox"]')
              .remove();
        }

        addClickHandler(fn) {
            this.$element.on('click', 'input', function (event) {
              var username = event.target.value;
              fn(username)
              .then(function() {
                this.removeRow(username);
              }.bind(this));
            }.bind(this));
          };
    }

    class Row {
        constructor(quiz) {
            console.log('In Row constructor...');

            var $div = $('<div></div>', {
                'data-quiz': 'checkbox',
                'class': 'checkbox'
              });

            var $label = $('<label></label>');

            var $checkbox = $('<input></input>', {
                type: 'checkbox',
                value: quiz.username
            });

            var description = quiz.username + ' is ';
            description += quiz.champion;

            $label.append($checkbox);
            $label.append(description);
            $div.append($label);

            this.$element = $div;
        }
    }
   
    App.CheckList = CheckList;
    window.App = App;
  })(window);