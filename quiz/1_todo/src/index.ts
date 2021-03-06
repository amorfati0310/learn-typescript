// no Implicty Any 고치기 
// 
interface TodoItem {
  id: number;
  title: string;
  done: boolean;
}
let todoItems: Array<TodoItem>;


//  {id: number, title: string, done: boolean}  vs type vs interface 
// 우선 객체 안에 property 로 type 정의 하는 방식은 중복되는 경우 verbose 하게 다 적어줘야 하는 점이 아쉬움 여러번 쓰인다 하면 
// 우선 Type or Interface로 

// Type과 Interface의 차이는 ... 
// union이나 customType 할 수 있는 차이 있는데 많은 차이는 없는 걸로 안다. 
// 나머지는 공부해서 채워 넣을 것 


// api
function fetchTodoItems():Array<TodoItem> {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: TodoItem) {
  todoItems.push(todo);
}

function deleteTodo(index: number) {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: TodoItem) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() {
  return todoItems[0];
}

function showCompleted(): Array<TodoItem> {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(todos: [TodoItem, TodoItem]): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  todos.forEach(todo => {
    addTodo(todo)
  })
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
