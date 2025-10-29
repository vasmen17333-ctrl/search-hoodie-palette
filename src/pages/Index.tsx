import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import NewCollection from "@/components/NewCollection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Catalog />
        <NewCollection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
