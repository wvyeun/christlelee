import SearchHeader from "@/components/SearchHeader";
import SearchResult from "@/components/SearchResult";
import KnowledgePanel from "@/components/KnowledgePanel";
import RelatedSearches from "@/components/RelatedSearches";

import atlassianLogo from "@/assets/atlassian.png";
import amazonLogo from "@/assets/amazon.webp";
import awsLogo from "@/assets/aws.png";
import accentureLogo from "@/assets/accenture.png";
import darioAmodei from "@/assets/dario-amodei.jpg";
import demisHassabis from "@/assets/demis-hassabis.jpg";
import samAltman from "@/assets/sam-altman.jpg";

const searchQuery = "curious, collaborative, customer-focused, continuous learning";

const searchResults = [
  {
    siteName: "Atlassian",
    url: "https://www.atlassian.com",
    title: "Customer Success Manager",
    description:
      "Acts as a trusted advisor to Strategic and Enterprise organizations, ensuring they maximize value from our solutions. Collaborates with customers and Account Teams on Success Plans, QBRs, and strategic sessions. Manages complex global implementations and scalable enablement with Partners. Reduces churn by identifying risks early and partnering on mitigation. Serves as the Voice of the Customer, providing feedback for improvement.",
    favicon: atlassianLogo,
  },
  {
    siteName: "Amazon Alexa",
    url: "https://alexa.amazon.com",
    title: "Product Manager",
    description:
      "Drive go-to-market strategies, optimize engagement, and reduce lapse through data-driven decisions. Track KPIs, write product docs, and collaborate across teams to launch products effectively.",
    favicon: amazonLogo,
  },
  {
    siteName: "Amazon Web Services",
    url: "https://www.aws.amazon.com",
    title: "Cloud Engineer",
    description:
      "Manage escalations, propose workarounds, and support new technologies. Help customers optimize AWS, adopt best practices, and assist teams in improving and communicating product updates.",
    favicon: awsLogo,
  },
  {
    siteName: "Avanade | Accenture",
    url: "https://www.avanade.com",
    title: "Tech Consultant",
    description:
      "Align technology with business goals, identify digital opportunities, and communicate technical concepts through narratives and presentations.",
    favicon: accentureLogo,
  },
];

const knowledgePanelData = {
  about:
    'Christle Lee helps Strategic and Enterprise customers unlock the full potential of their tech investments, because nothing haunts her more than a million-dollar SaaS contracts collecting digital dust. She navigates "too many cooks in the IT kitchen" and scales AI adoption from experimentation to enterprise-wide execution, knowing that in the age of AI, the biggest competitor isn\'t another company, it\'s an AI agent that never takes PTO.',
  education: [
    "Master of Neuroscience · Kings College London",
    "Bachelor of Psychology (Hons) · Macquarie University",
  ],
  linkedIn: "https://www.linkedin.com/in/christle-lee/",
  peopleAlsoSearchFor: [
    {
      name: "Dario Amodei",
      image: darioAmodei,
    },
    {
      name: "Demis Hassabis",
      image: demisHassabis,
    },
    {
      name: "Elon Musk",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/440px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
    {
      name: "Sam Altman",
      image: samAltman,
    },
  ],
};

const relatedSearches = [
  "can christle lee read minds",
  "prompt therapist",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SearchHeader query={searchQuery} />

      <main className="py-6">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Did you mean */}
          <div className="mb-6 max-w-2xl">
            <span className="text-google-red text-sm">Did you mean: </span>
            <a href="#" className="text-link-blue text-sm italic hover:underline">
              Christle Lee?
            </a>
          </div>

          {/* Name and title */}
          <div className="mb-6 max-w-2xl">
            <h1 className="text-3xl font-normal text-foreground">Christle Lee</h1>
            <p className="text-sm text-text-gray mt-1">Working slightly ahead of the Roadmap</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Knowledge panel - shows first on mobile, sidebar on desktop */}
            <div className="order-first lg:order-last lg:w-80 xl:w-96">
              <KnowledgePanel
                about={knowledgePanelData.about}
                education={knowledgePanelData.education}
                linkedIn={knowledgePanelData.linkedIn}
                peopleAlsoSearchFor={knowledgePanelData.peopleAlsoSearchFor}
              />
            </div>

            {/* Main results column */}
            <div className="flex-1 max-w-2xl">
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
