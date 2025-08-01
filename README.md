<p align="center">
    <img src="https://raw.githubusercontent.com/badges/shields/master/readme-logo.svg?sanitize=true"
        height="130">
</p>
<p align="center">
    <a href="https://shields.io/community#backers" alt="Backers on Open Collective">
        <img src="https://img.shields.io/opencollective/backers/shields" /></a>
    <a href="https://shields.io/community#sponsors" alt="Sponsors on Open Collective">
        <img src="https://img.shields.io/opencollective/sponsors/shields" /></a>
    <a href="https://github.com/badges/shields/pulse" alt="Activity">
        <img src="https://img.shields.io/github/commit-activity/m/badges/shields" /></a>
    <a href="https://github.com/badges/shields/discussions" alt="Discussions">
        <img src="https://img.shields.io/github/discussions/badges/shields" /></a>
    <a href="https://github.com/badges/shields/actions/workflows/daily-tests.yml">
        <img src="https://img.shields.io/github/actions/workflow/status/badges/shields/daily-tests.yml?label=daily%20tests"
            alt="Daily Tests Status"></a>
    <a href="https://coveralls.io/github/badges/shields">
        <img src="https://img.shields.io/coveralls/github/badges/shields"
            alt="Code Coverage"></a>
    <a href="https://discord.gg/HjJCwm5">
        <img src="https://img.shields.io/discord/308323056592486420?logo=discord&logoColor=white"
            alt="Chat on Discord"></a>
</p>

This is home to [Shields.io][shields.io], a service for concise, consistent,
and legible badges in SVG and raster format, which can easily be included in
GitHub readmes or any other web page. The service supports dozens of
continuous integration services, package registries, distributions, app
stores, social networks, code coverage services, and code analysis services.
Every month it serves over 1.6 billion images and is used by some of the
world's most popular open-source projects, [VS Code][vscode], [Vue.js][vue]
and [Bootstrap][bootstrap] to name a few.

[vscode]: https://github.com/Microsoft/vscode
[vue]: https://github.com/vuejs/vue
[bootstrap]: https://github.com/twbs/bootstrap

This repo hosts:

- The [Shields.io][shields.io] frontend and server code
- An [NPM library for generating badges][badge-maker]
  - [documentation][badge-maker-docs]
  - [changelog][badge-maker-changelog]
- The [badge design specification][badge-spec]

[shields.io]: https://shields.io/
[badge-maker]: https://www.npmjs.com/package/badge-maker
[badge-spec]: https://github.com/badges/shields/tree/master/spec
[badge-maker-docs]: https://github.com/badges/shields/tree/master/badge-maker/README.md
[badge-maker-changelog]: https://github.com/badges/shields/tree/master/badge-maker/CHANGELOG.md

## Examples

- code coverage percentage: ![coverage](https://img.shields.io/badge/coverage-80%25-yellowgreen)
- stable release version: ![version](https://img.shields.io/badge/version-1.2.3-blue)
- package manager release: ![gem](https://img.shields.io/badge/gem-2.2.0-blue)
- status of third-party dependencies: ![dependencies](https://img.shields.io/badge/dependencies-out%20of%20date-orange)
- static code analysis grade: ![codacy](https://img.shields.io/badge/codacy-B-green)
- [SemVer](https://semver.org/) version observance: ![semver](https://img.shields.io/badge/semver-2.0.0-blue)
- amount of [Liberapay](https://liberapay.com/) donations per week: ![receives](https://img.shields.io/badge/receives-2.00%20USD%2Fweek-yellow)
- Python package downloads: ![downloads](https://img.shields.io/badge/downloads-13k%2Fmonth-brightgreen)
- Chrome Web Store extension rating: ![rating](https://img.shields.io/badge/rating-★★★★☆-brightgreen)
- Uptime Robot uptime percentage: ![uptime](https://img.shields.io/badge/uptime-100%25-brightgreen)

[Make your own badges!][custom badges]
(Quick example: `https://img.shields.io/badge/left-right-f39f37`)

[custom badges]: https://img.shields.io/badges/static-badge

### Quickstart

Browse a [complete list of badges][shields.io] and locate a particular badge by using the search bar or by browsing the categories. Click on the badge to fill in required data elements for that badge type (like your username or repo) and optionally customize (label, colors etc.). And it's ready for use!

Use the button at the bottom to copy your badge url or snippet, which can then be added to places like your GitHub readme files or other web pages.

## Contributing

Shields is a community project. We invite your participation through issues
and pull requests! You can peruse the [contributing guidelines][contributing].

When adding or changing a service [please add tests][service-tests].

This project has quite a backlog of suggestions! If you're new to the project,
maybe you'd like to open a pull request to address one of them.

You can read a [tutorial on how to add a badge][tutorial].

[![GitHub issues by-label](https://img.shields.io/github/issues/badges/shields/good%20first%20issue)](https://github.com/badges/shields/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

If you intend on reporting or contributing a fix related to security vulnerabilities, please first refer to our [security policy][security].

[service-tests]: https://github.com/badges/shields/blob/master/doc/service-tests.md
[tutorial]: https://github.com/badges/shields/blob/master/doc/TUTORIAL.md
[contributing]: https://github.com/badges/shields/blob/master/CONTRIBUTING.md
[security]: https://github.com/badges/shields/blob/master/SECURITY.md

## Development

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/badges/shields?quickstart=1)

1. Install Node 22. You can use the [package manager][] of your choice.
2. Clone this repository.
3. Run `npm ci` to install the dependencies.
4. Run `npm start` to start the badge server and the frontend dev server.
5. Open `http://localhost:3000/` to view the frontend.

When server source files change, the badge server should automatically restart
itself (using [nodemon][]). When the frontend files change, the frontend dev
server (`docusaurus start`) should also automatically reload. However the badge
definitions are built only before the server first starts. To regenerate those,
either run `npm run prestart` or manually restart the server.

To debug a badge from the command line, run `npm run badge -- /npm/v/nock`.
It also works with full URLs like
`npm run badge -- https://img.shields.io/npm/v/nock`.

Use `npm run debug:server` to start server in debug mode.
[This recipe][nodemon debug] shows how to debug Node.js application in [VS Code][].

Shields has experimental support for [Gitpod][gitpod], a pre-configured development
environment that runs in your browser. To use Gitpod, click the button below and
sign in with GitHub. Gitpod also offers a browser add-on, though it is not required.
Please report any Gitpod bugs, questions, or suggestions in issue
[#2772](https://github.com/badges/shields/issues/2772).

[![Edit with Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/badges/shields)

[Snapshot tests][] ensure we don't inadvertently make changes that affect the
SVG or JSON output. When deliberately changing the output, run
`SNAPSHOT_DRY=1 npm run test:package` to preview changes to the saved
snapshots, and `SNAPSHOT_UPDATE=1 npm run test:package` to update them.

The server can be configured to use [Sentry][] ([configuration][sentry configuration]) and [Prometheus][] ([configuration][prometheus configuration]).

Our [full test suite][full test suite] as well as [code coverage][code coverage] are run on a daily basis.

[package manager]: https://nodejs.org/en/download/package-manager/
[gitpod]: https://www.gitpod.io/
[snapshot tests]: https://glebbahmutov.com/blog/snapshot-testing/
[prometheus]: https://prometheus.io/
[prometheus configuration]: https://github.com/badges/shields/blob/master/doc/self-hosting.md#prometheus
[sentry]: https://sentry.io/
[sentry configuration]: https://github.com/badges/shields/blob/master/doc/self-hosting.md#sentry
[nodemon]: https://nodemon.io/
[nodemon debug]: https://github.com/Microsoft/vscode-recipes/tree/master/nodemon
[vs code]: https://code.visualstudio.com/
[full test suite]: https://github.com/badges/shields/actions/workflows/daily-tests.yml
[code coverage]: https://coveralls.io/github/badges/shields

## Hosting your own server

There is documentation about [hosting your own server][self-hosting].

[self-hosting]: https://github.com/badges/shields/blob/master/doc/self-hosting.md

## Related projects

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Status badges are used widely across open-source and private software projects.
Academics have studied the "signal" badges provide about software project
quality. There are many existing libraries for rendering these badges, and
alternatives to the hosted Shields badge service. [awesome-badges][] is a
curated collection of such resources.
[Contributions][contributing to awesome-badges] may be considered there.
(The presence of a project in that collection should not be interpreted as an endorsement nor promotion from the Shields project)

[awesome-badges]: https://github.com/badges/awesome-badges
[contributing to awesome-badges]: https://github.com/badges/awesome-badges/blob/main/CONTRIBUTING.md

## History

b.adge.me was the original website for this service. Heroku back then had a
thing which made it hard to use a toplevel domain with it, hence the odd
domain. It used code developed in 2013 from a library called
[gh-badges][old-gh-badges], both developed by [Thaddée Tyl][espadrine].
The project merged with shields.io by making it use the b.adge.me code
and closed b.adge.me.

The original badge specification was developed in 2013 by
[Olivier Lacan][olivierlacan]. It was inspired by the Travis CI and similar
badges (there were a lot fewer, back then). In 2014 Thaddée Tyl redesigned
it with help from a Travis CI employee and convinced everyone to switch to
it. The old design is what today is called the plastic style; the new one
is the flat style.

You can read more about [the project's inception][thread],
[the motivation of the SVG badge specification][motivation], and
[the specification itself][spec].

[olivierlacan]: https://github.com/olivierlacan
[espadrine]: https://github.com/espadrine
[old-gh-badges]: https://github.com/badges/gh-badges
[motivation]: https://github.com/badges/shields/blob/master/spec/motivation.md
[spec]: https://github.com/badges/shields/blob/master/spec/SPECIFICATION.md
[thread]: https://github.com/h5bp/lazyweb-requests/issues/150

## Project leaders

Maintainers:

- [calebcartwright](https://github.com/calebcartwright)
- [jNullj](https://github.com/jnullj)
- [paulmelnikow](https://github.com/paulmelnikow)
- [PyvesB](https://github.com/PyvesB)

Alumni:

- [chris48s](https://github.com/chris48s)
- [Daniel15](https://github.com/Daniel15)
- [espadrine](https://github.com/espadrine)
- [olivierlacan](https://github.com/olivierlacan)
- [platan](https://github.com/platan)
- [RedSparr0w](https://github.com/RedSparr0w)

## License

All assets and code are under the [CC0 LICENSE](LICENSE) and in the public
domain unless specified otherwise.

## Community

Thanks to the people and companies who donate money, services or time to keep the project running. [https://shields.io/community](https://shields.io/community)
