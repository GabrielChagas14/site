class TopbarThpComponent extends HTMLElement 
{
    constructor() 
    {
        super();
        this.shadow = this.attachShadow({ mode:"open" })
    }
    connectedCallback()
    {
        this.render();
    }
    style ()
    {
        return `
            <style>
                a {
                    display:flex;
                    align-items:center;
                    font-size:11px;
                    color: inherit;
                    text-decoration:none;
                    height: 40px;
                    padding: 0 20px;
                    box-sizing: border-box;
                    color:white;
                    background-color: #86908e;
                    transition: all 0.3s ease; 
                }
                a:hover {
                    background-color: #55A333;
                }
                ul {
                    list-style-type:none;
                    display: flex;
                }
                a.active {
                    background-color: #55A333;
                }
                .rounded-l {
                    border-radius:8px 0 0 8px;
                }
                .rounded-r {
                    border-radius:0 8px 8px 0;
                }
            </style>
        `
    }
    render()
    {
        this.shadow.innerHTML = `
            ${this.style()}
            <ul>
                <li>
                    <a href="#" class="rounded-l active">O que são tecnologias sociais</a>
                </li>
                <li>
                    <a href="#">Histórico</a>
                </li>
                <li>
                    <a href="#">Missão, Visão, Valores</a>
                </li>
                <li>
                    <a href="#">Laboratório Global</a>
                </li>
                <li>
                    <a href="#">Alcance</a>
                </li>
                <li>
                    <a href="#">Equipe</a>
                </li>
                <li>
                    <a href="#" class="rounded-r">Premios</a>
                </li>
            </ul>
        `
    }
}
customElements.define("topbar-thp-component", TopbarThpComponent)

class TopbarThpContainerComponent extends HTMLElement 
{
    constructor() 
    {
        super();
        this.shadow = this.attachShadow({ mode:"open" })
    }
    connectedCallback()
    {
        this.render();
    }
    style ()
    {
        return `
            <style>
                .topbar-thp-component{
                    width:100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    position: -webkit-sticky;
                    position: sticky;
                    top: 0;
                }
            </style>
        `
    }
    render()
    {
        this.shadow.innerHTML = `
            ${this.style()}
            <div class='topbar-thp-component'>
                <topbar-thp-component></topbar-thp-component>
            </div>
        `
    }
}
customElements.define("topbar-thp-container-component", TopbarThpContainerComponent)