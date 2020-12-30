class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
   player1.scale = 0.06;
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    player2.scale = 0.06;
    players=[player1,player2];
    playerGroup.add(player1);
    playerGroup.add(player2);

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
              //   image( 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
               //  drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
             
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
    
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
                       
                if(virusGroup.isTouching(player1)){

                    textSize(40)
                    text("Game Ended : Player2 Wins ",100,300);
                    console.log("Game Ended");
                    virus.destroy();
                       player1.destory();
                       player2.destroy();
                }

                      
                if(virusGroup.isTouching(player2)){

                    textSize(40)
                    text("Game Ended : Player1 Wins ",100,300);
                    console.log("Game Ended");
                    virus.destroy();
                       player1.destory();
                       player2.destroy();
                }

                 if (frameCount % 20 === 0) {
                    viruses = createSprite(random(100, 1000), 0, 100, 100);
                    viruses.velocityY = 6;
                    viruses.scale = 0.07;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1:  viruses.addImage(" virus1", virus1_img);
                         break;
                         case 2:  viruses.addImage(" virus2",  virus2_img);
                         break;
                         case 3:  viruses.addImage(" virus3",  virus3_img);
                         break;
                         case 4:  viruses.addImage(" virus4",  virus4_img);
                         break;
                         case 5:  viruses.addImage( "virus5",  virus5_img);
                         break;
                     }
                     virusGroup.add(viruses);
                
             
                   }
        
                  if (player.index !== null) {
                    for(var i=0;i<virusGroup.length;i++){
                        var vg =virusGroup.get(i);
                        if(vg){
                        
                        if(vg.isTouching(playerGroup)){
                           
                            vg.destroy()
                           player.score=player.score+1;
                           Player1 = Player1 + 1
                           Player2 = Player2 + 1
                           player.update();
                        }
                    }
                    }
                       
                  }
                  drawSprites();
    }

    end(){
       console.log("Game Ended");
       fill("red");    
      textSize(40)
      text("Game Ended : ",100,300);
    
    }
}