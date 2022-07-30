"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyClass = void 0;
class ProxyClass {
    constructor(server) {
        this.server = server;
        this.cachedResponse = null;
        this.request = () => __awaiter(this, void 0, void 0, function* () {
            if (!!this.cachedResponse) {
                console.log("Returning information from the cache");
                return this.cachedResponse;
            }
            this.cachedResponse = yield this.server.request();
            return this.cachedResponse;
        });
        this.clearCache = () => {
            console.log("Clear Cache");
            this.cachedResponse = null;
        };
    }
}
exports.ProxyClass = ProxyClass;
