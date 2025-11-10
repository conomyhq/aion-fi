import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { MarketOpportunity } from "./components/market-opportunity";
import { YieldsSection } from "./components/yields-section";
import { HowItWorks } from "./components/how-it-works";
import { InvestorBenefits } from "./components/investor-benefits";
import { RiskCompliance } from "./components/risk-compliance";
import { FinalCTA } from "./components/final-cta";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <HeroSection />
      <ProblemSection />
      <MarketOpportunity />
      <YieldsSection />
      <HowItWorks />
      <InvestorBenefits />
      <RiskCompliance />
      <FinalCTA />
      
      <Footer />
    </div>
  );
}