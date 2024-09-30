import { fetchUser } from "./service/getUser.js";

async function printUser() {
  const { success, data } = await fetchUser();
  console.log(data);

  if (!success) return;

  const user = document.getElementById("user");
  user.textContent = data.name[0];
  user.classList.add("user");
}

export { printUser };
