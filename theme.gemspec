# coding: utf-8

Gem::Specification.new do |spec|
  spec.name                    = "theme"
  spec.version                 = "0.1.0"
  spec.authors                 = ["Stefan Wagner"]

  spec.summary                 = %q{A Jekyll theme.}
  spec.homepage                = "https://github.com/tinko26/theme"
  spec.license                 = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files                   = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(data|includes|layouts|sass)/|(LICENSE|README|CHANGELOG)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", ">= 3.7", "< 5.0"
  spec.add_runtime_dependency "jekyll-include-cache", "~> 0.1"

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake", ">= 12.3.3"
end