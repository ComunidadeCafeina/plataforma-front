import { Header } from './sections/header/header';
import ProjectsSection from './sections/projects/projects';
import SocialNetworksSection from './sections/social-networks/social-networks';
import ContactSection from './sections/contacts/contact';

const LandingPage = (): React.ReactElement => (
  <>
    <Header />
    <ProjectsSection />
    <SocialNetworksSection />
    <ContactSection />
  </>
);

export default LandingPage;
