import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    color: "Black",
    title: "Сила",
    meaning: "Вдохновлён беззвёздной ночью и глубиной вулканических пород. Этот оттенок передаёт внутреннюю мощь и спокойную решимость.",
    image: blackHoodie,
    price: "16,000 ₽",
    description: "Вдохновлён беззвёздной ночью и глубиной вулканических пород. Этот оттенок передаёт внутреннюю мощь и спокойную решимость.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 2,
    color: "White",
    title: "Свобода",
    meaning: "Вдохновлён светом утреннего рассвета и чистотой зимнего воздуха. Этот оттенок символизирует новое начало, внутреннюю ясность и спокойствие.",
    image: whiteHoodie,
    price: "16,000 ₽",
    description: "Вдохновлён светом утреннего рассвета и чистотой зимнего воздуха. Этот оттенок символизирует новое начало, внутреннюю ясность и спокойствие.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 3,
    color: "Grey",
    title: "Баланс",
    meaning: "Вдохновлён утренним туманом и мягкой рассеянной светотенью. Этот оттенок — воплощение тишины и гармонии.",
    image: greyHoodie,
    price: "16,000 ₽",
    description: "Вдохновлён утренним туманом и мягкой рассеянной светотенью. Этот оттенок — воплощение тишины и гармонии.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 4,
    color: "Graphite",
    title: "Уверенность",
    meaning: "Вдохновлён глубиной природного камня и монолитной эстетикой городской архитектуры. Этот оттенок передаёт сдержанную силу и спокойную уверенность.",
    image: graphiteHoodie,
    price: "16,000 ₽",
    description: "Вдохновлён глубиной природного камня и монолитной эстетикой городской архитектуры. Этот оттенок передаёт сдержанную силу и спокойную уверенность.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 5,
    color: "Dune",
    title: "Тепло",
    meaning: "Вдохновлён оранжевыми песками и бликами заходящего солнца. Этот оттенок воплощает естественное тепло, движение и энергию простора.",
    image: duneHoodie,
    price: "16,000 ₽",
    description: "Вдохновлён оранжевыми песками и бликами заходящего солнца. Этот оттенок воплощает естественное тепло, движение и энергию простора.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 6,
    color: "Milkshake",
    title: "Нежность",
    meaning: "Вдохновлён кремовыми тонами молочного шоколада и мягким рассеянным светом. Этот оттенок передаёт спокойствие, тепло и тактильную уютность.",
    image: milkshakeHoodie,
    price: "16,000 ₽",
    description: "Вдохновлён кремовыми тонами молочного шоколада и мягким рассеянным светом. Этот оттенок передаёт спокойствие, тепло и тактильную уютность.",
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

  const handleTelegramClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open("https://t.me/yourusername", "_blank");
  };

  return (
    <section id="catalog" className="py-20 px-6 md:px-12 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-wider mb-6 uppercase">Каталог</h2>
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
              className="group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              onClick={() => handleProductClick(hoodie)}
            >
              <div className="aspect-square overflow-hidden bg-card mb-4 rounded-lg transition-shadow duration-300 group-hover:shadow-lg">
                <img
                  src={hoodie.image}
                  alt={`Премиум худи search ${hoodie.color} — ${hoodie.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">{hoodie.color} — {hoodie.title}</h3>
                  <p className="text-sm text-muted-foreground">{hoodie.meaning}</p>
                  <p className="text-base font-medium">{hoodie.price}</p>
                </div>
                <Button 
                  onClick={handleTelegramClick}
                  className="w-full"
                  size="sm"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Оформить предзаказ
                </Button>
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
