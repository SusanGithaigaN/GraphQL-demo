// call graphql server
async function fetchGreeting(){
    const response = await fetch('http://localhost:9000/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            query: 'query { greeting }',
        }),
    });
    const {data} = await response.json();
    // console.log('Server response:', data);
    return data.greeting;
}

// fetch the val returned by the server
fetchGreeting().then((greeting) => {
    document.getElementById('server-res').textContent = greeting;
});