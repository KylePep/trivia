import { AppState } from "../AppState.js"

export class Question {

  constructor(data) {
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }

  get cardTemplate() {
    return /*html*/ `
    <div class="card col-8 m-auto d-flex flex-column align-items-center">
    <img class ="questionIcon rounded" src="${AppState.questionsImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">True or False : ${this.difficulty}</h5>
      <p class="card-text">${this.question}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li onclick="app.QuestionsController.testAnswer('True')" class="selectable list-group-item">True</li>
      <li onclick="app.QuestionsController.testAnswer('False')"class="selectable list-group-item">False</li>
    </ul>
  </div>
    `
  }

}

