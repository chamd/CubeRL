class Corner extends Piece {
  clone(): Corner {
    return new Corner(this.id, this.pos, this.ori);
  }

  isCorner(): boolean {
      return true;
  }
}