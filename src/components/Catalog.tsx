import { useState } from "react";
import whiteHoodie from "@/assets/white-hoodie-stack.jpg";
import blackHoodie from "@/assets/black-hoodie-stack.jpg";
import pinkHoodie from "@/assets/pink-hoodie-stack.jpg";
import greyHoodie from "@/assets/grey-hoodie-stack.jpg";
import sageHoodie from "@/assets/sage-hoodie-stack.jpg";
import sandHoodie from "@/assets/sand-hoodie-stack.jpg";
import oceanHoodie from "@/assets/ocean-hoodie-stack.jpg";
import ProductDialog from "./ProductDialog";

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
    color: "Серый туман",
    meaning: "баланс и тишина",
    image: greyHoodie,
    price: "12 000 ₽",
    description: "Вдохновленный утренним туманом над северными лесами, этот оттенок создан из натуральной глины и древесного угля. Цвет символизирует спокойствие и гармонию с природой",
  },
  {
    id: 5,
    color: "Шалфейная мудрость",
    meaning: "Благородный зеленый из экстракта шалфея и мха",
    image: sageHoodie,
    price: "12 000 ₽",
  },
  {
    id: 6,
    color: "Песчаная дюна",
    meaning: "Теплый беж из песчаника и глины пустыни",
    image: sandHoodie,
    price: "12 000 ₽",
  },
  {
    id: 7,
    color: "Океанская глубина",
    meaning: "Глубокий синий, созданный из индиго и морских водорослей",
    image: oceanHoodie,
    price: "12 000 ₽",
  },
];

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof hoodies[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProductClick = (hoodie: typeof hoodies[0]) => {
    setSelectedProduct(hoodie);
    setIsDialogOpen(true);
  };

  return (
    <section id="catalog" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4 tracking-tight">Каталог</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-2">
            История натуральных цветов
          </p>
          <p className="text-base text-muted-foreground max-w-2xl">
            Каждый оттенок имеет свою уникальную историю, вдохновленную природой
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hoodies.map((hoodie) => (
            <div 
              key={hoodie.id} 
              className="group cursor-pointer"
              onClick={() => handleProductClick(hoodie)}
            >
              <div className="aspect-square overflow-hidden bg-card mb-4 rounded-lg">
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

      <ProductDialog 
        product={selectedProduct}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
};

export default Catalog;
