const btnGen = document.getElementById("btn");

const container = document.querySelector(".container");

btnGen.addEventListener("click", function(){
  container.classList.add("show");

  //Ciclo che generà la griglia con quadrati.

  for(let i = 0; i < 100; i++){
  const square =  createElement();
  container.append(square);
  }
});

//funzione genera quadrati.

function createElement(){
  const square = document.createElement("div");
  square.className = "square";
  return square;
}
