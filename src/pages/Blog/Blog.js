import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">Difference between SQL and NoSQL</h3>
                        <p className="mt-1 dark:text-gray-400">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is JWT, and how does it work?</h3>
                        <p className="mt-1 dark:text-gray-400">What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is the difference between javascript and NodeJS?</h3>
                        <p className="mt-1 dark:text-gray-400">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">How does NodeJS handle multiple requests at the same time?</h3>
                        <p className="mt-1 dark:text-gray-400">I understand that Node.js uses a single-thread and an event loop to process requests only processing one at a time (which is non-blocking). But still, how does that work, lets say 10,000 concurrent requests. The event loop will process all the requests? Would not that take too long?

                            I can not understand (yet) how it can be faster than a multi-threaded web server. I understand that multi-threaded web server will be more expensive in resources (memory, CPU), but would not it still be faster? I am probably wrong; please explain how this single-thread is faster in lots of requests, and what it typically does (in high level) when servicing lots of requests like 10,000.

                            And also, will that single-thread scale well with that large amount? Please bear in mind that I am just starting to learn Node.js.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;