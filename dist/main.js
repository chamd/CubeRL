"use strict";
const cubeCanvas = new CubeCanvas();
const cube = new Cube(cubeCanvas);
const cubeNavigator = new CubeNavigator(cube);
// cube.rotateAll("R R L L U U D D F F B B", 500);
cube.scramble(50, 0);
