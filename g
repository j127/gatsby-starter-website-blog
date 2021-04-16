#!/usr/bin/env ruby

# A script to create new posts
# Don't forget to `bundle install`
#
# Usage:
#
# ./g new 'This Is the Title of a Blog Post'

require 'date'
require 'slugify'

# Put your name in the `AUTHOR` field
AUTHOR = '' || ENV["USER"]
CONTENT_DIR = './content/blog'

def new_post(title, slug=nil, author=AUTHOR)
  date_string = DateTime.now.iso8601(3)
  slug = title.slugify() unless slug

  content = <<~HEREDOC
  ---
  title: "#{title}"
  date: "#{date_string}"
  author: "#{author}"
  slug: "#{slug}"
  description: "#{title}"
  ---

  lorem ipsum
  HEREDOC

  dirname = "#{CONTENT_DIR}/#{date_string.slice(0, 10)}-#{slug}"
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
