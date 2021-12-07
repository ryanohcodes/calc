function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}




let calcInput = '';
let display ='';
let store = '';
let storeOne = '';
let storeTwo = '';
let minusOne = '';
let total = 0;


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
const clear = document.querySelector("#clear");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
const minus = document.querySelector("#minus");

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


plus.addEventListener('click',(store)=>{
    store = box.textContent;
    storeOne = parseInt(store);
    wipe();
});

minus.addEventListener('click',(store)=>{
    store = box.textContent;
    minusOne = parseInt(store);
    wipe();
});

equal.addEventListener('click',()=>{
    storeTwo = box.textContent;
    storeTwo = parseInt(storeTwo);
    if (Boolean(storeOne) == true && Boolean(storeTwo) == true){
        total = add(storeOne,storeTwo);
    } else if (Boolean(minusOne) == true && Boolean(storeTwo) == true){
        total = sub(minusOne,storeTwo);
    }
    storeOne = '';
    storeTwo = '';
    minuaOne = '';
    
    box.textContent = total;
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


