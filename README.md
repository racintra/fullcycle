# Full Cycle Developers

This repository was created to store the code and files of the Full Cycle 3.0 course.

Who is Full Cycle Ltda?

Full Cycle Ltda is a company focused on training people to work in software development. Its founder Wesley Willians created professional training based on the Netflix concept called Full Cycle Developer. The main idea is that a software developer participates in all stages of the process (Design, Develop, Test, Deploy, Operate, Support).

## Chapters

### Docker

**Project 08**

This project aimed to build a Go Lang image, in which, when executing the command:

`docker run docker pull renatocintra/fullcycle:latest`

It should display the following output: Full Cycle Rocks!

However, the final image hosted on [Docker Hub](https://hub.docker.com/r/renatocintra/fullcycle) should be less than 2mb.

[Access the project folder here](https://github.com/racintra/fullcycle/tree/main/project_08)

**Project 09**

In this project, the objective was to use Nginx as a reverse proxy. The main idea is that when a user accesses Nginx, he will make a call to the Node.js application. This application, in turn, will add a record to the MySQL database, registering a name in the people table.

The return of the Node.js application for Nginx was:

`<h1>Full Cycle Rocks!</h1>`

With the list of names registered in the database.

A docker-compose file was also generated in a way that we just run:

`docker-compose up -d`

Three containers are started (app, db, nginx) and making the application available on port 8080.

[Access the project folder here](https://github.com/racintra/fullcycle/tree/main/project_09)
