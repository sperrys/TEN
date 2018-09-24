# TEN
JumboCode 2018-2019 project for Textbook Exchange Network,  led by Bianca Capretta.

Students are less inclined to buy brand new textbooks at their school bookstores because of ridiculously high and rising prices; however, students still need textbooks to succeed in their classes. The Textbook Exchange Network (TEN) offers a solution to reduce the burden of textbook costs. The purpose of TEN is to create a cheaper on-campus alternative where students can buy and sell their used textbooks. Books are exchanged in person during open office hours run by volunteers. Students can sell books at any price they choose and students can browse the available book selection.

In the past, TEN has facilitated the exchange of $100,000 worth of textbooks, saving students $77,000 at Tufts University. TEN remains a physical exchange service where the book buying and selling all happens in person with no transaction fee. The current exchange has been managed using Google Spreadsheets, however, using this method is not scalable nor secure in the long run. TEN wants to move beyond Google’s UI by creating a website to manage all textbook transactions.

This project entails creating a secure and scalable database holding all book entries. Each book submission will require a book name, edition number, ISBN, associated class name, and selling price. The website will essentially host CRUD capabilities (create, read, update, delete). A user interface will be designed for students looking to buy and sell textbooks - capabilities to read and create book entries. A separate interface will be incorporated for admins (non-technical volunteers) to update and delete postings for management purposes.

The scope of this project may also include developing an analytics platform with textbook selling stats to help Textbook Exchange leadership make decisions. Depending on how the main user interface progresses throughout the year, this feature will either be incorporated or nixed in the second semester.

# Setting up Development Environment
1. `git clone https://github.com/JumboCode/TEN.git`
2. Download version Python 3.7: https://www.python.org/downloads/
3. Check if you correctly installed Python: `python3 -V`
4. Check if you have pip installed: `pip3 list`

# Deploying React
1. `cd react-boilerplate`
2. `npm run setup`
3. `npm start`
4. You can go to http://localhost:3000 to see a local version of the website
5. To build the app: `npm run clean` and then `npm start`
6. Quit with CTRL+C


# Deploying Django
1. cd `django/mysite`
2. `python3 manage.py runserver` - don't worry if there is an error about "unapplied migrations"
3. Go to: `http://127.0.0.1:8000/` to see deployment
4. Quit with CTRL+C
