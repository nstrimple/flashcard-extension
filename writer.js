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
  apPost();
};

document.getElementById("sub").addEventListener("click", writeFunc);
