import { FaGoogle , FaGithub, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
const RightNav = () => {
    return (
        <div>
            <h1 className="text-xl font-bold font-serif text-gray-700 ">Login with</h1>
            <div className="my-3">
                <button className="flex items-center gap-2 text-base font-semibold font-mono border border-violet-400 px-2 py-1 text-blue-600"><FaGoogle/>Login with Google</button>
                <button className="flex items-center gap-2 text-base font-semibold font-mono border border-violet-400 px-2 py-1 text-blue-600 mt-2"><FaGithub/>Login with GitHub</button>
            </div>
            <div>
                 <h1 className="text-xl font-bold font-serif text-gray-700 ">Focus us on</h1>
                 <button className="flex items-center gap-2 text-base font-medium font-mono border px-2 py-1 w-full text-gray-600"><FaFacebook/>Facebook</button>
                 <button className="flex items-center gap-2 text-base font-medium font-mono border px-2 py-1 w-full text-gray-600 border-t-0"><FaTwitter/>Twitter</button>
                 <button className="flex items-center gap-2 text-base font-medium font-mono border px-2 py-1 w-full text-gray-600 border-t-0"><FaInstagram/>Instagram</button>
            </div>
            <div className="w-full bg-gray-100 p-2 mt-5 rounded">
                 <h1 className="text-xl font-bold font-serif text-gray-700 ">QZone</h1>
                 <div>
                    <img src="https://i.ibb.co/vmYfRZW/qZone1.png" alt="" />
                    <img src="https://i.ibb.co/jGLhVGR/qZone2.png" alt="" />
                    <img src="https://i.ibb.co/DpQbRTY/qZone3.png" alt="" />
                 </div>
            </div>
        </div>
    );
};

export default RightNav;