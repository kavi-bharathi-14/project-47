class Player {
    constructor(){
     
      this.distance = 0;
      this.name = null;
      
    }
  
   
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      });
    }
  
   
  }
  