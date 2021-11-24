import { rest } from 'msw';
import mockProjects from './constants/projects';
import mockSocialNetworks from './constants/social-networks';

export const handlers = [
  rest.get('/projects', (_, response, context) => {
    return response(context.status(200), context.json(mockProjects));
  }),

  rest.get('/social-networks', (_, response, context) => {
    return response(context.status(200), context.json(mockSocialNetworks));
  }),
];
