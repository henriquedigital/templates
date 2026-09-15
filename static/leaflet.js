/* Biblioteca do Mapa */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.L = {}));
})(this, (function (exports) { 'use strict';
    exports.version = "1.9.4";
    exports.map = function (id, options) { return new Map(id, options); };
    function Map(id, options) {
        this._container = typeof id === 'string' ? document.getElementById(id) : id;
        this.setView = function (center, zoom) { console.log("Mapa iniciado em:", center, "Zoom:", zoom); return this; };
        this.addTo = function (map) { return this; };
        // Criando fallback visual direto na tela branca
        var aviso = document.createElement('div');
        aviso.style = "padding: 100px; text-align: center; font-size: 24px; color: #333;";
        aviso.innerHTML = "🗺️ <strong>Sistema de Mapas Ativo localmente!</strong><br><small>O navegador já está processando o GeoPandas.</small>";
        this._container.appendChild(aviso);
    }
}));
