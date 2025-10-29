import { Search } from "lucide-react";

const Navigation = () => {
  return (
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
            <button className="p-2 hover:text-muted-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
