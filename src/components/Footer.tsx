const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">Помощь</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-all duration-300">Доставка</a></li>
              <li><a href="#" className="hover:text-foreground transition-all duration-300">Возврат</a></li>
              <li><a href="#" className="hover:text-foreground transition-all duration-300">Оплата</a></li>
              <li><a href="#" className="hover:text-foreground transition-all duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">О бренде</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-all duration-300">История</a></li>
              <li><a href="#" className="hover:text-foreground transition-all duration-300">Производство</a></li>
              <li><a href="#" className="hover:text-foreground transition-all duration-300">Устойчивость</a></li>
              <li><a href="#" className="hover:text-foreground transition-all duration-300">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">Следите</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-all duration-300">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-all duration-300">Telegram</a></li>
              <li><a href="#" className="hover:text-foreground transition-all duration-300">VK</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 search. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-all duration-300">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-all duration-300">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
