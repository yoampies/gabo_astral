import { navLinks } from '../constants';

export default function Navbar() {
  return (
    <nav className="p-4 mx-12">
        <div className="container mx-auto flex justify-between items-center text-md text-gray-400 font-semibold">
            {/* Logo */}
            <a href="/">
                <span className='hover:text-white'>Astrología</span>
            </a>
            <div className="flex items-center space-x-4">
            {/*NavLinks*/}
            <ul className="flex justify-between gap-8 mr-2">
                {
                    navLinks.map((item) => (
                        <div key={item.id}>
                            <a href={item.href}>
                                <li className="hover:text-white hover:duration-150">
                                    {item.name}
                                </li>
                            </a>
                        </div>
                    ))
                }
            </ul>
            </div>
        </div>
    </nav>
  )
}
