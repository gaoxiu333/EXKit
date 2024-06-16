import { Hero } from "./components/Hero";
import { StoreTest } from "./components/StoreTest";

const Home = () => {
    return (
        <div>
            <Hero />
            <StoreTest />
        </div>
    );
};
Home.displayName = "Home";
export default Home;
