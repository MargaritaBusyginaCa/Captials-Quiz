const quizData = [
    {
        question: 'What is the capital of the US?',
        a:'New York',
        b:'Washington',
        c:'Los-Angeles',
        d:'Sydney',
        correct: 'b'
    },{
        question :'What is the capital of Canada?',
        a:'Toronto',
        b:'Vancouver',
        c:'Ottawa',
        d:'Sydney',
        correct: 'c'
    },{
        question:'What is the capital of Norway?',
        a:'Oslo',
        b:'Bergen',
        c:'Ottawa',
        d:'Tromso',
        correct: 'a'
    },{
        question:'What is the capital of Russia?',
        a:'Moscow',
        b:'St-Petersburg',
        c:'Volgograd',
        d:'Kazan',
        correct: 'a'
    },{
        question:'What is the capital of Costa Rica?',
        a:'Tripoli',
        b:'Mexico City',
        c:'Tehran',
        d:'San Jose',
        correct: 'd'
    }
]
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
a_text = document.getElementById('a_text');
b_text = document.getElementById('b_text');
c_text = document.getElementById('c_text');
d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz =0 ;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected(){
    //TODO: querySelector
   

    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
          answer = answerEl.id;
        }
    });
   return answer;
}

function deselectAnswers(){
   answerEls.forEach((answerEl) => {
       answerEl.checked=false;
   })
}


submitBtn.addEventListener('click', () =>{
    
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            console.log("Correct!");
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>Your score is ${score} / ${quizData.length}</h2>
                              <button onClick=location.reload()>Reload</button>`;
        }
    }
    
});