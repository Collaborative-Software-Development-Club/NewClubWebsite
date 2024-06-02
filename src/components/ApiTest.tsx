async function getData() {
    const res = await fetch('https://catfact.ninja/fact', { next: { tags: ['test'] } });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    const { fact } = await res.json();

    return fact;
}
const ApiTest = async () => {
    const fact = await getData();

    return <p>{fact}</p>;
};

export default ApiTest;
