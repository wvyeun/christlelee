import { Search } from "lucide-react";

interface RelatedSearchesProps {
  searches: string[];
}

const RelatedSearches = ({ searches }: RelatedSearchesProps) => {
  return (
    <section className="mt-8 mb-8">
      <h2 className="text-lg font-normal text-foreground mb-4 flex items-center gap-2">
        Related searches
        <span className="text-text-light">⋮</span>
      </h2>
      
      <div className="flex flex-wrap gap-3">
        {searches.map((search, index) => (
          <button
            key={index}
            className="flex items-center gap-3 px-5 py-3 bg-muted hover:bg-hover-bg rounded-full text-sm text-foreground transition-colors"
          >
            <Search className="w-4 h-4 text-text-light" />
            <span>{search}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default RelatedSearches;
