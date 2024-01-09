import server from "./server/Server";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
