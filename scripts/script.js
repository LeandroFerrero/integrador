
let btnResumen = document.getElementById("resumen");
let btnBorrar = document.getElementById("borrar");
var precio = 200;
var descuento =[0.2, 0.5,0.85];

function calcular(){
  let cant = parseInt(document.getElementById("cantidad").value);
  let cat = parseInt(document.getElementById("categoria").value);
  if(Number.isInteger(cant) && cant !==0){
    precioDescuento = precio * descuento[cat];
    return cant * precioDescuento;
  } else {
    alert("Debe ingresar una cantidad valida y distinta de 0")
    return 0
  }
}



btnResumen.addEventListener("click", () => {
  document.getElementById("resultado").innerText = calcular();
});

btnBorrar.addEventListener("click", () => {
  document.getElementById("resultado").innerText = 0;
});

