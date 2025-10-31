import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LookbookGalleryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: {
    title: string;
    images: string[];
  } | null;
}

const LookbookGalleryDialog = ({ open, onOpenChange, category }: LookbookGalleryDialogProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!category) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % category.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + category.images.length) % category.images.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-black">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-6 w-6 text-white" />
          <span className="sr-only">Close</span>
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="absolute left-4 z-40 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <img
            src={category.images[currentImageIndex]}
            alt={`${category.title} - изображение ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-4 z-40 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white font-display font-light tracking-[0.2em] text-sm uppercase bg-black/50 backdrop-blur-sm px-6 py-2 rounded-full">
            {category.title} — {currentImageIndex + 1} / {category.images.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LookbookGalleryDialog;
