class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
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

  update() {
    var playerIndex = "players/player"+this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance
    });
  }
  
/*static function it is a function which is directly called by class. we do not call
this function through an object*/
  static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data)=>{
      allPlayers = data.val()
    });
  }

}