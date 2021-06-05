function addFood() {
    let foodName = document.getElementById('foodName').value
    console.log('adding food', foodName);
    let table = document.getElementById('myTable');
    let tableRow = table.insertRow();
    let tableCell = tableRow.insertCell(0);
    tableCell.innerHTML = foodName
}