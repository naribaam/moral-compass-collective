import { useNavigation } from "@/contexts/NavigationContext";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { key: "about" as const, label: "О нас" },
  { key: "mission" as const, label: "Миссия" },
  { key: "topics" as const, label: "Темы" },
  { key: "materials" as const, label: "Материалы" },
  { key: "contacts" as const, label: "Контакты" },
];

const TopNavigation = () => {
  const { navigate, isDark, toggleTheme } = useNavigation();

  return (
    <nav className="sticky top-0 z-50 bg-nav-bg shadow-lg px-4 md:px-10 flex items-center justify-between flex-wrap transition-colors">
      <button onClick={() => navigate("home")} className="text-primary-foreground text-2xl font-heading font-bold tracking-widest py-4">
        KUNDYLYK
      </button>
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => navigate(item.key)}
            className="text-primary-foreground/90 hover:text-primary-foreground px-3 py-5 text-base font-medium transition-colors hover:bg-primary-foreground/10 border-b-2 border-transparent hover:border-primary-foreground"
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={toggleTheme}
          className="ml-3 w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/25 transition-colors"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default TopNavigation;
