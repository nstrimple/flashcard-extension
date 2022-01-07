const writeFunc = () => {
  const eng = document.getElementById("eng").value;
  const port = document.getElementById("port").value;
  const apPost = async () => {
    try {
      const response = await fetch(
        "https://react-flashcards-70208-default-rtdb.firebaseio.com/flashcards.json",
        {
          method: "POST",
          body: JSON.stringify({ english: eng, portuguese: port }),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Fuck");
      }
      const data = await response.json();
      console.log(`${data.name} witten to database`);
    } catch (error) {
      console.log(error.message || "Something went wrong");
    }
  };
  const getCurrentData = async () => {
      let data = {}
      try {
          const response = await fetch("https://react-flashcards-70208-default-rtdb.firebaseio.com/flashcards.json")
          if (!response.ok) {
              throw new Error('Fuck')
          }
          data = response.json()
      } catch (error) {
          console.log(error.message || 'Something went wrong')
      }
      return data
  }
  const currData = getCurrentData()
  let numTimes = 0
  for (const key in currData) {
      if (eng.toLowerCase() === currData[key].english.toLowerCase()) {
          numTimes += 1
      }
  }
  if (numTimes === 0) {
      apPost();
  }
  else {
      console.log('Element already exists')
  }
};

document.getElementById("sub").addEventListener("click", writeFunc);
