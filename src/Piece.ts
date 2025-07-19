abstract class Piece {
  id: string;
  pos: string;
  ori: number;

  constructor(id: string, pos: string = id, ori: number = 0) {
    this.id = id;
    this.pos = pos;
    this.ori = ori;
  }

  isFit(): boolean {
    if (this.ori === 0 && this.id === this.pos) {
      return true;
    }
    return false;
  }

  setPos(pos: string): void {
    this.pos = pos;
  }

  setOri(ori: number): void {
    this.ori = ori;
  }

  moveTo(pos: string, ori: number) {
    this.setPos(pos);
    this.setOri(ori);
  }

  nextOrientation(rotation: string): number {
    if (this.isCorner()) {
      if (rotation === "U" || rotation === "D") {
        return this.ori;
      } else {
        const leftOri: string[] = ["C1", "C2", "C4", "C7"];      
        if (rotation === "R" || rotation === "L") {
          if (leftOri.includes(this.pos)) {
            return (this.ori + 2) % 3;
          } else {
            return (this.ori + 1) % 3;
          }
        } else {
          if (!leftOri.includes(this.pos)) {
            return (this.ori + 2) % 3;
          } else {
            return (this.ori + 1) % 3;
          }

        }
      }
    } else {
      return (this.ori + 1) % 2;
    }
  }

  abstract isCorner(): boolean
}