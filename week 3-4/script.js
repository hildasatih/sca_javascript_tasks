
const list = [];
const item = document.querySelector('.item');
const btn = document.querySelector('.btn');
const todolist = document.querySelector('.todolists');
const del = document.querySelector('.del');

const search = document.querySelector('.search input');



btn.addEventListener('click', ()=>{
    list.push(item.value);
    item.value ="";
    display()
    
 
    });

    function display(){
        todolist.innerHTML="";
        list.forEach((n,d)=>{
            todolist.innerHTML += "<li>"+n+"<a onclick='edit("+d+")'>Eidt</a> <a onclick='remove("+d+")'>Delete</a><a onclick='("+d+")'>Search</a></li>"
        })
    };



function remove(d){
    list.splice(d,1)
    display()
}

function edit(d){
    let ni = prompt();
    list.splice(d,1,ni);
    display()
}

const findTodos =(find)=>{
    Array.from(todolist.children)
    .filter((todo) => {
       return !todo.textContent.includes(find)
    .forEach((todo)=>{
        todo.classList.add('filtered');
    })
       
    })
};

 search.addEventListener('keyup', ()=>{
     const find = search.value.trim();
     findTodos(find);
 })