import Banner from "@/components/Home/Banner/Banner";
import FeaturedProject from "@/components/Home/Features/FeaturedProject";
import Footer from "@/components/Home/Footer/Footer";
import Info from "@/components/Home/Info/Info";
import Services from "@/components/Home/Services/Services";

export default function Home() {
  return (
    <main>
      <Banner />
      <Info />
      <Services />
      <FeaturedProject />
      <Footer />
    </main>
  );
}
