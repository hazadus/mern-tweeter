import { useEffect } from "react";
import { useTwatsContext } from "../hooks/useTwatsContext";
import { ITwat } from "../types";
import TwatCard from "../components/TwatCard";
import TwatForm from "../components/TwatForm";

const Feed = () => {
  // Get twats list and dispatch function from global state
  // @ts-ignore
  const { twats, dispatch } = useTwatsContext();

  useEffect(() => {
    const fetchAllTwats = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/v1/twats");
      const json = (await response.json()) as ITwat[];

      if (response.ok) {
        // Save server response (list of Twats) in global state
        dispatch({ type: "SET", multiple: json });
      }
    };

    fetchAllTwats();
  }, []); // Empty array is to activate useEffect once on load

  return (
    <div>
      <h2>Feed</h2>
      <div className="feed">
        <div>{twats && twats.map((twat: ITwat) => <TwatCard key={twat._id} twat={twat} />)}</div>
        <div>
          <TwatForm />
        </div>
      </div>
    </div>
  );
};

export default Feed;
