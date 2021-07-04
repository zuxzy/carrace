class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
    }
    getCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    getRank(){
        database.ref("playerRank").on("value", function(data){
            playerRank = data.val();
        })
    }
    updateRank(rank){
        database.ref('/').update({
            playerRank: rank
        })
    }
    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static getPlayerInfo(){
        database.ref('players').on("value", function(data){
            allPlayers = data.val();
        })
    }
}