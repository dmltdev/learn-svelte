export async function getRandomNumber() {
  // Fetch a random number between 0 and 100 using a placeholder API
  const res = await fetch(
    "https://random-data-api.com/api/number/random_number?min=0&max=100"
  );

  if (res.ok) {
    const data = await res.json();
    return data.number;
  } else {
    throw new Error("Request failed");
  }
}
