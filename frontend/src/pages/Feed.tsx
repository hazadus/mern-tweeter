import { useEffect, useState } from "react";
import { ITwat } from "../types";
import TwatCard from "../components/TwatCard";

const Feed = () => {
  const [twats, setTwats] = useState<ITwat[] | null>(null);

  useEffect(() => {
    const fetchAllTwats = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/v1/twats");
      const json = (await response.json()) as ITwat[];

      if (response.ok) {
        setTwats(json);
      }
    };

    fetchAllTwats();
  }, []); // Empty array is to activate useEffect once on load

  return (
    <div>
      <h2>Feed</h2>
      <div className="feed">
        <div>
          {twats &&
            twats.map((twat) => (
              <>
                <TwatCard key={twat._id} twat={twat} />
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
