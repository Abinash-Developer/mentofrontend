import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Why from "../components/home/Why";
import Count from "../components/home/Count";
import Feature from "../components/home/Feature";
import Courses from "../components/home/Courses";
import Trainer from "../components/home/Trainer";

const Home = ()=>{
    return (<>
        <Hero/>
        <About/>
        <Count/>
        <Why/>
        <Feature/>
        <Courses/>
        <Trainer/>
    </>);
}
export default Home;