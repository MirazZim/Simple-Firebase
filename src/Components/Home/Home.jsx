import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <NavLink to = "/" >Home</NavLink>
            <br />
            <NavLink to = "/login">Login</NavLink>
        </div>
    );
};

export default Home;