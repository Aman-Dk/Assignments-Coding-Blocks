const input=document.getElementById('inp');
const submit=document.getElementById('submit');
const list=document.getElementById('list');

submit.onclick=function(e){
    e.preventDefault();
    
    const todoText=input.value;
    const li=document.createElement('li');
    li.className = "list-group-item";
    if (submit.value != "Submit") {
        console.log("Hello");
  
        editItem.target.parentNode.childNodes[0].data
            = todoText;
  
        submit.value = "Submit";
        todoText = "";
  
        return false;
    }

    let newItem = input.value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        input.value = "";

    let deleteButton = document.createElement("button");
  
    deleteButton.className = 
        "btn-danger btn btn-sm float-right delete";
  
    deleteButton.appendChild(document.createTextNode("Delete"));
  
    let editButton = document.createElement("button");
  
    editButton.className = 
            "btn-success btn btn-sm float-right edit";
  
    editButton.appendChild(document.createTextNode("Edit"));

    li.innerText=todoText;
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    list.append(li); 
    
    list.addEventListener("click", removeItem);
    // li.onclick=function(e){
    //     e.target.remove();
    // }
    
    // input.value="";

}

function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you Sure?")) {
            let li = e.target.parentNode;
            list.removeChild(li);
            // document.getElementById("lblsuccess").innerHTML
            //     = "Text deleted successfully";
  
            // document.getElementById("lblsuccess")
            //             .style.display = "block";
  
            // setTimeout(function() {
            //     document.getElementById("lblsuccess")
            //             .style.display = "none";
            // }, 3000);
        }
    }
    if (e.target.classList.contains("edit")) {
        input.value =
            e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }
}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}