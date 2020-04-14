# Gatsby Website Starter

NOTE: this is not working yet -- there is still at least one major bug, so don't use it. :)

Everything you need for a basic website + blog with Gatsby.js

## Instructions

Install Gatsby CLI:

```text
$ npm install -g gatsby-cli
```

Disable [telemetry](https://www.gatsbyjs.org/docs/telemetry/):

Set an environment variable in your shell config file like this:

```text
export GATSBY_TELEMETRY_DISABLED=1
```

and/or run `gatsby telemetry --disable` in a terminal window.

Start a new project, changing `project_name` to the desired name of your app:

```text
$ gatsby new project_name https://github.com/j127/gatsby_website_starter
```

Then `cd` into the project directory and start coding.

### Styling

This starter comes with a nice CSS framework called [Bulma](https://bulma.io/). PurgeCSS is used to remove all the unused CSS rules, so it's really fast and efficient.

But if you want to remove Bulma, run this command:

```
$ npm uninstall -S bulma
```

Then search the files for any mention of "bulma" and delete those imports.

Override Bulma variables in the `src/styles/_variables.scss` file. See the notes in the files in the `src/styles` directory.
