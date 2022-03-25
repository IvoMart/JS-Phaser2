const GamePlayManager = {
    init: function() {
        console.log('init');
    },
    preload: function() {
        console.log('preload');
    },
    create: function() {
        console.log('create');
    },
    update: function() {
        console.log('update');
    }
};


//@ts-ignore 
let game = new Phaser.Game(1366, 668, Phaser.AUTO);

//@ts-ignore
game.state.add = ("InitGame", GamePlayManager);
game.state.start = ('InitGame');