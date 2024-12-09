if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("🎉 Happy Birthday!", {
                body: "Click to view your surprise gift!",
                icon: "path/to/icon.png"
            });
        }
    });
}
