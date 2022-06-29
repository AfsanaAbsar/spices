import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h5>Difference Between Javascript and node.js</h5>
            <p>Javascript is a programming language and nodejs is a runtime environment.javascript is used to make front end .and node js is used to backend development</p>
            <h5>When should you use nodejs and when should you use mongodb</h5>
            <p>one should use node js to make real time applications and one should use mongodb to handle unstructured data. </p>

            <h5>Differences between sql and nosql databases
            </h5>
            <p>Nosql database is used for unstructured data. and sql database is for relational database management </p>

            <h5>What is the purpose of jwt and how does it work?
            </h5>
            <p>JWT is used to share security connection between client and server.It prevents unwanted access to database. JWT generates a unique identity of single user and verify it</p>
        </div>
    );
};

export default Blogs;