function addTask()
{
   var taskInput= document.getElementById("taskInput").value
   if(taskInput=="")
    {
        alert("Please enter the Task!")
        return false
    }

    var taskList = document.getElementById("taskList")
    var listItem = document.createElement('li')
    listItem.innerText = taskInput


    var buttonContainer = document.createElement('div')
    buttonContainer.className="task-button"

    var deleteButton = document.createElement('button')
    deleteButton.innerText="Delete"
    deleteButton.onclick=function(){
        taskList.removeChild(listItem)
    }

    var completeButton = document.createElement('button')
    completeButton.innerText="Complete"
    completeButton.onclick=function(){
      listItem.classList.toggle('Completed')
    }

    listItem.appendChild(buttonContainer)
    buttonContainer.appendChild(deleteButton)
    buttonContainer.appendChild(completeButton)
    taskList.appendChild(listItem)
    
    taskInput.value = ""
}

