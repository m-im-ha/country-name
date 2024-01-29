async function find_country(country) {
  try {
    let response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    let data = await response.json();
    console.log(data);
    console.log(data[0]["flags"]["svg"]);
  } catch (error) {
    console.error(error);
  }
}
find_country("bangladesh");
find_country("turkey");
