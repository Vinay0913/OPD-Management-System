document.getElementById('sub').addEventListener('click',function(){
    window.print();
})

document.addEventListener('DOMContentLoaded', function () {
const selectElement = document.getElementById('medicine-select');

fetch('http://localhost:8080/Medicines/')
    .then((response) => response.json())
    .then((data) => {
       
       
        const values = data;

        values.forEach((value) => {
            const option = document.createElement('option');
            option.textContent = value.medicine;
          
            selectElement.appendChild(option);
           
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
});

const selectElement = document.getElementById('medicine-select');
const t = document.getElementById('pres');
let i="*";

selectElement.addEventListener('change', function (event) {
const selectedMedicine = event.target.value;
if (selectedMedicine) {
   
    t.value += i+" "+selectedMedicine + '\n\n';


   
  
    selectElement.value = '';
}
});


t.addEventListener('click', function (event) {
if (event.target.matches('.delete-btn')) {

    const medicineText = event.target.parentNode.textContent.trim();
    t.value = t.value.replace(medicineText, '');
}
});