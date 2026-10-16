

<!DOCTYPE html>
<html>
<head>
    <title>DOM Tree Example</title>
</head>
<body>

    <h1 id="heading">Hello Siddhant!</h1>

    <div id="parent">
        <p id="son">I am Son</p>
        <p id="daughter">I am Daughter</p>
    </div>

    <script>
        // 1. ROOT NODE
        // html document ke DOM tree ka root element hai
        let root = document.documentElement;
        console.log("Root:", root.tagName);

        // 2. PARENT NODE
        // div, son aur daughter ka parent hai
        let son = document.getElementById("son");
        console.log("Parent:", son.parentElement.tagName);

        // 3. CHILD NODES
        // div ke children ko access karna
        let parent = document.getElementById("parent");
        console.log("Children:", parent.children);

        // 4. SIBLINGS
        // son aur daughter ek-doosre ke siblings hain
        console.log("Son's next sibling element:",
            son.nextElementSibling.id);

        console.log("Daughter's previous sibling element:",
            document.getElementById("daughter")
                .previousElementSibling.id);

        // 5. ELEMENT SELECT KARNA
        let heading = document.getElementById("heading");

        // 6. TEXT CHANGE KARNA
        heading.textContent = "Welcome to JavaScript DOM!";

        // 7. CSS CHANGE KARNA
        heading.style.color = "blue";
        heading.style.fontSize = "30px";

        // 8. NAYA ELEMENT BANANA
        let newElement = document.createElement("p");
        newElement.textContent = "I am a new child element!";

        // 9. ELEMENT ADD KARNA
        parent.appendChild(newElement);

        // 10. ELEMENT DELETE KARNA
        // newElement.remove();

    </script>

</body>
</html>
