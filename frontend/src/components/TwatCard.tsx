import { ITwat } from "../types";

type TwatCardProps = {
  twat: ITwat;
};

const TwatCard = ({ twat }: TwatCardProps) => {
  return (
    <>
      <div className="twat-card">
        <h4>{twat.username}</h4>
        <p>{twat.body}</p>
        <small>{twat.createdAt.toString()}</small>
      </div>
    </>
  );
};

export default TwatCard;
