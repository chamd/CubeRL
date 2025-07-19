type AffectedPieces = {
  before: Piece[],
  after: Piece[]
}

class Cube {
  pieces: Piece[];

  constructor() {
    this.pieces = [];
    for (let i = 0; i < 8; i++) {
      const id: string = "C" + i;
      const newCorner: Corner = new Corner(id);
      this.pieces.push(newCorner);
    }
    for (let i = 0; i < 12; i++) {
      const id: string = "E" + i;
      const newEdge: Edge = new Edge(id);
      this.pieces.push(newEdge);
    }
  }

  getPiece(pos: string): Piece | undefined {
    return this.pieces.find(o => o.pos === pos);
  }

  private _rotate(rotation: string, before: string[], after: string[]): AffectedPieces {
    const movePieces: Piece[] = before.map(pos => {
      const piece = this.pieces.find(p => p.pos === pos);
      if (!piece) throw new Error(`Piece at ${pos} not found`);
      return piece;
    });

    const clones: Piece[] = movePieces.map(o => o.clone());
    
    for (let i = 0; i < movePieces.length; i++) {
      const piece = movePieces[i];
      const ori = piece.nextOrientation(rotation);
      piece.moveTo(after[i], ori);
    }

    return { before: clones, after: movePieces };
  }

  rotate(rotation: string): AffectedPieces {
    let before: string[];
    let after: string[];

    switch (rotation) {
      case "R" : 
        before = ["C1", "C5", "C7", "C3", "E2", "E5", "E10", "E7"];
        after = ["C5", "C7", "C3", "C1", "E5", "E10", "E7", "E2"];
        break;
      case "L":
        before = ["C0", "C2", "C6", "C4", "E1", "E6", "E9", "E4"];
        after = ["C2", "C6", "C4", "C0", "E6", "E9", "E4", "E1"];
        break;
      case "F":
        before = ["C2", "C3", "C7", "C6", "E3", "E7", "E11", "E6"];
        after = ["C3", "C7", "C6", "C2", "E7", "E11", "E6", "E3"];
        break;
      case "B":
        before = ["C0", "C4", "C5", "C1", "E0", "E4", "E8", "E5"];
        after = ["C4", "C5", "C1", "C0", "E4", "E8", "E5", "E0"];
        break;
      case "U":
        before = ["C0", "C1", "C3", "C2", "E0", "E2", "E3", "E1"];
        after = ["C1", "C3", "C2", "C0", "E2", "E3", "E1", "E0"];
        break;
      case "D":
        before = ["C4", "C6", "C7", "C5", "E8", "E9", "E11", "E10"];
        after = ["C6", "C7", "C5", "C4", "E9", "E11", "E10", "E8"];
        break;
      default: throw new Error("Invalid rotation");
    }

    return this._rotate(rotation, before, after);
  }

  isFit(): boolean {
    let isFit: boolean = true;
    for (const piece of this.pieces) {
      if (!piece.isFit()) {
        isFit = false;
        break;
      }
    }
    return isFit;
  }
}