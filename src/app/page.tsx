import Banner from "@/components/Ayalaland/Banner/Banner";
import FeaturedProject from "@/components/Ayalaland/Features/FeaturedProject";
import Footer from "@/components/Ayalaland/Footer/Footer";
import Info from "@/components/Ayalaland/Info/Info";
import Services from "@/components/Ayalaland/Services/Services";

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
