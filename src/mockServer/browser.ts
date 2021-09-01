import { setupWorker } from 'msw';
import { todoListHandlers } from './todoListHandlers';

export const worker = setupWorker(...todoListHandlers);
