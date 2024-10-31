import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-200'>
      <div className="flex justify-around text-center items-center p-3">
        <Link to='/'>
          <h1 className='font-bold'>AuthApp</h1>
        </Link>
        <ul className="flex gap-5 cursor-pointer">
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/register'>
            <li>Signup</li>
          </Link>
      </ul>
      </div>
    </div>
  )
}

export default Navbar