import CenterContent from "./renderComponent/CenterContent";
import LeftNav from "./renderComponent/LeftNav";
import RightNav from "./renderComponent/RightNav";

const Home = () => {
    return (
        <div className="grid grid-cols-4 gap-5 min-h-[100vh]">
            <div className="col-span-1  p-3">
                <LeftNav></LeftNav>
            </div>
            <div className="col-start-2 col-end-4  p-3">
                <CenterContent></CenterContent>
            </div>
            <div className=" p-3">
                <RightNav></RightNav>
            </div>
        </div>
    );
};

export default Home;