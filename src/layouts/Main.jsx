import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;