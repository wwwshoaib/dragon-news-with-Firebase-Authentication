
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
const SocialLogin = () => {
    return (
        <div>
            <h1>Login with</h1>
            <div className="*:w-full space-y-2 mt-3">
                <button className="btn">
                    <FaGoogle></FaGoogle>
                    Log in with google
                </button>
                <button className="btn">
                    <FaGithub></FaGithub>
                    Log in with google
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;