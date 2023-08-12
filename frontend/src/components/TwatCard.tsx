import { ITwat } from "../types";
import { useTwatsContext } from "../hooks/useTwatsContext";

type TwatCardProps = {
  twat: ITwat;
};

const TwatCard = ({ twat }: TwatCardProps) => {
  // @ts-ignore
  const { dispatch } = useTwatsContext();

  const handleDelete = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/twats/" + twat._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      // Update the global state (json contains the document that was deleted.)
      dispatch({ type: "DELETE", single: json });
    }
  };

  return (
    <>
      <div className="twat-card">
        <h4>{twat.username}</h4>
        <p>{twat.body}</p>
        <small>{twat.createdAt.toString()}</small>
        <span onClick={handleDelete}>delete</span>
      </div>
    </>
  );
};

export default TwatCard;
