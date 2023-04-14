import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//? ------------------ { Constants } ---------------------------------
const qa = {
  1: {
    question: "What's your name?",
    answer:
      "Hello there, my name is Mohammad AbdulHakim. It's a pleasure to make your acquaintance.",
  },
  2: {
    question: "Tell me about your projects.",
    answer:
      "1- Co-Student.com (Social & Educational platform),\n   2- Agere (npm package),\n   3- abomisr os (modern portfolio), \n   4- dashboardTo ( modern dashboard ).",
  },
  3: {
    question: "Tell me more about Co-Student.",
    answer:
      "Co-Student is an innovative social and educational platform that combines the best aspects of Coursera and Facebook.\n   Built using cutting-edge technologies such as React.js, Node.js, Tailwind CSS, MongoDB, and Nginx,\n   Co-Student offers a seamless and engaging user experience.\n   Visit us today at co-student.com and join our vibrant community of learners and educators.",
  },
  4: {
    question: "Tell me more about Agere.",
    answer:
      "Agere is an exceptional npm package that can assist you in numerous ways.\n   It boasts a range of awesome tools,\n   such as randArr() which randomizes array elements, and gPss() which generates strong passwords or IDs based on your preferences, among others.",
  },
};

let hints = "";
for (let i = 1; i < Object.keys(qa).length + 1; i++) {
  hints += `  ${i}- ${qa[i].question} [${i}]
`;
}

const mainColor = "#1e0c79";
const mainColorBright = "#674af7";
//! -------------------------------------------------

const askQustion = () => {
  rl.question(
    chalk
      .hex(mainColorBright)
      .bold("Abomisr's assistant: What's in your mind? >> "),
    (a) => {
      const answer = a.trim();
      let output = qa[answer[0]];

      if (answer == "clear") {
        readline.cursorTo(process.stdout, 0, 0);
        readline.clearScreenDown(process.stdout);
        // console.log(chalk.gray(hints));
        askQustion();
      } else {
        if (output) {
          console.log(chalk.yellow(`  ${output.question}`));
          console.log(chalk.green(`   ${output.answer}`));
          askQustion();
        } else if (answer === "close") {
          rl.close();
        } else {
          console.log(chalk.red("Invalid command."));
          console.log(chalk.gray(hints));
          askQustion();
        }
      }
    }
  );
};

// console.log(chalk.gray(hints));
askQustion();
