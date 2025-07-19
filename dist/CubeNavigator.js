"use strict";
class CubeNavigator {
    constructor(cube) {
        this.cube = cube;
        this.nav = document.createElement("div");
        document.body.appendChild(this.nav);
        const rotations = ["R", "L", "F", "B", "U", "D"];
        for (const rotation of rotations) {
            this._addButton(rotation);
        }
    }
    _addButton(rotation) {
        const button = document.createElement("button");
        button.textContent = rotation;
        button.onclick = () => {
            this.cube.rotate(rotation);
        };
        this.nav.appendChild(button);
    }
}
