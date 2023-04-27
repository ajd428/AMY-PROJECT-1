import {gsap} from "gsap"

//gsap.from("#logo", {duration:2.25, y:"-=80", delay:0.25});

//gsap.from("nav li", {duration:1.75, x:"+=450", stagger: 0.25, delay:0.25});

//gsap.from("#content", {duration:2.25, scale:1.5, rotation:180});

//gsap.from("#hero-content", {duration:0.75, yoyo:true, repeat:2, repeatDelay:0.05, scale:1.5});



//ease:"back.out"


//Staggers

//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:0.1});

//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each0.1}});

//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, from:"start"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, from:"edge"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, from:"center"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, from:"random"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, from:"end"}});

//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, grid:[3,4], from:"start"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, grid:[3,4], from:"edge"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, grid:[3,4], from:"center"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, grid:[3,4], from:"random"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, grid:[3,4], from:"end"}});

//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, grid:[3,4], from:"start", axis:"y"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, grid:[3,4], from:"edge", axis:"y"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, grid:[3,4], from:"center", axis:"y"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, grid:[3,4], from:"random", axis:"y"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{each:0.1, grid:[3,4], from:"end", axis:"y"}});


//amount is how long the duration of the stagger will last by seconds

//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, from:"start"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, from:"edge"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, from:"center"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, from:"random"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, from:"end"}});

//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, grid:[3,4], from:"start"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, grid:[3,4], from:"edge"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, grid:[3,4], from:"center"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, grid:[3,4], from:"random"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, grid:[3,4], from:"end"}});

//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, grid:[3,4], from:"start", axis:"y"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, grid:[3,4], from:"edge", axis:"y"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, grid:[3,4], from:"center", axis:"y"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, grid:[3,4], from:"random", axis:"y"}});
//gsap.to("#logo", {duration:0.5, scale:0.5, delay:1, stagger:{amount:2, grid:[3,4], from:"end", axis:"y"}});


//Timelines

//let mainTl = gsap.timeline();

//mainTl.from("nav li", {duration:1.75, x:"+=450", stagger: 0.25, delay:0.25}, "<")
//.from("#content", {duration:2.25, scale:1.5, rotation:180}, "<")
//.from("#logo", {duration:2.25, y:"-=80", delay:0.25}, "<")
//;

//let mainTl = gsap.timeline({delay:1 paused:true});
//let mainTl = gsap.timeline({delay:1 resume:true});

//let mainTl = gsap.timeline({delay:1});

//Chaining

//.nTl.to("#logo", {duration:0.5, scale:0.5})
    //.to(".class", {duration:0.5, rotation:180}, "<" OR ">-0.5")
    //.to(".class", {duration:1, backgroundColor:"#000"}, "+=3")
//;

//"<" less than is used to go at the same time as the one before
//">" greater than is used to go directly after the one before or you can add an offset to go a certain time after the one before has started (add or subtract)


//How to start the project


//function logoAni(){
    //let tl = gsap.timeline({delay:1});
    
    //tl.to("#logo", {duration:0.5, scale:0.5, ease:"bounce.out"})
    //.to("#logo", {duration:0.5, rotation:180})
    //;

    //return tl;
//}


//mainTl.add(logoAni())
//.add(otherfunction()) OR .add(otherfunction(), "<")
//;


//Media Media

let mainTl = gsap.timeline();

function logoAni(){
    let tl = gsap.timeline({delay:1});
    let mm = gsap.matchMedia();

    mm.add("(max-width:767px)", () =>{
    tl.to("#logo", {duration:1.25, rotation:360})
    });

    mm.add("(min-width:768px)", () =>{
        tl.to("#logo", {duration:1.25, scale:0.5, ease:"bounce.out"}, "<")
        tl.to("#logo", {duration:1.25, scale:1, ease:"bounce.out"})
       });


    return tl;
}   

function heroAni(){
    let tl = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add("(max-width:767px)", () =>{
    tl.to("#hero-content", {duration:1, scale:0.5, ease:"bounce.out"}, "<")
    .to("#hero-content", {duration:1, scale:1.5, ease:"bounce.out"}, "<")
    });

    mm.add("(min-width:768px)", () => {
    tl.to("#hero-content", {duration:0.75, yoyo:true, repeat:2, repeatDelay:0.05, scale:1.5}, "<")
    });

    return tl;
}

function regAni(){
    let tl = gsap.timeline();

    mainTl.from("nav li", {duration:1.75, x:"+=450", stagger: 0.25, delay:0.25}, "<")
    .from("#content", {duration:2.25, scale:0.5, rotation:360}, "<");

    return tl;
}

mainTl.add(logoAni())
.add(heroAni())
.add(regAni())
;

//WEEK 4 ERROR:
//mainTl.from("nav li", {duration:1.75, x:"+=450", stagger: 0.25, delay:0.25}, "<")
//.from("#content", {duration:2.25, scale:1.5, rotation:180}, "<")

/////////////////

//gsap.from("#hero-content", {duration:0.75, yoyo:true, repeat:2, repeatDelay:0.05, scale:1.5});
//gsap.from("nav li", {duration:1.75, x:"+=450", stagger: 0.25, delay:0.25});

//OR .add(otherfunction(), "<")
