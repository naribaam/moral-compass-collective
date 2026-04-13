import { NavigationProvider, useNavigation } from "@/contexts/NavigationContext";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import MissionPage from "@/pages/MissionPage";
import TopicsPage from "@/pages/TopicsPage";
import MaterialsPage from "@/pages/MaterialsPage";
import ContactsPage from "@/pages/ContactsPage";

const PageRouter = () => {
  const { currentPage } = useNavigation();

  switch (currentPage) {
    case "home": return <HomePage />;
    case "about": return <AboutPage />;
    case "mission": return <MissionPage />;
    case "topics": return <TopicsPage />;
    case "materials": return <MaterialsPage />;
    case "contacts": return <ContactsPage />;
    default: return <HomePage />;
  }
};

const Index = () => (
  <NavigationProvider>
    <PageRouter />
  </NavigationProvider>
);

export default Index;
