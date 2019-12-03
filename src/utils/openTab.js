const openTab = (appEl, setIsTabOpen) => {
  appEl.current.classList.add('tab--open');
  appEl.current.classList.remove('tab--close');
  setIsTabOpen(true);
};

export default openTab;