import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { toHaveNoViolations } from 'jest-axe';
import { server } from './src/mocks/server';

expect.extend(toHaveNoViolations);

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
});

afterEach(async () => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});
