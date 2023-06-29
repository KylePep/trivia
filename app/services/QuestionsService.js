import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { Pop } from "../utils/Pop.js"
import { triviaApi } from "./AxiosService.js"

class QuestionsService {
  testAnswer(userAnswer) {
    let question = AppState.questions[0]
    let questions = AppState.questions
    let score = AppState.score
    console.log(questions)
    if (userAnswer != question.correctAnswer) {
      Pop.error('Wrong')
      score.wrong++
    } else {
      Pop.success('Correct!')
      score.correct++
    }
    score.questionCount++
    questions.splice(0, 1)
    console.log(questions)
    AppState.emit('score')
    AppState.emit('questions')
  }
  async getGameQuestions() {
    AppState.questions.length = 0
    AppState.questionsImage = "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    const response = await triviaApi.get("?amount=10&category=15&type=boolean")
    console.log('got questions', response.data.results)
    const responseData = response.data.results.map(qPojo => new Question(qPojo))
    AppState.questions = responseData
  }
  async getAnimeQuestions() {
    AppState.questions.length = 0
    AppState.questionsImage = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    const response = await triviaApi.get("?amount=10&category=31&type=boolean")
    console.log('got questions', response.data.results)
    const responseData = response.data.results.map(qPojo => new Question(qPojo))
    AppState.questions = responseData
  }
  async getBoardQuestions() {
    AppState.questions.length = 0
    AppState.questionsImage = "https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    const response = await triviaApi.get("?amount=10&category=32&type=boolean")
    console.log('got questions', response.data.results)
    const responseData = response.data.results.map(qPojo => new Question(qPojo))
    AppState.questions = responseData
  }

}
export const questionsService = new QuestionsService()