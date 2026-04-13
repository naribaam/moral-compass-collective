import TopNavigation from "@/components/TopNavigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { useNavigation } from "@/contexts/NavigationContext";
import { Sprout, HeartHandshake, Lightbulb, ArrowLeft } from "lucide-react";
import heroMission from "@/assets/hero-mission.jpg";

const missions = [
  {
    icon: <Sprout className="text-primary" size={48} />,
    title: "Воспитание поколений",
    text: "Помогаем молодежи развивать критическое мышление и находить опору в проверенных временем ценностях — честности, трудолюбии, сострадании.",
  },
  {
    icon: <HeartHandshake className="text-primary" size={48} />,
    title: "Поддержка инициатив",
    text: "Содействуем социальным проектам, укрепляющим институт семьи, добрососедство и культуру взаимопомощи в городских и сельских сообществах.",
  },
  {
    icon: <Lightbulb className="text-primary" size={48} />,
    title: "Цифровая этика",
    text: "Формируем стандарты ответственного поведения в цифровом пространстве: от борьбы с кибербуллингом до осознанного потребления контента.",
  },
];

const MissionPage = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <PageHero title="Наша миссия" subtitle="Возрождение моральных ценностей как основы процветающего общества" backgroundImage={heroMission} />
      <TopNavigation />
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((m) => (
            <div key={m.title} className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-shadow">
              <div className="mb-5 flex justify-center">{m.icon}</div>
              <h3 className="text-2xl font-heading font-bold text-card-foreground mb-3">{m.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
        <button onClick={() => navigate("home")} className="mt-12 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold hover:bg-primary-dark transition-colors flex items-center gap-2">
          <ArrowLeft size={18} /> Вернуться
        </button>
      </div>
      <Footer />
    </>
  );
};

export default MissionPage;
