import gear from './assets/images/gear.svg'
import profilepic from './assets/images/profile_pic.jpg'
import Dashboard from './sections/Dashboard'
import Events from './sections/Events'
import Reviews from './sections/Reviews'
import Footer from './sections/Footer'
import { Canvas } from '@react-three/fiber'


function App() {

  return (
    <div className='bg-gradient-to-b from-black to-[#0b0b22] from-30%'>
      <Dashboard />
      <Events />
      <Reviews />
      <Footer />
    </div>
  )
}


export default App
