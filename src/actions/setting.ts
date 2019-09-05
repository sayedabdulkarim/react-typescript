export const getSettings = () => ({
  type: 'REQUEST_SETTINGS',
});

export const receiveSettings = () => ({
  type: 'RECEIVE_SETTINGS',
});

export const receiveCategories = (categories: Array<string>) => ({
  type: 'RECEIVE_CATEGORIES',
  categories,
});

export const receiveBudget = (budget: number) => ({
  type: 'RECEIVE_BUDGET',
  budget,
});
