import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import constructionFabric from "@/assets/construction-fabric.jpg";
import constructionPattern from "@/assets/construction-pattern.jpg";
import constructionDetails from "@/assets/construction-details.jpg";

interface BrandStoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BrandStoryDialog = ({ open, onOpenChange }: BrandStoryDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl md:text-4xl font-display font-light tracking-wider uppercase text-center mb-8">
            История
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
          <p>
            Search — российский бренд одежды, основанный в 2025 году.
          </p>
          <p>
            Мы делаем вещи, в которых тебе просто комфортно. Без шума, без показного стиля — только форма, настроение и ощущение свободы.
          </p>
          <p>
            Нам важен стиль. Он задаёт характер: свободный, расслабленный, но собранный. В этих худи можно исчезнуть от суеты, но остаться в себе.
          </p>
          <p className="font-medium text-foreground">
            Search — это не про одежду. Это про состояние, которое ты надеваешь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-square overflow-hidden bg-card hover:scale-105 transition-transform duration-300">
            <img
              src={constructionFabric}
              alt="Премиальная ткань для худи Search"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden bg-card hover:scale-105 transition-transform duration-300">
            <img
              src={constructionPattern}
              alt="Процесс конструирования худи Search"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden bg-card hover:scale-105 transition-transform duration-300">
            <img
              src={constructionDetails}
              alt="Детали конструкции худи Search"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BrandStoryDialog;
