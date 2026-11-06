const api_url = "https://jsonplaceholder.typicode.com/users";
const data_container = document.querySelector("#data_container");
const error_ele = document.querySelector("#error");
const loading = document.querySelector("#loading");

async function getUsers() {
  try {
    loading.style.display = "block";
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    updateUserList(data);
  } catch (error) {
    console.error("Error fetching users:", error);
    error_ele.innerHTML =  `<h3>${error}</h3>`
  }
  finally{
    loading.style.display = "none";
  }
}

function updateUserList(users) {
  users.forEach((user) => {
    const card = document.createElement("div");
    card.id = "card";
    card.innerHTML = `<div class="header">
                    <h3>${user.name}</h3>
                </div>
                <div class="content">
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>City:</strong> ${user.address.city}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                </div>`;
    data_container.appendChild(card);
  });
}

getUsers();
