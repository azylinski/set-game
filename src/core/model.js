"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_combinatorics_1 = __importDefault(require("js-combinatorics"));
/*
export const FEATURES = {
  Types: ["Number", "Symbol", "Shading", "Color"],
  Names: {
    Numbers: ["one", "two", "three"],
    Symbols: ["diamond", "squiggle", "oval"],
    Shadings: ["solid", "striped", "open"],
    Colors: ["red", "green", "purple"]
  },
  Chars: {
    Numbers: ["1", "2", "3"],
    Symbols: ["d", "s", "o"],
    Shadings: ["S", "T", "O"],
    Colors: ["r", "g", "p"]
  }
};
*/
var Nmbr;
(function (Nmbr) {
    Nmbr["One"] = "1";
    Nmbr["Two"] = "2";
    Nmbr["Three"] = "3";
})(Nmbr || (Nmbr = {}));
var Smbl;
(function (Smbl) {
    Smbl["Diamond"] = "d";
    Smbl["Squiggle"] = "s";
    Smbl["Oval"] = "o";
})(Smbl || (Smbl = {}));
var Shading;
(function (Shading) {
    Shading["Solid"] = "S";
    Shading["Striped"] = "T";
    Shading["Open"] = "O";
})(Shading || (Shading = {}));
var Color;
(function (Color) {
    Color["Red"] = "r";
    Color["Green"] = "g";
    Color["Purple"] = "p";
})(Color || (Color = {}));
var Card = /** @class */ (function () {
    function Card(number, symbol, shading, color) {
        this.number = number;
        this.symbol = symbol;
        this.shading = shading;
        this.color = color;
    }
    Card.prototype.toString = function () {
        return "" + this.number + this.symbol + this.shading + this.color;
    };
    Card.prototype.toObject = function () {
        return {
            "Number": this.fn(Nmbr, this.number),
            "Symbol": this.fn(Smbl, this.symbol),
            "Shading": this.fn(Shading, this.shading),
            "Color": this.fn(Color, this.color),
        };
    };
    Card.prototype.fn = function (Cls, val) {
        var key = Object.keys(Cls)[Object.values(Cls).indexOf(val)];
        return key.toLowerCase();
    };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.it = 0; // iterator/pointer of next Card
        this.initCards();
        this.it = 0;
    }
    Deck.prototype[Symbol.iterator] = function () {
        var _a, _b, card, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(this.cards), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    card = _b.value;
                    return [4 /*yield*/, card];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    Deck.prototype.initCards = function () {
        var e_2, _a;
        this.cards = [];
        // let features = [Number, Symbol, Shading, Color];
        var cp = js_combinatorics_1.default.cartesianProduct(Object.values(Nmbr), Object.values(Smbl), Object.values(Shading), Object.values(Color));
        try {
            for (var _b = __values(cp.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var args = _c.value;
                this.cards.push(new (Card.bind.apply(Card, __spread([void 0], args)))());
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // shuffle
    };
    Deck.prototype.shuffle = function () { };
    return Deck;
}());
exports.Deck = Deck;
/*
interface Board {
}


interface Arbiter {
  // is Set
  check(...cards) -> boolean;
}
*/ 
