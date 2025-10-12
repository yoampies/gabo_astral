import { navLinks } from "../constants/constants";
import React from "react";
import { INavLinks } from "../types";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import gmail from "../assets/gmail.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <hr className="bg-slate-600 border-0 h-px my-8 w-10/12 mx-auto"/>
      <div className='flex mx-auto w-6/12 justify-between text-gray-400 font-semibold'>
      {
        navLinks.map((item: INavLinks) => (
            <div key={item.id}>
                <a href={item.href} className="hover:text-white hover:duration-150">
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

export default Footer;