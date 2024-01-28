let questions = document.getElementsByClassName("accordion-item-question");
let answers = document.getElementsByClassName("accordion-item-answer");
let accordionArrow = document.getElementsByClassName("accordion-item-arrow");

//titouelu div elementistvis "accordion-item-question" class it
for (let i = 0; i < questions.length; i++) {
  //vamatebt click eventis msmenels titoeuli div elementistvis da vawvdit funqcias
  questions[i].addEventListener("click", () => {
    if (answers[i].style.display === "block") {
      for (let j = 0; j < answers.length; j++) {
        answers[j].style.display = "none";
        accordionArrow[j].style.transform = "rotate(0deg)"
      }
    } else {
      for (let j = 0; j < answers.length; j++) {
        answers[j].style.display = "none";
        accordionArrow[j].style.transform = "rotate(0deg)"
      }
      answers[i].style.display = "block";
      accordionArrow[i].style.transform = "rotate(180deg)"
    }
  });
}
