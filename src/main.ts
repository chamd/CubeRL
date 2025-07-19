const cubeCanvas: CubeCanvas = new CubeCanvas();
const cube: Cube = new Cube(cubeCanvas);
const cubeNavigator: CubeNavigator = new CubeNavigator(cube);

// cube.rotateAll("R R L L U U D D F F B B", 500);
cube.scramble(50, 0);