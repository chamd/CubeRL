class CubeNavigator {
  cube: Cube;
  nav: HTMLElement;

  constructor(cube: Cube) {
    this.cube = cube;

    this.nav = document.createElement("div");
    document.body.appendChild(this.nav);

    const rotations: string[] = ["R", "L", "F", "B", "U", "D"];
    for (const rotation of rotations) {
      this._addButton(rotation);
    }
  }

  _addButton(rotation: string): void {
    const button = document.createElement("button");
    button.textContent = rotation;
    button.onclick = () => {
      this.cube.rotate(rotation);
      this.cube.display();
    }

    this.nav.appendChild(button);
  }
}