function getDate() {
    const timeStamp = '2024-03-01T07:31:44.975Z';

    // Parse the timestamp into milliseconds
    const timestampMilliseconds = Date.parse(timeStamp);

    // Get today's date
    const currentDate:any = new Date();

    // Calculate the difference in milliseconds between today's date and the timestamp
    const differenceMilliseconds = currentDate - timestampMilliseconds;

    // Convert the difference into days
    const differenceInDays = Math.floor(differenceMilliseconds / (1000 * 60 * 60 * 24));

    // Output the difference in days
    console.log("Difference in days:", differenceInDays);
}

// Call the function to test
getDate();
