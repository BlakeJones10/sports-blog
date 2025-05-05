import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-white shadow-lg'>
            <div className='container mx-auot px-4'>
                <div className='flex justify-between items-center h-16'>
                    <Link to='/' className='text-xl font-bold text-gray-800'>
                        Sports Blog 
                    </Link>
                    <div className='flex space-x-4'>
                        <Link to='/' className='text-gray-800 hover:text-gray-900'>
                            Home
                        </Link>
                        <Link to='/news' className='text-gray-800 hover:text-gray-900'>
                            News
                        </Link>
                        <Link to='/contact' className='text-gray-800 hover:text-gray-900'>
                            Newsletter 
                        </Link> 
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;