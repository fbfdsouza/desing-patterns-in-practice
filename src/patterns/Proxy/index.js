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
const ProxyServer_1 = require("./classes/ProxyServer");
const Server_1 = require("./classes/Server");
/*Proxy Desing Pattern
    It implements the same interface the Main class does, instead of calling directly the common
    interface method it does a treatment that could be for caching, security, loggin reasons.

    ProxyClass class has an instance of Server class, both implement the method request from the IServer interface.
    but the request method from the Server class is not directly called before proxy's one is run.
*/
exports.default = () => {
    const server = new Server_1.Server();
    const proxy = new ProxyServer_1.ProxyClass(server);
    (() => __awaiter(void 0, void 0, void 0, function* () {
        console.log(yield (yield proxy.request()).response);
        console.log(yield (yield proxy.request()).response);
        proxy.clearCache();
        console.log(yield (yield proxy.request()).response);
        console.log(yield (yield proxy.request()).response);
    }))();
};
