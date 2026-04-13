import TopNavigation from "@/components/TopNavigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { useNavigation } from "@/contexts/NavigationContext";
import { Scale, Brain, Users, Shield, Heart, TrendingUp, ArrowLeft } from "lucide-react";
import heroTopics from "@/assets/hero-topics.jpg";

const topics = [
  { icon: <Scale className="text-primary" size={38} />, title: "Справедливость и равенство", text: "Поиск баланса между личными интересами и общественным благом — одна из вечных философских задач. Как построить справедливое общество?" },
  { icon: <Brain className="text-primary" size={38} />, title: "Осознанное потребление", text: "Экологическая этика и ответственное отношение к ресурсам планеты — это моральный выбор, который касается каждого." },
  { icon: <Users className="text-primary" size={38} />, title: "Толерантность и диалог", text: "Уважение к культурному и мировоззренческому разнообразию — ключ к мирному сосуществованию и инклюзивному обществу." },
  { icon: <Shield className="text-primary" size={38} />, title: "Честность и доверие", text: "Правдивость в личных и профессиональных отношениях — фундамент, на котором строится социальный капитал." },
  { icon: <Heart className="text-primary" size={38} />, title: "Эмпатия и сострадание", text: "Эмоциональный интеллект признан одной из ключевых компетенций XXI века. Способность сопереживать делает нас людьми." },
  { icon: <TrendingUp className="text-primary" size={38} />, title: "Ценности будущего", text: "Искусственный интеллект, биоэтика, цифровое бессмертие — технологии ставят перед человечеством новые моральные вопросы." },
];

const TopicsPage = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <PageHero title="Актуальные темы" subtitle="Ключевые моральные дилеммы и ценности современности" backgroundImage={heroTopics} />
      <TopNavigation />
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((t) => (
            <div key={t.title} className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="mb-5">{t.icon}</div>
              <h3 className="text-xl font-heading font-bold text-card-foreground mb-3">{t.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{t.text}</p>
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

export default TopicsPage;
