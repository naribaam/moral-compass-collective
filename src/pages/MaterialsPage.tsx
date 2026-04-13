import TopNavigation from "@/components/TopNavigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { useNavigation } from "@/contexts/NavigationContext";
import { BookOpen, Video, Headphones, FileText, ArrowLeft, ExternalLink } from "lucide-react";
import heroMaterials from "@/assets/hero-materials.jpg";

const materials = [
  {
    icon: <BookOpen className="text-primary" size={36} />,
    title: "«Этика» — Аристотель",
    description: "Фундаментальный труд по нравственной философии. Никомахова этика остаётся актуальной уже более 2300 лет. Доступна бесплатно на сайте Библиотеки мировой литературы.",
    link: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BC%D0%B0%D1%85%D0%BE%D0%B2%D0%B0_%D1%8D%D1%82%D0%B8%D0%BA%D0%B0",
    buttonText: "Читать →",
  },
  {
    icon: <Video className="text-primary" size={36} />,
    title: "Курс: «Справедливость» (Гарвард)",
    description: "Легендарный курс Майкла Сэндела о моральной философии. 24 лекции, переведённые на десятки языков. Бесплатный доступ на YouTube.",
    link: "https://www.youtube.com/playlist?list=PL30C13C91CFFEFEA6",
    buttonText: "Смотреть →",
  },
  {
    icon: <Headphones className="text-primary" size={36} />,
    title: "Подкаст: «Философия для жизни»",
    description: "Серия бесед о прикладной этике, стоицизме и осознанности. Практические рекомендации от современных философов и психологов.",
    link: "https://podcasts.apple.com/",
    buttonText: "Слушать →",
  },
  {
    icon: <BookOpen className="text-primary" size={36} />,
    title: "«Человек в поисках смысла» — Виктор Франкл",
    description: "Классическая работа о логотерапии и о том, как нравственные ценности помогают человеку преодолеть самые тяжёлые испытания.",
    link: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA_%D0%B2_%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0%D1%85_%D1%81%D0%BC%D1%8B%D1%81%D0%BB%D0%B0",
    buttonText: "Подробнее →",
  },
  {
    icon: <FileText className="text-primary" size={36} />,
    title: "Декларация о правах человека (ООН)",
    description: "Всеобщая декларация прав человека — один из ключевых документов в истории нравственности. 30 статей, утверждающих достоинство каждого.",
    link: "https://www.un.org/ru/about-us/universal-declaration-of-human-rights",
    buttonText: "Читать →",
  },
  {
    icon: <Video className="text-primary" size={36} />,
    title: "TED: «Сила эмпатии» — Брене Браун",
    description: "Одно из самых популярных выступлений TED о сострадании и уязвимости. Более 60 млн просмотров.",
    link: "https://www.ted.com/talks/brene_brown_the_power_of_vulnerability",
    buttonText: "Смотреть →",
  },
];

const MaterialsPage = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <PageHero title="Образовательные материалы" subtitle="Реальные книги, курсы и ресурсы для глубокого погружения в этику и нравственность" backgroundImage={heroMaterials} />
      <TopNavigation />
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 pb-20">
        <p className="text-lg text-muted-foreground border-l-4 border-primary pl-5 mb-12">
          Мы собрали проверенные мировые ресурсы по этике, философии и моральным ценностям — книги, видеокурсы и документы
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((m) => (
            <div key={m.title} className="bg-card rounded-2xl p-8 shadow-lg border border-border flex flex-col hover:shadow-xl transition-shadow">
              <div className="mb-5">{m.icon}</div>
              <h4 className="text-xl font-heading font-bold text-card-foreground mb-3">{m.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm flex-1">{m.description}</p>
              <a
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 bg-primary text-primary-foreground rounded-full px-5 py-2 text-sm font-semibold hover:bg-primary-dark transition-colors w-fit flex items-center gap-1.5"
              >
                {m.buttonText} <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
        <button onClick={() => navigate("home")} className="mt-12 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold hover:bg-primary-dark transition-colors flex items-center gap-2">
          <ArrowLeft size={18} /> Главная
        </button>
      </div>
      <Footer />
    </>
  );
};

export default MaterialsPage;
