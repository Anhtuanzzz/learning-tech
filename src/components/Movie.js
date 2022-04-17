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
        if (this.rating >= 4.7) {
            return 'Rất Hay';
        }
        if (this.rating >= 4.0) {
            return 'Hay';
        }
        if (this.rating >= 3.0) {
            return 'Chưa hay';
        }
        return 'Dở';
    }
}

export default Movie;