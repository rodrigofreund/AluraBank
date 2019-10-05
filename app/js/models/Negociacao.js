System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(_data, _quantidade, _valor) {
                    this._data = _data;
                    this._quantidade = _quantidade;
                    this._valor = _valor;
                    Object.freeze(this);
                }
                get volume() {
                    return this._quantidade * this._valor;
                }
                get data() {
                    return this._data;
                }
                get valor() {
                    return this._valor;
                }
                get quantidade() {
                    return this._quantidade;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
