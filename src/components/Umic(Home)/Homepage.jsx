import Footer from '../Footer';
import Logo from '../Logo';
import Content from "./Content";
import Hero from "./Hero";
import Homenav from './Homenav';

function Homepage(){
    return(
        <>
        <Homenav />
        <Logo/>
        <Hero/>
        <Content/>
        <Footer/>
        </>
    )
}

export default Homepage;