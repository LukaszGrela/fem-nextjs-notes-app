/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import Link from "next/link";

const Note = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {params} </h1>
    </div>
  );
};

export default Note;