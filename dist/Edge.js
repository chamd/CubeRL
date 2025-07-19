"use strict";
class Edge extends Piece {
    clone() {
        return new Edge(this.id, this.pos, this.ori);
    }
    isCorner() {
        return false;
    }
}
