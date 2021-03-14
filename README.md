# Gatsby Website Starter

Everything you need for a basic website + blog with Gatsby.js. ([preview](https://gatsby-website-starter.netlify.app/))

## tl;dr

```text
$ gatsby new project_name https://github.com/j127/gatsby_website_starter
```

Then edit your new site.

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

#### Tips

If you need a responsive table in a blog post (written with markdown), wrap the markdown table with a [`table-container` div](https://bulma.io/documentation/elements/table/#table-container) like this:

```
<div class="table-container">

    <!-- table markdown goes here, padded with empty lines above and below -->

</div>
```

### Sourcemaps

Sourcemaps are removed by default (see [here](https://forum.codeselfstudy.com/t/how-to-avoid-publishing-your-frontend-code-and-comments-with-react/2418)). If you want to add sourcemaps in production, then remove the `gatsby-plugin-no-sourcemaps` plugin from `gatsby-config.js` file.

### Creating Blog Posts

To make it easier to create new blog posts, there is a generator script named `g`.

To use it, make sure you have Ruby and [`bundler`](https://bundler.io/) installed.

```text
$ bundle install
```

(If `bundler` isn't installed, you can install it with `gem install bundler` and then try running `bundle install` again.)

Look in the `g` script for the line that looks like this:

```ruby
AUTHOR = '' || ENV["USER"]
```

Put your author name inside the single quotes.

You can now generate skeletons for new blog posts by running this command:

```text
$ ./g new 'This Is the Title of a Blog Post'
```

### RSS Feeds

Out of the box, this template comes with an RSS feed for the blog at `/rss.xml`. To add additional RSS feeds, see [the docs](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-an-rss-feed/).

### Code Formatting

The code can be auto-formatted with Prettier.js. Just type the command `npm run format` or have your editor auto-format with prettier on save. To change the code style, edit the files `.prettierrc` and `.editorconfig`. (Search online to see how to use those files, if you aren't familiar with them.)

### Note to Self

This kind of site can be deployed on Nelify using their Github connector or with the [Netlify CLI](https://forum.codeselfstudy.com/t/netlify-cli-quickstart/1210). For example, [the demo site](https://gatsby-website-starter.netlify.app/) for this theme is deployed with this command:

```text
$ npm run build && netlify deploy --prod --dir=public
```
