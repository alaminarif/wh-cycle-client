import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="Blogs">
      <table>
        <h3>Difference between javascript and nodejs</h3>
        <tr>
          <th>Javascript</th>
          <th> Nodejs</th>
        </tr>
        <tr>
          <td>Javascript is a programming language that is used for writing scripts on the website. </td>
          <td>NodeJS is a Javascript runtime environment.</td>
        </tr>
        <tr>
          <td>It is basically used on the client-side.</td>
          <td>It is mostly used on the server-side.</td>
        </tr>
        <tr>
          <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
          <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript</td>
        </tr>
        <tr>
          <td> Javascript is used in frontend development.</td>
          <td>Nodejs is used in server-side development.</td>
        </tr>
      </table>

      <table>
        <h3> Differences between sql and nosql databases.</h3>
        <tr>
          <th>Sql</th>
          <th> Nosql</th>
        </tr>
        <tr>
          <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) </td>
          <td>Non-relational or distributed database system.</td>
        </tr>
        <tr>
          <td>These databases have fixed or static or predefined schema</td>
          <td>They have dynamic schema</td>
        </tr>
        <tr>
          <td>These databases are not suited for hierarchical data storage. </td>
          <td>These databases are suited for hierarchical data storage.</td>
        </tr>
        <tr>
          <td> These databases are best suited for complex queries</td>
          <td>These databases are not so good for complex queries</td>
        </tr>
      </table>

      <div className="content">
        <h3> When should you use nodejs and when should you use mongodb</h3>
        <p>
          {" "}
          Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your
          Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types
          of code too. MongoDB is a database engine <br />
          <br /> Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built
          with nodejs that will then use MongoDB for storing data. <br />
          <br /> MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create
          databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming
          environments such as Python, Java, etc...
        </p>
      </div>
    </div>
  );
};

export default Blogs;
