var root = new Vue({
    el: '#root',
    data: {
    films: [],
    series: [],
    userSearch: 'yuppies',
    },
    methods: {
        searchFilm: function(){
        axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=e1e83484b58b02a9d475b9cb41829bfe&language=it-IT&page=1&include_adult=false&query='+ this.userSearch)
        .then( (response) => {
            this.films = response.data.results;
        })
        },
        searchSerie: function(){
            axios
            .get('https://api.themoviedb.org/3/search/tv?api_key=e1e83484b58b02a9d475b9cb41829bfe&language=it-IT&query='+ this.userSearch)
            .then( (response) => {
                this.series = response.data.results;
            })
        }
    },
    mounted() {
        this.searchFilm();
    }
    });