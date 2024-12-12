//Libraries
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
//Components
import Model from '../components/Model';
import ModelCamera from '../components/ModelCamera'
//Assets
import gear from '../assets/gear.svg'
import profpic from '../assets/profile_pic.jpg'
import { navLinks } from '../constants';

export default function Dashboard() {
  const isMobile = useMediaQuery({ maxWidth: 800 })

  return (
    <div className="w-full min-h-screen inset-0" id="dashboard">
      <div className="w-full h-full absolute">
        <Canvas className="min-h-screen" id="canvasID" background="#000000"> 
          <PerspectiveCamera makeDefault position={[0, 0, 30]} near={1} far={1000} />             
          <ModelCamera isMobile={isMobile}>
            <Model scale={0.01} position={[0, -1, 9]}/>
          </ModelCamera>
        </Canvas>
      </div>
    </div>
  )
}
