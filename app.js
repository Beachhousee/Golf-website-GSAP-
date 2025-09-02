const blru = document.querySelector("#cursor-blur");
const crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
  console.log(dets.x, dets.y);
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blru.style.left = dets.x -250 + "px";
  blru.style.top = dets.y -250  + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    elem.style.color = "black";
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
    elem.style.color = "white";
   
  });
});

gsap.to("#nav", {
  backgroundColor: "black",

  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
    // markers: true,
  },
});
gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2, // it decides how much time it will take i
    // markers: true,
  },
});

gsap.from("#about-us img,#about-us-in",{
y:90,
opacity:0,
duration:1,
scrollTrigger:{
  trigger:"#about-us",
  scroller:"body",
  start:"top 60%",
  end:"top 48%",
  scrub:3,
  // markers:true,
}});