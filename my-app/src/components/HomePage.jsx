import React from "react";
import BookList from "./BookList";
import "../styles/HomePage.css";


const HomePage = () => {
  return (
    <div className="homepage">
      
      <div className="banner">
        <h2>
          “Second-hand books are not just stories—they are memories passed from one soul to another.”
        </h2>
      </div>

      
      <section className="book-section">
        <h3>Best Picks</h3>
        <BookList />
        <p className="see-more">see more</p>
      </section>

      
      <section className="book-section">
        <h3>Recently added</h3>
        <BookList />
        <p className="see-more">see more</p>
      </section>
    </div>
  );
};

export default HomePage;
