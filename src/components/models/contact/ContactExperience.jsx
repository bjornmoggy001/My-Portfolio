import { OrbitControls, Preload, useGLTF, Html, useProgress, Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as random from 'maath/random/dist/maath-random.esm';

// Loader Component
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

// Stars Component
const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 90 });
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.25}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Earth Component
const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf');
  return (
    <primitive 
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      // frameloop='demand'
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={<Loader />}>
        {/* Stars in the background */}
        <Stars />
        
        {/* Earth with controls */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ContactExperience;