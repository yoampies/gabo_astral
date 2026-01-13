import React, { useRef, useMemo, useState } from 'react';
import { Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';
import { IStarIntersectionManagerProps } from '../types';

const StarInteractionManager: React.FC<IStarIntersectionManagerProps> = ({
  starPositions,
}) => {
  // [CORRECCIÓN] Usamos 'any' para silenciar el error estricto de TypeScript.
  // Esto permite que la referencia funcione sin problemas de compatibilidad.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instancesRef = useRef<any>(null!);

  const hoverColor = useMemo(() => new THREE.Color('#90A4AE'), []);
  const baseColor = useMemo(() => new THREE.Color('#FFE6B7'), []);

  // Estado local para manejar el color al pasar el mouse (Event Driven)
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Instances ref={instancesRef} limit={300} range={300}>
      {/* [OPTIMIZACIÓN] Geometría reducida a 12 segmentos (antes 24) para menos carga de GPU */}
      <sphereGeometry args={[0.05, 12, 12]} />

      <meshStandardMaterial
        emissive="#FFFFFF"
        emissiveIntensity={10}
        color="#FFE6B7"
        toneMapped={false}
      />

      {starPositions.map((position, index) => (
        <Instance
          key={index}
          position={position}
          // El color cambia solo si el ID coincide, gestionado por React
          color={hoveredId === index ? hoverColor : baseColor}
          // Eventos nativos: El Raycaster solo se dispara cuando el mouse se mueve,
          // eliminando el cálculo de 60 veces por segundo.
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
