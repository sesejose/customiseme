const url = "https://customiseme-2ddb.restdb.io/rest/soaps?max=7";
// const url = "https://customiseme-2ddb.restdb.io/rest/soaps";

const options = {
  headers: {
    "x-apikey": "66c44f47c52295086c9543f2",
    // "Access-Control-Allow-Origin": "https://sesejose.github.io/",
  },
};
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((data) => {
    handlesoapList(data);
  });

function handlesoapList(data) {
  data.forEach(showSoap);
}

function showSoap(soap) {
  console.log(soap);
  const template = document.querySelector("#cartTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".soap-name").textContent = soap.name;
  copy.querySelector(".soap-image").textContent = soap.image;
  copy.querySelector(".soap-price").textContent = soap.price + " " + "DDK";
  // copy.querySelector(".soap-image").src = soap.imageurl;
  copy.querySelector("a").setAttribute("href", `product.html?id=${soap._id}`);
  const parent = document.querySelector("#shop-grid");
  parent.appendChild(copy);
}
