import React from "react";
import { useRouter } from "next/router";

const Notes = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="Note">
      <h1>Note</h1>
      <p>Id: {id}</p>
    </div>
  );
};

export default Notes;
