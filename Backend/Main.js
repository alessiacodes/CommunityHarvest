const Post = require('./Entities/Post');
const User = require('./Entities/User');

function main() {
    let post1 = new Post("fake title", "", 2, false, false, false);
    let newUser = new User("alessia", "", "");
    newUser.addPost(post1);
    newUser.printPost();
}


main();