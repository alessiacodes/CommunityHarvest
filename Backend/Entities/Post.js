class Post {
    constructor(title, description, quantityAvailable, pickup, delivery, swap) {
        // TODO add photo option
        this.title = title;
        this.description = description;
        this.quantityAvailable = quantityAvailable;
        this.datetime = new Date().toLocaleString();

        this.pickup = pickup;
        this.delivery = delivery;
        this.swap = swap;
    }
    
}

module.exports = Post;