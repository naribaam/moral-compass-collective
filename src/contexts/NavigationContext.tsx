import { useState, useEffect, createContext, useContext } from "react";

type Page = "home" | "about" | "mission" | "topics" | "materials" | "contacts";

interface NavigationContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const NavigationContext = createContext<NavigationContextType>({
  currentPage: "home",
  navigate: () => {},
  isDark: false,
  toggleTheme: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate, isDark, toggleTheme: () => setIsDark(!isDark) }}>
      {children}
    </NavigationContext.Provider>
  );
};
