-- Create database
CREATE DATABASE IF NOT EXISTS TUNA_TEST;

-- Use database
USE TUNA_TEST;

-- Create some example tables
CREATE TABLE COURSES (
  id int NOT NULL PRIMARY KEY,
  teacherId int NOT NULL,
  name varchar(255) NOT NULL,
  shortDesc varchar(512) NOT NULL,
  price smallint NOT NULL,
  periodDay tinyint NOT NULL,
  
  -- Constraint
  FOREIGN KEY (teacherId) REFERENCES TEACHERS(id)
);

CREATE TABLE TEACHERS (
  id int NOT NULL PRIMARY KEY,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL
);

-- Insert some data
INSERT INTO TEACHERS VALUES
  (1, 'Tuan', 'Nguyen Anh'),
  (2, 'Bill', 'Door'),
  (3, 'Steve', 'Work');

INSERT INTO COURSES VALUES
  ( 1, 1,
    'Javascript for beginner', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    399, 15 ),
  ( 2, 1,
    'Advanced javascript', 'In pellentesque purus in tortor ornare, a tincidunt justo venenatis.',
    1199, 30 ),
  ( 3, 2,
    'Welcome to OS', 'Sed id arcu non turpis aliquam gravida.',
    999, 21 ),
  ( 4, 3,
    'Build a smart phone for beginner', 'Donec quis augue accumsan, commodo augue id, fringilla leo.',
    2999, 10 ),
  ( 5, 2,
    'Build your first OS', 'Etiam finibus velit at ullamcorper sagittis.',
    1299, 20 ),
  ( 6, 1,
    'Build an ecommerce application ( React, Node, SQL and Redis)', 'Suspendisse egestas dolor vel lectus aliquet pretium.',
    1499, 30 ),
  ( 7, 3,
    'Learn how to advertise your product', 'Aenean suscipit diam eget nisi rhoncus luctus.',
    1899, 7 ),
  ( 8, 1,
    'How to deploy your ecommerce application', 'Ut finibus arcu nec imperdiet vulputate.',
    49, 3 ),
  ( 9, 2,
    'What is computer?', 'Pellentesque lacinia justo quis nisl gravida sagittis.',
    1299, 24 ),
  ( 10, 1,
    'Learn C++: crash course', 'Phasellus commodo lacus sit amet tellus gravida ultrices.',
    399, 12 ),
  ( 11, 1,
    'Learn C++: Advanced concepts', 'Aliquam eget neque at eros molestie auctor vel sit amet nisi.',
    599, 20 ),
  ( 12, 2,
    'What is kernel?', 'Fusce dictum lacus in iaculis imperdiet.',
    39, 3 ),
  ( 13, 2,
    'Enhance secure in our OS', 'Curabitur in nisi non turpis condimentum hendrerit.',
    299, 3 ),
  ( 14, 3,
    'Minimal UI: the best way to impress formal feeling', 'Nunc condimentum ex pretium, ullamcorper ex et, pellentesque ipsum.',
    999, 10 ),
  ( 15, 3,
    'Design a best UX: make your products unique', 'Integer pellentesque risus eu sem efficitur vehicula.',
    899, 12 ),
  ( 16, 3,
    'How to perform a good speech?', 'Mauris blandit enim et odio convallis tincidunt.',
    299, 3 ),
  ( 17, 1,
    'Make 10 simple game with C++ and SDL', 'Etiam porttitor dolor quis dolor efficitur, ac fermentum justo euismod.',
    3999, 72 ),
  ( 18, 2,
    'What is multi-threads?', 'Fusce semper nisl at interdum elementum.',
    79, 2 ),
  ( 19, 2,
    'Word: a upgraded version of notepad', 'Aenean ac neque sed nulla posuere condimentum in eu dolor.',
    7999, 72 ),
  ( 20, 1,
    'How to test our games?', 'Maecenas vitae lacus eu dui accumsan varius ut eget lorem.',
    399, 10 );