        
        // Initially set the degree select to greyed out
        if (document.getElementById("type").value == "t")
        {
            document.getElementById('degree').style.background = "lightgrey";

        }
        
        // Check degree type of the select dropdown input
        // Will disable the degree select dropdown if the degree
        // type is not selected
        function CheckTypeValidity()
        {
            var selectTypeValue;

            selectTypeValue = document.getElementById("type").value; // Get value of select element
            if(selectTypeValue != "t") //Default select option, aka nothing selected
            {
                document.getElementById('degree').disabled = false; //Enable the next select element
                document.getElementById('degree').style.background = "white";
            }
            else
            {
                document.getElementById('degree').disabled = true;
                document.getElementById('degree').style.background = "lightgrey";
            }
        }

        // Get elements to check
        const form = document.getElementById('info_form');
        const type = document.getElementById('type');
        const degree = document.getElementById('degree');
        const fn = document.getElementById('fn');
        const ln = document.getElementById('ln');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const address = document.getElementById('address');

        // Event listener for the "Tell me more" button
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            checkInputs();
        });

        function checkInputs()
        {
            // Get the actual values
            const fnValue = fn.value.trim();
            const lnValue = ln.value.trim();
            const emailValue = email.value.trim();
            const phoneValue = phone.value.trim();
            const addressValue = address.value.trim();

            // Type select
            if (type.value == "t")
            {
                // Error
                document.getElementById('errortype').hidden = false;
            }
            else
            {
                // Success
                document.getElementById('errortype').hidden = true;
            }

            // Degree select
            if (degree.value == "d")
            {
                // Error
                document.getElementById('errordegree').hidden = false;
            }
            else
            {
                // Success
                document.getElementById('errordegree').hidden = true;
            }

            // First Name
            if (fnValue === "")
            {
                // Error
                document.getElementById('errorfn').hidden = false;
            }
            else
            {
                // Success
                document.getElementById("errorfn").hidden = true;
            }

            // Last Name
            if (lnValue === "")
            {
                // Error
                document.getElementById('errorln').hidden = false;
            }
            else
            {
                // Success
                document.getElementById('errorln').hidden = true;
            }

            // Email
            // Below is regex found to determine if email is valid
            // From www.w3resource.com
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(emailValue))
            {
                // Success
                document.getElementById('erroremail').hidden = true;
            }
            else
            {
                // Error
                document.getElementById('erroremail').hidden = false;

            }

            // Phone
            //Regex also from www.w3resource.com
            if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneValue))
            {
                // Success
                document.getElementById('errorphone').hidden = true;
            }
            else
            {
                // Error
                document.getElementById('errorphone').hidden = false;
            }

            // Address
            if (addressValue === "")
            {
                // Error
                document.getElementById('erroraddress').hidden = false;
            }
            else
            {
                // Success
                document.getElementById('erroraddress').hidden = true;
            }
            
        }