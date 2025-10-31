import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LookbookGalleryDialog from "./LookbookGalleryDialog";
import formImage from "@/assets/lookbook-form.jpg";
import colorImage from "@/assets/lookbook-color.jpg";
import materialImage from "@/assets/lookbook-material.jpg";
import atmosphereImage from "@/assets/lookbook-atmosphere.jpg";

interface LookbookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Category {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  isHorizontal?: boolean;
}

const categories: Category[] = [
  {
    id: "form",
    title: "Форма",
    description: "Акцент на силуэтах и архитектуре кроя",
    coverImage: formImage,
    images: [formImage, formImage, formImage],
  },
  {
    id: "color",
    title: "Цвет",
    description: "Монохромные композиции в одном оттенке",
    coverImage: colorImage,
    images: [colorImage, colorImage, colorImage],
  },
  {
    id: "material",
    title: "Материя",
    description: "Детали ткани, текстуры, движение",
    coverImage: materialImage,
    images: [materialImage, materialImage, materialImage],
  },
  {
    id: "atmosphere",
    title: "Атмосфера",
    description: "Эмоции, свет, взаимодействие",
    coverImage: atmosphereImage,
    images: [atmosphereImage, atmosphereImage, atmosphereImage],
    isHorizontal: true,
  },
];

const LookbookDialog = ({ open, onOpenChange }: LookbookDialogProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto p-8">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-display font-light tracking-[0.25em] uppercase">
                Lookbook
              </h2>
              <p className="text-sm text-muted-foreground font-display font-light tracking-[0.15em] uppercase">
                Исследуйте визуальные истории
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
              {categories.slice(0, 3).map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm glitch-hover"
                >
                  <img
                    src={category.coverImage}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-display font-light tracking-[0.3em] text-2xl uppercase mb-2">
                      {category.title}
                    </h3>
                    <p className="text-white/80 font-display font-light tracking-[0.15em] text-xs uppercase">
                      Смотреть серию
                    </p>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-display font-light tracking-[0.2em] text-xl uppercase mb-1 drop-shadow-lg">
                      {category.title}
                    </h3>
                    <p className="text-white/90 text-xs font-display font-light tracking-[0.1em] drop-shadow-lg">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {categories[3] && (
              <div
                onClick={() => handleCategoryClick(categories[3])}
                className="group relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden cursor-pointer rounded-sm glitch-hover"
              >
                <img
                  src={categories[3].coverImage}
                  alt={categories[3].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-display font-light tracking-[0.3em] text-3xl uppercase mb-2">
                    {categories[3].title}
                  </h3>
                  <p className="text-white/80 font-display font-light tracking-[0.15em] text-sm uppercase">
                    Смотреть серию
                  </p>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white font-display font-light tracking-[0.2em] text-2xl uppercase mb-2 drop-shadow-lg">
                    {categories[3].title}
                  </h3>
                  <p className="text-white/90 text-sm font-display font-light tracking-[0.1em] drop-shadow-lg">
                    {categories[3].description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <LookbookGalleryDialog
        open={isGalleryOpen}
        onOpenChange={setIsGalleryOpen}
        category={selectedCategory}
      />
    </>
  );
};

export default LookbookDialog;
