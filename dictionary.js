const dictionary = (word) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0f626657bamsh0ef7c86d9b9fba1p174806jsn4059fc13e714',
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };

  fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const wordHeadingElement = document.getElementById('wordheading');
      const definitionElement = document.getElementById('definition');
      
      wordHeadingElement.innerHTML = response.word;
      definitionElement.innerHTML = response.definition.replace(/\d\./g, 'MEAN.<br>');

    })
    .catch((err) => console.error(err));
}

const searchinput = document.getElementById('searchinput');
const searchbtn = document.getElementById('searchbtn');

searchbtn.addEventListener('click', (e) => {
  e.preventDefault();
  dictionary(searchinput.value);
});
