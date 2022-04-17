class Movie {
    constructor(name, info, rating) {
        this.name = name;
        this.info = info;
        this.rating = rating;
    }
    set movieName(name) {
        this.name = name;
    }
    set movieInfo(info) {
        this.info = info;
    }
    set movieRating(rating) {
        this.rating = rating;
    }
    get movieName() {
        return this.name;
    }
    get movieInfo() {
        return this.info;
    }
    get movieRating() {
        return this.rating;
    }
    review() {
        if (this.rating >= 4.5) {
            return 'Hay';
        }
        else {
            return 'Chưa hay';
        }
    }
}

export default Movie;