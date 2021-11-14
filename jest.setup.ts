import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

jest.setTimeout(10000);
expect.extend(toHaveNoViolations);
