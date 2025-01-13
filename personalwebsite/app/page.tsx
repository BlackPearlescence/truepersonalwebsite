import Image from "next/image";
import "./page.module.scss";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./components/Layout";

export default function Home() {
  return (
    <div>
      <Layout>    
        <HomePage />
      </Layout>
    </div>
    

  );
}
