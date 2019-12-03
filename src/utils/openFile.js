const openFile = (event, setText) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => setText(reader.result);
};

export default openFile;