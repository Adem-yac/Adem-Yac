import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

// Floating 3D Orb Component
function FloatingOrb() {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// Secondary floating elements
function SecondaryOrbs() {
  return (
    <>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1} position={[4, 2, -2]}>
        <Sphere args={[0.5, 32, 32]} scale={1}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.6}
          />
        </Sphere>
      </Float>
      
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={1.5} position={[-3, -1, -1]}>
        <Sphere args={[0.3, 32, 32]} scale={1}>
          <MeshDistortMaterial
            color="#f59e0b"
            attach="material"
            distort={0.4}
            speed={1.2}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>
    </>
  );
}

interface Scene3DProps {
  className?: string;
}

export default function Scene3D({ className = "" }: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <Stars radius={300} depth={60} count={1000} factor={7} saturation={0} />
        
        <FloatingOrb />
        <SecondaryOrbs />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}