import { ApolloServer } from "apollo-server";
import schema from "./schema";

export const server = new ApolloServer({
  ...schema,
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
