import { Header } from './sections/header/header';
import ProjectsSection from './sections/projects/projects';
import SocialNetworksSection from './sections/social-networks/social-networks';
import EventsSection from './sections/events/events';
import ContactSection from './sections/contacts/contact';
import { Footer } from '../../components/footer/footer';

const LandingPage = (): React.ReactElement => (
  <>
    <Header />
    <ProjectsSection />
    <EventsSection />
    <SocialNetworksSection />
    <ContactSection />
    <Footer />
  </>
);

export default LandingPage;
