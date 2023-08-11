# MERN-Tweeter

A project to learn Express.js and brush up React skills.

## Features

- API built using Express.js.
- All data is stored in self-hosted MongoDB instance.
- Frontend React app built with Vite and TypeScript.

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
- [Mongoose](https://mongoosejs.com/) – ODM for MongoDB.
- `nodemon`
- `dotenv` – load env vars from `.env` files.
- `joi` – data validation.

## References

- [React CORS Guide: What It Is and How to Enable It](https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/)
- [TypeScript and React: Components](https://fettblog.eu/typescript-react/components/)
