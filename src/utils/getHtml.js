import marked from "marked";

const getHtml = (text) => {
  return {
    __html: marked(text)
  }
};

export default getHtml;