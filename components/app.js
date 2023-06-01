gsap.registerPlugin(ScrollTrigger);

gsap.to("#ball1", {
    x: 0,
    y: -220,
    duration: 2,
    scrollTrigger:  { 
        trigger: ".product",
        start: "top 90%",
        scrub: 4,
    }
});

gsap.to("#ball2", {
    x: 0,
    y: -300,
    duration: 2,
    scrollTrigger: { 
        trigger: ".product",
        start: "top 90%",
        scrub: 5,
    }
});

gsap.to("#ball3", {
    x: 0,
    y: -350,
    duration: 2,
    scrollTrigger: { 
        trigger: ".product",
        start: "top 90%",
        scrub: 4,
    }
});

gsap.to("#ball4", {
    x: 0,
    y: -450,
    duration: 2,
    scrollTrigger: { 
        trigger: ".product",
        start: "top 90%",
        scrub: 5,
    }
});
