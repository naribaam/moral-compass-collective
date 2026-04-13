import { useNavigation } from "@/contexts/NavigationContext";
import { Moon, Sun, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const HomePage = () => {
  const { navigate, isDark, toggleTheme } = useNavigation();

  return (
    <>
    <div className="flex flex-col md:flex-row min-h-screen animate-fade-in">
      {/* Left: Hero */}
      <header
        className="w-full md:w-[60%] min-h-[60vh] md:min-h-screen flex flex-col justify-center px-8 md:px-16 py-16 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground tracking-wider mb-6">
          KUNDYLYK
        </h1>
        <h2 className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-5">
          Моральные ценности в современном обществе
        </h2>
        <p className="text-primary-foreground/80 text-base md:text-lg max-w-lg leading-relaxed mb-2">
          Моральные ценности формируют мировоззрение человека и определяют каждый его поступок — от личных решений до влияния на общество.
        </p>
        <p className="text-primary-foreground/70 text-base max-w-lg mb-8">
          Они служат фундаментом осознанной жизни и гармоничных взаимоотношений.
        </p>
        <button
          onClick={() => navigate("about")}
          className="bg-primary text-primary-foreground rounded-full px-8 py-3.5 font-semibold text-lg shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all w-fit flex items-center gap-2"
        >
          Узнать больше <ArrowRight size={20} />
        </button>
      </header>

      {/* Right: Navigation */}
      <nav className="w-full md:w-[40%] bg-nav-bg flex flex-col justify-center px-8 md:px-16 py-12 relative transition-colors">
        <button
          onClick={toggleTheme}
          className="absolute top-6 left-6 w-11 h-11 rounded-full bg-primary-foreground/15 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        >
          {isDark ? <Sun size={22} /> : <Moon size={22} />}
        </button>
        {[
          { key: "about" as const, label: "О нас" },
          { key: "mission" as const, label: "Миссия" },
          { key: "topics" as const, label: "Темы" },
          { key: "materials" as const, label: "Материалы" },
          { key: "contacts" as const, label: "Контакты" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => navigate(item.key)}
            className="text-left text-primary-foreground text-2xl font-medium py-4 border-b border-primary-foreground/20 hover:pl-4 hover:text-primary-foreground/80 transition-all"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
    <Footer />
    </>
  );
};

export default HomePage;
