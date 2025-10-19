export default async function handler(req, res) {
  const { buttonIndex } = req.body;
  const questions = [
    "What is Celo primarily used for?",
    "What makes Celo carbon-negative?",
    "How do you earn rewards on Celo?",
    "What is the CELO native token?",
    "Which wallet supports Celo?"
  ];
  const index = buttonIndex % questions.length;
  res.status(200).json({
    text: `Q${index + 1}: ${questions[index]}`,
    buttons: ["Answer A", "Answer B", "Answer C", "Next"],
  });
}
