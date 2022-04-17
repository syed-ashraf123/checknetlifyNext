import { useState } from "react";
export default function Home() {
  // const [user, setUser] = useState(res[0] ? res[0] : {});
  const user = { name: "Syed", age: 25 };
  return (
    <>
      <h1>
        {user ? (
          <>
            {user?.name} {user?.age}
          </>
        ) : (
          "Loading..."
        )}
      </h1>
    </>
  );
}

// export async function getServerSideProps() {
// const response = await fetch("http://127.0.0.1:5000");
// const res = await response.json();
// return { props: { res } };
// }
