// src/components/Astronaut.jsx
'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  // Si el modelo está en public/models/
  const { scene } = useGLTF('/models/astronaut.glb');
  return <primitive object={scene} scale={7} position={[0, -2.5, 0]} />;
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffffff" />
    </mesh>
  );
}


export default function Astronaut() {
  return (
    <div style={{ width: '100%', height: '400px', maxWidth: '400px' }}>
      <Canvas
        camera={{ 
          position: [5, 2, 5],
          fov: 50 
        }}
        style={{
          background: 'transparent'
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>

        
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}