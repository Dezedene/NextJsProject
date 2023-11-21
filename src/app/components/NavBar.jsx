import Image from 'next'

export default function NavBar () {
  return (
    <nav className="bg-slate-400 w-full p-5 bg-white shadow md:flex md:items-center md:justify-between">

      <div>
        <span className="text-2xl font-[Poppins] cursor-pointer">
        </span>
      </div>

      <ul className="md:flex md:items-center">
        <li className="mx-4">
          <a href="#" className="text-xl hover:text-orange-50 duration-100">Hooks</a>
        </li>
        <li className="mx-4">
        <a href="#" className="text-xl hover:text-orange-50 duration-100">Signals</a>
        </li>
        <li className="mx-4">
        <a href="#" className="text-xl hover:text-orange-50 duration-100">React Router</a>
        </li>
        <li className="mx-4">
        <a href="#" className="text-xl hover:text-orange-50 duration-100">Typescript</a>
        </li>
        <li className="mx-4">
        <a href="#" className="text-xl hover:text-orange-50 duration-100">Next.js</a>
        </li>
        
      </ul>

    </nav>
  )
}