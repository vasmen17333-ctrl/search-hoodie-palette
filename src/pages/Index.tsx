import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Catalog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
