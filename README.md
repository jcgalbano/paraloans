# **Welcome to Paraloans!**
A small loaning app demo built with Next.js and Express.js. Demonstrates a multi step form that's validated, sanitized, and meant to demonstrate the basics of loan application.

**Built using:**

`React 18`

`Next.js 14.2.5`

`Node.js 22.4.1`

`Express.js ^4.19.2`

**Tested using:**

`Cypress ^13.13.1` for some e2e and component tests.
`Jest ^29.7.0` and `Supertest ^7.0.0` for some tests on the services and a request spec on the controller.

Please make sure to have these fundamentals before you start with installation.

Also another README on the web directory. Good way to see the dependency matrix.

## **Installation Steps**
### **Frontend**
1. Navigate to the root of the project using your terminal
1. Then navigate to the web directory using `cd web`
1. Install frontend dependencies using `npm install`
1. Start the web using `npm run dev` and it should run on port `3001`
1. Open a chrome browser and pay a visit to `http://localhost:3001/`

### **Backend**
1. Navigate to the root of the project using your terminal
1. Then navigate to the api directory using `cd api`
1. Install backend dependencies using `npm install`
1. Start the api component using `npm run start` and it should run on port `3000`
1. Do a test curl command to check if the api is running. Here's a very tiny curl command for you to run in the terminal:
```
curl --location 'http://localhost:3000/api/loan-applications' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'firstName=Alexander' \
--data-urlencode 'lastName=Fleming' \
--data-urlencode 'dateOfBirth=1881-08-05T15:56:00.000Z' \
--data-urlencode 'email=alex.fleming@gmail.com' \
--data-urlencode 'phoneNumber=3113213222' \
--data-urlencode 'address=29 Amiens Road. BUDGEE BUDGEE, New South Wales(NSW)' \
--data-urlencode 'employerName=Driva' \
--data-urlencode 'annualIncome=100000' \
--data-urlencode 'employmentStatus=Employed' \
--data-urlencode 'price=3500' \
--data-urlencode 'deposit=500' \
--data-urlencode 'loanTerm=5' \
--data-urlencode 'loanPurpose=Home Improvements'
```
## **Design**
This project has been designed with Figma before development. Since this is a customer facing app, UI/UX is a very important aspect to this project.
See the design and all its glory on
https://www.figma.com/proto/ILOSLw7WD0IgOvjTHidgmL/Untitled?t=NEebWYocwqiC4o2K-1 ❤️

## **Security Features**


* **CORS (Cross-Origin Resource Sharing)**: Allows the API to specify which domains are permitted to access its resources, helping to prevent unauthorized cross-origin requests and enhance security.

* **Form Object Validation using JOI**: Validates incoming form data against defined schemas to ensure data conforms to expected formats and constraints, improving data integrity and reducing errors.

* **Form Object Sanitization using Validator**: Cleans and sanitizes form data to remove potentially harmful content, protecting the API from security vulnerabilities like SQL injection and cross-site scripting (XSS) attacks.

* **Size of Payload Limited to 10kb**: Restricts the size of incoming requests to a maximum of 10 kilobytes, helping to prevent server overload and mitigate potential denial of service (DoS) attacks.

* **URL Encoded Form Data (Content-Type: application/x-www-form-urlencoded)**: Handles form submissions with URL-encoded data, ensuring proper parsing and processing of form data sent via HTTP POST requests.

* **Rate Limiting**: Controls the number of requests a user can make to the API within a specified timeframe, preventing abuse and ensuring fair usage of resources.

* **Helmet Browser Toggles**: Utilizes Helmet middleware to set various HTTP headers that enhance security, such as protecting against clickjacking, XSS attacks, and other common vulnerabilities.

These features work together to make the API more secure, reliable, and resilient against common threats and misuse.
