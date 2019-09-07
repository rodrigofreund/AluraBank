class Negociacao {
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
        return new Date(this._data.getTime());
    }
    get valor() {
        return this._valor;
    }
    get quantidade() {
        return this._quantidade;
    }
}
