import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import giftCardImage from "@/assets/gift-card.jpg";

interface GiftCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const amounts = [5000, 10000, 25000, 100000];

const GiftCardDialog = ({ open, onOpenChange }: GiftCardDialogProps) => {
  const [selectedAmount, setSelectedAmount] = useState(5000);

  const handleOrder = () => {
    const message = `Хочу оформить подарочный сертификат на сумму ${selectedAmount}₽`;
    const telegramUrl = `https://t.me/crossbounds88?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-8 py-6">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-display font-light tracking-[0.15em] uppercase">
              Подарочный Сертификат
            </h2>
            
            <div className="text-5xl font-display font-light">
              {selectedAmount.toLocaleString('ru-RU')} ₽
            </div>
            
            <div className="text-sm font-display font-light tracking-[0.2em] uppercase text-muted-foreground">
              AMOUNT
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {amounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount ? "default" : "outline"}
                  onClick={() => setSelectedAmount(amount)}
                  className="font-display font-light tracking-[0.1em]"
                >
                  {amount.toLocaleString('ru-RU')} ₽
                </Button>
              ))}
            </div>
            
            <Button 
              onClick={handleOrder}
              className="w-full max-w-md font-display font-light tracking-[0.15em] uppercase"
              size="lg"
            >
              Оформить заказ в Телеграмм
            </Button>
          </div>
          
          <img 
            src={giftCardImage} 
            alt="Подарочная карта" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GiftCardDialog;
