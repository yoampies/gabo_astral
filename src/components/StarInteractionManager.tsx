import React, { useRef, useMemo, useState } from 'react';
import { Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';
import { IStarIntersectionManagerProps } from '../types';

const StarInteractionManager: React.FC<IStarIntersectionManagerProps> = ({
  starPositions,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instancesRef = useRef<any>(null!);

  const hoverColor = useMemo(() => new THREE.Color('#90A4AE'), []);
  const baseColor = useMemo(() => new THREE.Color('#FFE6B7'), []);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Instances ref={instancesRef} limit={500} range={500}>
      {/* Radio 0.2 para estrellas grandes y visibles */}
      <sphereGeometry args={[0.2, 12, 12]} />

      <meshStandardMaterial
        emissive="#FFFFFF"
        emissiveIntensity={40}
        color="#FFE6B7"
        toneMapped={false}
      />

      {starPositions.map((position, index) => (
        <Instance
          key={index}
          position={position}
          color={hoveredId === index ? hoverColor : baseColor}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHoveredId(index);
          }}
          onPointerOut={() => {
            setHoveredId(null);
          }}
        />
      ))}
    </Instances>
  );
};

export default StarInteractionManager;
