import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function YogaSymbol() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[3, 0.5, 16, 100]} />
      <meshStandardMaterial color="#2F855A" metalness={0.7} roughness={0.3} />
    </mesh>
  );
}