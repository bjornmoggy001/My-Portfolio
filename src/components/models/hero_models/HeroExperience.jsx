import { OrbitControls, Preload, useGLTF, Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense, useEffect, useState } from "react";
import HeroLights from "./HeroLights";

// Loader Component with screenshot background
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html fullscreen>
      {/* Screenshot background */}
      <div 
        style={{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', // Adjust based on your canvas size
  height: '80%', // Adjust based on your canvas size
  backgroundImage: 'url(/computer-fallback.png)', 
  backgroundSize: 'contain', // Changed from 'cover' to 'contain'
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat', // Prevents image from repeating
  zIndex: 1
}}
      />
      
      {/* Loader on top of screenshot */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
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
      </div>
    </Html>
  );
};

// Computer component with enhanced lighting
const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  
  // Calculate position based on device type
  const getPosition = () => {
    if (isMobile) {
      return [0, -3, -2.2]; // Mobile position (original)
    } else if (isTablet) {
      return [0, -2.5, -1.5]; // Tablet position (slightly raised)
    } else {
      return [0, -2, -1.5]; // Desktop position (raised more)
    }
  };
  
  return (
    <group>
      {/* Ambient Light - provides base illumination for the entire scene */}
      <ambientLight intensity={0.3} color="#ffffff" />
      
      {/* Hemisphere Light - creates sky/ground lighting effect */}
      <hemisphereLight 
        intensity={0.5} 
        skyColor="#ffffff"
        groundColor="#444444"
      />
      
      {/* Main Spotlight - key light from top */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* Fill Light - spotlight from the right */}
      <spotLight
        position={[20, 30, 10]}
        angle={0.15}
        penumbra={1}
        intensity={0.8}
        color="#b8d4ff"
      />
      
      {/* Back Light - adds rim lighting */}
      <spotLight
        position={[0, 20, -20]}
        angle={0.2}
        penumbra={1}
        intensity={0.6}
        color="#ffd4a3"
      />
      
      {/* Point Lights for accent lighting */}
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -5, -10]} intensity={0.4} color="#4169e1" />
      <pointLight position={[0, -5, 5]} intensity={0.5} color="#ffffff" />
      
      {/* Directional Light - simulates sunlight */}
      <directionalLight
        position={[5, 10, 7.5]}
        intensity={0.7}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      {/* Computer Model */}
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.65}
        position={getPosition()}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isMobileState, setIsMobileState] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobileState(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobileState(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <HeroLights />
        <OrbitControls
          autoRotate
          autoRotateSpeed={5}
          enableZoom={!isTablet}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          maxDistance={20}
          minDistance={5}
        />
        <Computers isMobile={isMobileState} isTablet={isTablet} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HeroExperience;