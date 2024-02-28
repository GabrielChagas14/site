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
                    padding: 40px 40px;
                    box-sizing:border-box;
                    background-color: #ffffff;
                    color: #232323; 
                    font-size:18px;
                    height: 240px;

                }
                .card.no-background{
                    background-color: initial;
                    color: #ffffff;
                    font-weight: bold;
                    font-size:22px;
                }
                .card span {
                    font-weight: bold;
                }
                .card-qrcode {
                    text-align: center;
                }
                .qrcode{
                    width: 130px;
                }
                .pix {
                    color:#79a757;
                    font-weight: bold;
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
                    Faça seu <br> 
                    investimento,<br> 
                    preferencialmente<br>
                    com recorrência<br>
                    mensal, através<br>
                    da conta:
                </div>
                <div class="card">
                    Banco do Brasil: <span>001</span><br>
                    Agência: <span>1224-6</span> <br>
                    Conta Corrente: <span>88000-0</span><br>
                    <span>Instituto de Pesquisas em <br> Tecnologia e Inovação</span><br>
                    CNPJ: <span>05.929852/0001-81</span>
                </div>
                <div class="card card-qrcode">
                        <img class="qrcode" src="assets/qrcode.jpeg" />
          
                    <div class="pix"> PIX </div>
                    CNPJ: <span>05.929852/0001-81</span>
                </div>
            <div>
        `
    }

}
customElements.define('invest-section-component', InvestSectionComponent);