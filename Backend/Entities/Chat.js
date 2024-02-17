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

module.exports = Chat;