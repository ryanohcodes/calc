function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function multi(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(){
    storeTwo = box.textContent;
    storeTwo = parseFloat(storeTwo);
    if (Boolean(plusOne) == true && Boolean(storeTwo) == true){
        total = add(plusOne,storeTwo);
    } else if (Boolean(minusOne) == true && Boolean(storeTwo) == true){
        total = sub(minusOne,storeTwo);
    } else if (Boolean(mulOne) == true && Boolean(storeTwo) == true){
        total = multi(mulOne,storeTwo);
    } else if (Boolean(diviOne) == true && Boolean(storeTwo) == true){
        total = divide(diviOne,storeTwo);
    }   

    if (storeTwo == 0){
        plusOne = '';
        storeTwo = '';
        minusOne = '';
        mulOne = '';
        diviOne = '';
        box.textContent = 'Please dont divide by zer0. Please hit clear.';
        return ;
    }

    plusOne = '';
    storeTwo = '';
    minusOne = '';
    mulOne = '';
    diviOne = '';
    
    box.textContent = total;
}

function equalEquivalent (){
    if (Boolean(plusOne) == true || (Boolean(minusOne) == true) || (Boolean(mulOne) == true) || (Boolean(diviOne) == true)){
        operate();
    }
}

let calcInput = '';
let display ='';
let store = '';
let plusOne = '';
let storeTwo = '';
let minusOne = '';
let mulOne = '';
let diviOne = '';
let total = 0;
let error = '';
let calcText ='';


const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const clear = document.querySelector("#clear");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
const minus = document.querySelector("#minus");
const mul = document.querySelector("#mul");
const divi = document.querySelector("#divi");

function extension(){
    if (box.textContent.length == 0){
        box.textContent = calcInput;
    } else {
        box.textContent = box.textContent + calcInput;
    };
};

function wipe(){
    box.textContent= '';
};

dot.addEventListener('click', (store)=>{
    calcInput = dot.textContent;
    calcText = box.textContent;
    for (let i = 0; i < calcText.length; i++){
        if (calcText[i] == '.'){
            return ;
        }
    }
    extension();
});


plus.addEventListener('click',(store)=>{
    equalEquivalent ();
    store = box.textContent;
    plusOne = parseFloat(store);
    wipe();
});

minus.addEventListener('click',(store)=>{
    equalEquivalent();
    store = box.textContent;
    minusOne = parseFloat(store);
    wipe();
});

mul.addEventListener('click',(store)=>{
    equalEquivalent();
    store = box.textContent;
    mulOne = parseFloat(store);
    wipe();
});

divi.addEventListener('click', (store)=>{
    equalEquivalent();
    store=box.textContent;
    diviOne = parseFloat(store);
    wipe();
})

equal.addEventListener('click',()=>{
    operate();
});

clear.addEventListener('click', ()=>{
    wipe();
});

one.addEventListener('click', ()=>{
    calcInput= one.textContent;
    extension();
});

two.addEventListener('click', ()=>{
    calcInput= two.textContent;
    extension();
});

three.addEventListener('click', ()=>{
    calcInput= three.textContent;
    extension();
});

four.addEventListener('click', ()=>{
    calcInput= four.textContent;
    extension();
});

five.addEventListener('click', ()=>{
    calcInput= five.textContent;
    extension();
});

six.addEventListener('click', ()=>{
    calcInput= six.textContent;
    extension();
});

seven.addEventListener('click', ()=>{
    calcInput= seven.textContent;
    extension();
});

eight.addEventListener('click', ()=>{
    calcInput= eight.textContent;
    extension();
});

nine.addEventListener('click', ()=>{
    calcInput= nine.textContent;
    extension();
});

zero.addEventListener('click', ()=>{
    calcInput= zero.textContent;
    extension();
});


