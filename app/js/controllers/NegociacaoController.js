System.register(["../views/index", "../models/index", "../helpers/decorators/domInject"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, domInject_1, NegociacaoController, DiaDaSemana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (domInject_1_1) {
                domInject_1 = domInject_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView', true);
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    if (!this._inputData.val()) {
                        return;
                    }
                    let data = new Date(this._inputData.val().toString().replace(/-/g, ','));
                    if (!this.eDiaUtil(data)) {
                        this._mensagemView.update('Somente negociações em dias úteis por favor!');
                        return;
                    }
                    let inData = this._inputData;
                    let inQuant = this._inputQuantidade;
                    let inVal = this._inputValor;
                    if (inData && inQuant && inVal) {
                        let data = inVal.val();
                        let quant = inQuant.val();
                        let val = inVal.val();
                        if (!data || !quant || !val) {
                            throw new Error('Erro ao inserir evento.');
                        }
                        else {
                            const negociacao = new index_2.Negociacao(new Date(this._inputData.val().toString().replace(/-/g, ',')), parseInt(this._inputQuantidade.val().toString()), parseFloat(this._inputValor.val().toString()));
                            this._negociacoes.adiciona(negociacao);
                            this._negociacoesView.update(this._negociacoes);
                            this._mensagemView.update('Negociação inserida com sucesso!');
                        }
                    }
                }
                eDiaUtil(date) {
                    return date.getDay() != DiaDaSemana.Domingo && date.getDay() != DiaDaSemana.Sabado;
                }
            };
            __decorate([
                domInject_1.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                domInject_1.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                domInject_1.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
