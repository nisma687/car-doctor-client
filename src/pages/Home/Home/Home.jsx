import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";


const Home = () => {
    return (
        
        <div className="mt-6 mb-5">
            <h2 className="text-2xl">This is Home</h2>
        <Banner />
        <About />
        <Services />
        </div>
    );
};

export default Home;