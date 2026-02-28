import { ArrowRight, Linkedin } from "lucide-react";

interface Person {
  name: string;
  image: string;
}

interface KnowledgePanelProps {
  about: string;
  education: string[];
  linkedIn?: string;
  peopleAlsoSearchFor: Person[];
}

const KnowledgePanel = ({ about, education, linkedIn, peopleAlsoSearchFor }: KnowledgePanelProps) => {
  return (
    <aside className="knowledge-panel bg-card">
      <h3 className="text-base font-normal text-foreground mb-4">About</h3>
      
      <p className="text-sm text-text-gray leading-relaxed mb-6">
        {about}
      </p>
      
      <div className="mb-6">
        <span className="text-sm font-medium text-foreground">Education: </span>
        <span className="text-sm text-text-gray">
          {education.join(" · ")}
        </span>
      </div>

      {/* Profiles section */}
      {linkedIn && (
        <div className="mb-6">
          <h3 className="text-base font-normal text-foreground mb-4">Profiles</h3>
          <div className="flex gap-4">
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center group-hover:opacity-80 transition-opacity">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-text-gray group-hover:text-link-blue transition-colors">LinkedIn</span>
            </a>
          </div>
        </div>
      )}
      
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
        
        <a href="https://time.com/collections/time100-ai-2025/" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-muted hover:bg-hover-bg rounded-full text-sm text-foreground transition-colors">
          See more
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};

export default KnowledgePanel;
