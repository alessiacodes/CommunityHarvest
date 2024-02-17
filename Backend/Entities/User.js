class User {
    /**
     * @param {Post[]} posts - a list of posts associated with the user
     * @param {Chat[]} chats - a list of chats associated with the user
     */
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.posts = [];
        this.chats = [];
    }

    /**
     * @param {Post} post - a post to append
     */
    addPost(post){
        this.posts.push(post);
    }

    printPost(){
        console.log(this.posts[0].title);
    }
}

module.exports = User;