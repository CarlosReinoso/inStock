
--@BLOCK

CREATE TABLE books (
    BookId INT AUTO_INCREMENT PRIMARY KEY,
    Title  VARCHAR(255), 
    Published  DATE, 
    NumPages  INT, 
    AuthorId  INT 
)

--@BLOCK

CREATE TABLE Authors (
    AuthorId INT AUTO_INCREMENT PRIMARY KEY,
    FirstName  VARCHAR(255), 
    LastName  VARCHAR(255), 
    Email  VARCHAR(255) 
)


--@BLOCK

ALTER TABLE Authors ADD FOREIGN KEY (AuthorId) REFERENCES books(bookId)