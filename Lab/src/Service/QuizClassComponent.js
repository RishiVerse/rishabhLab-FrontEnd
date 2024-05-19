class Quiz {
    constructor(question, options) {
      if (!Array.isArray(options)) {
        throw new Error("Options should be an array");
      }
      this.question = question;
      this.options = options;
    }
  
    getQuizes() {
      console.log("Question: " + this.question);
      this.options.forEach((option, index) => {
        console.log(`Option ${index + 1}: ${option}`);
      });
    }
  }