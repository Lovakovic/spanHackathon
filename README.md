# Span hackathon - TvEZ

This is the official repo of TvEZ group from Span frontEd Hackathon 2023. 
You can [visit](shiny-duckanoo-86358f.netlify.app) the deployed frontend-client.
Also [here](spanhackathon-production.up.railway.app) is the API link, you can view available endpoints which 
are docummented in`node_server/endpoints.md`, just replace `https://localhost:8081` base url with 
`spanhackathon-production.up.railway.app` if you want to test the calls to the endpoints outside the app.

## Setting up locally

### Setting up local Node.js server instance

- in your terminal, navigate to `node_server` directory
    - execute `npm install`
    - then execute `node server.js`

### Getting the database ready

- MySQL server setup:
    - execute `DDL.sql` and `initialData.sql` scripts
    - create user `dev@localhost` with password `devpass` (uncomment lines of code in `DDL.sql` or do it manually)
        - alternatively, crate user with custom parameters and edit `config.js` file in `backend/` directory
    - and grant him all privileges to the new user on `hackathon.*`

### Serving React frontend

- once again, in your terminal, from project root, navigate to `client/`
- execute `npm install`
- to serve the frontend in development mode execute `npm run dev`
  - then navigate to the `Local` url logged to your console 
