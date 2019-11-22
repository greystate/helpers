Helpers
=======

The [docs](docs/helpers.html) are generated from the source with [Docco][DOC]

[DOC]: https://ashkenas.com/docco/

## "Installation"

So what I usually need, is just to get a copy of this file into whichever project
I'm currently working on, *without* any history etc. from *this* repository.
Instead of downloading the raw file, here's a handy tip using GitHub's built-in support for SVN(!):

```bash
cd /path/to/current/project
svn export https://github.com/greystate/helpers/trunk/src/js/helpers.js vendor/helpers.js
```
