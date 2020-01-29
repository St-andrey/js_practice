const newTask = document.getElementById('inputTask');
const taskList = [];

newTask.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.keyCode === '13') {
        taskList.push(newTask.value);
        newTask.value = '';
        updateList();
    }
});

const ulElement = document.getElementById('taskList');

function updateList() {
    ulElement.innerHTML = '';
    for (const newTask of taskList) {
        const liElement = document.createElement('li');
        liElement.className = 'taskItem';
        ulElement.append(liElement);
        
        const pElement = document.createElement('p');
        pElement.className = 'taskText';
        liElement.append(pElement);
        liElement.innerText = newTask;
    }
}