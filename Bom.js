
<!DOCTYPE html>
<html>
<head>
    <title>BOM Notes</title>
</head>
<body>

    <h1>BOM in JavaScript</h1>

    <button onclick="showAlert()">Alert</button>
    <button onclick="showURL()">Current URL</button>
    <button onclick="showScreen()">Screen Size</button>
    <button onclick="showBrowser()">Browser Info</button>

    <p id="output"></p>

    <script>
        // 1. WINDOW OBJECT
        // Browser window ko represent karta hai
        console.log(window);

        // 2. ALERT METHOD
        function showAlert() {
            window.alert("Hello Siddhant!");
        }

        // 3. LOCATION OBJECT
        // Current webpage ka URL show karta hai
        function showURL() {
            document.getElementById("output").innerText =
                window.location.href;
        }

        // 4. SCREEN OBJECT
        // Screen ki width aur height batata hai
        function showScreen() {
            document.getElementById("output").innerText =
                "Width: " + window.screen.width +
                "px, Height: " + window.screen.height + "px";
        }

        // 5. NAVIGATOR OBJECT
        // Browser ki information deta hai
        function showBrowser() {
            document.getElementById("output").innerText =
                window.navigator.userAgent;
        }

        // 6. HISTORY OBJECT
        // Previous page par jane ke liye:
        // window.history.back();

        // Next page par jane ke liye:
        // window.history.forward();

        // 7. CONFIRM METHOD
        // User se OK ya Cancel mein choice leta hai
        let result = window.confirm("Do you want to continue?");
        console.log(result); // OK = true, Cancel = false

        // 8. PROMPT METHOD
        // User se input leta hai
        // let name = window.prompt("Enter your name:");
        // console.log(name);
    </script>

</body>
</html>
