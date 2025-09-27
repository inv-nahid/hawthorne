const Navbar = () => {
  return (
    <header>
      <nav className="fixed top-0 left-0 flex items-center justify-between bg-white w-full py-4 px-8 z-50 h-20">
        {/* Logo */}
        <a href="/" className="text-3xl font-bold text-black">h.</a>

        {/* Menu links */}
        <div className="flex items-center justify-between text-black gap-16">
          <h4>About</h4>
          <h4>Contact</h4>
          <h4>MENU</h4>
        </div>

        {/* Button */}
        <button className="bg-white text-red-500 px-4 py-2 rounded">Reserve a Table</button>

        {/* Overlay / Dropdown */}
        <div id= "nav-bottom" className="absolute h-0 w-[80%] border-b-1 border-pink bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-650 ease-in-out">
          <div>
            <h5><span>Signup</span></h5>
            <h5><span>Login</span></h5>
             <h5><span>Cart</span></h5>
          </div>
          <div>
            <h5><span>Blogs</span></h5>
            <h5><span>LinkedIn</span></h5>
            <h5><span>GitHub</span></h5>
            <h5><span>Retrofolio</span></h5>
          </div>
          <div>
            <h5><span>Blogs</span></h5>
            <h5><span>Blogs</span></h5>
            <h5><span>Blogs</span></h5>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
