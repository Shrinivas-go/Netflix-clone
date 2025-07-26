const questionContainers = document.querySelectorAll('.question-container');
const allAnswers = document.querySelectorAll('.js-extended-desc');

questionContainers.forEach((container, index) => {
  container.addEventListener('click', () => {

    allAnswers.forEach((answer, i) => {
      if (i === index) {

        answer.classList.toggle('active');
        answer.classList.toggle('inactive');
      } else {

        answer.classList.remove('active');
        answer.classList.add('inactive');
      }
    });
  });
});
