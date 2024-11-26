// SIRVE PARA ENCONTRAR LOS ELEMENTOS DEL HTML
const buttons = document.querySelectorAll('.btn');
const input = document.getElementById('input')
const output = document.getElementById('output')
const trash = document.getElementById('trash')
const equals = document.getElementById('equals')
const deletebtn = document.getElementById('delete')

// SIRVE PARA RECORRER UN ARRAY Y EJECUTAR FUNCIONES Y CLIKEAR BOTONES DE LA CALCULADORA

buttons.forEach(btn => {
    btn.addEventListener('click', () =>{
        let contain = btn.textContent;
        input.value += btn.textContent;
    })
})

// DETECCION DEL TECLADO

const keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "Enter", "Escape", "Backspace"]

document.addEventListener("keydown" , (e) => {
    keys.forEach(key => {
        if(key === e.key){
            if(key === "Enter"){
                equalConten();
            }
            else if(key ===  "Escape"){
                removecontent();
            }
            else if(key === "Backspace"){
                deleteChar();
            }
            else{
                input.value += key;
            }
        }
    })
})

// DISTINTAS FUNCIONES PARA LA CALCULADORA

trash.addEventListener('click', () =>{
    functionremovecontent();
} )
equals.addEventListener('click', () =>{
    equalConten();
} )
deletebtn.addEventListener('click', () =>{
    deleteChar();
} )

function deleteChar(){
    let value = input.value.slice(0, -1)
    input.value = value
}
function removecontent(){
    input.value = "";
    output.value = "";
}
function equalConten(){
    output.value = eval(input.value)
}   
