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
  meaning: string;
  image: string;
  price: string;
  description?: string;
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
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">{product.color}</DialogTitle>
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
          
          <div className="flex flex-col justify-between">
            {product.description && (
              <p className="text-sm text-muted-foreground mb-4">
                {product.description}
              </p>
            )}
            
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-light mb-2">{product.price}</p>
                <p className="text-sm text-muted-foreground">
                  Размеры: XS, S, M, L, XL
                </p>
              </div>
              
              <Button 
                onClick={handleTelegramClick}
                className="w-full"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
