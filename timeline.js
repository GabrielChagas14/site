class CircleComponent extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'open'})
    }

    get name() {
        return this.getAttribute('name');
    }
    set name(val) {
        this.setAttribute('name', val);
    }
    get color() {
        return this.getAttribute('color');
    }
    set color(val) {
        this.setAttribute('color', val);
    }
    get chain() {
        const chainAttr = this.getAttribute('chain');
        return chainAttr ? JSON.parse(chainAttr) : [];
    }
    set chain(val) {
        this.setAttribute('chain', JSON.stringify(val));
    }
    setDarkBackground() {
        const circle = this.shadow.querySelector('.ipti-project-circle');
        circle.classList.add('dark-background');
        circle.children[0].classList.add('white-text');
    }
    setLightBackground() {
        const circle = this.shadow.querySelector('.ipti-project-circle');
        circle.classList.add('light-background');
        circle.children[0].classList.add('white-text');
    }
    removeBackGround() {
        const circle = this.shadow.querySelector('.ipti-project-circle');
        circle.classList.remove('light-background');
        circle.classList.remove('dark-background');
        circle.children[0].classList.remove('white-text');
    }

    handleClickAndMouseEnter() {
        const event = new CustomEvent('circleClickOrMouseEnter', { bubbles: true, detail: { id: this.id, chain: this.chain } });
        this.dispatchEvent(event);
    }
    handleMouseleave(){
        const event = new CustomEvent('circleMouseleave', { bubbles: true});
        this.dispatchEvent(event);
    }

    connectedCallback() {
        this.render();
        let circle = this.shadow.querySelector('.ipti-project-circle');
        circle.addEventListener('click', this.handleClickAndMouseEnter.bind(this))
        circle.addEventListener('mouseenter', this.handleClickAndMouseEnter.bind(this))
        circle.addEventListener('mouseleave', this.handleMouseleave.bind(this))
    }
    render() {
        this.shadow.innerHTML= `
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
                }
                .ipti-project-name {
                    font-size: 12px;
                    text-align:center;
                    color: #30441c;
                    font-family: Arial, Helvetica, sans-serif;
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
                        width: 50px;
                        height: 50px;
                        padding: 10px;
                    }
                    .ipti-project-name {
                        font-size: 10px;
                    }
                }
            </style>
            <div class="ipti-project-circle">
                <span class="ipti-project-name"> ${this.name}</span>
            </div>
        `
    }
}
customElements.define('circle-component', CircleComponent);

class TimelineComponent extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})
    }
    style(){
        return `
            <style>
                .ipti-timeline {
                    width: 100%;
                    height: 100px;
                }
                .timeline__header{
                    display:flex;
                    background-color:#30441c;
                    padding: 5px;
                }
                .timeline__years {
                    flex: 1;
                    display:flex;
                    justify-content:center;
                    color:#828282;
                    font-size: 12px;
                    font-family: Arial, Helvetica, sans-serif;
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
                    font-family: Arial, Helvetica, sans-serif;
                }
                .side-title {
                    writing-mode: vertical-rl;  
                    white-space: nowrap;
                    font-size: 12px;
                    text-align:center;
                }
                @media (max-width: 640px) {
                    .side-title__container {
                        width: 20px;
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
    connectedCallback(){
        this.render();
        this.setupEventListeners();
    }
    setupEventListeners() {
        this.shadowRoot.addEventListener('circleClickOrMouseEnter', (event) => {

            const circles = this.shadowRoot.querySelectorAll("circle-component")
            circles.forEach(circle => {
                circle.removeBackGround();   
            })

            const clickedCircleId = event.detail.id;
            const circleClicked = this.shadow.getElementById(clickedCircleId)
            circleClicked.setDarkBackground();

            const chain = event.detail.chain;
            chain.forEach(id => {
                const circle = this.shadowRoot.getElementById(id);
                if (circle) {
                    circle.setLightBackground();
                }
            })
        })
        this.shadowRoot.addEventListener('circleMouseleave', (event) => {
            const circles = this.shadowRoot.querySelectorAll("circle-component")
            circles.forEach(circle => {
                circle.removeBackGround();   
            })
        })
    }
    render() {
        this.shadow.innerHTML= 
            this.style() + `
            <div class="ipti-timeline">
                <div class="timeline__header">
                    <div class="timeline__years">2010</div>
                    <div class="timeline__years">2011</div>
                    <div class="timeline__years">2012</div>
                    <div class="timeline__years">2013</div>
                    <div class="timeline__years">2014</div>
                    <div class="timeline__years">2015</div>
                    <div class="timeline__years">2016</div>
                    <div class="timeline__years">2017</div>
                    <div class="timeline__years">2018</div>
                    <div class="timeline__years">2019</div>
                    <div class="timeline__years">2020</div>
                    <div class="timeline__years">2021</div>
                    <div class="timeline__years">2022</div>
                    <div class="timeline__years">2023</div>
                </div>
                <div class="timeline__row basic-education">
                    <div class="timeline__column">
                        <circle-component id="1" name="SYNAPSE" color="#f0bc9c" chain="[2,12,11,7]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="2" name="TAG" color="#f0bc9c" chain="[1,7,9]"></circle-component>
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
                        <circle-component id="3" name="TOM-CON" color="#f0bc9c" chain="[2]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="4" name="LILO" color="#f0bc9c" chain="[14,16]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="5" name="SYNAPSE CHILD EDUCATION" color="#f0bc9c"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="6" name="CRIA" color="#f0bc9c"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
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
                        <circle-component id="7" name="HB" color="#f09c64" chain="[1,2]"></circle-component>
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
                        <circle-component id="8" name="VETORES" color="#f09c64" chain="[12]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="9" name="NHAM" color="#f09c64" chain="[2]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
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
                        <circle-component id="10" name="CULTURE IN FOCUS" color="#f08c44"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="11" name="NATURALIST ART" color="#f08c44" chain="[1]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="12" name="CLOC" color="#f08c44" chain="[1,8]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="13" name="PLOC" color="#f08c44" chain="[15,14]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="14" name="LUCA" color="#f08c44" chain="[13]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="15" name="BAIÃO" color="#f08c44" chain="[13]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="16" name="SIRI + NOVELISTS OF ITANHY" color="#f08c44" chain="[4,12,13,14,11]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="17" name="ON" color="#f08c44" chain="[5,12,16,18]"></circle-component>
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <hr class="dashed-line" />
                    </div>
                    <div class="timeline__column">
                        <circle-component id="18" name="JIRO" color="#f08c44" chain="[17,14,16,12]"></circle-component>
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
        `
    }
}
customElements.define('timeline-component', TimelineComponent);