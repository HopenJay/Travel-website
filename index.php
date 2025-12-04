<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    var_dump($_POST);
    // exit; //Note: exit is always essential to leave a request so that you won't add unneccessary data.
    error_log(print_r($_POST, true));
    echo json_encode([
        "status" => "success",
        "guests" => $_POST["guests"] ?? null
    ]);
    exit; //VERY IMPORTANT
}
echo('heldddl');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* .select-btn{
            display: none;
        } */

        .select-options{
            height: 0;
            opacity: 0;
        }

        .select-options.open{
            height: fit-content;
            opacity: 1;
        }
        select{
            position: fixed;
            /* right: 0; */
            /* width: 0; */
            opacity: 0;
            pointer-events: none;
        }
    </style>
</head>
<body>
    <div class="custom-select">
        <select name="guests" id="realSelect">
            <option value="">Select guests</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
        </select>

        <button class="select-btn">
            Select guests
        </button>

        <ul class="select-options">
            <li data-value="1">1 Guest</li>
            <li data-value="2">2 Guests</li>
            <li data-value="3">3 Guests</li>
        </ul>
    </div>

    <script>
        const select_opt = document.querySelector('.select-options');
        const sel_btn = document.querySelector('.select-btn');
        const options = document.querySelectorAll('.select-options li');
        const realSelect = document.getElementById('realSelect');
        let selectedValue = ""; //for storing values

        sel_btn.addEventListener('click', () => {
            select_opt.classList.toggle('open');
        })

        options.forEach((option) => {
            option.addEventListener('click', () => {
                sel_btn.textContent = option.textContent;
                select_opt.classList.remove('open');
                selectedValue = option.textContent;
                realSelect.value = option.dataset.value;

                // Everything below here is me texting out what I don't understand
                const selectvalue = option.dataset.value;
                const formData = new FormData();
                formData.append("guests", selectvalue);
                fetch("index.php", {
                    method: "POST",
                    body: formData
                }).then(res => res.json()).then(data => {
                    console.log("Only what I need:", data.guests);
                });
                // console.log(realSelect);
                // console.log(option.dataset.value);
            })
        })
        // console.log(options);
    </script>
</body>
</html>