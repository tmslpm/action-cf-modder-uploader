const tbody = document.querySelector(".js-game-versions tbody");
const search = document.getElementById("search");
search.onkeyup = () => {
  const filter = search.value.toLocaleLowerCase();
  tbody.querySelectorAll("tr").forEach(tr => {
    let foundMath = false;
    tr.querySelectorAll("td").forEach(td => {
      if ((td.innerHTML.toLocaleLowerCase().startsWith(filter))) {
        td.style.color = filter.length > 0 ? "yellow" : "";
        foundMath = true;
      } else {
        td.style.color = "";
      }
    });
    tr.style.display = foundMath ? "" : "none"
  })
}

function fetchData(path) {
  tbody.innerHTML = "";
  fetch(path)
    .then(data => data.json())
    .then(data => {
      if (typeof data == "object" && Array.isArray(data)) {
        return data.map(mapperToTableItem);
      }
      throw new Error(`array expected, recevied <- ${typeof data}`);
    })
    .then(result => result
      .forEach(strArr => {
        const tr = document.createElement("tr");
        tbody.append(tr);
        strArr.forEach(str => {
          const td = document.createElement("td");
          td.textContent = str;
          tr.append(td);
        });
      }))
    .catch(e => {
      tbody.textContent = "error";
      console.error(e);
    });
}
