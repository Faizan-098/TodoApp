// Declare Variables
const addTodoBtn=document.querySelector('#addTodoBtn');
const addTodoValue=document.querySelector('#addTodoValue');
let todoItemsContainer=document.querySelector('#Todo-Items-container');

let todoItemsArr=JSON.parse(localStorage.getItem('todoItems'))? JSON.parse(localStorage.getItem('todoItems')):[] ;

console.log(todoItemsArr);

// Add Todo  Function
const addTodoFunc=(item)=>{
  let itemValue=item.replaceAll(' ','')
  if(itemValue==''){
  alert('Invalid Todo')
  return
}else{
  todoItemsArr=[...todoItemsArr,itemValue];
  localStorage.setItem('todoItems',JSON.stringify(todoItemsArr));
addTodoValue.value='';
// display Items

displayTodoItems(todoItemsArr);
}

}
// Add Todo
addTodoBtn.addEventListener('click',()=>addTodoFunc(addTodoValue.value));
addTodoValue.addEventListener('keydown',(e)=>{
   if(e.key=="Enter"){
    addTodoFunc(addTodoValue.value)
   };
}

);
// Display Todo Items
const displayTodoItems=()=>{
let finalItems=todoItemsArr.map((item,index)=>{
return`<div class="Todo-Item" id=${index}>
        <input id="inp" type="text" disabled value="${item}" />
     <div class="Edit-Delete-Btn">
        <button class="Yellow-Clr" onclick=editItemFun(${index})>Edit</button>
        <button class="Red-Clr" onclick=deleteItemFun(${index})>Delete</button>
    </div>
  </div>`;


})
todoItemsContainer.innerHTML=finalItems.join('');
}
displayTodoItems();
// Delete function
const deleteItemFun=(index)=>{
todoItemsArr=todoItemsArr.filter((item,id)=>id!==index);
  localStorage.setItem('todoItems',JSON.stringify(todoItemsArr));
displayTodoItems();
}
// Edit function
const editItemFun=(index)=>{
let editValue=prompt('Enter Edit Value');
todoItemsArr[index]=editValue;
  localStorage.setItem('todoItems',JSON.stringify(todoItemsArr));
displayTodoItems();
}
