document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    let page1Fn = () => {
        let tl = gsap.timeline();
        tl.to("#page1 img", {
            scale: 1.5,
            opacity: 0,
            duration: 2,
            scrollTrigger: {
                trigger: "#page1 img",
                start: "bottom 100%",
                end: "bottom 40%",
                scrub: 1,
                pin: "#page1 img",
            }
        }, "a").to("#page1 p", {
            opacity: 0,
            scrollTrigger: {
                trigger: "#page2",
                start: "top bottom",
                end: "top 75%",
                pin: "#page1 p",
                scrub: 1,
            }
        }, "a").to(".lineOne", {
            x: 75,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: "#page2",
                pinSpacing: true,
                start: "top bottom",
                end: "top 75%",
                pin: ".lineOne",
                scrub: 1,
            }
        }, "a").to(".lineTwo", {
            x: -75,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: "#page2",
                start: "top bottom",
                end: "top 75%",
                pin: ".lineTwo",
                scrub: 1,
            }
        }, "a").to(".lineThree", {
            x: 75,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: "#page2",
                start: "top bottom",
                end: "top 75%",
                pin: ".lineThree",
                scrub: 1,
            }
        }, "a")
    };

    page1Fn();

    let page2Fn = () => {

        let button = document.querySelector(".button");
        let tl3 = gsap.timeline();
        button.addEventListener("mouseenter", () => {
            console.log("entered");
            tl3.to(".yup h3", {
                y: "-22px",
                ease: Expo.easeInOut,
                stagger: .05,
            }, "d").to(".yep h3", {
                y: "-22px",
                stagger: 0.05,
                ease: Expo.easeInOut,
                delay: 0.1
            }, "d").to(".arrow i", {
                scale: 1,
                ease: Expo.easeInOut,
                opacity: 1
            }, "d").to(".arrow", {
                scale: 1,
            }, "d")
        })
        button.addEventListener("mouseleave", () => {
            console.log("entered");
            tl3.to(".yep h3", {
                y: "0",
                ease: Expo.easeInOut,
                stagger: 0.05,
            }, "b").to(".yup h3", {
                y: "0",
                stagger: .05,
                ease: Expo.easeInOut,
                delay: 0.1,
            }, "b").to(".arrow i", {
                scale: .4,
                ease: Expo.easeInOut,
                opacity: 0
            }, "b").to(".arrow", {
                scale: .4,
                ease: Expo.easeInOut,
            }, "b")
        })

        let tl2 = gsap.timeline();

        tl2.from(".page2Left img", {
            opacity: 0,
            scrollTrigger: {
                trigger: "#page2",
                start: "top 50%",
                scrub: 1
            }
        })

        tl2.to(".char", {
            color: "#fff",
            stagger: .2,
            delay: 1,
            scrollTrigger: {
                trigger: ".line",
                start: "top 75%",
                end: "top 20%",
                scrub: .1
            }
        }, "a").to(".page2Left img", {
            scale: 1,
            scrollTrigger: {
                trigger: ".page2Left img",
                start: "top 97%",
                end: "bottom 5%",
                scrub: 1,

            }
        }, "a")




    }

    page2Fn();

    let page3Fn = () => {


        gsap.to(".page3Image img", {
            scale: 1,
            scrollTrigger: {
                trigger: ".page3Image img",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        })

        let tl32 = gsap.timeline();

        ScrollTrigger.create({
            trigger: "#page3",
            start: "top top",
            pin: "#page3",
            end: "+=200%"
        }
        )

        tl32.to(".page31", {
            top: "-100%",
            duration: 1,
            ease: Expo.easeIn,
            scrollTrigger: {
                trigger: "#page3",
                start: "top bottom",
                scrub: 1
            }

        }).to(".page32Wrapper", {
            height: "100%",
            width: "100%",
            scrollTrigger: {
                trigger: ".page31",
                start: "+=100%",
                scrub: 1,
                end: "+=100%",
            }
        }, "s").to(".p32Row1", {
            x: 500,
            scrollTrigger: {
                trigger: ".page31",
                start: "+=100%",
                scrub: 1,
                end: "+=100%",
            }

        }).to(".p32Row3", {
            x: -500,
            scrollTrigger: {
                trigger: ".page31",
                start: "+=100%",
                scrub: 1,
                end: "+=100%",
            }

        }).to(".page32Wrapper", {
            scale: 1.7
        })


    }

    page3Fn();

    let page4Fn = () => {
        gsap.from(".page4Para", {
            y: 25,
            opacity: 0,
            duration: .7,
            scrollTrigger: {
                trigger: ".page4Para",
                start: "bottom 90%",
                scrub: 1,
                end: "bottom 80%"
            }
        })

        let tl5 = gsap.timeline();
        tl5.to(".vowel", {
            opacity: 1,
            stagger: -.1,
            scrollTrigger: {
                trigger: ".page4Heading",
                start: "bottom bottom",
                end: "bottom 85%",
                scrub: 1
            }
        }, 'a    ').to(".cons", {
            opacity: 1,
            stagger: -.1,
            delay: .5,
            scrollTrigger: {
                trigger: ".page4Heading",
                start: "bottom bottom",
                end: "bottom 85%",
                scrub: 1
            }
        }, "a").to(".page4Button", {
            opacity: 1,
            scale: 1,
            ease: Expo.easeInOut,

            duration: .5,
            scrollTrigger: {
                trigger: ".page4Button",
                start: "bottom 80%",
            }
        })

        let page4Button = document.querySelector(".page4Button");
        page4Button.addEventListener("mouseenter", () => {
            gsap.to(".p4Arrow", {
                scale: 1,
            })
            gsap.to(".p4Arrow i", {
                scale: 1,
            })
            let tl6 = gsap.timeline();
            tl6.to(".p4TLine1 h3", {
                y: "-22px",
                ease: Expo.easeInOut,
                stagger: .1
            }, 'a').to(".p4TLine2 h3", {
                y: "-22px",
                ease: Expo.easeInOut,
                stagger: .1,
                delay: .1
            }, 'a')
        })
        page4Button.addEventListener("mouseleave", () => {
            gsap.to(".p4Arrow", {
                scale: .3,
            })
            gsap.to(".p4Arrow i", {
                scale: 0,
            })
            let tl6 = gsap.timeline();
            tl6.to(".p4TLine1 h3", {
                y: "0px",
                ease: Expo.easeInOut,
                stagger: .1,
                delay: .1
            }, 'a').to(".p4TLine2 h3", {
                y: "0px",
                ease: Expo.easeInOut,
                stagger: .1,
            }, 'a')
        })

    }

    page4Fn();

    let loaderFn = () => {
        let tlL = gsap.timeline();
        tlL.to("#loader img", {
            opacity: 1,
            stagger: 0.15
        }, "a").to("#loader img", {
            opacity: 0,
            stagger: 0.15,
            delay: 0.15
        }, "a").to("#loader", {
            top: "-100%",
            duration: 1,
            ease: Expo.easeOut
        })
    }

    loaderFn();

    let navContent = () => {
        let childContainer = document.querySelectorAll(".childContainer");
        let navChilds1 = document.querySelectorAll(".navChild1");
        let navChilds2 = document.querySelectorAll(".navChild2");

        childContainer.forEach((container, idx) => {
            container.addEventListener("mouseenter", () => {
                let navTl = gsap.timeline();
                navTl.to(navChilds1[idx], {
                    y: "-5vw",
                    duration: 0.2
                }, "nav").to(navChilds2[idx], {
                    y: "-5vw",
                    duration: 0.2,
                    delay: 0.1
                }, "nav")
            })
        })

        childContainer.forEach((container, idx) => {
            container.addEventListener("mouseleave", () => {
                let navTl = gsap.timeline();
                navTl.to(navChilds1[idx], {
                    y: "0",
                    duration: 0.2,
                    delay: 0.1,
                }, "nav").to(navChilds2[idx], {
                    duration: 0.2,
                    y: "0",
                }, "nav")
            })
        })

        let navLinks = document.querySelectorAll(".nCright p");
        let underline = document.querySelectorAll(".underline");
        navLinks.forEach((link, index) => {
            link.addEventListener("mouseenter", () => {
                gsap.to(underline[index], {
                    left: 0,
                    duration: 0.2
                })
            })
            link.addEventListener("mouseleave", () => {
                let ultl = gsap.timeline();
                ultl.to(underline[index], {
                    left: "100%",
                    duration: 0.2
                }).set(underline[index], {
                    left: "-100%"
                })
            })
        })

        let menuButton = document.querySelector(".nR button");
        let menu = true;
        menuButton.addEventListener("click", () => {
            if (menu == true) {
                let ultl = gsap.timeline();
                ultl.to(menuButton.childNodes[1], {
                    top: "30%"
                }, "lines").to(menuButton.childNodes[3], {
                    top: "30%"
                }, "lines").to("#navContent", {
                    height: "100vh"
                }, "lines").to(menuButton.childNodes[1], {
                    rotate: 45
                }, "rotate").to(menuButton.childNodes[3], {
                    rotate: -45,
                }, "rotate").to(".navChild1", {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1
                }, "rotate").to(".nCright", {
                    y: 0,
                    opacity: 1,
                    delay: .5
                }, "rotate")

                menu = false;
            } else {
                let ultl = gsap.timeline();
                ultl.to(menuButton.childNodes[1], {
                    rotate: 0
                }, "rotate").to(menuButton.childNodes[3], {
                    rotate: 0,
                }, "rotate").to(".nCright", {
                    y: -50,
                    opacity: 0,
                }, "rotate").to(".navChild1", {
                    y: -30,
                    opacity: 0,
                    delay: 0.5,
                    stagger: 0.1
                }, "rotate").to(menuButton.childNodes[1], {
                    top: "25%"
                }, "lines").to(menuButton.childNodes[3], {
                    top: "35%"
                }, "lines").to("#navContent", {
                    height: 0
                }, "lines")

                menu = true
            }
        })
    }

    navContent();

    let p5Stripes = document.querySelectorAll(".page5Stripes");

    p5Stripes.forEach((strip , idx)=>{
        strip.addEventListener("mouseenter",()=>{
            console.log(strip);
            gsap.to(strip,{
                color : "grey"
            })
        })
    })

    p5Stripes.forEach((strip , idx)=>{
        strip.addEventListener("mouseenter",()=>{
            gsap.to(strip,{
                color : "#fff"
            })
        })
    })

})