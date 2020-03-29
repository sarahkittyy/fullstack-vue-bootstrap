# vue-bootstrap-fullstack

Just a personal test of a fullstack vue app kinda thing :)

Uses:
* mongodb + mongoose
* vue + vuex + vue-router
* bootstrap, bootstrap-vue
* docker
* express + typescript

## Running the dev env

```bash
git clone https://github.com/sarahkittyy/fullstack-vue-bootstrap
cd fullstack-vue-bootstrap
cp .env.example .env
# edit .env to your liking
npm i
npm run dev
```

## Extras

### Debugging

`npm run debug` gives you access to the frontend and backend pm2 instances.

### Updating deps

To update deps in docker after installing a new package, run `npm run update-deps`.

