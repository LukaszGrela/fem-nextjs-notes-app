/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import Link from "next/link";

const Note = ({ note }) => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>{note.title} </h1>
    </div>
  );
};

export default Note;

export async function getServerSideProps({ params: p, req, res }) {
  const { params } = p;
  const url = `${process.env.API_URL}/api/note/${params[0]}`;
  const notes = await fetch(url);

  if (!notes.ok) {
    res.writeHead(302, {
      Location: "/notes",
    });
    res.end();
    return {
      props: {},
    };
  }
  const { data } = await notes.json().catch((e) => {
    console.error(e);
    return Promise.resolve({});
  });
  return {
    props: {
      note: data,
    },
  };
}
