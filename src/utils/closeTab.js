const closeTab = (appEl, setIsTabOpen) => {
  const classes = appEl.current.classList;
  if ([...classes].filter((el) => el === 'tab--open').length === 0) return;
  classes.remove('tab--open');
  classes.add('tab--close');
  setIsTabOpen(false);
};

export default closeTab;