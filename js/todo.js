const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    //JSON.stringify로 감싸주면 Spring으로 변화함.
    //JSON.parse()안에 넣으면 배열이 된다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//btn을 통해서 삭제할 수 있는 기능
function deleteToDo(event){
    const list = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(list.id));
    list.remove();
}

//새로운 Todo 추가
function paintToDo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const lspan = document.createElement("span");
    lspan.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    //EventListener을 추가
    btn.addEventListener("click", deleteToDo);
    list.appendChild(lspan);
    list.appendChild(btn);
    toDoList.appendChild(list);
}

function handeleToDoSubmit(event){
    event.preventDefault();
    //현재 input의 value를 새로운 변수에 복사
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);    //localStorage에는 text만 저장가능
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handeleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    //JSON.parse()는 String을 array로 변경된다.
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // '=>'를 arrow function(화살표 함수)라고 한다.
    //parsedToDos.forEach((item) => console.log("this is the turn of", item));
    parsedToDos.forEach(paintToDo);
}

//array에서는 지우고 싶은 객체를 삭제가 아닌 제외하고 새로운 array를 생성한다.
