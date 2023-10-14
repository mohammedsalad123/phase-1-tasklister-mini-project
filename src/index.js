document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
function submitListener() {
  const p = document.getElementById('create-task-form')
  p.addEventListener('submit',function(e){
    e.preventDefault()


  })
  
}


function handleTodo(todo){

  let p = document.createElement('p');
  let btn = document.createElement('button')
  document.addEventListener('click', deleteTodo)

  btn.textContent = 'Delete'

  p.textContent = `${todo} `;
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p);

}

function deleteTodo(e){
  e.target.parentNode.remove();
}