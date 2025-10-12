import React, { useRef, useState } from 'react'
import { Mesh } from 'three'
import { IStarProps } from '../types';

const Star: React.FC<IStarProps> = ({position}) => {
    const meshRef = useRef<Mesh | null>(null);
    const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <mesh 
        ref={meshRef}
        position={position}
        onPointerOver={(e) => {
            e.stopPropagation();
            setIsHovered(true);
        }}
        onPointerOut={(e) => {
            e.stopPropagation();
            setIsHovered(false);
        }}
        renderOrder={0}
    >
        <sphereGeometry args={[0.05, 24, 24]} />
        <meshStandardMaterial 
            attach="material" 
            emissive="#FFFFFF" 
            emissiveIntensity={isHovered ? 20 : 10} 
            color="#FFE6B7"
        />
    </mesh>
  )
}

export default Star