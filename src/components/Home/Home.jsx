import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is home component</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;