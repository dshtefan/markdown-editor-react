import { getHtml } from "./";

const createFile = (text) =>
  URL.createObjectURL(
    new Blob([getHtml(text).__html], {type: 'text/plain'})
  );

export default createFile;