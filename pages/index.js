import { useState } from "react";
export default function Home({ res }) {
  const [user, setUser] = useState(res.results);

  return (
    <>
      {user.map((item, idx) => {
        return (
          <div key={idx}>
            <p>
              {idx} -- {item.question}
            </p>
            <p>{item.correct_answer}</p>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://opentdb.com/api.php?amount=10");
  const res = await response.json();
  return { props: { res } };
}
