import { ArrowRight } from "lucide-react";

interface Person {
  name: string;
  image: string;
}

interface KnowledgePanelProps {
  about: string;
  education: string[];
  peopleAlsoSearchFor: Person[];
}

const KnowledgePanel = ({ about, education, peopleAlsoSearchFor }: KnowledgePanelProps) => {
  return (
    <aside className="knowledge-panel bg-card">
      <h2 className="text-xl font-semibold text-foreground mb-4">About Christle Lee</h2>
      
      <p className="text-sm text-text-gray leading-relaxed mb-6">
        {about}
      </p>
      
      <div className="mb-6">
        <span className="text-sm font-medium text-foreground">Education: </span>
        <span className="text-sm text-text-gray">
          {education.join(" · ")}
        </span>
      </div>
      
      <div>
        <h3 className="text-base font-normal text-foreground mb-4">People also search for</h3>
        
        <div className="grid grid-cols-4 gap-3 mb-4">
          {peopleAlsoSearchFor.map((person) => (
            <div key={person.name} className="text-center cursor-pointer group">
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg overflow-hidden bg-muted">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                />
              </div>
              <span className="text-xs text-link-blue group-hover:underline">
                {person.name}
              </span>
            </div>
          ))}
        </div>
        
        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-muted hover:bg-hover-bg rounded-full text-sm text-foreground transition-colors">
          See more
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};

export default KnowledgePanel;
