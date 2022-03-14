var selectedRow = null

function onEnviar(e) {
	event.preventDefault();
        var formData = lerDados();
        if (selectedRow == null){
            inserir(formData);
		}
        else{
          atualizar(formData);
		}
    resertaCampos();
           
}
    


function lerDados() { 
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["quantidade"] = document.getElementById("quantidade").value;
    formData["preco"] = document.getElementById("preco").value;
    return formData; 
}

function inserir(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    //===========================
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productCode;
    //===========================
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    //===========================
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quantidade;
    ///==============================
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.preco;
    //=============================
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="editar(this)">Editar</button> <button onClick="deletar(this)">Deletar</button>`;
}

function editar(td){
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value =selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("quantidade").value = selectedRow.cells[2].innerHTML;
  document.getElementById("preco").value = selectedRow.cells[3].innerHTML;
}


function atualizar(formData){
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.quantidade;
  selectedRow.cells[3].innerHTML = formData.preco;

}


function deletar(td){
  if(confirm("Você quer deletar esse Registro?")){
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resertaCampos();
  }
}


function resertaCampos(){
  document.getElementById("productCode").value = '';
  document.getElementById("product").value = '';
  document.getElementById("quantidade").value = '';
  document.getElementById("preco").value = '';
  selectedRow = null;
}