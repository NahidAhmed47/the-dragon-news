import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home';

const Main = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Header></Header>
            <div>
                <Home></Home>
            </div>
        </div>
    );
};

export default Main;