const button = document.querySelector('button');
const inputField = document.querySelector('textarea');
const todoList = document.querySelector('.todo-list');
const emptyMessage = document.querySelector('.empty-list-message');
const deleteActivities = document.querySelector('.xBtn');

let activities = [];

showContent();

button.addEventListener('click',function(){
    const newActivity = inputField.value.trim();

    if(newActivity.length > 0){
        activities.push(newActivity);
        showContent();
        inputField.value = '';
        inputField.style.height = "auto";
    }
    
});

deleteActivities.addEventListener('click',function(){
    const conferma = confirm("Sei sicuro di voler cancellare tutti gli elementi della lista?");
    if (conferma) {
        activities = [];
        showContent();
    }
});




function showContent(){
    todoList.innerText = '';
    emptyMessage.innerText = '';

    if (activities.length >= 1){
        activities.forEach(function(activity){
            todoList.innerHTML += 
            `<li class="todo-item">
                    <div class="todo-check"><img src="images/check.svg"></div>
                    <p class="todo-text">${activity}</p>
                </li>`;
        });

        const checks = document.querySelectorAll('.todo-check');
        const texts = document.querySelectorAll('.todo-text');

        checks.forEach(function(check, index){
            check.addEventListener('click', function(){
                activities.splice(index, 1);
                showContent();
            });
            check.addEventListener('mouseover', function() {
                check.textContent = '✖';
            });
            
            check.addEventListener('mouseout', function() {
                check.innerHTML = '<img src="images/check.svg">';
            });    
        });

        texts.forEach(function (text, index) {
            text.addEventListener('dblclick', function () {
                text.contentEditable = "true";
                text.focus();

                text.addEventListener('blur', function () {
                    text.contentEditable = "false";
                    activities[index] = text.innerText.trim();
                });
            });
        });
    }else{
        emptyMessage.innerText = 'Sembra che non ci siano attività';
    }
}