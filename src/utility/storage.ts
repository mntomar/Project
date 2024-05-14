export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined; // No state in local storage, return undefined to use the initial state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined; // Errors could occur when the local storage is corrupted or inaccessible
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // Ignore write errors or handle them in a way that's appropriate for your app
  }
};