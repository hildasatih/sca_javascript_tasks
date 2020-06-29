
const display = document.querySelector('.display');

const one = document.querySelector('.numb1');
const two = document.querySelector('.numb2');
const three = document.querySelector('.numb3');
const four = document.querySelector('.numb4');
const five = document.querySelector('.numb5');
const six = document.querySelector('.numb6');
const seven = document.querySelector('.numb7');
const eight = document.querySelector('.numb8');
const nine = document.querySelector('.numb9');
const zero = document.querySelector('.zero');

const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const del = document.querySelector('.del');
const dot = document.querySelector('.dot');
const equals = document.querySelector('.equals');


one.addEventListener('click',()=>{
    display.value += one.value;
});

two.addEventListener('click',()=>{
    display.value += two.value;
});

three.addEventListener('click',()=>{
    display.value += three.value;
});

four.addEventListener('click',()=>{
    display.value += four.value;
});

five.addEventListener('click',()=>{
    display.value += five.value;
});

six.addEventListener('click',()=>{
    display.value += six.value;
});

seven.addEventListener('click',()=>{
    display.value += seven.value;
});

eight.addEventListener('click',()=>{
    display.value +=eight.value;
});

nine.addEventListener('click',()=>{
    display.value += nine.value;
});

zero.addEventListener('click',()=>{
    display.value += zero.value;
});

dot.addEventListener('click',()=>{
    display.value += dot.value;
});

del.addEventListener('click',()=>{
    display.value ='';
});


add.addEventListener('click',()=>{
    display.value += add.value;
});

minus.addEventListener('click',()=>{
    display.value += minus.value;
});

multiply.addEventListener('click',()=>{
    display.value += multiply.value;
});

divide.addEventListener('click',()=>{
    display.value += divide.value;
});

equals.addEventListener('click',()=>{
    display.value = eval(display.value);
});



function addZero(num1){
    display.value = display.value + num1;
}
