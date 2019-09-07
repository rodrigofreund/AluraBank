class Negociacao {

    private _data;
    private _valor;
    private _quantidade;


    constructor(_data, _quantidade, _valor) {
        Object.assign(this,{_quantidade,_valor});
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get valor() {
        return this._valor;
    }

    get quantidade() {
        return this._quantidade;
    }
}