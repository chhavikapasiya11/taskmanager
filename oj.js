 let input = document.getElementById("inputo"); 
let listcontainer = document.getElementById("list"); 

function additem() {
    if (input.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "close";  
        li.appendChild(span);
    }
    input.value = ''; 
    savedata();
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata(); 
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); 
        savedata();
    }
}, false);

function savedata()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}
function show()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
show();