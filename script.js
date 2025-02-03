const questions = [
    {
      question: "What do you do when you see something scary?",
      options: ["Run away", "Call for help", "Face it head-on", "Use your mind to destroy it"],
      scores: [1, 2, 3, 4]
    },
    {
      question: "What’s your favorite breakfast food?",
      options: ["Pancakes", "Cereal", "Bacon and eggs", "Waffles"],
      scores: [1, 2, 3, 4]
    },
    {
      question: "How do you handle a tough situation?",
      options: ["Cry it out", "Ask for advice", "Stay calm and think", "Use your hidden powers"],
      scores: [1, 2, 3, 4]
    },
    {
      question: "What’s your dream superpower?",
      options: ["Invisibility", "Super strength", "Mind reading", "Telekinesis"],
      scores: [1, 2, 3, 4]
    },
    {
      question: "What’s your go-to snack?",
      options: ["Chips", "Chocolate", "Fruit", "Something sweet and crispy"],
      scores: [1, 2, 3, 4]
    },
    {
      question: "What’s your favorite way to spend a Friday night?",
      options: ["Watching TV", "Hanging out with friends", "Reading a book", "Exploring strange places"],
      scores: [1, 2, 3, 4]
    },
    {
      question: "What’s your reaction to a nosebleed?",
      options: ["Panic", "Ignore it", "Blame the dry air", "Assume it’s your powers acting up"],
      scores: [1, 2, 3, 4]
    },
    {
      question: "Where would you go for the ultimate adventure?",
      options: ["A tropical island", "A snowy mountain", "A bustling city", "A place no one has ever heard of"],
      scores: [1, 2, 3, 4]
    },
    {
      question: "What’s your favorite way to spend your free time?",
      options: ["Reading books", "Playing sports", "Watching movies", "Experimenting with mysterious things"],
      scores: [1, 2, 3, 4]
    },
    {
      question: "What’s your favorite drink?",
      options: ["Coffee", "Soda", "Smoothie", "Something with a weird flavor"],
      scores: [1, 2, 3, 4]
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result-container');
  const resultText = document.getElementById('result-text');
  const resultImage = document.getElementById('result-image');
  const drumroll = document.getElementById('drumroll');
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.innerText = q.question;
    optionsElement.innerHTML = q.options.map((option, index) => `
      <button class="option" onclick="selectOption(${index})">${option}</button>
    `).join('');
  }
  
  function selectOption(index) {
    score += questions[currentQuestion].scores[index];
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.querySelector('.quiz-container').classList.add('hidden');
    resultContainer.classList.remove('hidden');
  
    // Play drumroll sound
    const drumrollSound = document.getElementById('drumroll-sound');
    drumrollSound.play();
  
    // Drumroll text animation
    drumroll.innerText = "🎉🎉🎉 .....Drumroll... 🎉🎉🎉";
    setTimeout(() => {
      let description;
      if (score <= 10) {
        description = "You’re 100% Eleven, but you’re still figuring out how to use your powers. Maybe stick to Eggos for now. 🧇";
      } else if (score <= 20) {
        description = "You’re 100% Eleven, but you’re more into telekinetic naps than saving the world. 🛌";
      } else if (score <= 30) {
        description = "You’re 100% Eleven, and you’ve mastered the art of staring intensely while eating waffles. 🧇👀";
      } else {
        description = "You’re 100% Eleven! You’re a total badass who can close portals and eat waffles at the same time. 🧇✨";
      }
      resultText.innerText = `${description}`;
      resultImage.src = "Img/11.jpg";
    }, 4000); // Adjust the timeout to match the length of your drumroll sound
  }
  
  nextButton.addEventListener('click', showQuestion);
  showQuestion();