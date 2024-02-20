class CircleComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    get name() {
        return this.getAttribute("name");
    }
    set name(val) {
        this.setAttribute("name", val);
    }
    get url() {
        return this.getAttribute("url");
    }
    set url(val) {
        this.setAttribute("url", val);
    }
    get color() {
        return this.getAttribute("color");
    }
    set color(val) {
        this.setAttribute("color", val);
    }
    get chain() {
        const chainAttr = this.getAttribute("chain");
        return chainAttr ? JSON.parse(chainAttr) : [];
    }
    set chain(val) {
        this.setAttribute("chain", JSON.stringify(val));
    }
    setDarkBackground() {
        const circle = this.shadow.querySelector(".ipti-project-circle");
        circle.classList.add("dark-background");
        circle.children[0].classList.add("white-text");
    }
    setLightBackground() {
        const circle = this.shadow.querySelector(".ipti-project-circle");
        circle.classList.add("light-background");
        circle.children[0].classList.add("white-text");
    }
    removeBackGround() {
        const circle = this.shadow.querySelector(".ipti-project-circle");
        circle.classList.remove("light-background");
        circle.classList.remove("dark-background");
        circle.children[0].classList.remove("white-text");
    }

    handleClickAndMouseEnter() {
        const event = new CustomEvent("circleClickOrMouseEnter", {
            bubbles: true,
            detail: { id: this.id, chain: this.chain },
        });
        this.dispatchEvent(event);
    }
    handleMouseleave() {
        const event = new CustomEvent("circleMouseleave", { bubbles: true });
        this.dispatchEvent(event);
    }

    connectedCallback() {
        this.render();
        let circle = this.shadow.querySelector(".ipti-project-circle");
        circle.addEventListener(
            "click",
            this.handleClickAndMouseEnter.bind(this)
        );
        circle.addEventListener(
            "mouseenter",
            this.handleClickAndMouseEnter.bind(this)
        );
        circle.addEventListener(
            "mouseleave",
            this.handleMouseleave.bind(this)
        );
    }
    render() {
        this.shadow.innerHTML = `
<style>
    .ipti-project-circle {
        width: 78px;
        height: 78px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        background-color: ${this.color};
        border-radius: 50%;
        border: solid 1px #30441c;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s;
        user-select: none;
        padding: 5px;
        text-decoration:none;
    }
    .ipti-project-name {
        font-size: 12px;
        text-align:center;
        color: #30441c;
        font-family: Futura-LT-W01-Book; 
        font-weight: normal; 
    }
    .ipti-project-name.white-text {
        color: white
    }
    .ipti-project-circle.dark-background {
        background: #30441c;
        z-index: 3;
    }
    .ipti-project-circle.light-background {
        background: #54a434;
        border: #54a434;
        z-index: 2;
    }
    @media (max-width: 640px) {
        .ipti-project-circle {
            width: 42px;
            height: 42px;
            padding: 10px;
        }
        .ipti-project-name {
            font-size: 9px;
        }
    }
</style>
<a href="${this.url}" class="ipti-project-circle">
    <span class="ipti-project-name"> ${this.name}</span>
</a>
`;
    }
}
customElements.define("circle-component", CircleComponent);

class TimelineComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }
    setupEventListeners() {
        this.shadowRoot.addEventListener(
            "circleClickOrMouseEnter",
            (event) => {
                const circles =
                    this.shadowRoot.querySelectorAll("circle-component");
                circles.forEach((circle) => {
                    circle.removeBackGround();
                });

                const clickedCircleId = event.detail.id;
                const circleClicked = this.shadow.getElementById(clickedCircleId);
                circleClicked.setDarkBackground();

                const chain = event.detail.chain;
                chain.forEach((id) => {
                    const circle = this.shadowRoot.getElementById(id);
                    if (circle) {
                        circle.setLightBackground();
                    }
                });
            }
        );
        this.shadowRoot.addEventListener("circleMouseleave", (event) => {
            const circles =
                this.shadowRoot.querySelectorAll("circle-component");
            circles.forEach((circle) => {
                circle.removeBackGround();
            });
        });
    }
    style() {
        return `
    <style>
        .ipti-timeline {
            width: 100%;
            
        }
        .timeline__header{
            display:flex;
            background-color:#30441c;
        }
        .timeline__years {
            flex: 1;
            display:flex;
            margin:5px;
            justify-content:center;
            color:#828282;
            font-size: 14px;
            font-family: Futura-LT-W01-Book; 
            font-weight: bold;
        }
        .timeline__row{ 
            height: 160px;
            width: 100%;
            display: flex;
        }
        .timeline__column {
            flex: 1;
            display: flex;
            justify-content:center;
            position: relative;
        }
        .dashed-line {
            border: none;
            margin: 0px;
            border-left: 1px dashed #3f4e27; 
        }
        .basic-education {
            background-color:#f0bc9c;
            position: relative;
        }
        .health {
            background-color:#f09c64;
            border-top: 1px solid #30441c; 
            border-bottom: 1px solid #30441c;
            position: relative;
        }
        .entrepreneurial-education {
            background-color:#f08c44;
            position: relative;
        }
        .side-title__container {
            height:100%;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            position:absolute;
            right:0;
            color: #30441c;
            font-family: Futura-LT-W01-Book; 
        }
        .side-title {
            writing-mode: vertical-rl;  
            white-space: nowrap;
            font-size: 12px;
            font-family: Futura-LT-W01-Book; 
            text-align:center;
        }
        @media (max-width: 640px) {
            .ipti-timeline {
                overflow-x:auto;
            }
            .timeline__years{
               
            }
            .timeline__row, .timeline__header {
                width:1200px;
            }
            .side-title__container {
                position: -webkit-sticky; 
                position: sticky;
                z-index: 4;
                width: 50px;
            }
            .basic-education .side-title__container {
                background-color:#f0bc9c;
            }
            .health .side-title__container {
                background-color:#f09c64;
            }
            .entrepreneurial-education .side-title__container {
                background-color:#f08c44;
            }
            .side-title, .timeline__years {
                font-size: 10px;
            }
            .side-title  br{
                display:none;
            }
        }
    </style>
`;
    }
    data() {
        return {
            years: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],

        }
    }
    render() {
        this.shadow.innerHTML =
            this.style() +
            `
<div class="ipti-timeline">
    <div class="timeline__header">
        ${this.data().years.reduce((acc, current) => acc + `<div class="timeline__years">${current}</div>`, '')}
    </div>
    <div class="timeline__row basic-education">
        <div class="timeline__column">
            <circle-component id="1" name="SYNAPSE" url="https://www.thehumanproject.org.br/synapse" color="#f0bc9c" chain="[2,12,11,7,5,9,6]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="2" name="TAG" url="https://www.thehumanproject.org.br/tag" color="#f0bc9c" chain="[1,7,9,5,6,12]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="5" name="SYNAPSE EDUCAÇÃO INFANTIL" url="https://www.thehumanproject.org.br/synapseeducacaoinfantil" color="#f0bc9c" chain="[1,2,7,9,11,12,6,15]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="6" name="CRIA" color="#f0bc9c" url="https://www.thehumanproject.org.br/cria" chain="[5,9,7,2,17,15]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
        <circle-component id="19" name="MACETE" color="#f0bc9c" url="https://www.thehumanproject.org.br/macete" chain="[11,12,13,14,15,17,20,1,5]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class='side-title__container'>
            <span class="side-title">EDUCAÇÃO <br> BÁSICA</span>
        </div>
    </div>
    <div class="timeline__row health">
        <div class="timeline__column">
            <circle-component id="7" name="Hb" color="#f09c64" url="https://www.thehumanproject.org.br/hb" chain="[1,2,9,5,12,6]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="9" name="NHAM" color="#f09c64" url="https://www.thehumanproject.org.br/nham" chain="[2,7,1,5,12,6]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="8" name="VETORES" color="#f09c64" url="https://www.thehumanproject.org.br/vetores" chain="[12,7]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class='side-title__container'>
            <span class="side-title">SAÚDE</span>
        </div>
    </div>
    <div class="timeline__row entrepreneurial-education">
        <div class="timeline__column">
            <circle-component id="10" name="CULTURA EM FOCO" color="#f08c44" url="https://www.thehumanproject.org.br/culturaemfoco" chain="[11,9,17]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="11" name="ARTE NATURALISTA" color="#f08c44" url="https://www.thehumanproject.org.br/artenaturalista" chain="[1,5,14,13,15,17,18]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="12" name="CLOC" color="#f08c44" url="https://www.thehumanproject.org.br/cloc" chain="[1,8,5,2,7,9,6,17,20]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="13" name="PLOC" color="#f08c44" url="https://www.thehumanproject.org.br/ploc" chain="[14,11,17,18,20]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="14" name="LUCA" color="#f08c44" url="https://www.thehumanproject.org.br/luca" chain="[13,11,15,17,18,20]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="15" name="ROMANCEIROS DO ITANHY" url="https://www.thehumanproject.org.br/romanceiros" color="#f08c44" chain="[6,5,11,14,17]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="20" name="SIRI" url="https://www.thehumanproject.org.br/siri" color="#f08c44" chain="[12,13,14,11,17,18]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="17" name="ON" url="https://www.thehumanproject.org.br/on" color="#f08c44" chain="[11,12,14,13,15,18,20,1,10,6]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <circle-component id="18" name="JIRO" url="https://www.thehumanproject.org.br/jiro" color="#f08c44" chain="[17,14,12,20,11,13,15]"></circle-component>
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class="timeline__column">
            <hr class="dashed-line" />
        </div>
        <div class='side-title__container'>
            <span class="side-title">EDUCAÇÃO <br> EMPREENDEDORA</span>
        </div>
    </div>
</div>
`;
    }
}
customElements.define("timeline-component", TimelineComponent);