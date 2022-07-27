function click_form(){
    let name = document.getElementById('name').value;
    let dni = document.getElementById('dni').value;
    let direction = document.getElementById('direction').value;
    let phone = document.getElementById('phone').value;
    let surnames = document.getElementById('surnames').value;
    let email = document.getElementById('email').value;
    let menu_list = document.getElementById('menu_list').value;
    let affair = document.getElementById('affair').value;

    let resultados = `Muchas Gracias por llenar este formulario ${name} ${surnames},los siguientes datos fueron registrados:
                      
                      Nombre       ${name}
                      Apellidos    ${surnames}
                      DNI          ${dni} 
                      Dirección    ${direction} 
                      Telefono     ${phone}
                      Email        ${email}
                      Ocupación    ${menu_list}
                      Asunto       

                              ${affair}
    `
    alert(resultados)
}