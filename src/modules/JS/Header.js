import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Header() {
  const headerBtnArr = ['About Me', 'Projects Github Links', 'Contacts']
  return (
    <div className='Header-container'>
      <div className="header-center">
        <h1>PORTFOLIO</h1>
        <div>
          <span>
            <FaPhoneAlt />
            <p>(+374)-44-20-04-13</p>
          </span>
          <span>
            <SiGmail />
            <p>baghyanparuyr@gmail.com</p>
          </span>
        </div>
      </div>
    </div>
  )
}
