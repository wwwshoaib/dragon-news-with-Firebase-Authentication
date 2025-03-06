
import logo from '../../assets/logo.png'
import moment from 'moment';




const Header = () => {

    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            {/* logo */}
            <div className="logo">
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            {/* slogan */}
            <h1 className='text-gray-400'>Journalism Without Fear or Favour</h1>
            {/* time format */}
            <p>{moment().format("dddd, Do MMMM,  YYYY, h:mm:ss a")}</p>
        </div>

    );
};

export default Header;