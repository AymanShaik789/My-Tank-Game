class Player {
  constructor(){
    this.index = null;

    this.name = null;
    this.xPos = null;
    this.yPos = null;
    this.bulletX = null;
    this.bulletY = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      xPos: this.xPos,
      yPos:this.yPos,
      bulletX:this.bulletX,
      bulletY:this.bulletY
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
