// Mouse
document.getElementById("nature").addEventListener("mouseover", function() {
    document.getElementById("message").innerHTML = "You are looking at nature!";
});

// Keyboard
document.addEventListener("keydown", function(event) {if (event.key === "n" || event.key === "N") {
        document.getElementById("KeyMessage").innerHTML = "You Pressed N!";
    }
});

// Button
document.getElementById("button").addEventListener("click", function() {document.getElementById("text").innerHTML = "Welcome to nature!";
});
