<div align="center">
<h1>⛈ Weather-App v2.0</h1>

An upgraded version of the Weather-App, now on a website!

Current version : 2.0
</div>

---

# Usage

After cloning the repository, run the following command in the same directory
that has `package.json` in it :

```bash
npm install
```

This command will install the necessary modules required to use the website.

## Note

The website has not been hosted on any platform as of 27/05/2023, so the website
can only be viewed locally.

Additionally, you will need to make an `.env` file inside
`📁 src/` with the following contents:

```javascript
const API_KEY = "<insert your OpenWeatherMap API Key here>";

module.exports = {
  apikey: API_KEY  
}
```

After that, run the following command in the CWD:

```bash
npm run devel
```

And the launch the [local host](http://localhost:3000/)
on port 3000 to access the website

---
Project Started on: 06/05/2023

(v2.0) First functional version completed on: 23/05/2023
