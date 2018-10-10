# TEN
JumboCode 2018-2019 project for Textbook Exchange Network

Students are less inclined to buy brand new textbooks at their school bookstores because of ridiculously high and rising prices; however, students still need textbooks to succeed in their classes. The Textbook Exchange Network (TEN) offers a solution to reduce the burden of textbook costs. The purpose of TEN is to create a cheaper on-campus alternative where students can buy and sell their used textbooks. Books are exchanged in person during open office hours run by volunteers. Students can sell books at any price they choose and students can browse the available book selection.

In the past, TEN has facilitated the exchange of $100,000 worth of textbooks, saving students $77,000 at Tufts University. TEN remains a physical exchange service where the book buying and selling all happens in person with no transaction fee. The current exchange has been managed using Google Spreadsheets, however, using this method is not scalable nor secure in the long run. TEN wants to move beyond Google’s UI by creating a website to manage all textbook transactions.

This project entails creating a secure and scalable database holding all book entries. Each book submission will require a book name, edition number, ISBN, associated class name, and selling price. The website will essentially host CRUD capabilities (create, read, update, delete). A user interface will be designed for students looking to buy and sell textbooks - capabilities to read and create book entries. A separate interface will be incorporated for admins (non-technical volunteers) to update and delete postings for management purposes.

The scope of this project may also include developing an analytics platform with textbook selling stats to help Textbook Exchange leadership make decisions. Depending on how the main user interface progresses throughout the year, this feature will either be incorporated or nixed in the second semester.

## Team members
* Allen Zhou
* Era Iyer
* Ryan Biette (Designer)
* Bianca Capretta (Project Lead)
* Juliet Yue
* Barry Eom
* Radhika Joshi
* Russ Gomez
* Aidan Bauer
* Jake Owen
* Daniel Westrich

## Setting up Development Environment
1. `cd <PATH TO DIRECTORY YOU WANT YOUR CODE TO BE IN>`
2. `git clone https://github.com/JumboCode/TEN.git // this will create a directory
        called TEN`
3. `cd TEN`

Next, install system dependencies:
1. If you don't have homebrew installed, run the following command
(if you're a MacOS user): `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. `brew install python node yarn`
3. `sudo pip3 install --upgrade pip`
4. Check if you correctly installed Python: `python3 -V`
5. Check if you correctly installed pip: `pip3 list`

In the backend directory, you will need to run more commands:
1. `cd backend`
2. `python -m venv .venv`
3. `. .venv/bin/activate`
4. `pip install --upgrade pip setuptools`
5. `pip install -r requirements.txt`

In the frontend directory, run: `yarn`

## Architecture Overview
This project will be split up into three parts: API, Database, Frontend

### API

[Django](https://www.djangoproject.com/) REST API for all textbook CRUD (create,
    read, update, delete) operations. This will interact with the
    [PostgreSQL](https://www.postgresql.org/) database

### Database

[PostgreSQL](https://www.postgresql.org/) database. Stores all data.
(For later: add link to admin interface)

### Frontend

[React](https://facebook.github.io/react/docs/hello-world.html) application

#### Deploying React
1. `cd frontend`
2. `npm run build`
3. `npm start`
4. You can go to http://localhost:3000 to see a local version of the website
6. Quit with CTRL+C

## Developer Workflow

When working on new features/bug fixes:
- Make sure your local repository is the most current version: `git pull`
- Work on a feature branch (put the issue number in the branch name): `git checkout -b <branch name>` (make sure you're in the master branch when you create a new branch so that it will copy the current state of master)
- To change existing branches: `git checkout <branch name>`
- When making changes, add/save the changes by doing: `git add .` which
stashes all the things you've edited/added/removed
- As you work on sizable chunks of the code, commit your work with clear messages: `git commit -m "Some message"`. If you already have changes relevant to the most previous commit, you can type `git commit --amend` to group the changes together
- You can run `git status` to see what files have been added and whether you're up to date with the master branch
- To see the difference between your branch and master, type: `git diff master`
- To see a list of the current commits, both in your local branch and in the master branch: `git log`
- When you are ready for the branch to merge into master, create a [pull request](https://help.github.com/articles/creating-a-pull-request/). This will be a way we can review each others' code before pushing into master. You can do this by going to the Github repo, clicking `New pull request` in the top left, and selecting/typing your branch name in the Compare dropdown (leave Base as master). Then after filling out a title and description for the pull request, click Create pull request
- Have someone review your merge request, incorporate feedback
- Reviewer approves with a comment on the merge request on github
- Merge your [code](https://help.github.com/articles/merging-a-pull-request/)
- When the branch is merged into master, the tests will run and if they pass, it
  will automatically be deployed to the production server
- Double check it's working in the production app
