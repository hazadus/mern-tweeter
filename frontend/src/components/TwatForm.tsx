import { FormEvent, useState } from "react";
import { ITwat } from "../types";

const TwatForm = () => {
  const [username, setUsername] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newTwat: Partial<ITwat> = { username, body };

    const response = await fetch("http://127.0.0.1:8000/api/v1/twats", {
      method: "POST",
      body: JSON.stringify(newTwat),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
  };

  return (
    <>
      <form className="createTwat" onSubmit={handleSubmit}>
        <h3>Make a new twat!</h3>
        <div>
          <label>Username:</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
        </div>
        <div>
          <label>Twat:</label>
          <input type="text" onChange={(e) => setBody(e.target.value)} value={body} />
        </div>
        <button>Twat!</button>
      </form>
    </>
  );
};

export default TwatForm;
