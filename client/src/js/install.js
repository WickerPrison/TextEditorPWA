const butInstall = document.getElementById('buttonInstall');
butInstall.style.display = "none";

let installPrompt = null;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log("test");
    installPrompt = event;
    butInstall.style.display = "inline-block"
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if(!installPrompt) return;

    const result = await installPrompt.prompt();
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    installPrompt = null;
    butInstall.style.display = "none";
});
