let number = document.getElementById("number");
let addButton = document.getElementById("add");
let removeButton = document.getElementById("remove");
let parentLi = document.getElementById("parentli");
let li = document.querySelector("list-group-item");
addButton.onclick = function () {
    parentLi.innerHTML = " "
    let numberLi = number.value;
    for (let i = 1; i <= numberLi; i++) {

        let li = document.createElement("li");
        li.className = "list-group-item"
        li.innerText = i;
       

            li.onclick=function(){
                    li.classList.toggle("liColor")
            }
            parentLi.append(li)
    }
    number.value = ""
 

}
removeButton.onclick=function () {


    let li= document.querySelector(".liColor");
    li.remove()

for(let removeLi of parentLi.children)
{    
    
    if((parentLi.children=removeLi.classList.contains("liColor"))){
 
           removeLi.remove()
        

         
    }

  
    
    }  
        
    }