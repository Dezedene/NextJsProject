"use client";
import Image from 'next/image';
import reactLogo from "../svg/reactLogo.svg";
import { useState } from "react"; // import state


export default function NavBar () {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    return (
      <nav className="bg-slate-300 p-5 md:flex md:items-center md:justify-between shadow">

        <div>
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <Image
              className="h-10 inline"
              src={reactLogo}
              width={100}
              height={100}
              alt="Logo"
            />
            React
          </span>
        </div>

        <section className="mobileMenu flex lg:hidden">
          
          <div
            className="hamburgerIcon space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showNavMenu" : "hideNavMenu"}> 
            <div
              className="crossIcon absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="mobileMenuOpen flex flex-col items-center justify-between min-h-[250px]">

              <li className="border-gray-400 my-8 uppercase">
                <a href="/Hooks">Hooks</a>
              </li>
              <li className="border-gray-400 my-8 uppercase">
                <a href="/Signals">Signals</a>
              </li>
              <li className="border-gray-400 my-8 uppercase">
                <a href="//React Router">React Router</a>
              </li>
              <li className="border-gray-400 my-8 uppercase">
              <a href="/Typescript">Typescript</a>
              </li>
              <li className="border-gray-400 my-8 uppercase">
              <a href="/Next.js">Next.js</a>
              </li>
            </ul>

          </div>
        </section>

        <ul className="desktopMenu hidden space-x-8 lg:flex">

          <li className="border-gray-400 my-8 uppercase">
            <a href="/Hooks">Hooks</a>
          </li>
          <li className="border-gray-400 my-8 uppercase">
            <a href="/Signals">Signals</a>
          </li>
          <li className="border-gray-400 my-8 uppercase">
            <a href="//React Router">React Router</a>
          </li>
          <li className="border-gray-400 my-8 uppercase">
          <a href="/Typescript">Typescript</a>
          </li>
          <li className="border-gray-400 my-8 uppercase">
          <a href="/Next.js">Next.js</a>
          </li>

        </ul>

        <style>{`
        .hideNavMenu {
          display: none;
        }
        .showNavMenu {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>

      </nav>
    )
  }
