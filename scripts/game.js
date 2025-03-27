let canvas;
// let world = new World();

function init() {
  canvas = document.getElementById("canvasContainer");
  world = new World(canvas);

  console.log(world);
}
