import { useState } from "react";
import { Search, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchDialog from "./SearchDialog";
import ProductDialog from "./ProductDialog";
import BrandStoryDialog from "./BrandStoryDialog";
import GiftCardDialog from "./GiftCardDialog";
import whiteHoodie from "@/assets/white-hoodie-stack.jpg";
import blackHoodie from "@/assets/black-hoodie-stack.jpg";
import greyHoodie from "@/assets/grey-hoodie-stack.jpg";
import graphiteHoodie from "@/assets/graphite-hoodie-stack.jpg";
import duneHoodie from "@/assets/dune-hoodie-stack.jpg";
import milkshakeHoodie from "@/assets/milkshake-hoodie-stack.jpg";

const hoodies = [
  {
    id: 1,
    color: "Black",
    meaning: "Вдохновлён беззвёздной ночью и глубиной вулканических пород. Этот оттенок передаёт внутреннюю мощь и спокойную решимость.",
    image: blackHoodie,
    price: "16,000 ₽",
    description: "Изготовлен из премиального футера трёхнитки плотностью 420 г/м² — тяжёлого, структурного хлопка, который сохраняет форму и создаёт ощущение защищённости. 100% хлопок обеспечивает воздухопроницаемость и мягкость прикосновения.\n\nКрой выстроен архитектурно: манжеты не перекрывают кисти, капюшон сохраняет статичную форму, пропорции выверены до миллиметра. В нём ощущается лёгкость движения при визуальной массивности — одежда, в которой баланс силы и комфорта становится естественным состоянием.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 2,
    color: "White",
    meaning: "Вдохновлён светом утреннего рассвета и чистотой зимнего воздуха. Этот оттенок символизирует новое начало, внутреннюю ясность и спокойствие.",
    image: whiteHoodie,
    price: "16,000 ₽",
    description: "Выполнен из премиального футера трёхнитки плотностью 420 г/м² — плотного, но дышащего хлопка с шелковистой поверхностью. Материал формирует чёткий силуэт, сохраняя ощущение лёгкости.\n\nПродуманный крой создаёт свободную посадку без излишнего объёма. Манжеты точны по длине, капюшон сохраняет форму, не оседая. В нём чувствуется чистота линии, простота движения и безупречный комфорт — как пространство, где можно дышать.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 3,
    color: "Grey",
    meaning: "Вдохновлён утренним туманом и мягкой рассеянной светотенью. Этот оттенок — воплощение тишины и гармонии.",
    image: greyHoodie,
    price: "16,000 ₽",
    description: "Выполнен из футера трёхнитки плотностью 420 г/м² — материала, который сочетает прочность, массу и удивительную лёгкость движения. 100% хлопок даёт естественную мягкость и устойчивую форму.\n\nСилуэт построен как архитектура комфорта: просторный, но собранный. Манжеты открывают кисти, капюшон держит структуру, крой создаёт ощущение уверенного равновесия между телом и пространством.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 4,
    color: "Graphite",
    meaning: "Вдохновлён глубиной природного камня и монолитной эстетикой городской архитектуры. Этот оттенок передаёт сдержанную силу и спокойную уверенность.",
    image: graphiteHoodie,
    price: "16,000 ₽",
    description: "Изготовлен из премиального футера трёхнитки плотностью 420 г/м² — тяжёлого, но дышащего материала, который формирует чёткий силуэт и создаёт ощущение надёжности. 100% хлопок дарит мягкость и естественную прохладу.\n\nМанжеты точной длины не скрывают кисти, капюшон сохраняет форму и не оседает, крой обеспечивает свободу без излишней объёмности. В нём ощущается лёгкость движения и архитектурная выверенность каждой линии — одежда, которая держит форму и состояние.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 5,
    color: "Dune",
    meaning: "Вдохновлён оранжевыми песками и бликами заходящего солнца. Этот оттенок воплощает естественное тепло, движение и энергию простора.",
    image: duneHoodie,
    price: "16,000 ₽",
    description: "Изготовлен из футера трёхнитки плотностью 420 г/м² — плотного хлопка, который создаёт ощущение надёжности, но не лишает лёгкости. Материал устойчив к деформации и сохраняет форму после множества носок.\n\nКрой построен так, чтобы силуэт оставался скульптурным. Капюшон не оседает, манжеты подчёркивают линию рук, посадка свободная, но собранная. В нём чувствуешь естественную энергию и уверенность — как шаг по тёплому песку на закате.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
  {
    id: 6,
    color: "Milkshake",
    meaning: "Вдохновлён кремовыми тонами молочного шоколада и мягким рассеянным светом. Этот оттенок передаёт спокойствие, тепло и тактильную уютность.",
    image: milkshakeHoodie,
    price: "16,000 ₽",
    description: "Изготовлен из премиального футера трёхнитки плотностью 420 г/м² — плотного, но мягкого хлопка, создающего эффект лёгкости и объёма. Материал идеально держит форму и раскрывает архитектуру кроя.\n\nКапюшон сохраняет статичную форму, манжеты выверенной длины, посадка свободная, но собранная. В нём чувствуешь мягкость и уверенность одновременно — одежда, которая обнимает, не ограничивая.",
    sizes: "M L",
    composition: "100% хлопок",
    modelHeight: "Модель рост 175 (размер L)",
  },
];

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof hoodies[0] | null>(null);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrandStoryOpen, setIsBrandStoryOpen] = useState(false);
  const [isGiftCardOpen, setIsGiftCardOpen] = useState(false);

  const handleProductSelect = (product: typeof hoodies[0]) => {
    setSelectedProduct(product);
    setIsProductDialogOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-lg tracking-[0.35em] font-display font-light uppercase">
            search
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#catalog" className="hover:text-muted-foreground transition-colors font-display font-light tracking-[0.15em] uppercase">
              Каталог
            </a>
            <button 
              onClick={() => setIsBrandStoryOpen(true)}
              className="hover:text-muted-foreground transition-colors font-display font-light tracking-[0.15em] uppercase"
            >
              История
            </button>
            <button 
              onClick={() => setIsGiftCardOpen(true)}
              className="hover:text-muted-foreground transition-colors font-display font-light tracking-[0.15em] uppercase"
            >
              Подарочные карты
            </button>
            <a href="#lookbook" className="hover:text-muted-foreground transition-colors font-display font-light tracking-[0.15em] uppercase">
              Lookbook
            </a>
            <a href="https://t.me/crossbounds88" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors font-display font-light tracking-[0.15em] uppercase">
              Телеграмм блог
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:block p-2 hover:text-muted-foreground transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 hover:text-muted-foreground transition-colors">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#catalog" 
                    onClick={closeMobileMenu}
                    className="text-lg font-display font-light tracking-[0.15em] uppercase hover:text-muted-foreground transition-colors"
                  >
                    Каталог
                  </a>
                  <button 
                    onClick={() => {
                      closeMobileMenu();
                      setTimeout(() => setIsBrandStoryOpen(true), 300);
                    }}
                    className="text-lg font-display font-light tracking-[0.15em] uppercase hover:text-muted-foreground transition-colors text-left"
                  >
                    История
                  </button>
                  <button 
                    onClick={() => {
                      closeMobileMenu();
                      setTimeout(() => setIsGiftCardOpen(true), 300);
                    }}
                    className="text-lg font-display font-light tracking-[0.15em] uppercase hover:text-muted-foreground transition-colors text-left"
                  >
                    Подарочные карты
                  </button>
                  <a 
                    href="#lookbook" 
                    onClick={closeMobileMenu}
                    className="text-lg font-display font-light tracking-[0.15em] uppercase hover:text-muted-foreground transition-colors"
                  >
                    Lookbook
                  </a>
                  <button 
                    onClick={() => {
                      setIsSearchOpen(true);
                      closeMobileMenu();
                    }}
                    className="text-lg font-display font-light tracking-[0.15em] uppercase hover:text-muted-foreground transition-colors text-left flex items-center gap-2"
                  >
                    <Search className="w-5 h-5" />
                    Поиск
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
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
    
    <ProductDialog 
      product={selectedProduct}
      open={isProductDialogOpen}
      onOpenChange={setIsProductDialogOpen}
    />
    
    <BrandStoryDialog 
      open={isBrandStoryOpen}
      onOpenChange={setIsBrandStoryOpen}
    />
    
    <GiftCardDialog 
      open={isGiftCardOpen}
      onOpenChange={setIsGiftCardOpen}
    />
    </>
  );
};

export default Navigation;
