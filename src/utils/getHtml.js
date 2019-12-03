import marked from "marked";

const getHtml = (text) => ({
  __html: marked(text)
});

export default getHtml;