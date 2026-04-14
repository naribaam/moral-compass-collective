import { useNavigation } from "@/contexts/NavigationContext";

const Footer = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-footer-bg text-footer-foreground px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-primary-foreground text-xl font-heading font-bold mb-4">KUNDYLYK</h3>
          <p className="text-sm leading-relaxed mb-4">Проект о моральных ценностях и духовном развитии общества.</p>
          <div className="flex flex-col gap-2 text-sm">
            <span>📸 Instagram: kundylyk.kz</span>
            <span>✈️ Telegram: kundylyk_kz</span>
            <span>🎬 YouTube: Kundylyk TV</span>
          </div>
        </div>
        <div>
          <h3 className="text-primary-foreground text-xl font-heading font-bold mb-4">Навигация</h3>
          <div className="flex flex-col gap-2">
            {(["about", "mission", "topics", "materials", "contacts"] as const).map((key) => (
              <button key={key} onClick={() => navigate(key)} className="text-left text-sm hover:text-primary transition-colors">
                {key === "about" ? "О нас" : key === "mission" ? "Миссия" : key === "topics" ? "Темы" : key === "materials" ? "Материалы" : "Контакты"}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-primary-foreground text-xl font-heading font-bold mb-4">Связаться с нами</h3>
          <form action="https://formspree.io/f/mgorvovv" method="POST" className="flex flex-col gap-3">
            <input name="name" placeholder="Ваше имя" className="rounded-full px-4 py-2.5 bg-muted text-foreground text-sm border border-border" />
            <textarea name="message" placeholder="Сообщение" rows={3} className="rounded-2xl px-4 py-2.5 bg-muted text-foreground text-sm border border-border resize-none" />
            <button type="submit" className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-primary-dark transition-colors w-fit">
              Отправить
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/20 mt-10 pt-6 text-center text-xs text-footer-foreground/60">
        © 2026 KUNDYLYK | Все права защищены
      </div>
    </footer>
  );
};

export default Footer;
