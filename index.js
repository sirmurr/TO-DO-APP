console.log('My code is running so so so well');

// stores content of to-do list
let myList = ["item1", "item2", "item3"];

function addToList(){
  //get values of both inputs in form
  const newItemText = document.getElementById("item_text").value;
  const newItemPriority = document.getElementById("item_priority").value;

  //new object of values
  const newItem = {
    text: newItemText,
    priority: newItemPriority
  }

  myList.push(newItem);


  //clear form inputs
  document.getElementById('item_text').value = '';
  document.getElementById('item_priority').selectedIndex = 0;

  displayToDoList();
  console.log(myList);
}

function displayToDoList(){
  //create new ul
  let ul = document.getElementById('to-do-list');
  //for length of list, fill ul with li's (eventually update to forEach, currently not using priority portion of object)
  for (let i = 0; i < myList.length; i++){
    let li = document.createElement('li');
    li.innerHTML = myList[i].item_text;

    ul.appendChild(li);
  }



}


addToList.call();
//myList.forEach()


//previous contents of addToList
  //let ul = document.getElementById("toDoList");
  //let li = document.createElement("li");
  //li.appendChild(document.createTextNode("New Test Item"))
  //ul.appendChild(li);