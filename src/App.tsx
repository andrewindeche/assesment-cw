import { useState} from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import TagList from "@/components/features/TagList";

export default function App() {
  const [tags, setTags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

   const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <HeroSection onSearch={handleSearch} />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
