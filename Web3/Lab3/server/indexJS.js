const path = window.location.pathname;
const page = path.split("/").pop();

if (page === "") {
    const form = document.querySelector(".express-form");
    const input = form.querySelector(".form-input");

    const sendInputData = async (data) => {
        const response = await fetch("http://localhost:3000/submit-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = input.value;
        sendInputData({ text }).then((res) => {
            console.log(res);
        });
        input.value = "";
    });
} else if (page === "index2.html") {
    const bar = document.querySelector("#text");
    fetch("http://localhost:3000/get-file-content")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            bar.textContent = res.fileText;
        });
}
