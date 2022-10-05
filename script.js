const container = document.querySelector(".container");

for(var i = 0; i < 50; i++){
    const blocks = document.createElement("div");
    blocks.classList.add("block");
    container.appendChild(blocks);
}

const animationBlocks = () => {
    //anime.min.jsを使用する際は以下の書き方で
    anime({
        targets: ".block",
        translateX: function() {
            //x座標の-800から700までの範囲で生成する
            return anime.random(-800, 700);
        },
        translateY: function() {
            return anime.random(-500, 500);
        },
        scale: function() {
            return anime.random(1,3);
        },
        duration: 1500,
        delay: anime.stagger(15),
        complete: animationBlocks,
    })
}
animationBlocks();