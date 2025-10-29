import { useState } from "react";
import { Search } from "lucide-react";
import SearchDialog from "./SearchDialog";
import whiteHoodie from "@/assets/white-hoodie-stack.jpg";
import blackHoodie from "@/assets/black-hoodie-stack.jpg";
import greyHoodie from "@/assets/grey-hoodie-stack.jpg";
import graphiteHoodie from "@/assets/graphite-hoodie-stack.jpg";
import duneHoodie from "@/assets/dune-hoodie-stack.jpg";
import milkshakeHoodie from "@/assets/milkshake-hoodie-stack.jpg";

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

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof hoodies[0] | null>(null);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);

  const handleProductSelect = (product: typeof hoodies[0]) => {
    setSelectedProduct(product);
    setIsProductDialogOpen(true);
  };

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl tracking-tight font-medium">
            search
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#catalog" className="hover:text-muted-foreground transition-colors">
              Каталог
            </a>
            <a href="#cards" className="hover:text-muted-foreground transition-colors">
              Подарочные карты
            </a>
            <a href="#lookbook" className="hover:text-muted-foreground transition-colors">
              Lookbook
            </a>
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">
              Телеграмм блог
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:text-muted-foreground transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
    
    <SearchDialog
      open={isSearchOpen}
      onOpenChange={setIsSearchOpen}
      products={hoodies}
      onProductSelect={handleProductSelect}
    />
    </>
  );
};

export default Navigation;
