/*завдання 1*/
const country=document.getElementById('country');
const resultCountry=document.getElementById('result_country');
resultCountry.value=0;
country.addEventListener('keydown', (e)=>{
  if(e.key==='Enter'){
    if(country.value!=''){ 
      if(resultCountry.value==0){       
          resultCountry.innerHTML=country.value;
          country.value='';
          resultCountry.value=1;
      }
      else{
        resultCountry.innerHTML+=', '+country.value;
        country.value='';
      }
    }
  }
});

/*завдання 2*/
var n = 0;
var maxi = 0;
var maxj = 0;
var a = [];

function gen_arr() {
    let table = document.getElementById("table");
    n = table.rows.length;
    let arr = [];
    for (i = 0; i < n; i++) {
        arr[i] = [];
        for (j = 0; j < n; j++) {
            arr[i][j] = parseInt(table.rows[i].cells[j].innerHTML);
        }
    }
    return arr;
}


function displayNumbers() {
    a = gen_arr();
    let sortedNumbers = a.flat().sort((a, b) => a - b);
    let result = sortedNumbers.join(", ");
    document.getElementById("result_numbers").innerHTML = result;
}

function run() {
    a = gen_arr();
    let resultNumbers = document.createElement("p");
    resultNumbers.id = "result_numbers";
    document.body.appendChild(resultNumbers);
    displayNumbers();
}
