import { Container, Title, Divisor, Description } from './card.style';
import { CardButton } from '..';
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

interface CardProps {
  id: string;
  brandIcon: keyof typeof brandIconOptions;
  title: string;
  description: string;
  restrict: boolean;
  link: string;
}

export const Card = ({
  id,
  brandIcon,
  title,
  description,
  restrict,
  link,
}: CardProps): React.ReactElement => {
  const handleClick = () => {
    window.open(link);
  };

  const BrandIcon = () => {
    const Component = brandIconOptions[brandIcon];
    return <Component />;
  };

  return (
    <Container id={id}>
      <BrandIcon />

      <Title>{title}</Title>

      <Divisor />

      <Description>{description}</Description>

      <CardButton text="Entrar" restrict={restrict} onClick={handleClick} />
    </Container>
  );
};
