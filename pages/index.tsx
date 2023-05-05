import Head from "next/head";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import { Product } from "@/type";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import TopFooter from "@/components/TopFooter";

interface Props {
  productData: Product;
}

export default function Home({ productData }: Props) {
  return (
    <>
      <Head>
        <title>E-commerce</title>
      </Head>
      <main className="bg-lightBlue">
        <div className="max-w-contentContainer mx-auto bg-white">
          <Banner />
          <Products productData={productData} />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const productData = await (
    await fetch("http://localhost:3000/api/productdata")
  ).json();

  return {
    props: { productData },
  };
};
