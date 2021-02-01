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

### Creating Blog Posts

To make it easier to create new blog posts, you can create a script.

If you have Ruby installed, do:

```text
$ bundle init
$ gem install slugify
$ touch g
$ chmod u+x g
```

Then copy this code into the new file named `g` that was created by the above commands:

```ruby
#!/usr/bin/env ruby

# A script to create new posts
# Don't forget to `bundle install`
#
# Usage:
#
# ./g new 'This Is the Title of a Blog Post'

require 'slugify'

AUTHOR = 'Your Name'
CONTENT_DIR = './drafts'

def new_post(title, slug=nil, author=AUTHOR)
  date_string = Time.now.strftime("%Y-%m-%d")
  slug = title.slugify() unless slug

  content = <<~HEREDOC
  ---
  title: #{title}
  date: "#{date_string}"
  author: #{author}
  slug: "#{slug}"
  description: ""
  ---
  HEREDOC

  dirname = "#{CONTENT_DIR}/#{date_string}-#{slug}"
  Dir.mkdir(dirname)
  File.open("#{dirname}/index.md", "w") { |f| f.write(content) }
  p "created new blog post at #{dirname}"
end

command = ARGV[0]
title = ARGV[1]

case command
when 'new'
  new_post(title)
else
  p 'please enter a valid command'
end
```

Don't forget to change the script so that your name is in the correct place (`AUTHOR`).

You can then create new blog posts by running this command:

```text
$ ./g new 'This Is the Title of a Blog Post'
```
