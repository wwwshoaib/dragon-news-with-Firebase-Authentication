import { FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";
const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="bg-white p-10 mt-5 rounded-3xl shadow-2xl w-96">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Register your account</h2>
                <form >
                    {/* name input */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                           
                            <input
                                type="text"
                                className="w-full focus:outline-none"

                                required
                                placeholder="Enter your name"
                            />
                        </div>
                    </div>
                    {/* photo */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
                        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                            <input
                                type="text"
                                className="w-full focus:outline-none"

                                required
                                placeholder="Enter your photo URL"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                            <FaEnvelope className="text-gray-500 mr-2" />
                            <input
                                type="email"
                                className="w-full focus:outline-none"

                                required
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                            <FaLock className="text-gray-500 mr-2" />
                            <input
                                type="password"
                                className="w-full focus:outline-none"

                                required
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                  
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-lg hover:shadow-lg hover:opacity-90 transition duration-300"
                    >
                        Register
                    </button>
                </form>
                {/* if no register, go to register */}
                <p className="text-center font-semibold text-[11px] pt-2">
            Already Have An Account ? 
                    go to <Link to="/auth/login" className="btn text-[11px] ">Login </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
