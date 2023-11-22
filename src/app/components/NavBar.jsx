import Image from 'next/image'
import reactLogo from "./svg/reactLogo.svg";

export default function NavBar () {
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

        <div className="menu cursor-pointer text-3xl">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute
        bg-slate-300 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top[-400px]">
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-orange-50 duration-300">Hooks</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-orange-50 duration-300">Signals</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-orange-50 duration-300">React Router</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-orange-50 duration-300">Typescript</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-orange-50 duration-300">Next.js</a>
          </li>
        </ul>

      </nav>
  )
}