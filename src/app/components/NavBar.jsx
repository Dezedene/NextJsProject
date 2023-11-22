export default function NavBar () {
  return (
    <nav className="bg-slate-300 p-5 md:flex md:items-center md:justify-between shadow z-1">

        <div className="menu cursor-pointer text-3xl">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="md:flex md:items-center z-0">
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