import { Container, Title, Divisor, Description } from './projects-card.style';
import { CardButton } from './components/card-button';
import {
  ProgrammerCentralIcon,
  JobsIcon,
  CompiladorasCommunityIcon,
  LiteraryCaffeineIcon,
  CompiladorasCentralIcon,
} from '../../icons';

type brandIconOptionType = {
  [key: string]: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const brandIconOptions: brandIconOptionType = {
  central: CompiladorasCentralIcon,
  jobs: JobsIcon,
  community: CompiladorasCommunityIcon,
  literary: LiteraryCaffeineIcon,
  programmer: ProgrammerCentralIcon,
};

interface ProjectsCardProps {
  brandIcon: keyof typeof brandIconOptions;
  title: string;
  description: string;
  restrict: boolean;
  link: string;
}

export const ProjectsCard = ({
  brandIcon,
  title,
  description,
  restrict,
  link,
}: ProjectsCardProps): React.ReactElement => {
  const handleClick = () => {
    window.open(link);
  };

  const BrandIcon = () => {
    const Component = brandIconOptions[brandIcon];
    return <Component />;
  };

  return (
    <Container>
      <BrandIcon />

      <Title>{title}</Title>

      <Divisor />

      <Description>{description}</Description>

      <CardButton
        text="Entrar"
        restrict={restrict}
        onClick={handleClick}
        arial-label={`Botão ${title}`}
      />
    </Container>
  );
};
