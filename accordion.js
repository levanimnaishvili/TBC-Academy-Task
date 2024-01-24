let questions = document.getElementsByClassName("accordion-item-question");
let answers = document.getElementsByClassName("accordion-item-answer");
let carrot = document.getElementsByClassName("carrot");

//titouelu div elementistvis "accordion-item-question" class it
for (let i = 0; i < questions.length; i++) {
  //vamatebt click eventis msmenels titoeuli div elementistvis da vawvdit funqcias
  questions[i].addEventListener("click", () => {
    if (answers[i].style.display === "block") {
      for (let j = 0; j < answers.length; j++) {
        answers[j].style.display = "none";
        carrot[j].style.transform = "rotate(90deg)"
      }
    } else {
      for (let j = 0; j < answers.length; j++) {
        answers[j].style.display = "none";
        carrot[j].style.transform = "rotate(90deg)"
      }
      answers[i].style.display = "block";
      carrot[i].style.transform = "rotate(270deg)"
    }
  });
}
