const API_TOKEN = "bf22a3d841794ffaa63f903613dd928a"

export function getNewsFromApiWithSearchedText (codePays, page) {
    var url = 'https://newsapi.org/v2/top-headlines?' +
            'country='+ codePays + '&' +
            'page='+ page + '&' +
            'apiKey=' + API_TOKEN;


    var urlLequipe = 'https://newsapi.org/v2/everything?sources=lequipe&q=boxe&apiKey=bf22a3d841794ffaa63f903613dd928a'

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error)) 
}

/* export function getNewsDetailFromApi (id) */