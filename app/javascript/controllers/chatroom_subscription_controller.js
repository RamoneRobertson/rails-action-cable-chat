import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@hotwired/stimulus"

// Connects to data-controller="chatroom-subscription"
export default class extends Controller {
  static targets = ["messages"]
  connect() {
    console.log(this.messagesTarget)
  }
}
