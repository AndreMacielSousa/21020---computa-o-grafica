// Variaveis Globais 

var scene;          //representa um container onde vai ser colocado todos os objetos que queremos renderizar.
var camera;         //representa o campo de visão da cena.
var renderer;       //será nosso renderizador dos objetos contidos na cena.

// Variaveis Globais para este Projecto

var cube;

// Instaciamento dos elementos

var init = function() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    this.createACube();         //chamar funcao antes de rendererizar cena.
    camera.position.z = 5 ;      // Movimentar a camaera sobre o eixo z

    this.render();

};


// Método para renderizar cena criada

var render = function() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
};

// Inserir Objectos na Cena

var createACube = function() {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );                        // método que recebe largura, e profundidade.
    var material = new THREE.MeshBasicMaterial( { color: "green" } );         // material no qual esse objeto será renderizado
    cube = new THREE.Mesh( geometry, material );                            // Combina os dois objectos anteriores
    scene.add( cube );
};


//criar animacao ao objecto

var animateCube = function() {
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
}

window.onload = this.init;
