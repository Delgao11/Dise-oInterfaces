function edit_row(no) {
    var nombre = document.getElementById("nombre_row" + no);
    var apellidos = document.getElementById("apellidos_row" + no);
    var contraseña = document.getElementById("contraseña_row" + no);
    var dni = document.getElementById("dni_row" + no)
    var nacimiento = document.getElementById("nacimineto_row" + no);
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
    empresa.innerHTML = "<input type='date' id='empresa_text" + no + "' value='" + empresa_data + "'>";
    tutor.innerHTML = "<input type='text' id='tutor_text" + no + "' value='" + tutor_data + "'>";
    dual.innerHTML = "<input type='text' id='dual_text" + no + "' value='" + dual_data + "'>";
    fct.innerHTML = "<input type='text' id='fct_text" + no + "' value='" + fct_data + "'>";
    observaciones.innerHTML = "<input type='date' id='observaciones_text" + no + "' value='" + observaciones_data + "'>";
}

function save_row(no) {
    var nombre_val = document.getElementById("name_text" + no).value;
    var apellidos_val = document.getElementById("apellidos_text" + no).value;
    var contraseña_val = document.getElementById("contraseña_text" + no).value;
    var dni_val = document.getElementById("dni_text" + no).value;
    document.getElementById("nombre_row" + no).innerHTML = nombre_val;
    document.getElementById("precio_row" + no).innerHTML = precio_val;
    document.getElementById("cantidad_row" + no).innerHTML = cantidad_val;
    document.getElementById("fecha_row" + no).innerHTML = fecha_val;
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var nuevo_nombre = document.getElementById("nuevo_nombre").value;
    var nuevo_precio = document.getElementById("nuevo_precio").value;
    var nueva_cantidad = document.getElementById("nueva_cantidad").value;
    var nueva_fecha = document.getElementById("nueva_fecha").value;
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='nombre_row" + table_len + "'>" +
        nuevo_nombre + "</td><td id='precio_row" + table_len + "'>" + nuevo_precio + "</td><td id='cantidad_row" + table_len + "'>" +
        nueva_cantidad + "</td><td id='fecha_row" + table_len + "'>" + nueva_fecha +
        "</td><td class='acciones'><button class='edit' onclick='edit_row(" + table_len + ");' id='edit_button" + table_len+1 + "'><i class='fa-solid fa-pen-to-square'></i></button> <button class='save' onclick='save_row(" + table_len + ");' id='save_button" + table_len + "'><i class='fa-solid fa-floppy-disk'></i></button> <button class='delete' onclick='delete_row(" + table_len + ");'><i class='fa-solid fa-trash'></i></button></td></tr>";
    document.getElementById("nuevo_nombre").value = "";
    document.getElementById("nuevo_precio").value = "";
    document.getElementById("nueva_cantidad").value = "";
    document.getElementById("nueva_fecha").value = "";
}