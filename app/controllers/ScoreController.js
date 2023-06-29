import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawScore() {
  let score = AppState.score
  setHTML('stats', score.scoreTemplate)
}
export class ScoreController {
  constructor() {
    _drawScore()
    AppState.on('score', _drawScore)
  }

}