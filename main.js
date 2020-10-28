console.clear();

const can = document.querySelector(".can > img");

const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

TweenLite.set(can, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(can, 1);
moveY(can, -1);
rotate(can, 1);

function rotate(target, direction) {
  
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}



// const floatAnimation = () => {
//          const tlCan = new TimelineMax({repeat:-1});
//          /*Can Animation*/
//         tlCan
//             //move top left
//         .to('.can > img', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
        
//             //move down right
//         .to('.can > img', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})
        
        
//         .to('.can > img', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
        
//         .to('.can > img', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
        
        
//         .to('.can > imgn', 3, { y:'-=50', ease:Power1.easeInOut})
           
//         .to('.can > img', 3, { y:'+=50', ease:Power1.easeInOut})
        
        
//         .to('.can > img', 3, { y:'-=30', ease:Power1.easeInOut})
           
//         .to('.can > img', 3, { y:'+=30', ease:Power1.easeInOut})
        
        
//         .to('.can > img', 2, { y:'-=30', ease:Power1.easeInOut})
           
//         .to('.can > img', 2, { y:'+=30', ease:Power1.easeInOut})
  
//       // TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})

//     }
//     floatAnimation();