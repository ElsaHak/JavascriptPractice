// Using Promises
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data fetched"), 1000);
    });
}

fetchData().then(console.log);

// Using async/await
async function fetchAsyncData() {
    const data = await fetchData();
    console.log(data);
}

fetchAsyncData();
