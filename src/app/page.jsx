import Header from "./Sections/Header";
import ProductList from "./Sections/ProductList";
import SingleProduct from "./Sections/SingleProduct";

export default function Home() {
  return (
    <>
       <Header />
       <SingleProduct /> 
       <ProductList />
    </>
  );
}
