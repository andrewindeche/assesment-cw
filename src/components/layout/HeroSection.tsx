import SearchBar from '@/components/features/SearchBar';

type HeroSectionProps = {
  onSearch: (search: string) => void;
  isMobile: boolean;
};

function HeroSection({ onSearch, isMobile }: HeroSectionProps) {
  return (
    <section
      className={`relative w-full mx-auto rounded-xl overflow-hidden mt-8 ${
        isMobile ? 'px-4' : 'px-6 max-w-5xl'
      }`}
      aria-labelledby="hero-heading"
    >
      <img
        src="/task1/hero-bg.png"
        alt=""
        className={`w-full object-cover rounded-xl filter brightness-160 contrast-120 ${
          isMobile ? 'h-72' : 'h-[34rem]'
        }`}
      />
      <div
        className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center gap-6 ${
          isMobile ? 'px-3 pt-16 pb-8' : 'px-4 pt-20 pb-10'
        }`}
      >
        <h1
          className={`text-white tracking-tight font-black max-w-3xl ${
            isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'
          }`}
        >
          Search for words, phrases and meanings
        </h1>
        <SearchBar initialValue="" onSearch={onSearch} />
      </div>
    </section>
  );
}

export default HeroSection;