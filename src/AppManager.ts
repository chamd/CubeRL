type PieceHistory = {
  affectedPieces: AffectedPieces,
  rotation: string
}

class AppManager {
  cube: Cube;
  cubeCanvas: CubeCanvas;
  cubeNavigator: CubeNavigator;
  RLManager: RLManager;
  
  constructor() {
    this.cube = new Cube();
    this.cubeCanvas = new CubeCanvas();
    this.cubeNavigator = new CubeNavigator(this.cube);
    this.RLManager = new RLManager(this.cube);

    this.display();
  }

  display(): void {
    this.cubeCanvas.draw(4, 1, "W");
    this.cubeCanvas.draw(1, 4, "O");
    this.cubeCanvas.draw(4, 4, "G");
    this.cubeCanvas.draw(7, 4, "R");
    this.cubeCanvas.draw(10, 4, "B");
    this.cubeCanvas.draw(4, 7, "Y");

    for (const piece of this.cube.pieces) {
      for (let i = 0; i < ID_POS_MAP[piece.pos].length; i++) {
        const pos = ID_POS_MAP[piece.pos][i];
        const color = COLOR_MAP[piece.id][(i + piece.ori) % ID_POS_MAP[piece.pos].length];
        this.cubeCanvas.draw(pos[0], pos[1], color);
      }
    }
  }

  rotate(rotation: string): PieceHistory {
    const affectedPieces: AffectedPieces = this.cube.rotate(rotation);
    this.display();
    return { affectedPieces, rotation };
  }

  rotateAll(rotations: string, delay: number): void {
    const rotationArray: string[] = rotations.split(" ");
    for (let i = 0; i < rotationArray.length; i++) {
      setTimeout(() => {
        this.rotate(rotationArray[i]);
      }, delay * i);
    }
  }

  scramble(count: number, delay: number): void {
    const rotations: string[] = ["R", "L", "F", "B", "U", "D"];
    for (let i = 0; i < count; i++) {
      const random: number = Math.floor(Math.random() * rotations.length);
      setTimeout(() => {
        this.rotate(rotations[random]);
      }, delay * i);
    }
  }

  propagation(): void {
    const rotations: string[] = ["R", "L", "F", "B", "U", "D"];
    for (let i = 0; i < 20; i++) {
      const random: number = Math.floor(Math.random() * rotations.length); // TODO: rotation을 RLManager에서 가중치 합산을 통해 가져올 것

      const history: PieceHistory = this.rotate(rotations[random]);
      for (const piece of history.affectedPieces.before) {
        this.RLManager.addHistory(piece, history.rotation);
      }

      const fittedPieces: Piece[] = history.affectedPieces.after.filter(o => o.isFit());
      for (const piece of fittedPieces) {
        this.RLManager.backpropagation(piece);
      }
    }
  }
}