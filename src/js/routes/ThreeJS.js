import React from 'react';
import { 
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	SphereGeometry,
	MeshBasicMaterial,
	MeshPhongMaterial,
	TextureLoader,
	Mesh 
} from 'three';



class About extends React.Component {

	constructor(props){
		super(props);

		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.animate = this.animate.bind(this);
		this.renderScene = this.renderScene.bind(this);
	}

	componentDidMount(){

		const bgColor = 0xCCCCCC;
		const width = this.container.clientWidth
        const height = this.container.clientHeight

		//create threejs scene
		const scene = new Scene();

		//texture
		const texture = new TextureLoader().load( "./assets/material-threejs/5_night_8k.jpg" );
		// const textureBump = new TextureLoader().load( "./assets/material-threejs/Bump.jpg" );

		//create/adjust camera
		const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, .1, 1000 );
		camera.position.z = 5;

		//set and append WebGLRenderer
		const renderer = new WebGLRenderer();
		renderer.setClearColor( bgColor );
		renderer.setSize(window.innerWidth, window.innerHeight);

		//Create a sphere
		const geometry = new SphereGeometry(2,15,15);
		// const material = new MeshBasicMaterial( {color: 0x0000FF, wireframe: true} );
		const material = new MeshBasicMaterial({ map: texture });

		const sphere = new Mesh( geometry, material );
		scene.add( sphere );

	    this.scene = scene
	    this.camera = camera
	    this.renderer = renderer
	    this.material = material
	    this.sphere = sphere

		this.container.appendChild(this.renderer.domElement);
		this.start();
	}

	componentWillUnmount() {
		console.log('unmounting')
	  this.stop()
	  this.container.removeChild(this.renderer.domElement)
	}

	start() {
	  if (!this.frameId) {
	    this.frameId = requestAnimationFrame(this.animate)
	  }
	}

	stop() {
	  cancelAnimationFrame(this.frameId)
	}

	animate() {
	  // this.sphere.rotation.x += 0.01
	  this.sphere.rotation.y += 0.005

	  this.renderScene()
	  this.frameId = window.requestAnimationFrame(this.animate)
	}

	renderScene() {
	  this.renderer.render(this.scene, this.camera)
	}
	

	render() {
		return(
			<div ref={node => this.container = node}></div>
		)

	}
}

export default About;
