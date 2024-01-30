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
    let country_data;
    for(let item of data){
      // console.log(item);
      // console.log(item["name"]["common"]);
      if((item["name"]["common"]).toLowerCase() === get_input.value){
        // console.log(`matched`);
        country_data = item;
        break;
      }
      // else console.log(`not matched`);
    }
    // console.log(country_data);
    // console.log(country_data['name']['nativeName']);
    // console.log(country_data);
    // console.log(country_data);
    // console.log(country_data);
    // console.log(country_data);
    // console.log(country_data["languages"]);
    // let lang_val = [];
    const lang_values = country_data["languages"];
    // console.log(lang_values);
    // for(let lang in lang_values){
    //   console.log(lang);
    //   lang_val.push(lang);
    // }
    const lang_val = Object.values(lang_values);
    // console.log(lang_val);
    // console.log(country_data.length);
    const native = Object.keys(country_data["name"]["nativeName"]);
    // console.log(native);
    let val = Object.values(country_data["name"]["nativeName"]);
    // val = val
    // console.log(val);
    const native_val = [];
    for(let i=0; i<val.length; i++){
      native_val.push(val[i]["official"]);
    }
    // console.log(native_val);
    // console.log(val[0]["official"]);
    // console.log(native[0]);
    // console.log(data[0]["name"]["nativeName"]);
    // console.log(data[0]["name"]["nativeName"][`${native}`][0]["official"]);
    // console.log(data[0]["name"]["nativeName"][0][`${native}`]);
    // console.log(data[0]["name"]["nativeName"][0][`${native}`]["official"]);
    // console.log(data[0]["capital"]);
    // console.log(data[0]["population"]);
    const ppl = ((country_data["population"])/1000000).toFixed(2);
    // console.log(new Intl.NumberFormat().format(ppl));
    // console.log(data[0]["languages"][`${native}`]);
    const currency = Object.keys(country_data["currencies"]);
    // console.log(data[0]["currencies"][`${currency}`]["name"]);
    // console.log(data[0]["region"]);
    // console.log(data[0]["subregion"]);
    // console.log(data[0]["flags"]["svg"]);

    const html = `<div class="main">
    <img src="${country_data["flags"]["svg"]}" alt="country-flag" class="flag" />
    <div class="information">
      <div class="first_part">
        <h2>${country_data["name"]["common"]}</h2>
        <p>Native Name: <span class="native_name">${[`${native_val}`]}</span></p>
        <p>Capital: <span class="capital_name">${country_data["capital"]}</span></p>
        <p>Population: <span class="population">${((country_data["population"])/1000000).toFixed(2)} million</span></p>
        <p>Languages: <span class="languages">${lang_val}</span></p>
      </div>
      <div class="second_part">
        <p>Currencies: <span>${country_data["currencies"][`${currency}`]["name"]}</span></p>
        <p>Region: <span>${country_data["region"]}</span></p>
        <p>Sub Region: <span>${country_data["subregion"]}</span></p>
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
// find_country("china");

document.querySelector(".btn").addEventListener("click",()=>{
  const get_data = get_input.value;
  find_country(get_data);
})