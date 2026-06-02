type Props = {
  badge?: string;
  title: string;
  subtitle?: string;
};

export function PageHero({ badge, title, subtitle }: Props) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        {badge && <span className="page-hero-badge badge badge-green">{badge}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
