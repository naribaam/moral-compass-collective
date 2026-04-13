import TopNavigation from "@/components/TopNavigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { useNavigation } from "@/contexts/NavigationContext";
import { MapPin, Phone, Mail, Instagram, Send, ArrowLeft } from "lucide-react";
import heroContacts from "@/assets/hero-contacts.jpg";

const ContactsPage = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <PageHero title="Свяжитесь с нами" subtitle="Мы открыты для диалога, партнёрства и волонтёрских инициатив" backgroundImage={heroContacts} />
      <TopNavigation />
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-heading font-bold gradient-text mb-6">Контактная информация</h2>
            <ul className="space-y-5">
              {[
                { icon: <MapPin className="text-primary" size={24} />, text: "Алматы, ул. Толе би, 45" },
                { icon: <Phone className="text-primary" size={24} />, text: "+7 (727) 345-67-89" },
                { icon: <Mail className="text-primary" size={24} />, text: "hello@kundylyk.kz" },
                { icon: <Instagram className="text-primary" size={24} />, text: "@kundylyk.official" },
                { icon: <Send className="text-primary" size={24} />, text: "t.me/kundylyk_center" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-4 text-lg text-foreground">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-xl font-heading font-bold text-card-foreground mb-2">📍 Наш офис</h3>
            <p className="text-muted-foreground mb-4">Офис в центре Алматы. Приходите на наши открытые встречи каждую среду в 18:00.</p>
            <div className="bg-muted rounded-xl p-8 text-center text-muted-foreground">
              <MapPin className="mx-auto mb-2 text-primary" size={32} />
              <p>Карта: улица Толе би, угол Байтурсынова</p>
            </div>
          </div>
        </div>
        <button onClick={() => navigate("home")} className="mt-12 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold hover:bg-primary-dark transition-colors flex items-center gap-2">
          <ArrowLeft size={18} /> На главную
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ContactsPage;
