import { Search, Mic, Camera, X } from "lucide-react";
import CoogleLogo from "./CoogleLogo";

interface SearchHeaderProps {
  query: string;
}

const SearchHeader = ({ query }: SearchHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border-light">
      <div className="max-w-5xl mx-auto flex items-center gap-4 md:gap-6 px-4 py-3">
        <CoogleLogo />
        
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center bg-background border border-border-light rounded-full px-4 py-2 hover:shadow-md transition-shadow focus-within:shadow-md">
            <input
              type="text"
              defaultValue={query}
              className="flex-1 outline-none bg-transparent text-foreground text-base"
              readOnly
            />
            <div className="flex items-center gap-3 ml-2">
              <button className="p-1 hover:bg-hover-bg rounded-full">
                <X className="w-5 h-5 text-text-light" />
              </button>
              <div className="w-px h-6 bg-border-light" />
              <button className="p-1 hover:bg-hover-bg rounded-full">
                <Mic className="w-5 h-5 text-google-blue" />
              </button>
              <button className="p-1 hover:bg-hover-bg rounded-full">
                <Camera className="w-5 h-5 text-google-blue" />
              </button>
              <button className="p-2 hover:bg-hover-bg rounded-full">
                <Search className="w-5 h-5 text-google-blue" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
