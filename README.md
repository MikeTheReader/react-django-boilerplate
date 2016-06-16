## React / Redux / Django Boilerplate

This is a boilerplate project for creating apps that run in Django but use React and Redux. It
is very much a learn-as-I-go project, but feel free to use it.

#### Django support for hot reloading

Thanks go to Owais Lone, for giving me something to base much of this off of: <http://owaislone.org/blog/webpack-plus-reactjs-and-django/>

## Installing

> **NOTE**: You'll most likely want to create a virtualenv to use for your installation. The remainder of these
> instructions assume that's what you're doing, and that any python commands are performed within that virtualenv.

> These instructions also assume that you already have the latest node.js installed.

#### Clone this repository

Clone this repository, and then `cd` into the repository's directory. 

#### Install Python Requirements

```
pip install -r requirements.txt
```

#### Install npm dependencies

```
npm install
```

## Starting things ups

#### Start Django

To start Django, open a terminal:

```
python manage.py runserver
```

#### Start node server

To enable hot reloading, a node server must be running to serve the hotly generated files. The start this, open a
separate terminal:

```
npm start
```

### Viewing the project

You should now be able to go to <http://localhost:8000> and see the main page. Any changes made to the .js
files will be hot reloaded without restarting Django or Node.

## Running in Production

To run in production:

* In `project/settings.py`, set `DEBUG = True`
* Run `npm run build:prod`
* Restart your Django server with

> **Note**: There is no need to run a node server when running in production. There is no hot reloading occurring
and files are served statically.

## Miscellaneous

To run the JS code through a react linter, run `npm run lint`









