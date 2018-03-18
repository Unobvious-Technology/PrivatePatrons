import app from "./app";

// The goal behind splitting `listen` from the actual app.ts file is
// to allow functional testing of the application without actually
// spinning up servers. Whether this is truly possible, I'm not sure.

app.listen(process.env.PORT || 12080);
