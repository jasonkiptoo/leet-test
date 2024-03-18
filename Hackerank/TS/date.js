function getDate() {
    var timeStamp = '2024-03-11T07:31:44.975Z';
    // Parse the timestamp into milliseconds
    var timestampMilliseconds = Date.parse(timeStamp);
    // Get today's date
    var currentDate = new Date();
    // Calculate the difference in milliseconds between today's date and the timestamp
    var differenceMilliseconds = currentDate - timestampMilliseconds;
    // Convert the difference into days
    var differenceInDays = Math.floor(differenceMilliseconds / (1000 * 60 * 60 * 24));
    // Output the difference in days
    console.log("Difference in days:", differenceInDays);
}
// Call the function to test
getDate();
