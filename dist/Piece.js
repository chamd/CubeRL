"use strict";
class Piece {
    constructor(id, pos = id, ori = 0) {
        this.id = id;
        this.pos = pos;
        this.ori = ori;
    }
    isFit() {
        if (this.ori === 0 && this.id === this.pos) {
            return true;
        }
        return false;
    }
    setPos(pos) {
        this.pos = pos;
    }
    setOri(ori) {
        this.ori = ori;
    }
    moveTo(pos, ori) {
        this.setPos(pos);
        this.setOri(ori);
    }
    nextOrientation(rotation) {
        if (this.isCorner()) {
            if (rotation === "U" || rotation === "D") {
                return this.ori;
            }
            else {
                const leftOri = ["C1", "C2", "C4", "C7"];
                if (rotation === "R" || rotation === "L") {
                    if (leftOri.includes(this.pos)) {
                        return (this.ori + 2) % 3;
                    }
                    else {
                        return (this.ori + 1) % 3;
                    }
                }
                else {
                    if (!leftOri.includes(this.pos)) {
                        return (this.ori + 2) % 3;
                    }
                    else {
                        return (this.ori + 1) % 3;
                    }
                }
            }
        }
        else {
            return (this.ori + 1) % 2;
        }
    }
}
