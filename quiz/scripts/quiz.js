(function (window) {
    'use strict';
    var App = window.App || {};


    class Quiz {
        constructor(quizId, db) {
            console.log('running the Quiz constructor.');
            this.quiz = quizId;
            this.db = db;
        }

        createQuiz(quiz){
            console.log('Adding quiz for ' + quiz.username);
            return this.db.add(quiz.username, quiz);
        }

        deleteQuiz(quizId){
            console.log('Deleting quiz for ' + quizId);
            return this.db.remove(quizId);
        }
        printOrders(printFn) {
            return this.db.getAll()
            .then(function (quiz) {
                var customerIdArray = Object.keys(quiz);
                customerIdArray.forEach(function(id) { 
                console.log(quiz[id]);
                if (printFn) {
                    printFn(quiz[id]);
                }
                }.bind(this));
            }.bind(this));
        }
    }
    App.Quiz = Quiz;
    window.App = App;
    
})(window);
