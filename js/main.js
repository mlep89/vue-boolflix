var root = new Vue({
    el: '#root',
    data: {
    films: [],
    series: [],
    userSearch: '',
    },
    methods: {
        searchFilm: function(userSearch){
            if (userSearch != '') {
                axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=e1e83484b58b02a9d475b9cb41829bfe&language=it-IT&page=1&include_adult=false&query='+ this.userSearch)
                .then( (response) => {
                    response.data.results.forEach(film => {
                        film.vote_average = Math.ceil(film.vote_average)/2;
                    })
                    this.films = response.data.results;
                })
            }
            else {
                this.films = [];
            }
        },
        searchSerie: function(userSearch){
            if (userSearch != '') {
                axios
                .get('https://api.themoviedb.org/3/search/tv?api_key=e1e83484b58b02a9d475b9cb41829bfe&language=it-IT&page=1&include_adult=false&query='+ this.userSearch)
                .then( (response) => {
                    response.data.results.forEach(serie => {
                        serie.vote_average = Math.ceil(serie.vote_average)/2;
                    })
                    this.series = response.data.results;
                })
            }
            else {
                this.series = [];
            }
        },
        starValue: function(){
            for (i=0; i < 6; i++) {
                
            }
        }
    }
    });


    