const button = document.querySelector("#loadbtn");
const usersDiv = document.querySelector("#users");

button.addEventListener("click", async () => {

    usersDiv.innerHTML = "<p>Loading...</p>";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        usersDiv.innerHTML = "";

        users.forEach(user => {

            usersDiv.innerHTML += `
                <div class="user-card">
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                    <p>${user.phone}</p>
                </div>
            `;

        });

    } catch (error) {

        usersDiv.innerHTML =
            "<p>Something went wrong.</p>";

        console.log(error);
    }
});