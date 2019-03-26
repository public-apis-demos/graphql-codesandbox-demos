import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";

const PORT = process.env.PORT || 8080;
const server = express();

const schema = buildSchema(`
type Video {
  id: ID,
  title: String,
  duration: Int,
  watched: Boolean
}
type Query {
  video: Video
  videos: [Video]
}
type Schema {
  query: Query
}
`);

const videos = [
  {
    id: "1",
    title: "what is graphql ?",
    duration: 120,
    watched: true
  },
  {
    id: "2",
    title: "what is apollo client ?",
    duration: 240,
    watched: false
  }
];

const resolvers = {
  video: () => ({
    id: "3",
    title: "what is reactjs ?",
    duration: 180,
    watched: true
  }),
  videos: () => videos
};

server.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: resolvers
  })
);

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
