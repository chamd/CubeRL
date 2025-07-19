class CubeCanvas {
  readonly BLOCK_SIZE: number = 50;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement("canvas");

    this.canvas.width = this.BLOCK_SIZE * 12;
    this.canvas.height = this.BLOCK_SIZE * 9;
    
    document.body.appendChild(this.canvas);

    const ctx: CanvasRenderingContext2D | null = this.canvas.getContext("2d");
    if (!ctx) throw new Error("Context not found");
    this.ctx = ctx;
    
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  _getHEX(color: string): string {
    switch (color) {
      case "R": return "#ff0000";
      case "O": return "#ffaa00";
      case "Y": return "#ffff00";
      case "G": return "#00ff00";
      case "B": return "#0000ff";
      case "W": return "#ffffff";
      default: return "#000000";
    }
  }

  draw(x: number, y: number, color: string): void {
    this.ctx.fillStyle = this._getHEX(color);
    this.ctx.fillRect(x * this.BLOCK_SIZE, y * this.BLOCK_SIZE, this.BLOCK_SIZE, this.BLOCK_SIZE);
    
    this.ctx.strokeStyle = "#000";
    this.ctx.strokeRect(x * this.BLOCK_SIZE, y * this.BLOCK_SIZE, this.BLOCK_SIZE, this.BLOCK_SIZE);
  }
}