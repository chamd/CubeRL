class Edge extends Piece {
  clone(): Edge {
    return new Edge(this.id, this.pos, this.ori);
  }

  isCorner(): boolean {
      return false;
  }
}