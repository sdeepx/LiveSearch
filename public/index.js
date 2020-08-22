const uname = document.getElementById("uname");
let userlst = document.querySelector(".lst");

uname.addEventListener("keyup", () => {
    if (uname.value.length !== 0) {
        fetch(`http://127.0.0.1:4040/api/v1/users?name=${uname.value}`, {
            method: "POST"
        }).then(res => res.json()).then(usr => {
            if (usr.users !== undefined) {
                userlst.innerText = "";
                usr.users.map(e => {
                    userlst.innerHTML += `<p> ${e.name} </p>`;
                });
            } else {
                userlst.innerText = usr.message;
            }

        });
    } else {
        userlst.innerHTML = "";
        userlst.innerText = "";
    }



});