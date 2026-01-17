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
    'Christle Lee helps Strategic and Enterprise customers unlock the full potential of their tech investments because nothing haunts her more than a million-dollar SaaS contract collecting digital dust. Whether it\'s navigating "too many cooks in the IT kitchen" or scaling AI adoption faster than a trending ChatGPT prompt, she helps turn curiosity into enterprise-wide transformation because in the age of AI, the biggest competitor isn\'t another company, it\'s an AI agent that never takes PTO.',
  education: [
    "Master of Neuroscience · Kings College London",
    "Bachelor of Psychology (Hons) · Macquarie University",
  ],
  peopleAlsoSearchFor: [
    {
      name: "Dario Amodei",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Dario_Amodei_World_Economic_Forum_2025.jpg/440px-Dario_Amodei_World_Economic_Forum_2025.jpg",
    },
    {
      name: "Demis Hassabis",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Demis_Hassabis_Royal_Society.jpg/440px-Demis_Hassabis_Royal_Society.jpg",
    },
    {
      name: "Elon Musk",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/440px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
    {
      name: "Sam Altman",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sam_Altman_%28cropped2%29.jpg/440px-Sam_Altman_%28cropped2%29.jpg",
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
