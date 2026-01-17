interface SearchResultProps {
  favicon?: string;
  siteName: string;
  url: string;
  title: string;
  description: string;
}

const SearchResult = ({ favicon, siteName, url, title, description }: SearchResultProps) => {
  return (
    <article className="mb-8 max-w-xl">
      <div className="flex items-center gap-3 mb-1">
        {favicon ? (
          <img src={favicon} alt="" className="w-7 h-7 rounded-full bg-muted p-1" />
        ) : (
          <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs font-medium text-muted-foreground">
              {siteName.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-sm text-foreground">{siteName}</span>
          <span className="text-xs text-url-green">{url}</span>
        </div>
      </div>
      
      <h3 className="text-xl text-link-blue hover:underline cursor-pointer mb-1 leading-snug">
        {title}
      </h3>
      
      <p className="text-sm text-text-gray leading-relaxed">
        {description}
      </p>
    </article>
  );
};

export default SearchResult;
