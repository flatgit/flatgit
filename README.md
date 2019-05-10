# flatgit
A git-based, flat-file CMS with a WYSIWYG editor that pulls documentation content from any repos you specify

## Installation

Soon, this will be available as an npm package and a Docker image but, for right now, this is the way.


### Git 

```
$ git clone https://github.com/flatgit/flatgit && cd flatgit
$ npm i
$ npm run serve
```

### Docker

```
docker build -t <TAG> .
docker run -p <LOCAL>:8000 <TAG>
```



## ROADMAP

* Creation of config file for git repos and tokens
* Specifying repositories to pull from (supporting open source projects first and foremost)
  * All files should be in `md` or `txt` and inside the `docs` folder
  * Consider supporting the `docs` branch that Github uses also
* Webhook implementation to pull from repos when a change has been made
* Theming options for rendering content
* URL mapping from flatgit to documentation path
  * Paths to files outside of the `docs/` folder should redirect to the source repo
* Authentication (potentially through Oauth or tokens) to edit pages in browser
* Package and publish to npm
