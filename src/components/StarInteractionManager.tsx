import React, { useRef, useMemo } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';
import { IStarIntersectionManagerProps, IStarProps } from '../types';

const StarInteractionManager: React.FC<IStarIntersectionManagerProps> = ({ starPositions }) => {
    const instancesRef = useRef<any>(null!); 

    const hoverColor = useMemo(() => new THREE.Color('#90A4AE'), []);
    const baseColor = useMemo(() => new THREE.Color('#FFE6B7'), []);

    const { raycaster, camera, mouse } = useThree();

    useFrame(({ clock }) => {
        if(!instancesRef.current) return;

        const intersectionPoint = new THREE.Vector3();
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -9); 
        raycaster.ray.intersectPlane(plane, intersectionPoint);

        let closestStarIndex = -1;
        let minDistance = Infinity;
        
        starPositions.forEach((position, index) => {
            const starVector = new THREE.Vector3(...position); 
            const distance = starVector.distanceTo(intersectionPoint);

            if (distance < minDistance) {
                minDistance = distance;
                closestStarIndex = index;
            }

            instancesRef.current.setColorAt(index, baseColor);
        });

        if (closestStarIndex !== -1 && minDistance < 1.0) { 
            instancesRef.current.setColorAt(closestStarIndex, hoverColor);
        }

        if (instancesRef.current.instanceColor) {
            instancesRef.current.instanceColor.needsUpdate = true;
        }
    });

  return (
    <Instances
        ref={instancesRef}
        limit={300}
    >
        <sphereGeometry args={[0.05, 24, 24]} />
        <meshStandardMaterial 
            attach="material" 
            emissive="#FFFFFF" 
            // Usamos el brillo constante de 10 que definiste.
            emissiveIntensity={10} 
            color="#FFE6B7"
        />
        {starPositions.map((position, index) => (
            <Instance // ✅ Usamos <Instance> en lugar de <Star>
                key={index} 
                position={position} 
            />
        ))}
    </Instances>
  )
}

export default StarInteractionManager