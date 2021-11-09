import { Header } from './sections/header/header';
import ProjectsSection from './sections/projects/projects';
import SocialNetworksSection from './sections/social-networks/social-networks';

const LandingPage = (): React.ReactElement => (
  <>
    <Header />
    <ProjectsSection />
    <SocialNetworksSection />
  </>
);

export default LandingPage;
