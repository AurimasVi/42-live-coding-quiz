const createQuizUI = (quizType, element) => {
  const wrapper = document.createElement("div");
  const headerText = document.createElement("h2");
  const startQuizBtn = document.createElement("button");

  headerText.textContent = `Test your ${quizType} skills!`;
  startQuizBtn.textContent = "Start Quiz";
  wrapper.append(headerText, startQuizBtn);

  element.append(wrapper);
};

const fetchQuestions = (quizType) => {
  let responseData = [];
  fetch(`../../questions/${quizType}_questions.json`)
    .then((response) => response.json())
    .then((data) => responseData.push(...data));
  console.log(responseData);
  return responseData;
};

export { createQuizUI, fetchQuestions };
