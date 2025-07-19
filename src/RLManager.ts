type RotationHistory = [string, number, string];

class RLManager {
  cube: Cube;
  history: Record<string, RotationHistory[]>; 
  
  constructor(cube: Cube) {
    this.cube = cube;
    this.history = {};
  }
    
  addHistory(piece: Piece, rotation: string): void {
    if (!this.history[piece.id]) {
      this.history[piece.id] = new Array();
    }
    this.history[piece.id].push([piece.pos, piece.ori, rotation]);
  }

  getHistory(id: string): RotationHistory[] {
    return this.history[id];
  }

  // TODO: 가중치 조정 후 history 삭제할 것
  backpropagation(piece: Piece): void {

  }
}