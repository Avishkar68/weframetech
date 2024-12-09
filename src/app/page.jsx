import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import ProductList from "./Sections/ProductList";
import ProductList2 from "./Sections/ProductList2";
import Services from "./Sections/Services";
import SingleProduct from "./Sections/SingleProduct";

export default function Home() {
  return (
    <>
       <Header />
       <SingleProduct /> 
       <ProductList />
       <ProductList2 />
       <Services />
       <Contact />
       <Footer />
    </>
  );
}
