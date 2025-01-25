
// document.addEventListener('DOMContentLoaded', () => {
//     const formData = {}; // Global object to store form data

//     // Function to show the specified step and hide others
//     function showStep(stepNumber) {
//         document.querySelectorAll('.step').forEach((step) => {
//             step.style.display = 'none'; // Hide each step
//         });
//         const currentStep = document.getElementById(`step${stepNumber}`);
//         if (currentStep) {
//             currentStep.style.display = 'block';
//         }
//     }

//     // Function to save data from a specific step
//     function saveStepData(stepNumber) {
//         const step = document.getElementById(`step${stepNumber}`);
//         if (step) {
//             const inputs = step.querySelectorAll('input, select, textarea');
//             inputs.forEach((input) => {
//                 if (input.name) {
//                     formData[input.name] = input.type === 'checkbox' || input.type === 'radio' ? input.checked : input.value;
//                 }
//             });
//         }
//     }

//     // Function to display a notification for validation issues
//     function displayNotification(message) {
//         let notification = document.getElementById('validation-notification');
//         if (!notification) {
//             notification = document.createElement('div');
//             notification.id = 'validation-notification';
//             notification.style.color = 'red';
//             notification.style.fontSize = '1em';
//             notification.style.margin = '10px 0';
//             notification.style.textAlign = 'center';
//             document.body.insertBefore(notification, document.body.firstChild);
//         }
//         notification.textContent = message;
//     }

    

//     function validateStep(stepNumber) {
//         let isValid = true;
//         const step = document.getElementById(`step${stepNumber}`);
//         const requiredFields = step.querySelectorAll('[required]');
    
//         // Clear all previous validation states
//         requiredFields.forEach((field) => {
//             field.classList.remove('is-invalid', 'is-valid');
//             const feedback = field.nextElementSibling;
//             if (feedback && feedback.classList.contains('invalid-feedback')) {
//                 feedback.remove(); // Remove existing error messages
//             }
//         });
    
//         // Validate each required field
//         requiredFields.forEach((field) => {
//             if (!field.value.trim()) {
//                 isValid = false;
//                 field.classList.add('is-invalid'); // Add Bootstrap's invalid class
//                 const errorMessage = document.createElement('div');
//                 errorMessage.className = 'invalid-feedback';
//                 errorMessage.textContent = 'This field is required.';
//                 field.parentNode.appendChild(errorMessage);
//             } else {
//                 field.classList.add('is-valid'); // Add Bootstrap's valid class
//             }
//         });
    
//         // Display a notification if validation fails
//         if (!isValid) {
//             displayNotification('Please fill all required fields correctly.');
//         } else {
//             const notification = document.getElementById('validation-notification');
//             if (notification) {
//                 notification.textContent = '';
//             }
//         }
    
//         return isValid;
//     }

//     // Set the initial step
//     showStep(1);

//     // Next and Previous buttons functionality
//     document.querySelectorAll('button, a').forEach((button) => {
//         button.addEventListener('click', (event) => {
//             const targetStep = event.target.getAttribute('onclick')?.match(/\d+/)?.[0];
//             if (targetStep) {
//                 event.preventDefault();
//                 const currentStepNumber = Array.from(document.querySelectorAll('.step')).findIndex(
//                     (step) => step.style.display === 'block'
//                 ) + 1;

//                 if (Number(targetStep) > currentStepNumber) {
//                     if (validateStep(currentStepNumber)) {
//                         saveStepData(currentStepNumber); // Save data for the current step
//                         showStep(Number(targetStep));
//                     }
//                 } else {
//                     saveStepData(currentStepNumber); // Save data before moving back
//                     showStep(Number(targetStep));
//                 }
//             }
//         });
//     });

//     (function ($) {
//         "use strict";
    
//         // Submit form data via AJAX
//         window.submitForm = function (formData) {

//             console.log('Collected Form Data inside the Submit function :', formData); // Log the form data
//             console.log("FormData being sent:", JSON.stringify(formData));
            
//             $("#processing-image").show(); // Show loading indicator
//             $("#final-step-buttons").hide(); // Hide buttons during submission
    
//             $.ajax({
//                 type: "POST",
//                 url: "gowns.php",// Update this with your server-side script
//                 data: JSON.stringify(formData), // Convert formData to JSON
//                 processData: false, // Not using FormData here, so process the data
//                 contentType: "application/json", // Correct content type for JSON
//                 success: function (response) {
//                     console.log("Server Response:", response);
//                     if ($.trim(response) === "success") {
//                         alert("Form submitted successfully!");
//                          formSuccess();
//                         console.log('Your form has been successfully submitted :'); // Log the form data
//                     } else {
//                         alert("Error: " + responSse);
//                         formError(response);
//                     }
//                 },
//                 error: function (xhr, status, error) {
//                     formError(`An error occurred: ${xhr.status} - ${error}`);
//                 },
//                 complete: function () {
//                     $("#processing-image").hide(); // Hide loading indicator
//                     $("#final-step-buttons").show(); // Show buttons again
//                 },
//             });
//         };
    
//         // Display success message
//         function formSuccess() {
//             submitMSG(true, "Your information has been submitted successfully!");
//         }
    
//         // Display error message
//         function formError(message) {
//             $(".help-block.with-errors").removeClass("hidden").text(message);
//         }
    
//         // Utility function to display messages
//         function submitMSG(valid, msg) {
//             const msgClasses = valid ? "h3 text-center text-success" : "h3 text-center text-danger";
//             $("#mgsContactSubmit").removeClass().addClass(msgClasses).text(msg);
//         }

//         $(document).ready(function () {
//             // $("#publish-btn").click(function (e) {
//             //     e.preventDefault();
//             $("#publish-btn").click(function (e) {
//                 e.preventDefault();
                
            
//                 var formData = {
//                     schoolType: $("#schoolType").val(),
//                     governanceCategory: $("#governanceCategory").val(),
//                     schoolName: $("#schoolname").val(),
//                     province: $("#province").val(),
//                     address: $("#address").val(),
//                     website: $("#website").val(),
//                     shoulderwidth: $("#shoulderwidth").val(),
//                     chestwidth: $("#chestwidth").val(),
//                     cuffmeasurement: $("#cuffmeasurement").val(),
//                     sleevelength: $("#sleevelength").val(),
//                     bodylength: $("#bodylength").val(),
//                     gownfor: $("#gownFor").val(),
//                 };
    
//                 console.log("Collected Form Data Before Submission:", formData);
//                 console.log("Attempting to submit:", formData);
//                 submitForm(formData);
//             });
//         });
//     })(jQuery);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     let gownData = []; // Array to hold multiple gown entries
//     const formData = {}; // Global object to store form data

//     // Function to show the specified step and hide others
//     function showStep(stepNumber) {
//         document.querySelectorAll('.step').forEach((step) => {
//             step.style.display = 'none'; // Hide each step
//         });
//         const currentStep = document.getElementById(`step${stepNumber}`);
//         if (currentStep) {
//             currentStep.style.display = 'block';
//         }
//     }

//     // Function to save data from a specific step
//     function saveStepData(stepNumber) {
//         const step = document.getElementById(`step${stepNumber}`);
//         if (step) {
//             const inputs = step.querySelectorAll('input, select, textarea');
//             inputs.forEach((input) => {
//                 if (input.name) {
//                     formData[input.name] = input.type === 'checkbox' || input.type === 'radio' ? input.checked : input.value;
//                 }
//             });
//         }
//     }

//     // Function to save gown details in step 3
//     function saveGownDetails() {
//         const step = document.getElementById('step3');
//         if (step) {
//             const inputs = step.querySelectorAll('input, select');
//             const gownEntry = {}; // Temporary object to hold gown data

//             inputs.forEach((input) => {
//                 if (input.name) {
//                     gownEntry[input.name] = input.type === 'checkbox' || input.type === 'radio' ? input.checked : input.value;
//                 }
//             });

//             // Add the gown entry to the array
//             gownData.push(gownEntry);

//             // Log data for verification
//             console.log('Gown Saved:', gownEntry);
//             console.log('All Gowns:', gownData);
//             console.log('Gown Data Array:', gownData);

//             // Clear form for the next entry
//             clearGownForm(step);
//         }
//     }

//     // Function to clear the gown form in step 3
//     function clearGownForm(step) {
//         const inputs = step.querySelectorAll('input, select');
//         inputs.forEach((input) => {
//             if (input.type === 'checkbox' || input.type === 'radio') {
//                 input.checked = false;
//             } else {
//                 input.value = '';
//             }
//         });
//     }

//     // Function to reset the form data and UI
//     function resetForm() {
//         formData = {}; // Clear the global object
//         gownData = []; // Clear gown data
//         document.querySelectorAll('input, select, textarea').forEach((input) => {
//             input.value = '';
//             if (input.type === 'checkbox' || input.type === 'radio') {
//                 input.checked = false;
//             }
//         });
//         showStep(1); // Reset to the first step
//     }

//     // Attach event listener to the "Save current Gown" button
//     const saveButton = document.querySelector('.save-btn');
//     if (saveButton) {
//         saveButton.addEventListener('click', (event) => {
//             event.preventDefault(); // Prevent default button behavior
//             saveGownDetails(); // Save gown details
//         });
//     }
    
//     // const saveOgButton = document.querySelector('.save-og-btn');
//     // if (saveOgButton) {
//     //     saveOgButton.addEventListener('click', (event) => {
//     //         event.preventDefault(); // Prevent the default form submission
//     //         saveGownDetails(); // Save gown details for modal form
//     //     });
//     // }
    

//     // Attach event listener for "Add another gown" button
//     const addAnotherButton = document.querySelector('[data-bs-target="#addGown"]');
//     if (addAnotherButton) {
//         addAnotherButton.addEventListener('click', (event) => {
//             event.preventDefault(); // Prevent default behavior
//             console.log('Ready to add another gown!');
//         });
//     }

//     // Set the initial step         
//     showStep(1);

//     // Next and Previous buttons functionality
//     document.querySelectorAll('button, a').forEach((button) => {
//         button.addEventListener('click', (event) => {
//             const targetStep = event.target.getAttribute('onclick')?.match(/\d+/)?.[0];
//             if (targetStep) {
//                 event.preventDefault();
//                 const currentStepNumber = Array.from(document.querySelectorAll('.step')).findIndex(
//                     (step) => step.style.display === 'block'
//                 ) + 1;

//                 if (Number(targetStep) > currentStepNumber) {
//                     saveStepData(currentStepNumber); // Save data for the current step
//                     showStep(Number(targetStep));
//                 } else {
//                     saveStepData(currentStepNumber); // Save data before moving back
//                     showStep(Number(targetStep));
//                 }
//             }
//         });
//     });

//     // Reset button functionality
//     document.getElementById('reset-btn').addEventListener('click', (event) => {
//         event.preventDefault();
//         resetForm(); // Call the reset form function
//     });

//     (function ($) {
//         "use strict";

//         // Submit form data via AJAX
//         window.submitForm = function (formData , gownData) {
//             console.log('Collected Form Data inside the Submit function :', formData , gownData); // Log the form data

//             $("#processing-image").show(); // Show loading indicator
//             $("#final-step-buttons").hide(); // Hide buttons during submission

//             $.ajax({
//                 type: "POST",
//                 url: "gowns.php", // Update this with your server-side script
//                 data: JSON.stringify({ ...formData, gownData }), // Include gown data in the submission
//                 processData: false, // Not using FormData here, so process the data
//                 contentType: "application/json", // Correct content type for JSON
//                 success: function (response) {
//                     console.log("Server Response:", response);
//                     if ($.trim(response) === "success") {
//                         alert("Form submitted successfully!");
//                         resetForm(); // Reset the form upon successful submission
//                     } else {
//                         alert("Error: " + response);
//                     }
//                 },
//                 error: function (xhr, status, error) {
//                     alert(`An error occurred: ${xhr.status} - ${error}`);
//                 },
//                 complete: function () {
//                     $("#processing-image").hide(); // Hide loading indicator
//                     $("#final-step-buttons").show(); // Show buttons again
//                 },
//             });
//         };
//     })(jQuery);
// });



document.addEventListener('DOMContentLoaded', () => {
    const formData = {}; // Global object to store form data

    function displayFormData(formData) {
        const formDataOutput = document.getElementById('formDataOutput');
        formDataOutput.innerHTML = ''; // Clear previous content
    
        // Loop through the form data and create cards for each key-value pair
        Object.entries(formData).forEach(([key, value]) => {
            // Create a column for the card
            const col = document.createElement('div');
            col.className = 'col-md-6 mb-3'; // Two columns with margin bottom
    
            // Create a card for the key-value pair
            const card = document.createElement('div');
            card.className = 'card h-100';
    
            // Create the card body
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
    
            // Add the key as the card title
            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title text-capitalize';
            cardTitle.textContent = key.replace(/([A-Z])/g, ' $1').trim(); // Convert camelCase to readable text
    
            // Add the value as the card text
            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.textContent = value;
    
            // Append the title and text to the card body
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
    
            // Append the card body to the card
            card.appendChild(cardBody);
    
            // Append the card to the column
            col.appendChild(card);
    
            // Append the column to the form data output container
            formDataOutput.appendChild(col);
        });
    }

    // Function to show the specified step and hide others
    function showStep(stepNumber) {
        document.querySelectorAll('.step').forEach((step) => {
            step.style.display = 'none'; // Hide each step
        });
        const currentStep = document.getElementById(`step${stepNumber}`);
        if (currentStep) {
            currentStep.style.display = 'block';
            setupRealTimeValidation(stepNumber); // Enable real-time validation for this step
        }
    }

    // Function to save data from a specific step
    function saveStepData(stepNumber) {
        const step = document.getElementById(`step${stepNumber}`);
        if (step) {
            const inputs = step.querySelectorAll('input, select, textarea');
            inputs.forEach((input) => {
                if (input.name) {
                    formData[input.name] = input.type === 'checkbox' || input.type === 'radio' ? input.checked : input.value;
                }
            });
        }
    }

    // Function to display a notification for validation issues
    function displayNotification(message) {
        let notification = document.getElementById('validation-notification');
    
        // If the notification doesn't exist, create it
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'validation-notification';
            notification.className = 'alert alert-danger'; // Bootstrap alert classes
            notification.setAttribute('role', 'alert'); // ARIA role for accessibility
            notification.style.margin = '10px 0'; // Optional: Add some margin
            document.body.insertBefore(notification, document.body.firstChild); // Insert at the top of the body
        }
    
        // Update the alert message
        notification.textContent = message;
    
        // Optionally, auto-remove the alert after a few seconds
        setTimeout(() => {
            notification.remove(); // Remove the alert after 4 seconds
        }, 4000); // Adjust the timeout duration as needed
    }

    // Validation function
    function validateStep(stepNumber) {
        let isValid = true;
        const step = document.getElementById(`step${stepNumber}`);
        const requiredFields = step.querySelectorAll('[required]');
    
        // Clear all previous validation states
        requiredFields.forEach((field) => {
            field.classList.remove('is-invalid', 'is-valid');
            const feedback = field.nextElementSibling;
            if (feedback && feedback.classList.contains('invalid-feedback')) {
                feedback.remove(); // Remove existing error messages
            }
        });
    
        // Validate each required field
        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('is-invalid'); // Add Bootstrap's invalid class
    
                // Check if an error message already exists
                let feedback = field.nextElementSibling;
                if (!feedback || !feedback.classList.contains('invalid-feedback')) {
                    // Create a new error message element
                    const errorMessage = document.createElement('div');
                    errorMessage.className = 'invalid-feedback';
                    errorMessage.textContent = 'This field is required.';
                    field.parentNode.appendChild(errorMessage); // Append to the parent of the input field
                }
            } else {
                field.classList.add('is-valid'); // Add Bootstrap's valid class
            }
        });
    
        // Display a notification if validation fails
        if (!isValid) {
            displayNotification('Please fill all required fields correctly.');
        } else {
            const notification = document.getElementById('validation-notification');
            if (notification) {
                notification.textContent = '';
            }
        }
    
        return isValid;
    }

    // Function to set up real-time validation
    function setupRealTimeValidation(stepNumber) {
        const step = document.getElementById(`step${stepNumber}`);
        if (!step) return;

        const inputFields = step.querySelectorAll('input, select, textarea');

        inputFields.forEach((field) => {
            field.addEventListener('input', () => {
                if (field.value.trim()) {
                    field.classList.remove('is-invalid');
                    field.classList.add('is-valid');
                    const feedback = field.nextElementSibling;
                    if (feedback && feedback.classList.contains('invalid-feedback')) {
                        feedback.remove(); // Remove error message
                    }
                }
            });

            // For select fields, use the 'change' event
            if (field.tagName === 'SELECT') {
                field.addEventListener('change', () => {
                    if (field.value.trim()) {
                        field.classList.remove('is-invalid');
                        field.classList.add('is-valid');
                        const feedback = field.nextElementSibling;
                        if (feedback && feedback.classList.contains('invalid-feedback')) {
                            feedback.remove(); // Remove error message
                        }
                    }
                });
            }
        });
    }

    // Set the initial step
    showStep(1);

    // Next and Previous buttons functionality
    document.querySelectorAll('button, a').forEach((button) => {
        button.addEventListener('click', (event) => {
            const targetStep = event.target.getAttribute('onclick')?.match(/\d+/)?.[0];
            if (targetStep) {
                event.preventDefault();
                const currentStepNumber = Array.from(document.querySelectorAll('.step')).findIndex(
                    (step) => step.style.display === 'block'
                ) + 1;

                if (Number(targetStep) > currentStepNumber) {
                    if (validateStep(currentStepNumber)) {
                        saveStepData(currentStepNumber); // Save data for the current step
                        displayFormData(formData); // Display the collected data
                        showStep(Number(targetStep));
                    }
                } else {
                    saveStepData(currentStepNumber); // Save data before moving back
                    showStep(Number(targetStep));
                }
            }
        });
    });

    // AJAX submission and other logic remains the same...
    (function ($) {
        "use strict";
    
        // Submit form data via AJAX
        window.submitForm = function (formData) {
            console.log('Collected Form Data inside the Submit function :', formData); // Log the form data
            console.log("FormData being sent:", JSON.stringify(formData));
    
            $("#processing-image").show(); // Show spinner
            $("#final-step-buttons").hide(); // Hide buttons during submission
    
            $.ajax({
                type: "POST",
                url: "gowns.php", // Update this with your server-side script
                data: JSON.stringify(formData), // Convert formData to JSON
                processData: false, // Not using FormData here, so process the data
                contentType: "application/json", // Correct content type for JSON
                success: function (response) {
                    console.log("Server Response:", response);
                    if ($.trim(response) === "success") {
                        showAlert("Form submitted successfully!", "success"); // Show success alert
                        formSuccess();
                    } else {
                        showAlert("Error: " + response, "danger"); // Show error alert
                        formError(response);
                    }
                },
                error: function (xhr, status, error) {
                    showAlert(`An error occurred: ${xhr.status} - ${error}`, "danger"); // Show error alert
                    formError(`An error occurred: ${xhr.status} - ${error}`);
                },
                complete: function () {
                    $("#processing-image").hide(); // Hide spinner
                },
            });
        };
    
        // Function to display Bootstrap alerts
        function showAlert(message, type) {
            const alertContainer = document.getElementById('alert-container');
            alertContainer.innerHTML = ''; // Clear previous alerts
    
            const alertDiv = document.createElement('div');
            alertDiv.className = `alert alert-${type} alert-dismissible fade show`; // Bootstrap alert classes
            alertDiv.setAttribute('role', 'alert');
    
            // Add the message
            const messageText = document.createElement('span');
            messageText.textContent = message;
            alertDiv.appendChild(messageText);
    
            // Add a close button
            const closeButton = document.createElement('button');
            closeButton.type = 'button';
            closeButton.className = 'btn-close';
            closeButton.setAttribute('data-bs-dismiss', 'alert');
            closeButton.setAttribute('aria-label', 'Close');
            alertDiv.appendChild(closeButton);
    
            // Append the alert to the container
            alertContainer.appendChild(alertDiv);
        }
    
        // Function to reset the form
        function resetForm() {
            document.getElementById('gownsForm').reset(); // Reset the form
        }
    
        // Display success message
        function formSuccess() {
            submitMSG(true, "Your information has been submitted successfully!");
            resetForm(); // Reset the form on success
            // Do not show the buttons again
        }
    
        // Display error message
        function formError(message) {
            submitMSG(false, message);
            $("#final-step-buttons").show(); // Show buttons again on error
            // Do not reset the form on error
        }
    
        // Utility function to display messages
        function submitMSG(valid, msg) {
            const msgClasses = valid ? "h3 text-center text-success" : "h3 text-center text-danger";
            $("#mgsContactSubmit").removeClass().addClass(msgClasses).text(msg);
        }
    
        $(document).ready(function () {
            $("#publish-btn").click(function (e) {
                e.preventDefault();
    
                var formData = {
                    schoolType: $("#schoolType").val(),
                    governanceCategory: $("#governanceCategory").val(),
                    schoolName: $("#schoolname").val(),
                    province: $("#province").val(),
                    address: $("#address").val(),
                    website: $("#website").val(),
                    shoulderwidth: $("#shoulderwidth").val(),
                    chestwidth: $("#chestwidth").val(),
                    cuffmeasurement: $("#cuffmeasurement").val(),
                    sleevelength: $("#sleevelength").val(),
                    bodylength: $("#bodylength").val(),
                    gownfor: $("#gownFor").val(),
                };
    
                console.log("Attempting to submit:", formData);
                submitForm(formData);
            });
        });
    })(jQuery);
});