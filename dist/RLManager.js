"use strict";
class RLManager {
    constructor(cube) {
        this.cube = cube;
        this.history = {};
    }
    addHistory(piece, rotation) {
        if (!this.history[piece.id]) {
            this.history[piece.id] = new Array();
        }
        this.history[piece.id].push([piece.pos, piece.ori, rotation]);
    }
    getHistory(id) {
        return this.history[id];
    }
    // TODO: 가중치 조정 후 history 삭제할 것
    backpropagation(piece) {
    }
}
