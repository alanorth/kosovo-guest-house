# Kosovo Guest House
A simple static website for a fictional guest house in the beautiful village of Kosovo in Bulgaria's Rhodope mountains.

I've spent a lot of time in Bulgaria and am amazed at how many awesome guest houses, hostels, etc there are that aren't published on the Internet (in English, at least). I decided that I'd use this as an opportunity to play with new-age front-end web developer tools like npm, Bootstrap, etc.

## Notes
To set up the project initially:

    $ mkdir kosovo-guest-house
    $ nvm install stable
    $ nvm use stable
    $ npm init --yes
    $ npm install bootstrap@4.0.0-alpha.2 jquery@2.1.4 --save --save-exact
    $ npm install -g gulp
    $ npm install --save-dev gulp

To re-build CSS and JavaScript assets:

    $ gulp

Later for git:

    $ echo 'node_modules' >> .gitignore
    $ echo 'npm-debug.log' >> .gitignore

To generate hashes for subresource integrity:

    $ cat js/bootstrap.min.js | openssl dgst -sha384 -binary | openssl enc -base64 -A

## License
This repository contains the code of [Bootstrap](http://getbootstrap.com) and [jQuery](https://jquery.com/), both of which are licensed under the [MIT license](https://tldrlegal.com/license/mit-license).

Otherwise, the contents of index.html is [GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt).
