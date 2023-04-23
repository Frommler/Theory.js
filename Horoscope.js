function FindSign(date) {
  const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
  const signs = [
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ];

  date = date.split(".");
  const day = date[0];
  const month = date[1] - 1;
  if (day > days[month]) {
    return signs[month];
  } else {
    return signs[month - 1];
  }
}

var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Date of birth ", (date) => {
  const YourSign = FindSign(date);
  console.log(YourSign);
});
