import img from "./img/LogoMealcemil.png";

class HeaderBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .logo {
                width: 124px;
                margin: 10px;
            }
          
            header-bar {
                float: left;
            }
        </style>
        
        <div class="container">
        <img class="logo" src=${img}>
        </div>`;
    }
}

customElements.define("header-bar", HeaderBar);