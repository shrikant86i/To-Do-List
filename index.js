var taks = document.querySelector("#task");
var list = document.querySelector("#list");
function add(){
    if(taks.value===''){
        alert('enter today taks');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=taks.value;
        list.appendChild(li);
        taks.value='';
    }
}

