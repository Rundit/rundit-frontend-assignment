export const delayFor = (delay: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, delay));
