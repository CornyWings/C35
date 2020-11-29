class Form{

    constructor(){

    }
    display(){
        var title= createElement("h1");
        title.html("CAR RACING GAME");
        title.position(250,150);
        var input= createInput("name");
        input.position(250,250);
        var button= createButton("play");
        button.position(250,350);
        var greeting= createElement("h3");

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name= input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello! "+ name);
            greeting.position(250,500);
        });

    }
}

