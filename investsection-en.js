class InvestSectionComponent extends HTMLElement
{
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: "open" })
    }
    connectedCallback()
    {
        this.render();
    }
    style ()
    {
        return `
            <style>
                .investsection{
                    padding: 30px 15px;
                    width: 100%;
                    background-color: #81b558;
                    display: flex;
                    justify-content: center;
                    gap: 50px;
                    align-items: center;
                    color: #ffffff;
                    font-family: Futura-LT-W01-Book;
                }
                .card {
                    box-sizing: border-box;
                    background-color: #ffffff;
                    color: #232323;
                    font-size: 18px;
                    height: 240px;
                    width: 317px;
                    border-radius: 10px 10px 0 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                }
                .card-header {
                    padding: 5px;
                    background-color: #2a2a2a;
                    border-radius: 10px 10px 0 0;
                    color: #ffffff;
                    text-align: center;
                    width: 100%;
                    box-sizing: border-box;
                }
                .card-body{
                    margin-top: 15px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                }
                .card.no-background{
                    background-color: initial;
                    color: #ffffff;
                    font-weight: bold;
                    font-size: 22px;
                    display: flex;
                    justify-content: center;
                }
                .card span {
                    font-weight: bold;
                }
                .logo-give-smart{
                    width: 250px;
                    margin-top:20px;
                }
                .card-button {
                    padding: 5px 30px;
                    background-color: #2a2a2a;
                    border-radius: 18px;
                    text-decoration: none;
                    color: #ffffff;
                    font-weight: bold;
                    font-size: 22px;
                    font-family: Futura-LT-W01-Book;
                }
            </style>
        `;
    }
    render()
    {
        this.shadow.innerHTML = `
            ${this.style()}
            <div class="investsection">
                <div class="card no-background">
                    Make your <br> 
                    investment,<br> 
                    preferably on a<br>
                    monthly recurring<br>
                    basis, through:
                </div>
                <div class="card">
                    <div class="card-header">
                        if you live in <span> Other Countries</span>
                    </div>
                    <div class="card-body">
                        <div class="text">
                            Banco do Brasil: <span>001</span><br>
                            Agência: <span>1224-6</span> <br>
                            Conta Corrente: <span>88000-0</span><br>
                            <span>Instituto de Pesquisas em <br> Tecnologia e Inovação</span><br>
                            CNPJ: <span>05.929852/0001-81</span>
                        </div>
                    </div>
                </div>
                <div class="card card-qrcode">
                    <div class="card-header">
                        if you live in Other Countries <span>USA</span>
                    </div>
                    <div class="card-body">
                        <img class="logo-give-smart" src="assets/GiveSmart.png" />
                        <a class="card-button" target="_blanck" href="https://e.givesmart.com/events/sJl/">Donate</a>
                        <div>CNPJ: <span>05.929852/0001-81</span></div>
                    </div>
                </div>
            <div>
        `
    }

}
customElements.define('invest-section-component', InvestSectionComponent);