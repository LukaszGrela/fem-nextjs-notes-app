import nc from 'next-connect';

const handler = nc().get((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'hello' }));
});

export default handler;
