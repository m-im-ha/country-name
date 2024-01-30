'use strict';

let get_input = document.querySelector(".search_input");
let search_element = document.querySelector(".search"); 


async function find_country(country) {
  try {
    let response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    let data = await response.json();
    console.log(data);
    console.log(data.length);
    const native = Object.keys(data[0]["name"]["nativeName"]);
    let val = Object.values(data[0]["name"]["nativeName"]);
    // val = val
    console.log(val);
    const native_val = [];
    for(let i=0; i<val.length; i++){
      native_val.push(val[i]["official"]);
    }
    console.log(native_val);
    // console.log(val[0]["official"]);
    // console.log(native[0]);
    // console.log(data[0]["name"]["nativeName"]);
    // console.log(data[0]["name"]["nativeName"][`${native}`][0]["official"]);
    // console.log(data[0]["name"]["nativeName"][0][`${native}`]);
    // console.log(data[0]["name"]["nativeName"][0][`${native}`]["official"]);
    // console.log(data[0]["capital"]);
    // console.log(data[0]["population"]);
    const ppl = ((data[0]["population"])/1000000).toFixed(2);
    // console.log(new Intl.NumberFormat().format(ppl));
    // console.log(data[0]["languages"][`${native}`]);
    const currency = Object.keys(data[0]["currencies"]);
    // console.log(data[0]["currencies"][`${currency}`]["name"]);
    // console.log(data[0]["region"]);
    // console.log(data[0]["subregion"]);
    // console.log(data[0]["flags"]["svg"]);

    const html = `<div class="main">
    <img src="${data[0]["flags"]["svg"]}" alt="country-flag" class="flag" />
    <div class="information">
      <div class="first_part">
        <h2>${data[0]["name"]["common"]}</h2>
        <p>Native Name: <span class="native_name">${[`${native_val}`]}</span></p>
        <p>Capital: <span class="capital_name">${data[0]["capital"]}</span></p>
        <p>Population: <span class="population">${((data[0]["population"])/1000000).toFixed(2)} million</span></p>
        <p>Languages: <span class="languages">${data[0]["languages"][`${native}`]}</span></p>
      </div>
      <div class="second_part">
        <p>Currencies: <span>${data[0]["currencies"][`${currency}`]["name"]}</span></p>
        <p>Region: <span>${data[0]["region"]}</span></p>
        <p>Sub Region: <span>${data[0]["subregion"]}</span></p>
      </div>
    </div>
  </div>`;
  search_element.insertAdjacentHTML("afterend",html);
  } catch (error) {
    console.error(error);
  }
}

// find_country("singapore");
// find_country("bangladesh");
find_country("china");

document.querySelector(".btn").addEventListener("click",()=>{
  const get_data = get_input.value;
  // find_country("singapore");

})