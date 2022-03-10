
//Contadores de votos inicializados en 0
//var cantYes = 0;
//var cantNo = 0;
//var cantNv = 0;

// Definicion objeto Votante
let Votante = {
  codigo: 0,
  voto1: "",
  voto2: "",
};

function contarVotos(){
  let form = document.forms['formulario'];
  var i, j, cod;

  //Busca el checked en las opciones del radio de la pregunta 1
  for(i = 0; i < document.formulario.quest1.length; i++)
    if(document.formulario.quest1[i].checked)
      break;
  
  //Busca el checked en las opciones del radio de la pregunta 2
  for(j = 0; j < document.formulario.quest2.length; j++)
    if(document.formulario.quest2[j].checked)
      break;
  
//  Identifica el checked y lo suma a su respectivo contador
//  if(document.formulario.quest1[i].value === "yes")
//    cantYes++;
//  else if(document.formulario.quest1[i].value === "no")
//    cantNo++;
//  else if(document.formulario.quest1[i].value === "nv")
//    cantNv++;
//
  //Identifica código de propietario
  cod = form['codOwner'];

  //Asigna propiedades del objeto Votante
  Votante.codigo = cod.value;
  Votante.voto1 = document.formulario.quest1[i].value;
  Votante.voto2 = document.formulario.quest2[j].value;

  console.log(Votante);
}



