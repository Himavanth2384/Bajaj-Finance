const express = require("express");
const app = express();

app.use(express.json());

const user_data = {
  user_id: "nadella_himavanth_21BEC2184",
  email: "nadella.himavanth2021@vitstudent.ac.in",
  roll_number: "21BEC2184",
};

app.get("/", (req, res) => {
  res.send("API is up and running! Nadella Himavanth ( 21BEC2184 )");
});

app.get("/bfhl", (req, res) => {
  res.json({ operation_code: "XYZ123" });
});

app.post("/bfhl", (req, res) => {
  const data = req.body.data;
  const numbers = [];
  const alphabets = [];
  let highestLowercase = null;

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item.toString());
    } else if (
      typeof item === "string" &&
      item.length === 1 &&
      /[a-zA-Z]/.test(item)
    ) {
      alphabets.push(item);
      if (item === item.toLowerCase()) {
        if (!highestLowercase || item > highestLowercase) {
          highestLowercase = item;
        }
      }
    }
  });

  res.json({
    is_success: true,
    user_id: user_data.user_id,
    email: user_data.email,
    roll_number: user_data.roll_number,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
