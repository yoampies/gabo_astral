//React Tools
import { Suspense } from 'react';
//Libraries
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
//Components
import Model from '../components/Model';
import ModelCamera from '../components/ModelCamera'
//Assets
import gear from '../assets/images/gear.svg'
import profpic from '../assets/images/profile_pic.jpg'
import { navLinks } from '../constants';

export default function Dashboard() {
  const isMobile = useMediaQuery({ maxWidth: 800 })

  return (
    <div className="w-full min-h-screen inset-0" id="dashboard">
      <nav className="p-4 mx-12 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-lg font-semibold">
            <span>Astro-Gabo</span>
          </div>

          <div className="flex items-center space-x-4">
            {/*NavLinks*/}
            <ul className="flex justify-between gap-8 mr-2">
              {
                navLinks.map((item) => (
                  <li key={item.id} href={item.href} className="text-white">
                    {item.name}
                  </li>
                ))
              }
            </ul>

          {/* Icons and Profile */}
            <button className="text-white bg-{#}">🔔</button>
            <button className="text-white">⚙️</button>
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden">
              <img src={profpic} alt="Profile" />
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full h-full absolute">
        <Canvas className="min-h-screen">
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
            <ModelCamera isMobile={isMobile}>
              <Model scale={0.01} position={[0, -1, 9]}/>
            </ModelCamera>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
