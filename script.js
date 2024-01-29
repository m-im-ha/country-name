async function find_country(country) {
  try {
    let response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    let data = await response.json();
    console.log(data);
    const native = Object.keys(data[0]["name"]["nativeName"]);
    console.log(data[0]["name"]["nativeName"][`${native}`]["official"]);
    console.log(data[0]["capital"]);
    document.querySelector(".capital_name").textContent = data[0]["capital"]
    console.log(data[0]["population"]);
    const ppl = data[0]["population"];
    console.log(new Intl.NumberFormat().format(ppl));
    console.log(data[0]["languages"][`${native}`]);
    const currency = Object.keys(data[0]["currencies"]);
    console.log(data[0]["currencies"][`${currency}`]["name"]);
    console.log(data[0]["region"]);
    console.log(data[0]["subregion"]);
    console.log(data[0]["flags"]["svg"]);
  } catch (error) {
    console.error(error);
  }
}
find_country("bangladesh");
// find_country("turkey");
