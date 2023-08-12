import { FormEvent, useState } from "react";
import { useTwatsContext } from "../hooks/useTwatsContext";
import { ITwat } from "../types";

const TwatForm = () => {
  const [username, setUsername] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // @ts-ignore
  const { dispatch } = useTwatsContext();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const newTwat: Partial<ITwat> = { username, body };

    const response = await fetch("http://127.0.0.1:8000/api/v1/twats", {
      method: "POST",
      body: JSON.stringify(newTwat),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) setError(json.error);
    else {
      setUsername("");
      setBody("");
      dispatch({ type: "CREATE", single: json });
    }
  };

  return (
    <>
      <form className="createTwat" onSubmit={handleSubmit}>
        <h3>Make a new twat!</h3>
        <label>Username:</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
        <label>Twat:</label>
        <input type="text" onChange={(e) => setBody(e.target.value)} value={body} />
        {error && <div className="error">{error}</div>}
        <button>Twat!</button>
      </form>
    </>
  );
};

export default TwatForm;
