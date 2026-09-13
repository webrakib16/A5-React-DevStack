import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className='my-5 sticky top-0 bg-white z-10'>

            <div className='container mx-auto px-4'>

                <div className='flex items-center justify-between'>

                    {/* Hamburger */}
                    <button className='text-2xl lg:hidden'>
                        ☰
                    </button>

                    {/* Logo */}
                    <img
                        src={Logo}
                        alt=""
                        className='w-28 md:w-32 lg:w-auto'
                    />

                    {/* Menu */}
                    <ul className='hidden lg:flex gap-6 items-center'>
                        <li><a href="">Home</a></li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    {/* Buttons */}
                    <div className='flex gap-3 md:gap-5 items-center'>

                        <button>
                            Sign In
                        </button>

                        <button className='bg-[#D91B7E] text-white px-4 md:px-5 py-2 rounded-full'>
                            Sign Up
                        </button>

                    </div>

                </div>

            </div>

        </nav>
    );
};

export default Nav;


