let div = document.createElement("div");
div.setAttribute("class", "container");
div.setAttribute("id", "container");
div.style.border = "solid 5px black";
div.style.setProperty("width", "auto");
div.style.setProperty("height", "25%");
div.style.setProperty("display", "flex");
div.style.setProperty("align-items", "center");
div.style.setProperty("justify-content", "center");
div.style.setProperty("margin","10px auto");
div.style.setProperty("padding","auto");
document.body.appendChild(div);

let table = document.createElement("table");
table.setAttribute("class", "table");
table.style.setProperty("width", "auto");
table.style.setProperty("height", "auto");
table.style.setProperty("display", "inline-block");
table.style.setProperty("align-items", "center");
table.style.setProperty("justify-content", "center");
table.style.setProperty("margin","25px");
table.style.setProperty("overflow-x", "auto");
div.appendChild(table);

let thead = document.createElement("thead");
table.appendChild(thead);

let tableRowFortableHead = document.createElement("tr");
thead.appendChild(tableRowFortableHead);

let slNo = document.createElement("th");
slNo.setAttribute("scope", "column");
slNo.style.padding = "25px";
slNo.style.margin = "25px";
let slNotext = document.createTextNode("Sl. No.");
slNo.appendChild(slNotext);
tableRowFortableHead.appendChild(slNo);

let nameOfbook = document.createElement("th");
nameOfbook.setAttribute("scope", "column");
nameOfbook.style.padding = "25px";
nameOfbook.style.margin = "25px";
let nameOfbooktext = document.createTextNode("Name");
nameOfbook.appendChild(nameOfbooktext);
tableRowFortableHead.appendChild(nameOfbook);

let isbn = document.createElement("th");
isbn.setAttribute("scope", "column");
isbn.style.padding = "25px";
isbn.style.margin = "25px";
let isbntext = document.createTextNode("ISBN");
isbn.appendChild(isbntext);
tableRowFortableHead.appendChild(isbn);

let author = document.createElement("th");
author.setAttribute("scope", "column");
author.style.padding = "25px";
author.style.margin = "25px";
let authortext = document.createTextNode("Author");
author.appendChild(authortext);
tableRowFortableHead.appendChild(author);

let pages = document.createElement("th");
pages.setAttribute("scope", "column");
pages.style.padding = "25px";
pages.style.margin = "25px";
let pagestext = document.createTextNode("Pages");
pages.appendChild(pagestext);
tableRowFortableHead.appendChild(pages);

let publisher = document.createElement("th");
publisher.setAttribute("scope", "column");
publisher.style.padding = "25px";
publisher.style.margin = "25px";
let publishertext = document.createTextNode("Publisher");
publisher.appendChild(publishertext);
tableRowFortableHead.appendChild(publisher);

let releasedDate = document.createElement("th");
releasedDate.setAttribute("scope", "column");
releasedDate.style.padding = "25px";
releasedDate.style.margin = "25px";
let releasedDatetext = document.createTextNode("Released Date");
releasedDate.appendChild(releasedDatetext);
tableRowFortableHead.appendChild(releasedDate);

let characters = document.createElement("th");
characters.setAttribute("scope", "column");
characters.style.padding = "25px";
characters.style.margin = "25px";
let characterstext = document.createTextNode("Characters");
characters.appendChild(characterstext);
tableRowFortableHead.appendChild(characters);

let tbody;
function createTbody() {
  tbody = document.createElement("tbody");
  tbody.setAttribute("class", "tbody");
  table.appendChild(tbody);
}

createTbody();

let divBtn = document.createElement("div");
divBtn.setAttribute("class", "buttons");
divBtn.style.setProperty("width", "auto");
divBtn.style.setProperty("height", "auto");
divBtn.style.setProperty("display", "flex");
divBtn.style.setProperty("align-items", "center");
divBtn.style.setProperty("justify-content", "center");
divBtn.style.setProperty("margin", "auto");
divBtn.style.setProperty("padding", "auto");
document.body.appendChild(divBtn);

let btn1 = document.createElement("button");
btn1.setAttribute("id", "btn1");
btn1.style.setProperty("width", "100px");
btn1.style.setProperty("height", "35px");
let btn1text = document.createTextNode("1")
btn1.appendChild(btn1text);
btn1.style.padding = "5px";
btn1.style.margin = "5px";
divBtn.appendChild(btn1);

let btn2 = document.createElement("button");
btn2.setAttribute("id", "btn2");
btn2.style.setProperty("width", "100px");
btn2.style.setProperty("height", "35px");
let btn2text = document.createTextNode("2")
btn2.appendChild(btn2text);
btn2.style.padding = "5px";
btn2.style.margin = "5px";
divBtn.appendChild(btn2);

let btn3 = document.createElement("button");
btn3.setAttribute("id", "btn3");
btn3.style.setProperty("width", "100px");
btn3.style.setProperty("height", "35px");
let btn3text = document.createTextNode("3")
btn3.appendChild(btn3text);
btn3.style.padding = "5px";
btn3.style.margin = "5px";
divBtn.appendChild(btn3);

let btn4 = document.createElement("button");
btn4.setAttribute("id", "btn4");
btn4.style.setProperty("width", "100px");
btn4.style.setProperty("height", "35px");
let btn4text = document.createTextNode("4")
btn4.appendChild(btn4text);
btn4.style.padding = "5px";
btn4.style.margin = "5px";
divBtn.appendChild(btn4);

let btn5 = document.createElement("button");
btn5.setAttribute("id", "btn5");
btn5.style.setProperty("width", "100px");
btn5.style.setProperty("height", "35px");
let btn5text = document.createTextNode("5")
btn5.appendChild(btn5text);
btn5.style.padding = "5px";
btn5.style.margin = "5px";
divBtn.appendChild(btn5);

let responseData;
fetch("https://www.anapioficeandfire.com/api/books").then(data => data.json()).then(res => {
  responseData = res;
  let defaultRows = res.slice(0, 2)
  defaultRows.forEach((defData, idx) => {
    createTable(defData, idx);
  });
});

function getFilteredData(startIdx, endIdx) {
  let tableRows = responseData.slice(startIdx,endIdx);
  tableRows.forEach((defData, idx) => {
    createTable(defData, idx);
  });
}

function createTable(rowData, index) {
  let row = document.createElement("tr");
  row.setAttribute("id", "row" + index);
  
  table.appendChild(row)
  let slnoData = document.createElement("td");
  slnoData.innerText = index + 1;
  slnoData.style.padding = "30px";
  slnoData.style.margin = "25px";
  row.appendChild(slnoData)
  Object.keys(rowData).forEach(key => {
    if (key !== "mediaType" && key !== "url" && key !== "povCharacters" && key !== "country") {
      let cell = document.createElement("td");
      cell.style.padding = "30px";
      cell.style.margin = "25px";
      cell.style.setProperty("max-width", "300px");
      cell.style.setProperty("word-wrap", "break-word");
      if(key === 'characters') {
        let requiredCharacters = rowData[key].slice(0,5);
        cell.innerText = requiredCharacters;
      } else {
        cell.innerText = rowData[key]
      }
      row.appendChild(cell);
    }
  })
  tbody.appendChild(row);
};

function deleteExistingTabledata() {
  tbody.remove();
}
btn1.addEventListener('click', () => {
  deleteExistingTabledata();
  createTbody();
  getFilteredData(0, 2);
  slnoData.innerText = index + 1;
  slnoData.style.padding = "30px";
  slnoData.style.margin = "25px";
  row.appendChild(slnoData)
});

btn2.addEventListener('click', () => {
  deleteExistingTabledata();
  createTbody();
  getFilteredData(2, 4);
    slnoData.innerText = index + 2;
  slnoData.style.padding = "30px";
  slnoData.style.margin = "25px";
  row.appendChild(slnoData)
});

btn3.addEventListener('click', () => {
  deleteExistingTabledata();
  createTbody();
  getFilteredData(4, 6)
});

btn4.addEventListener('click', () => {
  deleteExistingTabledata();
  createTbody();
  getFilteredData(6, 8)
});

btn5.addEventListener('click', () => {
  deleteExistingTabledata();
  createTbody();
  getFilteredData(8, 10)
})