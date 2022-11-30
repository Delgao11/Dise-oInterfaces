function edit_row(no) {
    var nombre = document.getElementById("nombre_row" + no);
    var apellidos = document.getElementById("apellidos_row" + no);
    var contraseña = document.getElementById("contraseña_row" + no);
    var dni = document.getElementById("dni_row" + no)
    var nacimiento = document.getElementById("nacimiento_row" + no);
    var email = document.getElementById("email_row" + no);
    var telefono = document.getElementById("telefono_row" + no);
    var empresa = document.getElementById("empresa_row" + no)
    var tutor = document.getElementById("tutor_row" + no);
    var dual = document.getElementById("dual_row" + no);
    var fct = document.getElementById("fct_row" + no);
    var observaciones = document.getElementById("observaciones_row" + no)
    var nombre_data = nombre.innerHTML;
    var apellidos_data = apellidos.innerHTML;
    var contraseña_data = contraseña.innerHTML;
    var dni_data = dni.innerHTML;
    var nacimiento_data = nacimiento.innerHTML;
    var email_data = email.innerHTML;
    var telefono_data = telefono.innerHTML;
    var empresa_data = empresa.innerHTML;
    var tutor_data = tutor.innerHTML;
    var dual_data = dual.innerHTML;
    var fct_data = fct.innerHTML
    var observaciones_data = observaciones.innerHTML;
    nombre.innerHTML = "<input type='text' id='name_text" + no + "' value='" + nombre_data + "'>";
    apellidos.innerHTML = "<input type='text' id='apellidos_text" + no + "' value='" + apellidos_data + "'>";
    contraseña.innerHTML = "<input type='text' id='contraseña_text" + no + "' value='" + contraseña_data + "'>";
    dni.innerHTML = "<input type='date' id='dni_text" + no + "' value='" + dni_data + "'>";
    nacimiento.innerHTML = "<input type='text' id='nacimiento_text" + no + "' value='" + nacimiento_data + "'>";
    email.innerHTML = "<input type='text' id='email_text" + no + "' value='" + email_data + "'>";
    telefono.innerHTML = "<input type='text' id='telefono_text" + no + "' value='" + telefono_data + "'>";
    empresa.innerHTML = "<input type='text' id='empresa_text" + no + "' value='" + empresa_data + "'>";
    tutor.innerHTML = "<input type='text' id='tutor_text" + no + "' value='" + tutor_data + "'>";
    dual.innerHTML = "<input type='text' id='dual_text" + no + "' value='" + dual_data + "'>";
    fct.innerHTML = "<input type='text' id='fct_text" + no + "' value='" + fct_data + "'>";
    observaciones.innerHTML = "<input type='text' id='observaciones_text" + no + "' value='" + observaciones_data + "'>";
}

function save_row(no) {
    var nombre_val = document.getElementById("nombre_row" + no).value;
    var apellidos_val = document.getElementById("apellidos_row" + no).value;
    var contraseña_val = document.getElementById("contraseña_row" + no).value;
    var dni_val = document.getElementById("dni_row" + no).value;
    var nacimiento_val = document.getElementById("nacimiento_row" + no).value;
    var email_val = document.getElementById("email_row" + no).value;
    var telefono_val = document.getElementById("telefono_row" + no).value;
    var empresa_val = document.getElementById("empresa_row" + no).value;
    var tutor_val = document.getElementById("tutor_row" + no).value;
    var dual_val = document.getElementById("dual_row" + no).value;
    var fct_val = document.getElementById("fct_row").value;
    var observaciones_val = document.getElementById("observaciones_row" + no).value
    document.getElementById("nombre_row" + no).innerHTML = nombre_val;
    document.getElementById("apellidos_row" + no).innerHTML = apellidos_val;
    document.getElementById("contraseña_row" + no).innerHTML = contraseña_val;
    document.getElementById("dni_row" + no).innerHTML = dni_val;
    document.getElementById("nacimiento_row" + no).innerHTML = nacimiento_val;
    document.getElementById("email_row" + no).innerHTML = email_val;
    document.getElementById("telefono_row" + no).innerHTML = telefono_val;
    document.getElementById("empresa_row" + no).innerHTML = empresa_val;
    document.getElementById("tutor_row" + no).innerHTML = tutor_val;
    document.getElementById("dual_row" + no).innerHTML = dual_val;
    document.getElementById("fct_row" + no).innerHTML = fct_val;
    document.getElementById("observaciones_row" + no).innerHTML = observaciones_val;
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var nuevo_nombre = document.getElementById("nuevo_nombre").value;
    var nuevo_apellidos = document.getElementById("nuevo_apellidos").value;
    var nueva_contraseña = document.getElementById("nueva_contraseña").value;
    var nuevo_dni = document.getElementById("nuevo_dni").value;
    var nuevo_nacimiento = document.getElementById("nuevo_nacimiento").value;
    var nuevo_email = document.getElementById("nuevo_email").value;
    var nuevo_telefono = document.getElementById("nuevo_telefono").value;
    var nueva_empresa = document.getElementById("nueva_empresa").value;
    var nuevo_tutor = document.getElementById("nuevo_tutor").value;
    var nuevo_dual = document.getElementById("nuevo_dual").value;
    var nueva_fct = document.getElementById("nueva_fct").value;
    var nueva_observaciones = document.getElementById("nueva_observaciones").value;
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='nombre_row" + table_len + "'>" +
        nuevo_nombre + "</td><td id='apellidos_row" + table_len + "'>" + nuevo_apellidos + "</td><td id='contraseña_row" + table_len + "'>" +
        nueva_contraseña + "</td><td id='dni_row" + table_len + "'>" + nuevo_dni + "</td><td id= 'nacimiento_row" + table_len + "'>" + nuevo_nacimiento +
        "</td><td id= 'email_row" + table_len + "'>" + nuevo_email + "</td><td id= 'telefono_row" + table_len + "'>" + nuevo_telefono +
        "</td><td id= 'empresa_row" + table_len + "'>" + nueva_empresa + "</td><td id= 'tutor_row" + table_len + "'>" + nuevo_tutor +
        "</td><td id= 'dual_row" + table_len + "'>" + nuevo_dual + "</td><td id= 'fct_row" + table_len + "'>" + nueva_fct +
        "</td><td id= 'observaciones_row" + table_len + "'>" + nueva_observaciones +
        "</td><td class='acciones'><button class='edit' onclick='edit_row(" + table_len + ");' id='edit_button" + table_len + 1 + "'><i class='fa-solid fa-pen-to-square'></i></button> <button class='save' onclick='save_row(" + table_len + ");' id='save_button" + table_len + "'><i class='fa-solid fa-floppy-disk'></i></button> <button class='delete' onclick='delete_row(" + table_len + ");'><i class='fa-solid fa-trash'></i></button></td></tr>";
    document.getElementById("nuevo_nombre").value = "";
    document.getElementById("nuevo_apellidos").value = "";
    document.getElementById("nueva_contraseña").value = "";
    document.getElementById("nuevo_dni").value = "";
    document.getElementById("nuevo_nacimiento").value = "";
    document.getElementById("nuevo_email").value = "";
    document.getElementById("nuevo_telefono").value = "";
    document.getElementById("nueva_empresa").value = "";
    document.getElementById("nuevo_tutor").value = "";
    document.getElementById("nuevo_dual").value = "";
    document.getElementById("nueva_fct").value = "";
    document.getElementById("nuevo_observaciones").value = "";
}