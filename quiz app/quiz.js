

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
 startButton.addEventListener('click',startGame)
 const questionContainerElement=document.getElementById('question-container')
 const questionElement = document.getElementById('question')
 const answerButtonElement=document.getElementById('answer-buttons')
 let shuffledQuestions, currentQuestionIndex

 nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
 })
 function startGame(){
            startButton.classList.add('hide')
            shuffledQuestions=question.sort(()=>Math.random()-.5)
            currentQuestionIndex=0
            questionContainerElement.classList.remove('hide')
            setNextQuestion()
}
function setNextQuestion(){
   resetState()
      showQuestion(shuffledQuestions[currentQuestionIndex])
     
}
function showQuestion(question){
       questionElement.innerText=question.question
       question.answer.forEach(answer => {
        const button =document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if(answer.correct){
           button.dataset.correct=answer.correct
        }
        button.addEventListener('click' ,selectAnswer)
        answerButtonElement.appendChild(button)
      })
}
function resetState(){
     nextButton.classList.add('hide')
     while(answerButtonElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild )
     }
}
function selectAnswer(e){
         const selectedButton=e.target
         const correct =selectedButton.dataset.correct
        setStatusClass(document.body,correct)
        Array.from(answerButtonElement.children).forEach(button=> {
            setStatusClass(button,button.dataset.correct)
        })
    

     if(shuffledQuestions.length> currentQuestionIndex+1){
        nextButton.classList.remove('hide')
     }else{
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
     }
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const question=[
    {
       question:'what is 2 + 56?',
       answer: [
        {  text:  '58',correct: true},
        {text:'22',correct: false},
         {text:'234',correct: false}
         ,
         {text:'256',correct: false}
       ]
    },
    {
        question: 'who is the prime minister of india?',
        answer:
        [
           { text: 'Narendra modi',correct:true},
           { text: 'Amit sah',correct:false},
           { text: 'Rajnath singh',correct:false},
           { text: 'Sanjay gandhi',correct:false},
        ]
    },
    {
        question:'what is 4*2?',
        answer: [
         {  text:  '4',correct: false},
         {text:'22',correct: false},
          {text:'234',correct: false}
          ,
          {text:'8',correct: true}
        ]
     },
]