class TopWrapper extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="top-wrapper">
            <div class="container">
            <h1>MEALCEMIL</h1>
            <h1>KATALOGNYA CEMILAN</h1>
            <p>MealCemil adalah platform online untuk melihat daftar makanan untuk dicemil.</p>
                <div class="btn-wrapper">
                <a href="#tab1" class="btn lihat-list">Lanjut ke List Cemilan</a>
                </div>
            </div>
        </div>`;
        
    }
 }

 customElements.define("top-wrapper", TopWrapper);