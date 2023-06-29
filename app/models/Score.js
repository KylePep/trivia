import { AppState } from "../AppState.js";

export class Score {
  constructor(data) {
    this.correct = data.correct
    this.wrong = data.wrong
    this.questionCount = data.questionCount
  }
  get scoreTemplate() {
    let score = AppState.score
    return `
    <p class="col-3 text-center">
      Questions Answered: ${score.questionCount}
    </p>
    <p class="col-3 text-center">
      Correct: ${score.correct}
    </p>
    <p class="col-3 text-center">
      Wrong: ${score.wrong}
    </p>
    `
  }

  get computedRemaining() {
    let questions = AppState.questions
    if (questions.length == 0) {
      return ''
    } else {
      return `
        ${AppState.questions.length}
      `
    }
  }
}

