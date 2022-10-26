let questions = [
    {
        "question": "Wer hat HTML erfunden?",    //strings
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3                       //integer
    },


    {
        "question": "Was ist H²O?",    //strings
        "answer_1": "Wasser",
        "answer_2": "Helium",
        "answer_3": "Sauerstoff",
        "answer_4": "Jod",
        "right_answer": 1                       //integer
    },


    {
        "question": "In welchem Land wohnen die meisten Menschen?",    //strings
        "answer_1": "China",
        "answer_2": "USA",
        "answer_3": "Russland",
        "answer_4": "Kenia",
        "right_answer": 1                       //integer
    },


    {
        "question": "Lichtwellen bewegen sich schneller als Schallwellen. Richtig oder falsch?",    //strings
        "answer_1": "Richtig",
        "answer_2": "Falsch",
        "right_answer": 1                       //integer
    },


    {
        "question": "Auf welchem Kontinent liegt die Wüste Sahara?",    //strings
        "answer_1": "Amerika",
        "answer_2": "Asien",
        "answer_3": "Afrika",
        "answer_4": "Europa",
        "right_answer": 3                       //integer
    },
    
];


//global variable to start with Question No.1 (0 ´cause array starts at 0, 1 = question No.2)
let currentQuestion = 0;


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;  //get Element by ID = length from Array / Amount of Questions
    
    showQuestion();
   
}


//function to show the current(aktuelle) Question
function showQuestion() {
    let question = questions[currentQuestion];      // definits a container wich includes the first question (oder halt die aktuelle)it´s like a new container. Question is the current Question like 0 is the first question in the JSON-Array.
    document.getElementById('questionText').innerHTML = `${question['question']}`;     
    document.getElementById('answer_1').innerHTML = `${question['answer_1']}`;      
    document.getElementById('answer_2').innerHTML = `${question['answer_2']}`;      
    document.getElementById('answer_3').innerHTML = `${question['answer_3']}`;      
    document.getElementById('answer_4').innerHTML = `${question['answer_4']}`;  
}                                              
