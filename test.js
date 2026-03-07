const createElements = (arr) => {
  const htmlElements = arr.map((el) => `<span class="btn">${el}</span>`);
  console.log(htmlElements.join(" "));
};

const synonyms = ["hello", "hi", "konnichiwa"];
createElements(synonyms);

// <span class="btn bg-[#1A91FF10]">${word.synonyms[0]}</span>
// <span class="btn bg-[#1A91FF10]">${word.synonyms[1]}</span>
// <span class="btn bg-[#1A91FF10]">${word.synonyms[2]}</span>
