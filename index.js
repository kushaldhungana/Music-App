window.addEventListener("load", ()=>{
  const sounds= document.querySelectorAll(".sound");
  const pads= document.querySelectorAll(".pads div");
  const visual= document.querySelectorAll(".visual");
  const colors=[
    "#60d394",
    "#d36060",
    "#c060d3",
    "green",
    "yellow",
    "black"
  ];

  pads.forEach((pad,index) => {
    pad.addEventListener("click",function(){
      sounds[index].currentTime=0;
      sounds[index].play();
      createBubble(index);
    });
  });


  //A function that creates bubbles
  const createBubble= index => {
    const bubble= document.createElement("div");
    visual[0].appendChild(bubble);
    bubble.style.backgroundColor= colors[index];
    bubble.style.animation= "jump 1s ease";
    bubble.addEventListener("animationend",function(){
      visual[0].removeChild(this);
    });
  };
});
