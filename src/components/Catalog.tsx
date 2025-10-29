import whiteHoodie from "@/assets/white-hoodie-stack.jpg";
import blackHoodie from "@/assets/black-hoodie-stack.jpg";
import pinkHoodie from "@/assets/pink-hoodie-stack.jpg";
import greyHoodie from "@/assets/grey-hoodie-stack.jpg";

const hoodies = [
  {
    id: 1,
    color: "Белый",
    meaning: "начало и свобода",
    image: whiteHoodie,
    price: "12 000 ₽",
  },
  {
    id: 2,
    color: "Чёрный",
    meaning: "глубина и сила",
    image: blackHoodie,
    price: "12 000 ₽",
  },
  {
    id: 3,
    color: "Пыльно-розовый",
    meaning: "меланхолия и нежность",
    image: pinkHoodie,
    price: "12 000 ₽",
  },
  {
    id: 4,
    color: "Серый",
    meaning: "баланс и тишина",
    image: greyHoodie,
    price: "12 000 ₽",
  },
];

const Catalog = () => {
  return (
    <section id="catalog" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-tight">Каталог</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Четыре цвета. Четыре настроения. Одно качество.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hoodies.map((hoodie) => (
            <div key={hoodie.id} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden bg-card mb-4">
                <img
                  src={hoodie.image}
                  alt={`Премиум худи search ${hoodie.color} — ${hoodie.meaning}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-medium">{hoodie.color}</h3>
                <p className="text-sm text-muted-foreground">{hoodie.meaning}</p>
                <p className="text-base font-medium">{hoodie.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
