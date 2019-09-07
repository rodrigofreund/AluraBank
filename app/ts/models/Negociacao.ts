class Negociacao {

    constructor(private _data: Date, private _quantidade: number, private _valor: number) {
        Object.freeze(this);
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    get data(): Date {
        return new Date(this._data.getTime());
    }

    get valor(): number {
        return this._valor;
    }

    get quantidade(): number {
        return this._quantidade;
    }
}