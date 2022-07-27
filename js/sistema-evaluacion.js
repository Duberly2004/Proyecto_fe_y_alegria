function calculate(){
    //------------------ PROMEDIO TEO------------

 let teo1 =  document.getElementById('teo1').value;
 let teo2 =  document.getElementById('teo2').value;
 let teo3 =  document.getElementById('teo3').value;
 let teo4 =  document.getElementById('teo4').value;

 let suma_teo = parseFloat(teo1) + parseFloat(teo2) +  parseFloat(teo3) + parseFloat(teo4);
 let avarange_teo = (suma_teo/4)
 document.getElementById('avarange_teo').value=Number((avarange_teo).toFixed(2));

 //--------------------- PROMEDIO LAB------------

 let lab1 =  document.getElementById('lab1').value;
 let lab2 =  document.getElementById('lab2').value;
 let lab3 =  document.getElementById('lab3').value;
 let lab4 =  document.getElementById('lab4').value;

 let suma_lab = parseFloat(lab1) + parseFloat(lab2) +  parseFloat(lab3) + parseFloat(lab4);
 let avarange_lab = (suma_lab/4)
 document.getElementById('avarange_lab').value=Number((avarange_lab).toFixed(2));


 // --------------------NOTA FINAL--------------

 let  avarange_teo_final = avarange_teo*0.4 
 let avarange_lab_final = avarange_lab*0.6
 let note_final = avarange_lab_final + avarange_teo_final
 document.getElementById('avarange_teo_final').value=Number((avarange_teo_final).toFixed(2));
 document.getElementById('avarange_lab_final').value=Number((avarange_lab_final).toFixed(2))
 document.getElementById('avarange_final').value=Number((note_final).toFixed(2));


 if (note_final >=13 && note_final<=20){
     document.getElementById('respuestas').value='El alumno esta ¡Aprobado!';
 }

 else if (note_final <=13){
     document.getElementById('respuestas').value ='El alumno esta ¡REPROBADO!';
 }
 else{
     document.getElementById('respuestas').value = ''
 }
}