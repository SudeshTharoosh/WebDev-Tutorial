let button = document.getElementById("next");
let submit = document.getElementById("submit-button");
let finish_b = document.getElementById("finish");

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function generateQuestion (){
    finish_b.style.display = 'none';
    submit.disabled = false;
    let op1 = randomNum(0, 100);
    let op2 = randomNum(1, 100);
    let index = Math.floor(Math.random() * (4) ) + 0;
    const operators = ["*", "/", "+", "-"];
    let question = document.getElementById("question1");
    let eqnString = `${op1} ${operators[index]} ${op2}`
    question.innerHTML = eqnString;
    button.style.display = 'none'; // hides the "next Question" button 
    return question.innerHTML;

}

function mark(eqnString) {
    let vals = eqnString.split(" ");
    let answer = eval(vals);
    let givenAns = document.getElementById("answer").value; 
    console.log(answer);
    console.log(givenAns);
    if (parseFloat(document.getElementById("answer").value) === parseFloat(answer)){
        console.log("correct");
        return true;
    } else {
        console.log("Incorrect");
        return false;
}
}

function eval(valArray){
    switch(valArray[1]){
        case "+":
            return parseInt(valArray[0]) + parseInt(valArray[2]);
        case "-":
            return valArray[0] - valArray[2];
        case "*":
            return valArray[0] * valArray[2];
        case "/":
            return (valArray[0] / valArray[2]).toFixed(2);
    }
}


let count = 1;
let eqnStrign = generateQuestion();
const q_array = [];

function onButtonPress(){
    document.getElementById("q_comment").innerHTML = ``;
    if(document.getElementById("answer").value == ""){
        alert("Please answer current question to proceed");
    } else{
        eqnStrign = generateQuestion();
        document.getElementById("answer").value = '';
        count++;
        document.getElementById("q_title").innerHTML = `Question ${count}`;
        if (count == 10){
            button.disabled = true;
        }
    }
    
}

let summary_div = document.getElementById("summary");
let question_list = document.createElement("ul");

function summary(questions, input_array){
    summary_div.innerHTML = `<span id="score"><br><br><b><u>Score Summary</u><b></span>`;
    for(let i = 0; i<questions.length; i++){
        let list = document.createElement("li");
        list.style.padding = "10px";
        list.style.fontWeight = "bold";
        let question_parts = questions[i].split(" ");
        if(question_parts[3] == "1"){
            list.innerHTML = `Question ${i + 1}: ${question_parts[0]} ${question_parts[1]} ${question_parts[2]} = ${input_array[i]}. &#x2611;`;
            list.style.color = "#3C896D";
        } else {
            list.innerHTML = `Question ${i + 1}: ${question_parts[0]} ${question_parts[1]} ${question_parts[2]} = ${input_array[i]}. &#10539; The correct answer is ${eval(question_parts)}`;
            list.style.color = "#FE4A49";
        }
        question_list.append(list);
    }
    summary_div.append(question_list)
}

const inputs = [];

function onSubmitPress(){
    if(document.getElementById("answer").value == ""){
        alert("Enter answer to proceed");
    }else{
        if(mark(eqnStrign)){
           q_array.push(eqnStrign + " 1");
            document.getElementById("q_comment").innerHTML = `&#x2611; Your answer was correct`;
            document.getElementById("q_comment").style.color = "#3C896D";
            submit.disabled = true;
        } else{
            q_array.push(eqnStrign + " 0");
            document.getElementById("q_comment").innerHTML = `&#10539; Your answer was incorrect. The answer was ${eval(eqnStrign.split(" "))}`
            document.getElementById("q_comment").style.color = "#FE4A49";
            submit.disabled = true;
        }
        inputs.push(document.getElementById("answer").value)
        if (q_array.length == 10){
            submit.style.display = "none";
            button.style.display = "none";
            finish_b.style.display = "inline";
        } else{
            button.style.display="inline"; // when the submit button is pressed the button will show
        }
    }

}

finish_b.addEventListener("click", () => {
    summary(q_array, inputs)
    finish_b.disabled = true;
});

button.addEventListener("click", () =>{
    onButtonPress();
    if (count == 11){
        document.getElementById("next").disabled = false;    
    }
});

submit.addEventListener("click", onSubmitPress);

console.log("Hello world");


