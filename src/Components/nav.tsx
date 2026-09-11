import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
       <nav className='my-5'>

        <div className='grid grid-cols-3 justify-center container mx-auto'>
            <img src={Logo} alt="" />

            <ul className='flex gap-6 items-center'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>

            </ul>

            <div className='flex gap-4 items-center '>
                    <button>Sign In</button>
                    <button className='bg-[#D91B7E] text-white px-5 py-2 rounded-full'>Sign Up</button>
            </div>
            
        </div>
       </nav>
    );
};

export default Nav;