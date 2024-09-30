const fetchUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return {success: true, data};

  } catch (error) {
    console.log(error.message);
    document.body.innerHTML = !error.message ? "An error occurred" : error.message;
  }
};

export { fetchUser };