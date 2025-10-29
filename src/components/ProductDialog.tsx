import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface Product {
  id: number;
  color: string;
  title: string;
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">
            {product.color} — {product.title}
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
          
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-4">
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
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
