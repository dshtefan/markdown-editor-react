const openTab = (appElement, setIsTabOpen) => {
  const classes = appElement.current.classList;
  classes.add('tab--open');
  classes.remove('tab--close');
  setIsTabOpen(true);
};

export default openTab;