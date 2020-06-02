class MessageWrapper extends HTMLElement {
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="message-wrapper" id="tab1">
            <div class="container">
                <div class="heading">
                    <h2>Apakah anda bingung mencari makanan untuk dicemil?</h2>
                    <h3>Tenang! Biar kami bantu menemukannya.</h3>
                </div>
                <span class="btn message" id="getMeals">Lihat List Cemilan</span>
            </div>
      </div>
      `;
      this.querySelector("#getMeals").addEventListener("click", this._clickEvent);
    }
 }

 customElements.define("message-wrapper", MessageWrapper);