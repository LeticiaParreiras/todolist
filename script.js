let checkbox = document.querySelectorAll(".check-item")
const list = document.getElementById('list')
const text = document.getElementById('text')

function check(id){
    let p = document.getElementById(id)
    if (p.style.textDecoration === 'line-through') {
        p.style.textDecoration = 'none'; // Remove o risco
    } else {
        p.style.textDecoration = 'line-through';
    }
}

text.addEventListener('keyup', function(e){
    var key = e.key;
    if (key == "Enter") { // codigo da tecla enter
        add() ///// Ao pressionar botão enter, acionar função adicionar()
    }
  })

function add (){
    if(text.value.length == 0){
        alert("Você precisa escrever algo!")
    }else{
    let li = document.createElement('li')
    li.innerHTML  = `<input type="checkbox" name="checkbox" >${text.value} <span>X</span>`
    list.appendChild(li)
    }
    text.value = ""
    text.focus()
    savedata()
}

list.addEventListener("change", function (e) {
    if (e.target.type === "checkbox") { // Verifica se o elemento alterado é um checkbox
        e.target.parentElement.classList.toggle("check"); // Adiciona ou remove a classe "check" no <li>
    }
},false);

list.addEventListener("click", function(e) {
     if (e.target.tagName === "SPAN") {
        if(window.confirm("Certeza que deletar tarefa?")){
        e.target.parentElement.remove(); // Remove o item pai (<li>) ao clicar no <span>
        savedata()}
    }
},false);
function deleteall(){
    if(window.confirm("Certeza que deletar tarefa?")){
        list.innerHTML=""
    }
    savedata()
}
function savedata(){
    localStorage.setItem("data",list.innerHTML)
}
function showtask(){
    list.innerHTML = localStorage.getItem("data")
}
showtask();