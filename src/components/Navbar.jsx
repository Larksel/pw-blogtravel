import React from 'react';
import { NavLink } from 'react-router-dom';

const navButtons = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Login',
    link: '/login',
  },
  {
    text: 'Cadastrar',
    link: '/register',
  },
  {
    text: 'Sobre',
    link: '/about',
  },
];

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-2 shadow-md'>
      <NavLink to='/' className='text-2xl no-underline text-black uppercase'>
        BLOG<span className='font-black'>TRAVELS</span>
      </NavLink>

      <ul className='flex list-none gap-2'>
        {navButtons.map(({ text, link }) => (
          <li key={link}>
            <NavLink
              to={link}
              className={({ isActive }) =>
                `py-1 px-2 no-underline rounded transition-all ${
                  isActive ? 'bg-black text-white hover:text-white/80' : 'hover:text-black/50'
                }`
              }
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
