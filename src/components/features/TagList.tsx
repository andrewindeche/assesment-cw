import { Badge } from "@/components/ui/badge";

type TagListProps = {
  title: string;
  tags: string[];
  onTagClick?: (tag: string) => void;
};

export default function TagList({ title, tags, onTagClick }: TagListProps) {
  return (
    <section className="mt-8 px-6 max-w-5xl mx-auto" aria-labelledby="tag-list section">
      <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, i) => (
          <Badge
            key={`${tag}-${i}`}
            onClick={() => onTagClick?.(tag)}
            className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer transition duration-200"
            aria-label={`Search tag: ${tag}`}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}