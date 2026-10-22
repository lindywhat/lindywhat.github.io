source "https://rubygems.org"

# Same versions as GitHub Pages uses, so a local preview looks exactly like the live site
gem "github-pages", group: :jekyll_plugins

# Needed to run `jekyll serve` on Ruby 3 and on Windows
gem "webrick"
platforms :windows, :mingw, :x64_mingw do
  gem "tzinfo-data"
  gem "wdm", ">= 0.1.0"
end
