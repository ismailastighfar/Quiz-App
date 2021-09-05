const answers = ['C' , 'B' , 'A' , 'B'];

const form = document.querySelector('.form-quiz');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.Q1.value , form.Q2.value , form.Q3.value , form.Q4.value];
    userAnswers.forEach((answer,index) => {
        if (answer === answers[index]) 
            score += 25;
    });
    scrollTo(0,0);
    // const elm = document.querySelector('span');
    // elm.innerHTML = `${score}%`;
    result.classList.remove('d-none');
    
    // animate the score 
    let output = 0;
    const timer = setInterval(() => {
        const elm = document.querySelector('span');
        elm.innerHTML = `${output}%`;
        if (output === score)
            clearInterval(timer);
        else
            output++;
    },10);
});


 