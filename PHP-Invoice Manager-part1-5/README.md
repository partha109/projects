## Invoice Manager - Part 1

What challenges did you face in completing this assignment?

* Understanding and using PHP's array handling and filtering functions.
* Ensuring the navigation works correctly across multiple pages.
* What did you find most interesting about creating PHP templates?

  * How does PHP differ from other programming languages that I have used.
  * How PHP templates simplify dynamic content rendering.

- The ease of integrating logic and presentation in PHP.

  - PHP is more web-centric and integrates HTML seamlessly, unlike many other programming languages.
  - The syntax and approach to handling data and rendering it on web pages differ significantly from languages like JavaScript or Python.

## Invoice Manager - Part 3

Observations regarding assignment #3

1.**Validation Techniques Used**:

- Regular expressions to validate the Client Name for letters and spaces.
- PHP's `filter_var` function to validate the email address format and ensure the invoice amount is an integer.
- In-array checks to validate the Invoice Status.

2.**Importance of Adding Validation**:

- Validation ensures data integrity and prevents incorrect or malicious data from being processed.
- It enhances user experience by providing immediate feedback on incorrect inputs.
- It helps maintain the security and reliability of the application by preventing SQL injection and other vulnerabilities.

3.**Improvements or Changes**:

- Implementing server-side validation in addition to client-side validation for better security.
- Adding pagination for better handling of large datasets.
- Enhancing the UI with more detailed error messages and possibly integrating a front-end framework for a more responsive design.
- Implementing more robust session handling and possibly migrating to a database for persistent data storage.

## Invoive Manager - Part 4

Observation regarding assignment #4

* **Beyond incorporating the `invoice_manager` database, what other refactoring did you do for this part of the project?**
  * Used PDO for secure database operations.
  * Removed session management for invoices to ensure data persistence through the database.
* **In your own words, why is it important to use prepared statements and when should you use them?**
  * Prepared statements are crucial for preventing SQL injection attacks by separating SQL logic from data.
  * They ensure that user input is treated as data only, not executable code.
  * They should be used whenever executing SQL queries with user input.
* **How did using a database to manage the data differ from using a session array? Which do you prefer and why?**
  * Using a database ensures data persistence, reliability, and allows concurrent access from multiple users or sessions.
  * A session array is suitable for temporary storage, limited to the user's session. It is volatile and not ideal for long-term storage.
  * I prefer using a database for managing data due to its robustness, persistence, and ability to handle larger datasets securely.

## Invoice Manager - Part 5

Observation regaridng assignment # 5

* What additional code would be required for the Invoice Manager application to accept multiple different file types?

  * Extend the file validation logic to accept a broader range of file types. This can be done by updating the validation conditions to include additional Image types and file extensions.
  * Depending on the file type, specific processing might be required.
  * Adjust the user interface to inform users about the supported file types and handle different file types' display or access differently in the UI.
* How would you improve the Invoice Manager application? What new features would you add or improve?

  * Implement more advanced search capabilities to filter invoices based on multiple criteria such as date ranges, amounts, or specific client attributes.
  * Add functionality to send automated email reminders for pending and draft invoices, improving the timeliness of payments.
  * Develop roles and permissions to allow multiple users with different access levels.
  * Integrate with payment gateways to allow direct online payment of invoices from the portal.
  * Ensure full mobile responsiveness.
* What have you learned from completing the Invoice Manager application? How will those skills help you in the future?

  * I have gained hands-on experience in both front-end and back-end development, understanding how to create a functional user interface while managing server-side logic and database interactions.
  * I have learned about the complexities of file management in web applications, including upload, storage.
  * This project improved my understanding of database operations such as creating, reading, updating, and deleting data and more complex queries involving joins and transactions.
  * This project sets a strong base for me to further my learning in advanced web technologies, frameworks, and real-time data handling, which are critical in modern software and web development environments.
