import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacao, Negociacoes } from '../models/index';
import { domInject } from "../helpers/decorators/domInject";

export class NegociacaoController {
    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();

        if(!this._inputData.val()) {
            return;
        }

        let data = new Date(this._inputData.val().toString().replace(/-/g, ','));

        if(!this.eDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis por favor!');
            return;
        }

        let inData = this._inputData;
        let inQuant = this._inputQuantidade;
        let inVal = this._inputValor;

        if(inData && inQuant && inVal) {
            let data = inVal.val();
            let quant = inQuant.val();
            let val = inVal.val();

            if(!data || !quant || !val) {
                throw new Error('Erro ao inserir evento.');
            } else {
                const negociacao = new Negociacao(
                    new Date(this._inputData.val().toString().replace(/-/g, ',')),
                    parseInt(this._inputQuantidade.val().toString()),
                    parseFloat(this._inputValor.val().toString())
                );
        
                this._negociacoes.adiciona(negociacao);
        
                this._negociacoesView.update(this._negociacoes);
                this._mensagemView.update('Negociação inserida com sucesso!');
            }
        }
    }

    private eDiaUtil(date:Date):boolean {
        return date.getDay() != DiaDaSemana.Domingo && date.getDay() != DiaDaSemana.Sabado
    }
}


enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}