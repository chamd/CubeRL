"use strict";
class Corner extends Piece {
    clone() {
        return new Corner(this.id, this.pos, this.ori);
    }
    isCorner() {
        return true;
    }
}
