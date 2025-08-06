export const LOCAL_STORAGE_KEY = "evalFormDraft";

export const saveToLocalStorage = (data: any) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const getFromLocalStorage = () => {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  return saved ? JSON.parse(saved) : {};
};
