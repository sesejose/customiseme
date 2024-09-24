const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://customiseme-2ddb.restdb.io/rest/soaps/" + id;
// const url = "https://customiseme-2ddb.restdb.io/rest/soaps?max=7";

const options = {
  headers: {
    "content-type": "application/json",
    "x-apikey": "66c44f47c52295086c9543f2",
    "cache-control": "no-cache",
  },
};
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showSoap(data));

function showSoap(soap) {
  console.log(soap.id);
  document.querySelector(".price").textContent = soap.price + " " + "DKK";
  document.querySelector(".name").textContent = soap.name;
  document.querySelector(".oils-butter").textContent = soap.oils;
  document.querySelector(".essential").textContent = soap.essential;

  document.querySelector(".soap-weight").textContent = "Weight: approx." + " " + soap.weight + "g";
  document.querySelector(".soap-color").textContent = "Color: " + " " + soap.color;
  document.querySelector(".soap-image").src = soap.imageurl;
  //   document.querySelector(".soap-image").src = `https://sesejose.com/kea/customiseme/soaps/${soap.name}.jpg`;
}
