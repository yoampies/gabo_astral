import { navLinks } from '../constants';
import gear from '../assets/gear.svg'
import profpic from '../assets/profile_pic.jpg'

export default function Navbar() {
  return (
    <nav className="p-4 mx-12">
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
  )
}
