
  // Tạo scene, camera và renderer
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("canvas-container").appendChild(renderer.domElement);
  // Tạo lập phương
  var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Tạo các cạnh của lập phương
  var edges = new THREE.EdgesGeometry(geometry);
  var lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
  var edgesLines = new THREE.LineSegments(edges, lineMaterial);
  cube.add(edgesLines);
  //bỏ khối lập phương
  scene.remove(cube);
  // Tạo sao băng
  var starsGeometry = new THREE.BufferGeometry();
  var starsPositions = [];
  for (var i = 0; i < 1000; i++) {
    var x = THREE.MathUtils.randFloatSpread(2000);
    var y = THREE.MathUtils.randFloatSpread(2000);
    var z = THREE.MathUtils.randFloatSpread(2000);
    starsPositions.push(x, y, z);
  }
  starsGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starsPositions, 3)
  );
  var starsMaterial = new THREE.PointsMaterial({ color: 0x00aaff, size: 2 });
  var stars = new THREE.Points(starsGeometry, starsMaterial);

  scene.add(stars);
  // Xoay hình lập phương và sao băng liên tục
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    stars.rotation.x += 0.005;
    stars.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();

