import {
  BackgroundAmbience,
  Header,
  Hero,
  LogoMarquee,
  FeatureGrid,
  HowItWorks,
  CTASection,
  Footer,
} from "../components/landing";

export function Landing() {
  return (
    <div className="antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      <BackgroundAmbience />
      <Header />
      <Hero />
      <LogoMarquee />
      <FeatureGrid />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}
