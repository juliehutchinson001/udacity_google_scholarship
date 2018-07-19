/*
 * Add the code to open the AJAX request using the
 * GET method and pointing to the 'footer.html' file.
 * Then, send the ajax request.
 *
 * You can break the AJAX programming process into four steps.
 * First, create an XMLHTTP Request object.
 *        This step tells the web browser to get ready.
 *        The web browser needs to create an object that has
 *        all the methods you'll need to send and receive data.
 * Two, define a callback function.
 *      This is the programming you want to run when the server returns its response.
 *      The callback is where you process the returned
 *      data and update the HTML on the page.
 * Third, open a request.
 *        you give the browser two pieces of information here,
 *        the method the browser will use
 *        to send the request, usually either get or
 *        post, and the URL where the request is sent.
 * Four, send the request.
 *       The last step is finally sending off the request.
 *       The previous three steps gave the web browser all the information it
 *       needs so we can finally send off the request to the web server.
*/

let request = new XMLHttpRequest();

request.onreadystatechange = () => {
    if (request.readyState === 4) {
        let content = document.getElementById("footer");

        content.innerHTML = request.responseText;
    }
}

request.open('GET', "footer.html");
request.send();




/*
const deleteTaskFromDOM = task => task.remove();

const deleteTaskFromAsana = taskId => {
  const token = getToken();
  const url = `https://app.asana.com/api/1.0/tasks/${taskId}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data.status);
    })
    .catch(function(error) {
      console.log("error found, fix it and try again");
    });
};

const addDeleteEvent = delButton => {
  delButton.addEventListener("click", event => {
    const taskToDel = event.target.parentNode;
    deleteTaskFromDOM(taskToDel);
    deleteTaskFromAsana(taskToDel.id);
  });
};

const editTaskInApi = (taskId, newTaskName) => {
  let newObjectTask = { data: { name: newTaskName } };
  const token = getToken();
  const url = `https://app.asana.com/api/1.0/tasks/${taskId}`;

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(newObjectTask),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(function(error) {
      console.log("error found, fix it and try again");
    })
    .then(response => console.log("Success:", response));
};

const editTaskInDOM = taskId => {
  const taskToEdit = document.getElementById(taskId);

  const inputOfTask = document.createElement("input");

  inputOfTask.setAttribute("placeholder", "new name of task");

  taskToEdit.appendChild(inputOfTask);

  inputOfTask.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      const newTaskName = inputOfTask.value;
      taskToEdit.innerHTML = newTaskName;
      inputOfTask.style.display = "none";
      editTaskInApi(taskId, taskToEdit.innerHTML);
    }
  });
};

const insertTaskToDOM = (asanaTask, taskId) => {
  const ulTasks = document.getElementById("task-asana");

  // Create elements
  const oneLiTask = document.createElement("li");
  const deleteButton = document.createElement("button");

  // Set attributes to elements
  oneLiTask.setAttribute("id", taskId);
  deleteButton.classList.add("delete-task");

  // Appending text to elements
  oneLiTask.appendChild(document.createTextNode(asanaTask));
  deleteButton.appendChild(document.createTextNode("Delete"));

  // Appending elements to parents in the DOM
  ulTasks.appendChild(oneLiTask);
  oneLiTask.appendChild(deleteButton);

  addDeleteEvent(deleteButton);

  oneLiTask.addEventListener("click", () => {
    editTaskInDOM(taskId);
    editTaskInApi(taskId);
  });
};

const parseApiResponse = data => {
  for (let index in data) {
    index = parseInt(index, 10);
    const taskName = data[index].name;
    const taskId = data[index].id;
    // insertToDOM
    insertTaskToDOM(taskName, taskId);
  }
};

const getApiTasks = () => {
  const token = getToken();
  const url =
    "https://app.asana.com/api/1.0/projects/670284833006984/tasks?opt_fields=name";
  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(resp => resp.json())
    .then(data => {
      data.data.length ? parseApiResponse(data.data) : alert("Sorry no tasks");
    })
    .catch(function(error) {
      console.log("error found, fix it and try again");
    });
};

const sendNewTaskToApi = newTask => {
  let newObjectTask = { data: { name: newTask } };
  // let newObjectTask = { data: { name: 'Hello, world!' } };

  const token = getToken();
  const url = "https://app.asana.com/api/1.0/tasks?projects=670284833006984";

  fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(newObjectTask),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(function(error) {
      console.log("error found, fix it and try again");
    })
    .then(response => console.log("Success:", response));
};

const getToken = () => "0/eb7c3fec7263aaad65c6f6553537fa66";

const main = () => {
  const newTaskBtn = document.getElementById("create-new-task");
  const inputNewTask = document.getElementById("input-new-task");
  newTaskBtn.addEventListener("click", () => {
    const inputText = inputNewTask.value;

    if (inputText === " ") {
      alert("enter a valid task please!");
    } else {
      sendNewTaskToApi(inputText);
    }
  });

  const allTaskBtn = document.getElementById("get-all-tasks");
  allTaskBtn.addEventListener("click", getApiTasks);
};

main();

*/