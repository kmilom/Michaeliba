
//Conteo de votos inicializado en 0
var cantYes = 0;
var cantNo = 0;
var cantNv = 0;

function contarVotos(){
  var i;
  //Busca el checked en las opciones del radio de la pregunta 1
  for(i = 0; i<document.test.quest1.length; i++){
    if(document.test.quest1[i].checked)
      break;
  }
  //Identifica el checked y lo cuenta
  if(document.test.quest1[i].value === "yes")
    cantYes++;
  else if(document.test.quest1[i].value === "no")
    cantNo++;
  else if(document.test.quest1[i].value === "nv")
    cantNv++;
  console.log(cantYes, cantNo, cantNv);
}

