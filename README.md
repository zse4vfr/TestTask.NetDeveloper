Test task for .Net developer

# Notebook

This is a simple notebook application, which allows you to keep track of your contacts.
You can view, edit, add, and delete contacts easily using the user-friendly interface.

## Main page

![Main page](/Images/MainPage.png)

The main page of the notebook contains a table with the following fields for each person: last name, first name (unfortunately i couldn't write the first name and last name values validation check), year of birth (the birth year value is between 1900 and 2024), list of phone numbers (each phone number must have only 11 digits per line ), and an "Редактировать" button.
Clicking the "Редактировать" button will take you to another page where you can edit all the fields mentioned above.

## Editing page

![Edition page](/Images/PersonEdition.png)

This page allows you to edit the fields of a specific person's record in the notebook.
You can modify the last name, first name, year of birth, and list of phone numbers and also you can delete the current record.

Additionally, there are two links on the main page: "Люди" leads to the page with same records of people,
![Persons page](/Images/PersonsPage.png)
and "Добавить нового человека" leads to the addition of a new person to the notebook.
This page is similar to the editing page, but it also displays an Id assigned to the record and a "Удалить" button.
Clicking the "Удалить" button will remove the record from the notebook.

## Adding new contact page

![Addition page](/Images/PersonAddition.png)

On this page, you can add a new person to the notebook by filling in the fields for last name, first name, year of birth, and list of phone numbers.
You can add every phone number using the input field the button "Добавить номер телефона"

# Technologies Used

- [ASP.NET MVC (.NET 6)](#)
- [Angular](#)
- [Microsoft Visual Studio (C#)](#)
- [PostgreSQL](#)
- [Entity Framework](#)

## Development Server Setup

**FullStack.UI:**

Run the following command in the terminal:
ng serve --o

Or run it from IntelliJ IDEA Ultimate.

**FullStack.API:**

Launch it from Microsoft Visual Studio.
