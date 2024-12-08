import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function Test({children}) {
  return (
    <div>
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={1500} depth={50} count={5000} factor={3} saturation={0.1} />
      {children}
    </Canvas>
    
    </div>
  );
}

export default Test;