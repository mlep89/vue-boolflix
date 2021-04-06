var root = new Vue({
    el: '#root',
    data: {
    films: [],
    },
    mounted() { 
        axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=e1e83484b58b02a9d475b9cb41829bfe&language=it-IT&page=1&include_adult=false&query=yuppies')
        .then(function (response) {
            films = response.data.results;
            console.log(films);
        })
    }
    });