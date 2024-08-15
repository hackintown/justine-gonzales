import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Navbar from "@/components/ui/Navbar/Navbar";

export default function Home() {
  return (
    <main className="relative">
      {/* Background Image */}
      <div
        style={{
          backgroundImage: "url('/images/anvaya-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 w-full h-full z-0 filter blur-sm"
      ></div>

      <div className="relative z-10 py-10">
        <Navbar />
        <Banner />
        <About />
      </div>
    </main>
  );
}
