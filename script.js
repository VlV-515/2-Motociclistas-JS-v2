//Variables.
const arrMoto = [
  { hora: "08:00", disp: 0 },
  { hora: "08:30", disp: 1 },
  { hora: "09:00", disp: 2 },
  { hora: "09:30", disp: 3 },
  { hora: "10:00", disp: 4 },
  { hora: "10:30", disp: 5 },
  { hora: "11:00", disp: 6 },
  { hora: "11:30", disp: 7 },
  { hora: "12:00", disp: 8 },
  { hora: "12:30", disp: 0 },
  { hora: "13:00", disp: 1 },
  { hora: "13:30", disp: 2 },
  { hora: "14:00", disp: 3 },
  { hora: "14:30", disp: 4 },
  { hora: "15:00", disp: 5 },
  { hora: "15:30", disp: 6 },
  { hora: "16:00", disp: 7 },
  { hora: "16:30", disp: 8 },
  { hora: "17:00", disp: 0 },
  { hora: "17:30", disp: 1 },
  { hora: "18:00", disp: 2 },
  { hora: "18:30", disp: 3 },
  { hora: "19:00", disp: 4 },
  { hora: "19:30", disp: 5 },
];
let content = ""; //Usada para la inserción en div👇🏻
const divList = document.getElementById("motoList");

const selectStyle = (disp) => {
  if (disp <= 0) return "cardBad";
  return "card";
};

function llenarListado() {
  arrMoto.forEach((moto, index) => {
    content += `
    <div id="${index}" class="${selectStyle(moto.disp)}">
    <div class="item">
    <h4>Hora: ${moto.hora}</h4>
    </div>
    <div class="item">
    <p>Libres: ${moto.disp}</p>
    </div>
    </div>`;
  });
  divList.innerHTML = content;
}
llenarListado();

//Metodo ON para los listener
const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

//Manejo de los objetos sin disponibilidad
on(document, "click", ".cardBad", (e) => {
  alert("No hay disponibles en esa hora :(");
});

//Manejo de los objetos disponibles sin seleccionar
on(document, "mousedown", ".card", (e) => {
  e.stopImmediatePropagation();
  let fila = e.target.parentNode.parentNode;
  let contHtml = fila.children[1].children[0].innerHTML;
  let contInt = contHtml.substring(8, contHtml.length);
  fila.children[1].children[0].innerHTML = "Libres: " + (parseInt(contInt) - 1);
  fila.classList.remove("card");
  fila.classList.add("cardSelected");
});

//Manejo de los objetos seleccionados.
on(document, "mousedown", ".cardSelected", (e) => {
  e.stopImmediatePropagation();
  let fila = e.target.parentNode.parentNode;
  let contHtml = fila.children[1].children[0].innerHTML;
  let contInt = contHtml.substring(8, contHtml.length);
  fila.children[1].children[0].innerHTML = "Libres: " + (parseInt(contInt) + 1);
  fila.classList.remove("cardSelected");
  fila.classList.add("card");
});
