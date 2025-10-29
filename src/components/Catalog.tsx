import { useState } from "react";
import whiteHoodie from "@/assets/white-hoodie-stack.jpg";
import blackHoodie from "@/assets/black-hoodie-stack.jpg";
import greyHoodie from "@/assets/grey-hoodie-stack.jpg";
import graphiteHoodie from "@/assets/graphite-hoodie-stack.jpg";
import duneHoodie from "@/assets/dune-hoodie-stack.jpg";
import milkshakeHoodie from "@/assets/milkshake-hoodie-stack.jpg";
import ProductDialog from "./ProductDialog";

const hoodies = [
  {
    id: 1,
    color: "Черный",
    title: "Тьма и Тайна",
    meaning: "Баланс и сила",
    image: blackHoodie,
    price: "16 000 ₽",
    description: "Вдохновленный беззвездной ночью в горах, этот оттенок черного создан из угольного пигмента и глубины пустоты. Символизирует силу, элегантность и внутреннюю тайну.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 2,
    color: "Белый",
    title: "Свобода и Чистота",
    meaning: "Начало и свет",
    image: whiteHoodie,
    price: "16 000 ₽",
    description: "Вдохновленный зимним рассветом на заснеженных равнинах, этот белый оттенок создается из натуральной глины и свежести снега. Символизирует свободу, новые начала и чистоту мысли.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 3,
    color: "Серый",
    title: "Туманная Умиротворенность",
    meaning: "Баланс и тишина",
    image: greyHoodie,
    price: "16 000 ₽",
    description: "Вдохновленный утренним туманом над северными лесами, этот оттенок создан из натуральной глины и древесного угля. Символизирует спокойствие и гармонию с природой.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 4,
    color: "Графит",
    title: "Глубина Камня",
    meaning: "Сила и стабильность",
    image: graphiteHoodie,
    price: "16 000 ₽",
    description: "Вдохновленный гранитными скалами и природными минералами, этот графитовый оттенок сочетает плотность и сдержанную выразительность. Символизирует внутреннюю устойчивость и уверенность.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 5,
    color: "Дюна",
    title: "Песчаная Энергия",
    meaning: "Тепло и движение",
    image: duneHoodie,
    price: "16 000 ₽",
    description: "Вдохновленный закатом над пустынными барханами, этот оттенок создается из оранжевого песка и охры. Символизирует свободу, приключение и естественный ритм природы.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 6,
    color: "Милк Шейк",
    title: "Шоколадная Мягкость",
    meaning: "Комфорт и уют",
    image: milkshakeHoodie,
    price: "16 000 ₽",
    description: "Вдохновленный темным молочным шоколадом и кремовой текстурой, этот оттенок создает ощущение тепла и тактильной мягкости. Символизирует уют, гармонию и приятные эмоции.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
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
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">Каталог</h2>
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-light">История натуральных цветов</h3>
            <p className="text-base text-muted-foreground max-w-2xl">
              Каждый оттенок имеет свою уникальную историю, вдохновленную природой
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hoodies.map((hoodie) => (
            <div 
              key={hoodie.id} 
              className="group cursor-pointer"
              onClick={() => handleProductClick(hoodie)}
            >
              <div className="aspect-square overflow-hidden bg-card mb-4 rounded-lg">
                <img
                  src={hoodie.image}
                  alt={`Премиум худи search ${hoodie.color} — ${hoodie.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-medium">{hoodie.color} — {hoodie.title}</h3>
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
