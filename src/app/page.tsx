import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Navbar from "@/components/ui/Navbar/Navbar";

export default function Home() {
  return (
    <main className="relative">
      {/* Background Image */}
      <div
        style={{
          backgroundImage: "url('/images/web-homepage-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        className="absolute inset-0 w-full h-full z-0 filter blur-sm"
      ></div>

      <div className="relative container z-10 py-10">
        <Navbar />

        <div className="md:grid md:grid-cols-2 md:gap-3 md:bg-gradient-navbar md:p-4 rounded-xl lg:grid-cols-[40%_1fr]">
          <div className="mb-3 md:mb-0">
            <Banner />
          </div>
          <div className="">
            <About />
          </div>
        </div>
      </div>
    </main>
  );
}
