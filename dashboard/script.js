const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});
/*
function getUsers(){
    fetch('http://localhost:8000/data', ({mode: 'cors'}))
    .then((res) => res.json())
    .then((data) => {
let output = '<h2>Users</h2>';
console.log(data);
return data;
})
}

getUsers()
*/
async function loadIntoTable(url, table) {
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  const response = await fetch('http://localhost:8000/data');
  let { headers, rows } = await response.json()


  tableHead.innerHTML = "<tr></tr>";
  tableBody.innerHTML = "";

  for (const headerText of headers) {
    const headerElement = document.createElement("th");

    headerElement.textContent = headerText;
    tableHead.querySelector("tr").appendChild(headerElement);
  }

  for (const row of rows) {
    const rowElement = document.createElement("tr");

    for (const cellText of row) {
        const cellElement = document.createElement("td");

        cellElement.textContent = cellText;
        rowElement.appendChild(cellElement);
    }

    tableBody.appendChild(rowElement);

    }


}


loadIntoTable("./data", document.querySelector("table"));