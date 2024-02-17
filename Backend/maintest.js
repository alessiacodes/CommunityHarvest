class Chat{
    /**
     * 
     * @param {User} user1 
     * @param {User} user2 
     * @param {String[]} messages
     */
    constructor(user1, user2){
        this.user1 = user1;
        this.user2 = user2;
        this.messageHistory = [];
        this.recentMessages = [];
    }

    /**
     * 
     * @param {String} message 
     */
    addMessage(message){
        this.messageHistory.push(message);
    }

    getRecentMessagesFromUserPerspective(user){
        
    }

}

class Feed{
    constructor(){
        this.posts = [];
    }

    /**
     * @param {Post} post 
     */
    addPost(post){
        this.posts.push(post);
    }

    populateFeed() {
        const feed = document.getElementById('feed');
    
        this.posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.description}</p>
            `;
            feed.appendChild(postElement);
        });
    }

}

class Message{

    /**
     * 
     * @param {User} sender 
     * @param {User} reciever 
     * @param {User} message 
     */
    constructor(sender, reciever, message){
        this.sender = sender;
        this.reciever = reciever;
        this.message = message;
        this.datetime = new Date().toLocaleString();
    }
}

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

    addChat(chat){
        this.chats.push(chat);
    }
}

function main() {
    user = new User("alessia", "", "");
    post = new Post("Our Title!", "yummy fooooooood!", " ", " ", false, false);
    feed = new Feed();
    feed.addPost(post);
    feed.populateFeed();
}

main();