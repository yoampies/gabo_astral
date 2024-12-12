import gear from '../assets/gear.svg'
import profilepic from '../assets/profile_pic.jpg'
import Dashboard from '../sections/Dashboard'
import Events from '../sections/Events'
import Reviews from '../sections/Reviews'
import Footer from '../sections/Footer'


function Home() {

  return (
    <div className='bg-gradient-to-b from-black to-[#0b0b22] from-30%'>
      <Dashboard />
      <Events />
      <Reviews />
      <Footer />
    </div>
  )
}


export default Home
