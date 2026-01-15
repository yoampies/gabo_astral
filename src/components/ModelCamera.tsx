import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

interface ModelCameraProps {
  children: React.ReactNode;
  isMobile: boolean;
}

const ModelCamera: React.FC<ModelCameraProps> = ({ children, isMobile }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const group = useRef<any>(null);

  useFrame((state, delta) => {
    if (group.current && !isMobile) {
      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 40, -state.pointer.x / 20, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={group}>{children}</group>;
};

export default ModelCamera;
