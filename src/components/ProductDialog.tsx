import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send, ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: number;
  color: string;
  meaning: string;
  image: string;
  price: string;
  description: string;
  sizes: string;
  composition: string;
  modelHeight: string;
}

interface ProductDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDialog = ({ product, open, onOpenChange }: ProductDialogProps) => {
  if (!product) return null;

  const handleTelegramClick = () => {
    window.open("https://t.me/yourusername", "_blank");
  };

  const carouselImages = [product.image, product.image, product.image, product.image];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden absolute left-4 top-4 z-10"
          onClick={() => onOpenChange(false)}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">
            {product.color}
          </DialogTitle>
          <DialogDescription className="text-base">
            {product.meaning}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="aspect-square overflow-hidden bg-card rounded-lg">
            <img
              src={product.image}
              alt={`Премиум худи search ${product.color}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            
            <div className="space-y-2">
              <p className="text-2xl font-light">{product.price}</p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Размер:</span> {product.sizes}</p>
                <p><span className="font-medium">Состав:</span> {product.composition}</p>
                <p className="text-muted-foreground">{product.modelHeight}</p>
              </div>
            </div>
            
            <Button 
              onClick={handleTelegramClick}
              className="w-full"
              size="lg"
            >
              <Send className="mr-2 h-4 w-4" />
              Написать в ТГ
            </Button>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full mt-6">
          <AccordionItem value="size-chart">
            <AccordionTrigger>Таблица размеров</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">M:</span> Грудь 112 см, Длина 70 см, Рукав 63 см</p>
                <p><span className="font-medium">L:</span> Грудь 118 см, Длина 73 см, Рукав 65 см</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="description">
            <AccordionTrigger>Описание</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Премиум худи из плотного 100% хлопка с уникальным оттенком, вдохновлённым природными элементами. 
                Каждая деталь продумана для комфорта и долговечности.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="characteristics">
            <AccordionTrigger>Характеристики</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-1 text-sm">
                <p>• Плотность ткани: 450 г/м²</p>
                <p>• Натуральный 100% хлопок</p>
                <p>• Усиленные швы</p>
                <p>• Качественная фурнитура YKK</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="fit">
            <AccordionTrigger>Детали посадки</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Оверсайз крой с небольшим дропом. Модель рост 175 см носит размер L. 
                Рекомендуем выбирать привычный размер для свободной посадки.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="care">
            <AccordionTrigger>Уход</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-1 text-sm">
                <p>• Стирка при температуре не выше 30°C</p>
                <p>• Не использовать отбеливатели</p>
                <p>• Гладить при низкой температуре</p>
                <p>• Не подвергать химчистке</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6">
          <h3 className="text-lg font-light mb-4">Коллекция</h3>
          <Carousel className="w-full">
            <CarouselContent>
              {carouselImages.map((img, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-lg bg-card">
                    <img
                      src={img}
                      alt={`${product.color} - фото ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
