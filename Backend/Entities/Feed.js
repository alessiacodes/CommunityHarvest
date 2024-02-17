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
    
        posts.forEach(post => {
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

module.exports = Feed;
