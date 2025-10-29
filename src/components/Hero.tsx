import heroImage from "@/assets/hero-grey-hoodie.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <img 
        src={heroImage} 
        alt="Премиум серый худи search в минималистичной студии" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      <div className="absolute bottom-20 left-6 right-6 md:left-12 md:right-12 max-w-2xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 tracking-tight">
          Новая
          <br />
          философия
          <br />
          комфорта
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
          Коллекция премиальных худи. Минимализм в каждой детали.
        </p>
      </div>
    </section>
  );
};

export default Hero;
