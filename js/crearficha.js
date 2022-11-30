function edit_row(no) {
    var semana = document.getElementById("semana_row" + no);
    var dia= document.getElementById("dia_row" + no);
    var tarea= document.getElementById("tarea_row" + no);
    var tutor= document.getElementById("tutor_row" + no);
    var empresa= document.getElementById("empresa_row" + no);
    var semana_data = semana.innerHTML;
    var dia_data = dia.innerHTML;
    var tutor_data = tutor.innerHTML;
    var empresa_data = empresa.innerHTML;
    semana.innerHTML = "<input type='text' id='semana_text" + no + "' value='" + semana_data + "'>";
    dia.innerHTML = "<input type='text' id='dia_text" + no + "' value='" + dia_data + "'>";
    tarea.innerHTML = "<input type='text' id='tarea_text" + no + "' value='" + tarea_data + "'>";
    tutor.innerHTML = "<input type='text' id='tutor_text" + no + "' value='" + tutor_data + "'>";
    empresa.innerHTML = "<input type='text' id='empresa_text" + no + "' value='" + empresa_data + "'>";
}
function save_row(no) {
    var semana_val = document.getElementById("semana_text" + no).value;
    var dia_val = document.getElementById("dia_text" + no).value;
    var tarea_val = document.getElementById("tarea_text" + no).value;
    var tutor_val = document.getElementById("tutor_text" + no).value;ç
    var empresa_val = document.getElementById("empresa_text" + no).value;
    document.getElementById("semana_row" + no).innerHTML = semana_val;
    document.getElementById("dia_row" + no).innerHTML = dia_val;
    document.getElementById("tarea_row" + no).innerHTML = tarea_val;
    document.getElementById("tutor_row" + no).innerHTML = tutor_val;
    document.getElementById("empresa_row" + no).innerHTML = empresa_val;
}
function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}
function add_row() {
    var nuevo_semana = document.getElementById("nuevo_semana").value;
    var nuevo_dia = document.getElementById("nuevo_dia").value;
    var nueva_tarea = document.getElementById("nueva_tarea").value;
    var nueva_tutor = document.getElementById("nueva_tutor").value;
    var nueva_empresa= document.getElementById("nueva_empresa").value;
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='semana_row" + table_len + "'>" +
        nuevo_semana+ "</td><td id='dia_row" + table_len + "'>" + nuevo_dia + "</td><td id='tarea_row" + table_len + "'>" +
        nueva_tarea + "</td><td id='tutor_row" + table_len + "'>" + nueva_tutor +"</td><td id='empresa_row" + table_len + "'>"+
        nueva_emnpresa+ "</td><td class='acciones'><button class='edit' onclick='edit_row(" + table_len + ");' id='edit_button" + table_len+1 + "'><i class='fa-solid fa-pen-to-square'></i></button> <button class='save' onclick='save_row(" + table_len + ");' id='save_button" + table_len + "'><i class='fa-solid fa-floppy-disk'></i></button> <button class='delete' onclick='delete_row(" + table_len + ");'><i class='fa-solid fa-trash'></i></button></td></tr>";
    document.getElementById("nuevo_semana").value = "";
    document.getElementById("nuevo_dia").value = "";
    document.getElementById("nueva_tarea").value = "";
    document.getElementById("nueva_tutor").value = "";
    document.getElementById("nueva_empresa").value = "";
}