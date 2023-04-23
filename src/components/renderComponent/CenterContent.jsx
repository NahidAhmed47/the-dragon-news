import { Outlet } from "react-router-dom";

const CenterContent = () => {
    return (
        <div >
            <h1 className="text-xl font-bold font-serif text-gray-700 text-center">Dragon news home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default CenterContent;