DROP DATABASE IF EXISTS books_dev;
CREATE DATABASE books_dev;

\c books_dev;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    genre TEXT,
    date TEXT,
    image TEXT,
    summary TEXT
);