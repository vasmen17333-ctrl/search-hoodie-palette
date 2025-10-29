const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">Помощь</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Возврат</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Оплата</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">О бренде</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">История</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Производство</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Устойчивость</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">Следите</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">VK</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4 tracking-wide uppercase">Новости</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Подпишитесь на рассылку и узнавайте о новых коллекциях первыми
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 bg-background border border-input text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 search. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
