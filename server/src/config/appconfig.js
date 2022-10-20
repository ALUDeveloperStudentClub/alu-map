import dotenv from "dotenv";
dotenv.config();

export const appconfigfile = { 
  app: {
    port: process.env.PORT || 8000
  },
  db: { 
    uri: process.env.MONGO_URI || "docker_uri" 
  } 
};

