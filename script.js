// Form handling — no backend for now, just shows confirmation
const form = document.getElementById("testerForm");
const msg = document.getElementById("formMsg");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("testerName").value.trim();
        const email = document.getElementById("testerEmail").value.trim();

        if (!name || !email) {
            showMsg("please fill in your name and email!", "error");
            return;
        }

        // For now, just show a success message (USB distribution, no backend needed)
        showMsg("thanks " + name + "! reach out to jesua to get eao installed on your phone.", "success");
        form.reset();
    });
}

function showMsg(text, type) {
    msg.textContent = text;
    msg.className = `form-msg ${type}`;
    setTimeout(() => {
        msg.textContent = "";
        msg.className = "form-msg";
    }, 6000);
}
