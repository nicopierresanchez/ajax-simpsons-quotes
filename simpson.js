function fetchquotesJSON() {
  
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data[0];
      })
      .then(function(quotes) {
        console.log('data decoded from JSON:', quotes);
        // Build a block of HTML
        const simpsonHtml = `
          <p>${quotes.quote}</p>
          <p><storng>${quotes.character} </strong></p>
          <img src="${quotes.image} ${quotes.characterDirection}" onClick = "fetchquotesJSON()" />
        `;
        document.querySelector('#simpson').innerHTML = simpsonHtml;
      });
  }
  fetchquotesJSON();
  
  
