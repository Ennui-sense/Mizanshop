// const title = document.querySelector(".hero__title")
// title.innerHTML = title.textContent.split(" ").map(letter => `<span ${letter.trim() === "" ? "" : 'class="header__title-block"'}>${letter}</span>`).join("")


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
if(ScrollTrigger.isTouch !== 1) {

    // ScrollSmoother.create({
    //     wrapper: ".wrapper",
    //     content: ".content",
    //     smooth: 1,
    //     effects: true
    // })

    gsap.fromTo(".new__title", {x: -100, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: ".new__title",
            start: "-500",
            end: "0",
        }
    })

    gsap.fromTo(".clothes__title", {x: -100, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: ".clothes__title",
            start: "-500",
            end: "0",
        }
    })

    gsap.fromTo(".footer__title", {y: -100, opacity: 0}, {
        opacity: 1, y: 0,
        scrollTrigger: {
            trigger: ".footer__title",
            start: "-300",
            end: "0",
        }
    })

    gsap.fromTo(".information__image--1", {x: 100, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: ".information__image--1",
            start: "-500",
            end: "-250",
        }
    })

    gsap.fromTo(".information__image--2", {x: -100, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: ".information__image--2",
            start: "-500",
            end: "-250",
        }
    })

    let newList = gsap.utils.toArray(".new__list .new__item")
    newList.forEach(item => {
        gsap.fromTo(item, {x: 100, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: "-300",
                end: "0",
            }
        })
    })
}