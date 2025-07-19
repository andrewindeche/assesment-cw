import SearchBar from '@/components/features/SearchBar';

function HeroSection({ onSearch }: { onSearch: (search: string) => void }) {
  return (
    <section className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8" aria-labelledby="hero-heading">
      <img src="/task1/hero-bg.png" alt="" className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        <SearchBar initialValue="" onSearch={onSearch} />
      </div>
    </section>
  );
}
export default HeroSection;
