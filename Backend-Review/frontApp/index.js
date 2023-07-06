//AJAX ==>

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.example.com/data', true);
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     console.log(xhr.responseText);
//   } else {
//     console.log('Error: ' + xhr.status);
//   }
// };
// xhr.send();

let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  let holder = document.querySelector(".holder");
  let req = new XMLHttpRequest();
  req.open(
    "GET",
    "http://universities.hipolabs.com/search?country=jordan",
    true
  );
  req.onload = () => {
    if (req.status == 200) {
      let data = JSON.parse(req.responseText);
      for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let site = document.createElement("a");
        site.href = data[i].web_pages[0]
        name.textContent = data[i].name;
        site.textContent = data[i].web_pages[0];
        card.classList.add("card");
        card.appendChild(name);
        card.appendChild(site);
        holder.appendChild(card);
      }
    } else {
      console.log("Error: " + req.status);
    }
  };
  req.send();
});
