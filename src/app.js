var app = {
    urun: ['bilgisayar', ' laptop '],
    fiyat: 12,
    kargo: 13
};

function onDataSubmit(event) {
    event.preventDefault();
    var product = event.target.elements.urun.value;
    if (product) {
        app.urun.push(product);
        event.target.elements.urun.value = '';
    }
    else {
        console.log("Ürün girilmedi !!!");
    }
    var price = event.target.elements.fiyat.value;
    if (price) {
        app.fiyat = price;
        event.target.elements.fiyat.value = '';
    }
    else {
        console.log("Fiyat bilgisi girilmedi !!!");
    }
    var cargo = event.target.elements.kargo.value;
    if (cargo) {
        app.kargo = cargo;
        event.target.elements.kargo.value = '';
    }
    else {
        console.log("Kargo fiyatı girilmedi !!!");
    }

    render();
};


function onClickReset() {
    app.urun = [];
    app.fiyat = "";
    app.kargo = "";
    render();
};


function render() {
    // template declaration
    var template =
        <div>
            <h1>Ürün Uygulaması</h1>
            <ul>
                <li>Ürün : {app.urun.map((urunler) => urunler)}</li>
                <li>Fiyat : {app.fiyat}</li>
                <li>Kargo Ücreti : {app.kargo}</li>
            </ul>
            <button type="submit" onClick={onClickReset}>Sıfırla</button><br></br><br></br>
            <form onSubmit={onDataSubmit}>
                <label htmlFor="urun">Ürün :</label><br></br>
                <input type="text" name="urun" id="urun"></input><br></br>
                <label htmlFor="fiyat">Fiyat :</label><br></br>
                <input type="text" name="fiyat" id="fiyat"></input><br></br>
                <label htmlFor="kargo">Kargo :</label><br></br>
                <input type="text" name="kargo" id="kargo"></input><br></br><br></br>
                <button type="submit">Ürün Ekle</button>
            </form>

        </div>;
    // Virtual DOM vs render
    ReactDOM.render(template, root);
}
render();
