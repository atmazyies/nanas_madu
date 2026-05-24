import { promoBanners } from "../data/promoBanners";
import PromoBanner from "../components/PromoBanner";

export default function PromoBannerSection() {
  return (
    <section className="py-8 sm:py-12" aria-label="Promotional offers">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {promoBanners.map((banner) => (
            <PromoBanner key={banner.id} banner={banner} />
          ))}
        </div>
      </div>
    </section>
  );
}
