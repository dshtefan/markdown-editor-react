const openFile = (event, setText) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => setText(reader.result);
};

export default openFile;