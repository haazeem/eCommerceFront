export class Product {

    constructor(private _productName?: String,
        private _productDescription?: String,
        private _productPrice?: Number,
        private _productQuantity?: Number,
        private _idSeller?: String, private _productImg?: FormData ) { }

    get productName() { return this._productName; }
    set productName(nom: String) { this._productName = nom }

    get productDescription() { return this._productDescription; }
    set productDescription(_productDescription: String) { this._productDescription = _productDescription }

    get productPrice() { return this._productPrice; }
    set productPrice(_productPrice: Number) { this._productPrice = _productPrice }

    get productQuantity() { return this._productQuantity; }
    set productQuantity(_productQuantity: Number) { this._productQuantity = _productQuantity }

    get idSeller() { return this._idSeller; }
    set idSeller(_idSeller: String) { this._idSeller = _idSeller }

    get productImg() { return this._productImg }
    set productImg(_productImg: FormData) { this._productImg = _productImg }
}