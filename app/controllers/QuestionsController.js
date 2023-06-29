import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { questionsService } from "../services/QuestionsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuestions() {
  if (AppState.questions.length > 0) {
    let questions = AppState.questions
    setHTML('questions', questions[0].cardTemplate)
  } else {
    setHTML('questions', `<p class= "fs-1 text-center">Choose a catagory</p>`)
  }
}



export class QuestionsController {
  constructor() {
    console.log('Questions Controller')
    _drawQuestions()
    AppState.on('questions', _drawQuestions)

  }

  async getGameQuestions() {
    try {
      await questionsService.getGameQuestions()
      //Pop.success('Got Questions')
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async getAnimeQuestions() {
    try {
      await questionsService.getAnimeQuestions()
      //Pop.success('Got Questions')
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async getBoardQuestions() {
    try {
      await questionsService.getBoardQuestions()
      //Pop.success('Got Questions')
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  testAnswer(userAnswer) {
    questionsService.testAnswer(userAnswer)
  }
}