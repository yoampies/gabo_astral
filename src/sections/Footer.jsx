import { navLinks } from "../constants";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import gmail from "../assets/gmail.png";

export default function Footer() {
  return (
    <footer>
      <hr className="bg-slate-600 border-0 h-px my-8 w-10/12 mx-auto"/>
      <div className='flex mx-auto w-6/12 justify-between'>
      {
        navLinks.map((item) => (
            <div key={item.id}>
                <a href={item.href} className="text-gray-300">
                  {item.name}
                </a>
            </div>
        ))
      }
      </div>
      <div className="flex mx-auto justify-center gap-6 py-6 pr-6">
        <a href=""><img src={instagram} className="size-5"/></a>
        <a href=""><img src={x} className="size-5"/></a>
        <a href=""><img src={gmail} className="size-5"/></a>
      </div>
    </footer>
  )
}
