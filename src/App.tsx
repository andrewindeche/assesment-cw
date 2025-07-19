import { useState } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/layout/HeroSection';
import TagList from '@/components/features/TagList';
import { useIsMobile } from '@/hooks/useMobile'; 

export default function App() {
  const [tags] = useState(['NFT', 'Metaverse', 'Sustainable', 'Sonder', 'FOMO', 'Ghosting']);
  const isMobile = useIsMobile(); 

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <main className="bg-black pb-10 min-h-screen text-white">
      <Header isMobile={isMobile}  />
      <HeroSection onSearch={handleSearch} isMobile={isMobile}  />
      <TagList title="Trending" tags={tags}/>
      <TagList title="For you" tags={tags} />
    </main>
  );
}
