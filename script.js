var tl = gsap.timeline();

function valuesetter() {

    gsap.set("#nav a", { y: "-100%", opacity: 0 });
    gsap.set("#home span .child", { y: "100%" });
    gsap.set("#home .def img ", { opacity: 0 });

    document.querySelectorAll("#Visual>g>g>path , #Visual>g>g>polyline ").forEach(function (e) {
        var character = e

        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}

function revealTospan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            let parent = document.createElement("span");
            let child = document.createElement("span");

            parent.classList.add("parent");
            child.classList.add("child");

            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            elem.innerHTML = "";
            elem.appendChild(parent);
        })

}

function loader_tranisition() {
    tl
        .from(" #loader .child span", {
            x: 80,
            duration: 1,
            stagger: .2,
            delay: 2,
            ease: Power3.easeInOut
        })

        .to(" #loader .parent .child", {
            y: "-100%",
            duration: 1,
            // delay: 1,
            ease: Circ.easeInOut
        })

        .to("#loader", {
            height: 0,
            duration: 2,
            ease: Expo.easeInOut
        })

        .to("#green", {
            height: "100%",
            duration: 2,
            top: 0,
            delay: -2,
            ease: Expo.easeInOut
        })

        .to("#green", {
            height: "0vh",
            duration: 1,
            delay: -.5,
            ease: Expo.easeInOut,
            onComplete: function () {
                animatehomepage();
            }
        })

}

function animate_svg() {


    gsap.to("#Visual>g>g>path , #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut,
    })
}

function animatehomepage() {
    var tl = gsap.timeline();

    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut
    })

        .to("#home .parent .child", {
            y: 0,
            stagger: .1,
            duration: 1.5,
            ease: Expo.easeInOut
        })

        .to("#home .def img", {
            opacity: 1,
            ease: Expo.easeInOut,
            delay: -.5,
            onComplete: function () {
                animate_svg();
            }
        })
}

revealTospan();
valuesetter();
loader_tranisition();