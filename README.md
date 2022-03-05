<h1 id="project-title" align="center">
  meznotes <img alt="logo" width="40" height="40" src="https://raw.githubusercontent.com/mezgoodle/images/master/MezidiaLogoTransparent.png" /><br>
  <img alt="language" src="https://img.shields.io/badge/language-python-brightgreen?style=flat-square" />
  <img alt="language" src="https://img.shields.io/github/issues/mezgoodle/meznotes?style=flat-square" />
  <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/mezgoodle/meznotes?style=flat-square" />
  <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/mezgoodle/meznotes?style=flat-square" />
  <img alt="GitHub closed pull requests" src="https://img.shields.io/github/issues-pr-closed/mezgoodle/meznotes?style=flat-square" />
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/mezgoodle/meznotes?style=flat-square">
</h1>

<p align="center">
🌟Hello everyone! This is the repository of my full-stack application on Python and JavaScript.🌟
</p>

## Motivation :exclamation:

First of all, I need to make a project for university. And I decided to practice in development full-stack web applications. So I developed a note app with [React](https://uk.reactjs.org/) on the frontend and [Django](https://www.djangoproject.com/) on the backend. But after I decided to rewrite front part to the [Next.js](https://nextjs.org/).

## Build status :hammer:

Here you can see build status of [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration):

[![Django CI](https://github.com/mezgoodle/meznotes/actions/workflows/django.yml/badge.svg)](https://github.com/mezgoodle/meznotes/actions/workflows/django.yml)
[![Node.js CI](https://github.com/mezgoodle/meznotes/actions/workflows/node.js.yml/badge.svg)](https://github.com/mezgoodle/meznotes/actions/workflows/node.js.yml)

## Badges :mega:

Other badges

[![Build Status](https://img.shields.io/badge/Theme-Note_app-brightgreen?style=flat-square)](https://www.google.com.ua/)

## Screenshots :camera:

- Main page

![Screenshot 1](https://raw.githubusercontent.com/mezgoodle/images/master/meznotes.png)

- Single note page

![Screenshot 2](https://raw.githubusercontent.com/mezgoodle/images/master/meznotes1.png)

- Create a new note

![Screenshot 3](https://raw.githubusercontent.com/mezgoodle/images/master/meznotes2.png)

- Response from DRF

![Screenshot 3](https://raw.githubusercontent.com/mezgoodle/images/master/meznotes3.png)

## Tech/framework used :wrench:

**Built with**

- [Django](https://www.djangoproject.com/)
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Next.js](https://nextjs.org/)

## Features :muscle:

On the site you can **create**, **update**, **delete** and **read** notes.

## Installation :computer:

1. Clone this repository:

```bash
git clone https://github.com/mezgoodle/meznotes.git
```

2. Install Python dependencies with the _pip_:

```bash
cd backend
pip install -r requirements.txt
```

3. Install Node dependencies with the _npm_:

```bash
cd front
pip install -r requirements.txt
```

## Fast usage :dash:

1. Start the backend server:

```bash
python manage.py runserver
```

2. Start the frontend server:

```bash
npm run dev
```

## Tests :microscope:

Tests for Django was simple, but I can't create tests for Next. Because I don't deploy backend server, e2e tests are not available. So I am only doing linting.

## Contribute :running:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Also look at the [CONTRIBUTING.md](https://github.com/mezgoodle/meznotes/blob/master/CONTRIBUTING.md).

## License :bookmark:

MIT © [mezgoodle](https://github.com/mezgoodle)
