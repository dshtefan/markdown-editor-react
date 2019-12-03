const closeTab = (appElement, setIsTabOpen) => {
  const classes = appElement.current.classList;
  classes.remove('tab--open');
  classes.add('tab--close');
  setIsTabOpen(false);
};

export default closeTab;