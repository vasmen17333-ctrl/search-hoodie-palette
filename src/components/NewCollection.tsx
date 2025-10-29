import mochaHoodie from "@/assets/mocha-hoodie-model.jpg";

const NewCollection = () => {
  return (
    <section id="new" className="py-20 px-6 md:px-12 bg-muted/30 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-lg">
              <span className="text-sm tracking-wider uppercase text-muted-foreground mb-4 block">
                Новая коллекция
              </span>
              <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">
                Mocha Mousse
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Цвет года Pantone. Современный код тепла, уверенности и сдержанной энергии.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                Новый силуэт. Обновленная посадка. Тот же премиальный хлопок, 
                что сделал search культовым брендом для тех, кто ценит качество.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-2xl font-medium">16 000 ₽</span>
                <span className="text-sm text-muted-foreground">Предзаказ</span>
              </div>
              <button className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-sm tracking-wide uppercase">
                Оформить предзаказ
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-square overflow-hidden bg-card">
              <img
                src={mochaHoodie}
                alt="Новая коллекция search — худи Mocha Mousse, цвет года Pantone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
