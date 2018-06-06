
function main()
{
     volume = new KVS.LobsterData();
     screen = new KVS.THREEScreen();
     scene = new THREE.Scene();
    screen.init( volume, {
        width: window.innerWidth,
        height: window.innerHeight,
        enableAutoResize: false
    });

     bounds = Bounds( volume );
    screen.scene.add( bounds );

     isovalue = 128;
     surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

   
     light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    screen.scene.add( light );

   
   //  material = new THREE.ShaderMaterial({
    //    vertexColors: THREE.VertexColors,
    //    vertexShader: document.getElementById('gouraud.vert').text,
    //    fragmentShader: document.getElementById('gouraud.frag').text,
	//	uniforms:{
    //    light_position:{type:'v3', value:light.position }
    //    }
   // });

    
    screen.loop();

}
