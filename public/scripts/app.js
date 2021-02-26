"use strict";

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
  } else {
    console.log("Ürün girilmedi !!!");
  }

  var price = event.target.elements.fiyat.value;

  if (price) {
    app.fiyat = price;
    event.target.elements.fiyat.value = '';
  } else {
    console.log("Fiyat bilgisi girilmedi !!!");
  }

  var cargo = event.target.elements.kargo.value;

  if (cargo) {
    app.kargo = cargo;
    event.target.elements.kargo.value = '';
  } else {
    console.log("Kargo fiyatı girilmedi !!!");
  }

  render();
}

;

function onClickReset() {
  app.urun = [];
  app.fiyat = "";
  app.kargo = "";
  render();
}

;

function render() {
  // template declaration
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "\xDCr\xFCn Uygulamas\u0131"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "\xDCr\xFCn : ", app.urun.map(function (urunler) {
    return urunler;
  })), /*#__PURE__*/React.createElement("li", null, "Fiyat : ", app.fiyat), /*#__PURE__*/React.createElement("li", null, "Kargo \xDCcreti : ", app.kargo)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    onClick: onClickReset
  }, "S\u0131f\u0131rla"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("form", {
    onSubmit: onDataSubmit
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "urun"
  }, "\xDCr\xFCn :"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "urun",
    id: "urun"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "fiyat"
  }, "Fiyat :"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "fiyat",
    id: "fiyat"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "kargo"
  }, "Kargo :"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "kargo",
    id: "kargo"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "\xDCr\xFCn Ekle"))); // Virtual DOM vs render

  ReactDOM.render(template, root);
}

render();
