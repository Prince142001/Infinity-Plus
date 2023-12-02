const primaryHeader = document.querySelector(".home-sec nav");
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher);

const data = {
    navData: [
        {
            href: "#",
            menuLink: "home",
        },
        {
            href: "#",
            menuLink: "features",
        },
        {
            href: "#",
            menuLink: "screenshots",
        },
        {
            href: "#",
            menuLink: "pricing",
        },
        {
            href: "#",
            menuLink: "download",
        },
        {
            href: "#",
            menuLink: "contact",
        }
    ],
    secTwoData: [
        {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" > <path fill="#00bfff" d="M18.5 0h-14A2.5 2.5 0 0 0 2 2.5v19A2.5 2.5 0 0 0 4.5 24h14a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z" /></svg >',
            h2: "Data in cloud",
            p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
                        <circle cx="256" cy="256" r="192" fill="none" stroke="#00bfff" stroke-linecap="round"
                            stroke-miterlimit="10" stroke-width="32" />
                        <path fill="none" stroke="#00bfff" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="32"
                            d="m256 175.15l-76.09 63.83L200 320h112l20.09-81.02L256 175.15zm76.09 63.83l52.87-22.4l25.78-73.26M447 269.97l-62.04-53.39m-205.05 22.4l-52.87-22.4l-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64m-128-.01l64 42.65M312 320l28 48l-28 71m98.74-71H342m-142-48l-28 48l28.37 71.5M101.63 368H172" />
                    </svg>`,
            h2: "Data in cloud",
            p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <g fill="none">
                            <path
                                d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                            <path fill="#00bfff"
                                d="M20.25 3.532a1 1 0 0 1 1.183 1.329l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235l-1.203 1.202c-.636.636-1.724.186-1.724-.714v-3.288L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5Zm-2.114 4.305l-7.998 6.607l3.97 3.798l4.028-10.405Zm-1.578-1.29L4.991 9.52l3.692 3.53l7.875-6.505Z" />
                        </g>
                    </svg>`,
            h2: "Data in cloud",
            p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <path fill="#00bfff"
                            d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6m0 2h7v5h5v11H6V4m2 8v2h8v-2H8m0 4v2h5v-2H8Z" />
                    </svg>`,
            h2: "Data in cloud",
            p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
        }
    ],

    secFourData: [
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg"
                        width="25" height="25" viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364Z" />
                    </svg>`,
            h2: "made with love",
            p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing."
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg"
                        width="25" height="25" viewBox="0 0 512 512">
                        <path fill="#ffffff"
                            d="M472 80H40a24.028 24.028 0 0 0-24 24v240a24.028 24.028 0 0 0 24 24h432a24.028 24.028 0 0 0 24-24V104a24.028 24.028 0 0 0-24-24Zm-8 256H48V112h416Z" />
                        <path fill="#ffffff"
                            d="M144 272h160v32H144zm-64 0h32v32H80zm320 0h32v32h-32zm-64 0h32v32h-32zm32-64h32v32h-32zm-64 0h32v32h-32zm-64 0h32v32h-32zm-64 0h32v32h-32zm-64 0h32v32h-32zm224-64h32v32h-32zm64 0h32v32h-32zm-128 0h32v32h-32zm-64 0h32v32h-32zm-64 0h32v32h-32zm-64 0h32v32H80z" />
                    </svg>`,
            h2: "made with love",
            p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing."
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg"
                        width="25" height="25" viewBox="0 0 24 24">
                        <g fill="none" fill-rule="evenodd">
                            <path
                                d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                            <path fill="#ffffff"
                                d="M19 4.741V8a3 3 0 1 1 0 6v3c0 1.648-1.881 2.589-3.2 1.6l-2.06-1.546A8.658 8.658 0 0 0 10 15.446v2.844a2.71 2.71 0 0 1-5.316.744l-1.57-5.496a4.7 4.7 0 0 1 3.326-7.73l3.018-.168a9.344 9.344 0 0 0 4.19-1.259l2.344-1.368C17.326 2.236 19 3.197 19 4.741ZM5.634 15.078l.973 3.407A.71.71 0 0 0 8 18.29v-3.01l-1.56-.087a4.723 4.723 0 0 1-.806-.115ZM17 4.741L14.655 6.11A11.343 11.343 0 0 1 10 7.604v5.819c1.787.246 3.488.943 4.94 2.031L17 17V4.741ZM8 7.724l-1.45.08a2.7 2.7 0 0 0-.17 5.377l.17.015l1.45.08V7.724ZM19 10v2a1 1 0 0 0 .117-1.993L19 10Z" />
                        </g>
                    </svg>`,
            h2: "made with love",
            p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing."
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg"
                        width="25" height="25" viewBox="0 0 512 512">
                        <circle cx="256" cy="256" r="192" fill="none" stroke="#ffffff" stroke-linecap="round"
                            stroke-miterlimit="10" stroke-width="32" />
                        <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="32"
                            d="m256 175.15l-76.09 63.83L200 320h112l20.09-81.02L256 175.15zm76.09 63.83l52.87-22.4l25.78-73.26M447 269.97l-62.04-53.39m-205.05 22.4l-52.87-22.4l-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64m-128-.01l64 42.65M312 320l28 48l-28 71m98.74-71H342m-142-48l-28 48l28.37 71.5M101.63 368H172" />
                    </svg>`,
            h2: "made with love",
            p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing."
        }
    ],

    secFiveSlideShowData: [
        {
            h2: "manage everything in one place",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum ante vel aliquet euismod. Curabitur accumsan vitae augue vitae eleifend.Nam nisl massa, malesuada id imperdiet ac."
        },
        {
            h2: "manage everything in one place",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum ante vel aliquet euismod. Curabitur accumsan vitae augue vitae eleifend.Nam nisl massa, malesuada id imperdiet ac."
        },
        {
            h2: "manage everything in one place",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum ante vel aliquet euismod. Curabitur accumsan vitae augue vitae eleifend.Nam nisl massa, malesuada id imperdiet ac."
        },
        {
            h2: "manage everything in one place",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum ante vel aliquet euismod. Curabitur accumsan vitae augue vitae eleifend.Nam nisl massa, malesuada id imperdiet ac."
        },
    ],

    secSixData: [
        {
            img: "assets/img/mobile-ss.png",
            alt: "ss"
        },
        {
            img: "assets/img/mobile-ss.png",
            alt: "ss"
        },
        {
            img: "assets/img/mobile-ss.png",
            alt: "ss"
        }
    ]
}

for (const i of data.navData) {
    let li = document.createElement("li");

    let a = document.createElement("a");
    a.classList.add("text-base", "font-normal", "text-white", "px-3", "py-2", "capitalize");
    a.setAttribute("href", i.href)
    a.innerHTML = i.menuLink;
    li.appendChild(a);

    document.querySelector(".home-sec nav ul").appendChild(li);
}

for (const i of data.secTwoData) {
    let li = document.createElement("li");
    li.classList.add("rounded-md", "overflow-hidden", "p-10", "text-white");

    let div = document.createElement("div");
    div.classList.add("rounded-full", "flex", "justify-between", "items-center", "p-5", "bg-white");
    div.innerHTML = i.svg;
    li.appendChild(div);

    let h2 = document.createElement("h2");
    h2.classList.add("py-8", "text-xl", "font-semibold")
    h2.innerText = i.h2;
    li.appendChild(h2);

    let p = document.createElement("p");
    p.classList.add("leading-7");
    p.innerText = i.p;
    li.appendChild(p);

    document.querySelector(".sec-2 ul").appendChild(li);
}

for (const i of data.secFourData) {
    let li = document.createElement("li");
    li.classList.add("px-10", "pt-10", "pb-10", "text-black", "bg-white", "relative");

    let div = document.createElement("div");
    div.classList.add("p-3", "primary-bg-color", "absolute", "left-12", "-top-7");
    div.innerHTML = i.svg;
    li.appendChild(div);

    let h2 = document.createElement("h2");
    h2.classList.add("py-5", "text-xl", "font-semibold", "capitalize")
    h2.innerText = i.h2;
    li.appendChild(h2);

    let p = document.createElement("p");
    p.classList.add("leading-6", "text-base");
    p.innerText = i.p;
    li.appendChild(p);

    document.querySelector(".sec-4 ul").appendChild(li);
}

for (const i of data.secFiveSlideShowData) {
    let li = document.createElement("li");
    li.classList.add("swiper-slide");

    let h2 = document.createElement("h2");
    h2.classList.add("text-4xl", "font-bold", "capitalize", "leading-tight", "pr-12", "mb-10", "relative", "header-bottom-design", "header-bottom-design-l0")
    h2.innerText = i.h2;
    li.appendChild(h2);

    let p = document.createElement("p");
    p.innerText = i.p;
    li.appendChild(p);

    document.querySelector(".sec-5 ul").appendChild(li);
}

for (const i of data.secSixData) {
    let li = document.createElement("li");
    li.classList.add("w-1/3", "py-10", "px-6");

    let figure = document.createElement("figure");
    li.appendChild(figure);

    let img = document.createElement("img");
    img.setAttribute("src", i.img);
    img.setAttribute("alt", i.alt);
    figure.appendChild(img);

    document.querySelector(".sec-6 ul").appendChild(li);
}

var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () { scrollBtnDispFun() };

function scrollBtnDispFun() {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}