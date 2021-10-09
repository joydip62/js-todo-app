// Caching the dom element
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const todoBtn = document.querySelector('.todo-button');
const todoInfo = document.querySelector('.todo-info');

// adding event listener into the button
todoBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // const li = document.createElement('li');
    // li.innerText = input.value;
    // ol.appendChild(li); 
    // input.value = '';

    
    // user inputgit 
    const userInput = todoInput.value;

    // check input field is empty
    if (userInput == 0) {
        alert('please give some todo');
    }else{
        // creating todo div 
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';

    // creating list
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerText = userInput;
    todoDiv.appendChild(li);

    // creating check button
    const check = document.createElement('button');
    check.className = 'check';
    check.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(check);

    // creating trush button
    const trush = document.createElement('button');
    trush.className = 'trash';
    trush.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trush);

    // append tododiv
    todoList.appendChild(todoDiv);
    }
    todoInput.value = '';  
    checkTodoInfo();
});


todoList.addEventListener('click', function(event){
    const ClickEl = event.target;
    
    if (ClickEl.className == 'check') {
        const todoDiv = ClickEl.parentNode;
        todoDiv.className += ' completed';
        // todoDiv.ClassList.add('complited');
        ClickEl.remove();
    }else if (ClickEl.className == 'trash') {
        const todoDiv = ClickEl.parentNode;
        todoDiv.className += ' drop-effect';
        // todoDiv.ClassList.add('complited');
        todoDiv.addEventListener('transitionend', function() {
            todoDiv.remove();
            checkTodoInfo();
        });
    }else if (ClickEl.className == 'edit') {
        const todoDiv = ClickEl.parentNode;
        console.log(todoDiv);
    }
});


function checkTodoInfo() {
    if (todoList.children.length == 0) {
        todoInfo.style.display = 'block';
    } else {
        todoInfo.style.display = 'none';
    }
}
checkTodoInfo();