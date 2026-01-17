import SearchHeader from "@/components/SearchHeader";
import SearchResult from "@/components/SearchResult";
import KnowledgePanel from "@/components/KnowledgePanel";
import RelatedSearches from "@/components/RelatedSearches";

const searchQuery = "curiosity, continuous learning, technical excellence, collaboration, innovation";

const searchResults = [
  {
    siteName: "Atlassian",
    url: "https://www.atlassian.com",
    title: "Customer Success Manager",
    description:
      "Acts as a trusted advisor to Strategic and Enterprise organizations, ensuring they maximize value from our solutions. Collaborates with customers and Account Teams on Success Plans, QBRs, and strategic sessions. Manages complex global implementations and scalable enablement with Partners. Reduces churn by identifying risks early and partnering on mitigation. Serves as the Voice of the Customer, providing feedback for improvement.",
  },
  {
    siteName: "Amazon Alexa",
    url: "https://alexa.amazon.com",
    title: "Product Manager",
    description:
      "Drive go-to-market strategies, optimize engagement, and reduce lapse through data-driven decisions. Track KPIs, write product docs, and collaborate across teams to launch products effectively.",
  },
  {
    siteName: "Amazon Web Services",
    url: "https://www.aws.amazon.com",
    title: "Cloud Engineer",
    description:
      "Manage escalations, propose workarounds, and support new technologies. Help customers optimize AWS, adopt best practices, and assist teams in improving and communicating product updates.",
  },
  {
    siteName: "Avanade | Accenture",
    url: "https://www.avanade.com",
    title: "Tech Consultant",
    description:
      "Align technology with business goals, identify digital opportunities, and communicate technical concepts through narratives and presentations.",
  },
];

const knowledgePanelData = {
  about:
    'I help Strategic and Enterprise customers unlock the full potential of their tech investments—because nothing haunts me more than a million-dollar SaaS contract collecting digital dust. Whether it\'s navigating "too many cooks in the IT kitchen" or scaling AI adoption faster than a trending ChatGPT prompt, I help turn curiosity into enterprise-wide transformation because in the age of AI, the biggest competitor isn\'t another company, it\'s an AI agent that never takes PTO.',
  education: [
    "Master of Neuroscience · Kings College London",
    "Bachelor of Psychology (Hons) · Macquarie University",
  ],
  peopleAlsoSearchFor: [
    {
      name: "Jeff Bezos",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Elon Musk",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Andrew Ng",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Sam Altman",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    },
  ],
};

const relatedSearches = [
  "can christle lee read minds",
  "christle lee net worth in trillion",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SearchHeader query={searchQuery} />

      <main className="px-4 md:px-8 lg:px-16 py-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main results column */}
          <div className="flex-1 max-w-2xl">
            {/* Did you mean */}
            <div className="mb-6">
              <span className="text-google-red text-sm">Did you mean: </span>
              <a href="#" className="text-link-blue text-sm italic hover:underline">
                Christle Lee?
              </a>
            </div>

            {/* Search results */}
            <div>
              {searchResults.map((result, index) => (
                <SearchResult
                  key={index}
                  siteName={result.siteName}
                  url={result.url}
                  title={result.title}
                  description={result.description}
                />
              ))}
            </div>

            {/* Related searches */}
            <RelatedSearches searches={relatedSearches} />
          </div>

          {/* Knowledge panel - sidebar */}
          <div className="lg:w-80 xl:w-96">
            <KnowledgePanel
              about={knowledgePanelData.about}
              education={knowledgePanelData.education}
              peopleAlsoSearchFor={knowledgePanelData.peopleAlsoSearchFor}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
