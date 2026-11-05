const getfg     = (sectref: React.RefObject<HTMLDivElement>) => sectref.current.getElementsByClassName("section-foreground")[0] as HTMLDivElement;
const getbg     = (sectref: React.RefObject<HTMLDivElement>) => sectref.current.getElementsByClassName("section-background")[0] as HTMLDivElement;
const getscroll = (sectref: React.RefObject<HTMLDivElement>, o:number=0) => [
    sectref.current.getBoundingClientRect().bottom/(sectref.current.clientHeight+o),
    sectref.current.getBoundingClientRect().bottom,
    sectref.current.getBoundingClientRect().top
];

const rems = parseFloat(getComputedStyle(document.documentElement).fontSize)

export function titleanim(sectref: React.RefObject<HTMLDivElement>) {
    const [s, bt, _] = getscroll(sectref,72);
    const fg = getfg(sectref);

    sectref.current.style.alignItems = "end";

    fg.style.opacity = String(s);
    fg.style.height = `${bt}px`;
}

export function infoanim(sectref: React.RefObject<HTMLDivElement>) {
    const [_, bt, tp] = getscroll(sectref);
    const fg = getfg(sectref);

    const model_wrapper = fg.querySelector("#info-callisto-model-wrapper") as HTMLDivElement;
    const model = fg.querySelector("#info-callisto-model") as HTMLCanvasElement;
    const title = fg.getElementsByClassName("title")[0] as HTMLDivElement;

    const rcards = Array.from(fg.querySelector("div#info-info-cards-right")!.children) as HTMLDivElement[];
    const lcards = Array.from(fg.querySelector("div#info-info-cards-left")!.children) as HTMLDivElement[];

    if (tp < 0 && bt > window.innerHeight) {
        title.style.position = "fixed"
        title.style.top  = "10rem"
        title.style.left = "6rem"
        // title.style.height = `50%`
    
        model_wrapper.style.opacity = "1"

        model.offsetWidth;
        model.offsetHeight;
        model.style.width = "500px"
        model.style.height = "500px"
    } else {
        title.style.position = "unset"
        model_wrapper.style.opacity = "0"

        model.offsetWidth;
        model.offsetHeight;
        model.style.width = "1px"
        model.style.height = "1px"
    }

    const card_active = "opacity: 1; translate: 0 0;"
    const card_before = "opacity: 0; translate: 0 100px;"
    const card_after = "opacity: 0; translate: 0 -100px;"

    const delay = 1000;
    sectref.current.style.height = `${5 * delay + window.innerHeight}px`;

    switch (true) {
        case (-tp < 0):
            rcards[0].style = card_before;
            lcards[0].style = card_before;
            rcards[1].style = card_before;
            lcards[1].style = card_before;
            rcards[2].style = card_before;
            break;
        case (-tp >= 0 && -tp < delay):
            rcards[0].style = card_active;
            lcards[0].style = card_before;
            rcards[1].style = card_before;
            lcards[1].style = card_before;
            rcards[2].style = card_before;
            break;
        case (-tp >= delay && -tp < 2*delay):
            rcards[0].style = card_after;
            lcards[0].style = card_active;
            rcards[1].style = card_before;
            lcards[1].style = card_before;
            rcards[2].style = card_before;
            break;
        case (-tp >= 2*delay && -tp < 3*delay):
            rcards[0].style = card_after;
            lcards[0].style = card_after;
            rcards[1].style = card_active;
            lcards[1].style = card_before;
            rcards[2].style = card_before;
            break;
        case (-tp >= 3*delay && -tp < 4*delay):
            rcards[0].style = card_after;
            lcards[0].style = card_after;
            rcards[1].style = card_after;
            lcards[1].style = card_active;
            rcards[2].style = card_before;
            break;
        case (-tp >= 4*delay && -tp < 5*delay):
            rcards[0].style = card_after;
            lcards[0].style = card_after;
            rcards[1].style = card_after;
            lcards[1].style = card_after;
            rcards[2].style = card_active;
            break;
        case (-tp >= 5*delay):
            rcards[0].style = card_after;
            lcards[0].style = card_after;
            rcards[1].style = card_after;
            lcards[1].style = card_after;
            rcards[2].style = card_after;
            break;
    }

    if (bt<window.innerHeight) {
        title.style.position = "relative"
        title.style.top = `${sectref.current.clientHeight - window.innerHeight}px`
        title.style.left = "0px"
    }
}

export function whyanim(sectref: React.RefObject<HTMLDivElement>) {
    const [_, bt, tp] = getscroll(sectref);
    const fg = getfg(sectref);

    const title = fg.querySelector(".title") as HTMLDivElement;
    const carousel = fg.querySelector("div.carousel") as HTMLDivElement;

    if (tp < 0) {
        carousel.style.position = "fixed";
        carousel.style.top = "10rem"
        carousel.style.left = "6rem"
        carousel.style.right = "6rem"
    } else {
        carousel.style.position = "unset"
    }

    if (window.innerHeight - (tp + 10*rems + title.clientHeight) > 80) {
        title.style.position = "fixed";
        title.style.bottom = "80px"
        title.style.left = `${6*rems}px`
        carousel.style.height = `${title.getBoundingClientRect().top - carousel.getBoundingClientRect().top - 6 * rems}px`
        
    } else {
        title.style.position = "unset";
    }
    
    carousel.style.opacity = `${carousel.clientHeight/(carousel.clientHeight+Math.max(tp,0))}`
    
    const cards = Array.from(carousel.children) as HTMLDivElement[];
    const delay = 1000;

    sectref.current.style.height = `${4*delay+window.innerHeight}px`

    switch (true) {
        case (-tp >= 0 && -tp < delay):
            cards[0].setAttribute("focused", "true")
            cards[1].removeAttribute("focused")
            cards[2].removeAttribute("focused")
            cards[3].removeAttribute("focused")
            break
        case (-tp >= delay && -tp < 2*delay):
            cards[0].removeAttribute("focused")
            cards[1].setAttribute("focused", "true")
            cards[2].removeAttribute("focused")
            cards[3].removeAttribute("focused")
            break
        case (-tp >= 2*delay && -tp < 3*delay):
            cards[0].removeAttribute("focused")
            cards[1].removeAttribute("focused")
            cards[2].setAttribute("focused", "true")
            cards[3].removeAttribute("focused")
            break
        case (-tp >= 3*delay && -tp < 4*delay):
            cards[0].removeAttribute("focused")
            cards[1].removeAttribute("focused")
            cards[2].removeAttribute("focused")
            cards[3].setAttribute("focused", "true")
            break
    }

    cards.forEach(c => {
        const inner = c.querySelector(".content") as HTMLDivElement
        inner.offsetWidth
        inner.offsetHeight
        inner.style.width = `${c.clientWidth}px`
    })
    
    // fg.style.zIndex = "-1"
    fg.style.opacity = `${Math.max(bt/window.innerWidth,0)}`
    
    if (bt < 0) {
        carousel.style.display = "none"
    } else {
        carousel.style.display = ""
    }

    if (-bt>0) {
        sectref.current.style.opacity = "0"
    } else {
        sectref.current.style.opacity = "1"
    }
}

export function resourceanim(sectref: React.RefObject<HTMLDivElement>) {
    const [_, bt, tp] = getscroll(sectref);
    const fg = getfg(sectref);
    const bg = getbg(sectref);

    const title = fg.querySelector(".title") as HTMLDivElement;
    const card_wrapper = fg.querySelector("div.res-info-cards") as HTMLDivElement;
    const cards = Array.from(card_wrapper!.children) as HTMLDivElement[];

    fg.style.position = "fixed"
    fg.style.top = "0"
    fg.style.left = `${tp*window.innerWidth/window.innerHeight}px`

    if (-tp>=0) {
        title.style.position = "fixed";
        title.style.top = "10rem";
        title.style.left = "6rem";
        
        card_wrapper.style.position = "fixed";
        card_wrapper.style.opacity = "1";
        card_wrapper.style.top = `${title.getBoundingClientRect().bottom + 2*rems}px`
        card_wrapper.style.left = `${6*rems}px`
    } else {
        title.style.position = "unset";
        card_wrapper.style.position = "unset";
        card_wrapper.style.opacity = "0";
    }

    const delay = 1000;
    
    sectref.current.style.height = `${4*delay}px`

    fg.style.width = `${sectref.current.clientHeight*window.innerWidth/window.innerHeight}px`
    fg.style.backgroundColor = (-tp>0) ? "transparent" : "#000000"
    bg.style.background = (-tp>0) ? "transparent" : "#111111"
    
    if (bt - window.innerHeight < 0) {
        fg.style.zIndex = "-10"
    } else {
        fg.style.zIndex = "1"
    }

    switch (true) {
        case (-tp < 0*delay):
            cards[0].removeAttribute("active")
            cards[1].removeAttribute("active")
            cards[2].removeAttribute("active")
            break
        case (-tp >= 0*delay && -tp < 1*delay):
            cards[0].setAttribute("active", "true")
            cards[1].removeAttribute("active")
            cards[2].removeAttribute("active")
            break
        case (-tp >= 1*delay && -tp < 2*delay):
            cards[0].removeAttribute("active")
            cards[1].setAttribute("active", "true")
            cards[2].removeAttribute("active")
            break
        case (-tp >= 2*delay && -tp < 3*delay):
            cards[0].removeAttribute("active")
            cards[1].removeAttribute("active")
            cards[2].setAttribute("active", "true")
            break
    }
    // fg.style.background = "#000000"
}

export function envanim(sectref: React.RefObject<HTMLDivElement>) {
    const [_, bt, tp] = getscroll(sectref);
    const fg = getfg(sectref);

    const title = fg.querySelector(".title") as HTMLDivElement;
    const card_wrapper = fg.querySelector(".card-arrangement") as HTMLDivElement;
    const cards = Array.from(card_wrapper!.children) as HTMLDivElement[];

    if (tp < 0) {
        title.style.position = "fixed"
        title.style.top  = "10rem"
        title.style.left = "6rem"
        
        card_wrapper.style.position = "fixed"
        card_wrapper.style.inset = "0"
        card_wrapper.style.top = "200px"
    } else {
        title.style.position = "unset"
        // card_wrapper.style.position = "unset"
    }

    const delay = 1000;

    sectref.current.style.height = `${3*delay+window.innerHeight}px`

    if (bt<window.innerHeight/2) {
        title.style.translate = "-100dvw"
        card_wrapper.style.translate = "-100dvw"
    } else {
        title.style.translate = ""
        card_wrapper.style.translate = ""
    }

    cards.forEach((c,i) => {
        if (-tp>=i*delay) c.style.scale = "1";
        else c.style.scale = "0";
    })
}

export function physioanim(sectref: React.RefObject<HTMLDivElement>) {
    const [_, bt, tp] = getscroll(sectref);
    const fg = getfg(sectref);

    const title = fg.querySelector(".title") as HTMLDivElement;
    const cardw = fg.querySelector(".physio-cards") as HTMLDivElement;
    const cards = Array.from(cardw.children) as HTMLDivElement[];

    const delay = 1000;

    sectref.current.style.height = `${window.innerHeight+delay*2}px`

    if (tp<=window.innerHeight) {
        if (bt>window.innerHeight/2) {
            title.style.position = "fixed"
            title.style.top = "10rem"
            title.style.left = "6rem"

            if (tp<=window.innerHeight/2) title.style.translate = "0"
            else title.style.translate = "100dvw"

            cards.map((c,i) => {
                c.style.position = "fixed";
                c.style.top = `${(cards[i-1]?.getBoundingClientRect()?.bottom ?? title.getBoundingClientRect().bottom + 2*rems)+2*rems}px`;
                if (-tp>=window.innerHeight/2+i*delay) c.style.translate = "0"
                else c.style.translate = "100dvw"
            })
            
        } else {
            title.style.translate = "-100dvw";
            cards.map((c) => c.style.translate = "-100dvw")
        }
    } else {
        title.style.position = "unset"
        cards.map(v => v.style.position = "unset")
    }
}

export function loganim(sectref: React.RefObject<HTMLDivElement>) {
    const [_, bt, tp] = getscroll(sectref);
    const fg = getfg(sectref);

    const title = fg.querySelector(".title") as HTMLDivElement;
    const main  = fg.querySelector(".log-main") as HTMLDivElement;
    const cardw = fg.querySelector(".log-cards") as HTMLDivElement;
    const cards = Array.from(cardw.children) as HTMLDivElement[];

    if (tp<=window.innerHeight) {
        if (bt>window.innerHeight/2) {
            title.style.position = "fixed"
            title.style.top = "10rem"
            title.style.left = "6rem"

            main.style.position = "fixed"
            main.style.inset = "6rem"
            main.style.bottom = "2rem"
            main.style.top = `${title.getBoundingClientRect().bottom + 2*rems}px`

            // cardw.style.position = "fixed"
            // cardw.style.top = `${title.getBoundingClientRect().bottom + 2*rems}px`
            // cardw.style.left = `${model.getBoundingClientRect().right}px`
            // cardw.style.bottom = `2rem`
            // cardw.style.right = `6rem`

            if (tp<=window.innerHeight/2) [title.style.translate, main.style.translate] = ["0", "0"]
            else [title.style.translate, main.style.translate] = ["100dvw", "100dvw"]
        } else {
            title.style.translate = "-100dvw";
            main.style.translate = "-100dvw";
        }
    } else {
        title.style.position = "unset"
    }

    const delay = 1000;

    sectref.current.style.height = `${3*delay+window.innerHeight}px`

    cards.map((c,i) => {
        if (-tp>=window.innerHeight/2 + i*delay) [c.style.translate, c.style.opacity] = ["0 -400px", "0"]
        else if (-tp<window.innerHeight/2 + (i-1)*delay) [c.style.translate, c.style.opacity] = ["0 400px", "0"]
        else [c.style.translate, c.style.opacity] = ["0 -60px", "1"]
    })
}
