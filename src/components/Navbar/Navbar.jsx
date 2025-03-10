
import { Link } from "react-router";
import userImage from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div>
                <p className="text-fuchsia-600">User:  {user.name}</p>
            </div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                    <img src={userImage} alt="" />

                </div>
                <Link to="auth/login" className="btn btn-neutral">Login</Link>

            </div>

        </div>
    );
};

export default Navbar;