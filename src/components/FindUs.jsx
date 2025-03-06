
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h1>Find Us</h1>
            <div className="*:w-full space-y-2 mt-3 ">
                <button className="btn justify-start">
                    <FaFacebook></FaFacebook>
                    Facebook
                </button>
                <button className="btn justify-start">
                    <FaInstagram></FaInstagram>
                    Instagram
                </button>
                <button className="btn justify-start">
                    <FaTwitter></FaTwitter>
                    Twitter
                </button>
            </div>

        </div>
    );
};

export default FindUs;