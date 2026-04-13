interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => (
  <div
    className="relative bg-cover bg-center py-20 md:py-28 px-6 md:px-10"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="hero-overlay absolute inset-0" />
    <div className="relative z-10 max-w-3xl animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/90">{subtitle}</p>
    </div>
  </div>
);

export default PageHero;
