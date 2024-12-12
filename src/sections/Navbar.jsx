import { navLinks } from '../constants';
import gear from '../assets/gear.png'
import bell from '../assets/bell.png'
import profpic from '../assets/profile_pic.jpg'

export default function Navbar() {
  return (
    <nav className="p-4 mx-12">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-white text-lg font-semibold">
            <button href="/">
                <span>Astro-Gabo</span>
            </button>
            </div>
            <div className="flex items-center space-x-4">
            {/*NavLinks*/}
            <ul className="flex justify-between gap-8 mr-2">
                {
                    navLinks.map((item) => (
                        <div key={item.id}>
                            <a href={item.href}>
                                <li className="text-white">
                                    {item.name}
                                </li>
                            </a>
                        </div>
                    ))
                }
            </ul>

            {/* Icons and Profile */}
            <a className="text-white"><img src={bell} className='size-4'/></a>
            <a className="text-white"><img src={gear} className='size-4'/></a>
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden">
                <img src={profpic} alt="Profile" />
            </div>
            </div>
        </div>
    </nav>
  )
}
