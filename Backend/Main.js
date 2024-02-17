const Post = require('./Entities/Post');
const User = require('./Entities/User');
const Chat = require('./Entities/Chat');
const Feed = require('./Entities/Feed');
const Message = require('./Entities/Message');
// const { auth } = require('express-openid-connect');

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'pE91fj9VMcUPorkDkVlFpSLNw8PGpAKgvD0d7ltcDjKf1REt62B9V5I0VBoQENh4',
//   baseURL: 'http://localhost:3000',
//   clientID: 'gzDOOy4ebMs7DrDilhQIrxyhkOGgx0Vj',
//   issuerBaseURL: 'https://dev-6zn5azqcv8mtz1e7.us.auth0.com'
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

function main() {
    const newH1 = document.createElement("h1");
    newH1.textContent = "Hello!";
    newH1.id = "myH1";
    document.body.append(newH1);
    // user = new User("alessia", "", "");
    // post = new Post("Our Title!", "yummy fooooooood!", " ", " ", false, false);
    // feed = new Feed();
    // feed.addPost(post);
    // feed.populateFeed();
}




main();