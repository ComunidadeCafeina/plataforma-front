import { rest } from 'msw';
import projects from './constants/projects';
import socialNetworks from './constants/social-networks';

export const handlers = [
  rest.get('/projects', (_, response, context) => {
    return response(context.status(200), context.json(projects));
  }),

  rest.get('/social-networks', (_, response, context) => {
    return response(context.status(200), context.json(socialNetworks));
  }),
];
