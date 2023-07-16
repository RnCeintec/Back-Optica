"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hateoas = void 0;
var Hateoas = (function () {
    function Hateoas(_a) {
        var limit = _a.limit, offset = _a.offset;
        this._take = limit ? (+limit > 0 ? (+limit <= 100 ? +limit : 100) : 0) : 0;
        this._skip = offset ? +offset : 0;
    }
    Object.defineProperty(Hateoas.prototype, "take", {
        get: function () {
            return this._take;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hateoas.prototype, "skip", {
        get: function () {
            return this._skip;
        },
        enumerable: false,
        configurable: true
    });
    Hateoas.prototype.hateoas = function (_a) {
        var count = _a.count;
        this._hateoas = {};
        var divide = count / this._take;
        var min = parseInt("".concat(divide));
        var pages = count === 0 ? 1 : divide > min ? min + 1 : min;
        this._hateoas.previus = "offset=".concat(this._skip - 1);
        this._hateoas.next = "offset=".concat(this._skip + 1);
        this._hateoas.init = 'offset=0';
        this._skip + 1 >= pages && delete this._hateoas.next;
        this._hateoas.fin =
            count === 0 ? "offset=0" : "offset=".concat(pages - 1 < 0 ? 0 : pages - 1);
        if (this._skip === 0)
            delete this._hateoas.previus;
        if (this._skip >= pages) {
            delete this._hateoas.next;
            if (this._skip > pages)
                this._hateoas.previus = "offset=".concat(parseInt("".concat(count / this._take)));
        }
        return [this._hateoas, pages];
    };
    return Hateoas;
}());
exports.Hateoas = Hateoas;
