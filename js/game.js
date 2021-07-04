class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val();
        });
    }
    updateState(state){
        database.ref('/').update({
            gameState: state
        })
    }
    async start(){
        if (gameState === 0){
            player = new Player();
            var playerCountReference = await database.ref("playerCount").once("value")
            if(playerCountReference.exists()){
                playerCount = playerCountReference.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);

        car1.addImage("car1", car1Image);
        car2.addImage("car1", car2Image);
        car3.addImage("car1", car3Image);
        car4.addImage("car1", car4Image);
        cars = [car1, car2, car3, car4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        player.getRank();
        if(allPlayers != undefined){
            background(groundImage);
            image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5)
            var index = 0;
            var x = -10;
            var y = 0;
            for(var i in allPlayers){
                index = index + 1;
                x = x + 400;
                y = displayHeight - allPlayers[i].distance
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === player.index){
                    stroke(10);
                    fill("red");
                    ellipse(x, y, 60, 60);
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                }
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index != null){
            player.distance += 50
            player.update();
        }
        if(player.distance > 9000){
            gameState = 2;
            playerRank = playerRank + 1;
            player.updateRank(playerRank);
            console.log(playerRank);
        }
        drawSprites();
    }
    end(){
    }
}