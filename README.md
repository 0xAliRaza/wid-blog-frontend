<h1 align="center"> Write It Down (Frontend) </h1>

<p align="center">
  <a href="https://github.com/0xAliRaza/wid-blog-frontend/blob/master/LICENSE"><img src="https://img.shields.io/github/license/0xaliraza/wid-blog-frontend?sanitize=true" alt="License"></a>
  <a href="https://github.com/0xAliRaza/wid-blog-frontend/actions/workflows/build.yml"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/0xaliraza/wid-blog-frontend/Build" alt="Build Status"></a>
  <a href="https://github.com/0xAliRaza/wid-blog-frontend/actions/workflows/pages/pages-build-deployment"><img alt="GitHub Workflow Status" src="https://github.com/0xAliRaza/wid-blog-frontend/actions/workflows/pages/pages-build-deployment/badge.svg" alt="Build Status"></a>
  
</p>

<p align="center">
	<a href="#getting-started">Quick Install (node js)</a> |
	<a href="#about">About</a> |
	<a href="#features">Features</a> |
	<a href="#authors">Authors</a> |
	<a href="https://0xali.com/wid-blog-frontend">Live Demo</a>
</p>



<p align="center">
Write It Down - Frontend is a free to use fully-featured SPA blog built with <a href="https://angular.io">Angular 8</a>.
</p>

<p align="center">
(Also, don't forget to check out the <a href="http://github.com/0xaliraza/wid-blog-backend">wid-blog-backend</a>. 😉)

</p>

![wid-blog-backend preview](https://i.imgur.com/KH6rLyO.png)

## About

Write It Down - Frontend is a blogging Single Page Application that utilizes a REST API ([wid-blog-backend](https://github.com/0xaliraza/wid-blog-backend) to be more precise). It has all the basic features that a blogger needs including posts, pages, tags, admin dashboard, etc.
It includes a really useful yet minimal and distraction-free WYSIWYG editor powered by [TinyMCE](https://www.tiny.cloud).

This project (especially the inline post editor) was inspired by [Ghost](http://ghost.org) and [Medium](http://medium.com) but it only includes the minimal and most necessary features.

## Features

Write It Down (Frontend) is featured enriched SPA. It has almost everything a true writer needs to start writing their thoughts down. Not just the functionality but it is also responsive and minimal in its user interface. It has a mobile-first approach responsive design.

It is divided into two feature modules.

- The primary and public module is `home`. This module is responsible for showing posts, pages, author-page, tags, and tag-page to the public users.
- The second and the most important feature module is `admin`. It is [lazy-loaded](https://angular.io/guide/lazy-loading-ngmodules) and is only available for users that are registered in the database (they have to log in to access it). This module contains all the core features such as posts, pages, tags, users, and settings, etc.

### User Authentication

As stated above the admin dashboard is protected by an authentication guard and is only accessible if you log in.
[JWT](http://jwt.io) is mainly used for authentication. Once the user logs in their details along with the token is saved to local storage. JWT token expires after a specific time (after 1 hour in [wid-blog-backend](http://github.com/0xaliraza/wid-blog-backend)). This web app automatically refreshes the expired user token if it gets an unauthorized error.

This SPA also contains role-based authorization which basically means that some features are limited to users with specific roles.

Role based authorization is based on these three roles:

- `superadmin`: Can do all actions such as creating a post (article), a page, adding tags, adding new users or editing existing users and changing blog settings.

- `admin`: Can do all the things a superadmin can do but can't create or modify existing superadmins and their posts.

- `editor`: Can only show their content, edit their own profile but can't modify or show or modify the content of superadmins or admins.

![wid-blog-frontend users preview](https://i.imgur.com/odmt6Ql.png)

### True WYSIWYG Editor

[Ali Raza](https://0xali.com) has turned [TinyMCE](https://www.tiny.cloud/)(a rich text editor) into an experience while integrating it into this web app. You'll get a true WYSIWYG experience because the post looks the same in the editor and the actual public blog.
The included editor has the following key features:

- **Code syntax highlighting:** You can add code snippets of almost all major technologies.
- **Basic blog post features:** h2, h3, blockquote, link, bold, italic, and lists.
- **Image upload:** Images are first uploaded to the API server and then get included in the blog-post.
  ![wid-blog-frontend blog-post editor preview](https://i.imgur.com/YN1qqhk.png)

&nbsp;
Apart from all the above key features, it has a lot of other miscellaneous features such as:

- A primary navbar at the top containing all the published pages.
- A secondary navbar(which is scrollable if overflow) containing all the tags.
- Individual tag page which indexes all the posts containing a specific tag.
- Author page which displays author profile and all their published posts.

So, a web app coded by just one [individual](https://0xali.com), having this much beauty, is worth trying right? 😌

## Getting Started

These instructions will get you a copy of this project running on your local machine in dev mode.

**Prerequisites:**

- A headless CMS (RESTful) that provides the required routes and backend features such as [wid-blog-backend](https://github.com/0xaliraza/wid-blog-backend) (recommended).

- [Node JS](https://nodejs.org/)

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

- A command line interface

**Cloning repository:**

Start by cloning the repository on your local machine using git:

```
git clone https://github.com/0xaliraza/wid-blog-frontend
```

Change directory to the project folder:

```
cd wid-blog-frontend
```

Install all npm modules:

```
npm install
```

If you have already setup [wid-blog-backend](https://github.com/0xaliraza/wid-blog-backend) (a headless CMS made specifically for this web-app) and it is availble at http://localhost:8000 then you are good to go.
Otherwise if you have coded your own backend CMS which supports all the required routes and is available at some other URL then you'll need to configure angular [environments](https://angular.io/guide/setup-local#setting-up-the-local-environment-and-workspace) before continuing.

Now lets serve the app locally:

```
npm start --o
```

By now, you should have a running Write It Down (Frontend) instance at http://localhost:4200 without any errors.
You can add some users in the backend database and login with those credentials. Cheers! 🍻

## Authors

[Ali Raza](https://0xali.com) (me) **🙃**

## Find Me Online

Feel free to contact me for any kind of help or information. Let's get connected! :)

- [Website](https://0xali.com)

- [Github](https://github.com/0xaliraza)

- [Twitter](https://twitter.com/0xaliraza)

- [Medium](https://0xali.medium.com)

- [Linkedin](https://www.linkedin.com/in/ali-raza-061130202/)

## To Do

- [ ] Testing
- [ ] Search buttons
- [ ] Hybrid Rendering
- [x] CI/CD
