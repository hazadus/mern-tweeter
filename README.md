# MERN-Tweeter

A project to learn Express.js and brush up React skills.

## Features

- API built using Express.js.
- All data is stored in self-hosted MongoDB instance.
- Frontend React app built with Vite and TypeScript.
- React app global state managed with `useContext()`.

## Notes

- Using `nodemon` to restart script when code changed and saved:

```bash
# Globally install nodemon:
npm install -g nodemon
# Then:
nodemon server.js
# or:
npm run dev
```

## Libraries used

- [Express](https://expressjs.com/)
- [React](https://react.dev)
- [Mongoose](https://mongoosejs.com/) – ODM for MongoDB.
- `nodemon`
- `dotenv` – load env vars from `.env` files.
- `joi` – data validation.

## References

- [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [React CORS Guide: What It Is and How to Enable It](https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/)
- [TypeScript and React: Components](https://fettblog.eu/typescript-react/components/)
- [Using the React children prop with TypeScript](https://blog.logrocket.com/using-react-children-prop-with-typescript/)
- [Using the useReducer Hook in React with TypeScript](https://dev.to/craigaholliday/using-the-usereducer-hook-in-react-with-typescript-27m1)

## Running the project locally

`cd` to `backend` folder in one terminal tab. Create `.env` file with following variables:

```bash
PORT=8000
MONGO_DB_ADDRESS=mongodb://localhost:27017/twatter
```

`docker compose up -d` to run MongoDB in background, then `npm run dev` to start the server.

`cd` to `frontend` folder and `npm run dev` there to get the frontend running.
