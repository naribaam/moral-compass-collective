import TopNavigation from "@/components/TopNavigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { useNavigation } from "@/contexts/NavigationContext";
import { Sparkles, GraduationCap, Globe, ArrowLeft } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";

const cards = [
  {
    icon: <Sparkles className="text-primary" size={40} />,
    title: "Наша философия",
    text: "Проект KUNDYLYK опирается на три столпа: уважение к человеку, честность в каждом слове и ответственность за будущее. Мы верим, что моральные ориентиры — это не пережиток прошлого, а живой фундамент гармоничного общества.",
  },
  {
    icon: <GraduationCap className="text-primary" size={40} />,
    title: "Образование",
    text: "Мы проводим открытые лекции, онлайн-вебинары и интерактивные тренинги по прикладной этике — для студентов, педагогов и всех, кто стремится к осознанной жизни.",
  },
  {
    icon: <Globe className="text-primary" size={40} />,
    title: "Сообщество",
    text: "Объединяем философов, психологов, педагогов и активистов из Казахстана и Центральной Азии для совместного продвижения нравственных идеалов.",
  },
];

const AboutPage = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <PageHero title="О проекте KUNDYLYK" subtitle="Вдохновляем общество на осознанный выбор и духовное развитие" backgroundImage={heroAbout} />
      <TopNavigation />
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 pb-20">
        <p className="text-lg text-muted-foreground border-l-4 border-primary pl-5 mb-12">
          Наша философия основана на уважении, честности и ответственности — ценностях, актуальных во все времена
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div key={c.title} className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="mb-5">{c.icon}</div>
              <h3 className="text-2xl font-heading font-bold text-card-foreground mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
        <button onClick={() => navigate("home")} className="mt-12 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold hover:bg-primary-dark transition-colors flex items-center gap-2">
          <ArrowLeft size={18} /> На главную
        </button>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
