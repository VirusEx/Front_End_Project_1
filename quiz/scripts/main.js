(function (window){
    'use strict';
    var FORM_SELECTOR = '[data-quiz="form"]';
    var CHECKLIST_SELECTOR = '[data-quiz="checklist"]';
    var FIREBASE_SERVER_URL = 'http://leaguecharacters.firebaseapp.com';
    var App = window.App;
    var Quiz = App.Quiz;
    var firebasedatastore = App.firebasedatastore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    var AssignChampion = App.AssignChampion;
    var datastore = new firebasedatastore(FIREBASE_SERVER_URL);

    var quiz = new Quiz('test', datastore);
    window.quiz = quiz;
    
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(quiz.deleteQuiz.bind(quiz));

    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function(data) {
        return quiz.createQuiz.call(quiz, data)
            .then(function() {
            //checkList.addRow.call(checkList, data);
                checkList.addRow.call(checkList, data);
        },
        function(){
            alert('Server unreachable. Try again later.');
        });
        
    });

    quiz.printOrders(checkList.addRow.bind(checkList));
    
    console.log(formHandler);
})(window);