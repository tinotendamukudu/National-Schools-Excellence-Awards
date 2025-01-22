// document.addEventListener('DOMContentLoaded', () => {
//     // Function to show the specified step and hide others
//     function showStep(stepNumber) {
//         // Hide all steps
//         document.querySelectorAll('.step').forEach((step) => {
//             step.style.display = 'none'; // Hide each step
//         });
//         // Show the specific step
//         const currentStep = document.getElementById(`step${stepNumber}`);
//         if (currentStep) {
//             currentStep.style.display = 'block';
//         }
//     }

//     // Set the initial step
//     showStep(1);

//     // Next and Previous buttons functionality
//     document.querySelectorAll('button, a').forEach((button) => {
//         button.addEventListener('click', (event) => {
//             const targetStep = event.target.getAttribute('onclick')?.match(/\d+/)?.[0];
//             if (targetStep) {
//                 event.preventDefault();
//                 showStep(Number(targetStep));
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     // Function to show the specified step and hide others
//     function showStep(stepNumber) {
//         // Hide all steps
//         document.querySelectorAll('.step').forEach((step) => {
//             step.style.display = 'none'; // Hide each step
//         });
//         // Show the specific step
//         const currentStep = document.getElementById(`step${stepNumber}`);
//         if (currentStep) {
//             currentStep.style.display = 'block';
//         }
//     }

//     // Validation function
//     function validateStep(stepNumber) {
//         let isValid = true; // Assume valid until proven otherwise
//         const step = document.getElementById(`step${stepNumber}`);
//         const requiredFields = step.querySelectorAll('[required]'); // Find all required fields in the step

//         requiredFields.forEach((field) => {
//             // Check if the field is valid
//             if (!field.value.trim()) {
//                 isValid = false;
//                 field.classList.add('is-invalid'); // Add a class for invalid styling
//                 field.nextElementSibling?.remove(); // Remove existing error messages
//                 const errorMessage = document.createElement('div');
//                 errorMessage.className = 'invalid-feedback';
//                 errorMessage.textContent = 'This field is required.';
//                 field.parentNode.appendChild(errorMessage);
//             } else {
//                 field.classList.remove('is-invalid');
//                 field.nextElementSibling?.remove(); // Remove existing error messages
//             }
//         });

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
//                     // Validate the current step before moving forward
//                     if (validateStep(currentStepNumber)) {
//                         showStep(Number(targetStep));
//                     } else {
//                         alert('Please fill all required fields correctly.');
//                     }
//                 } else {
//                     // If going back, no validation needed
//                     showStep(Number(targetStep));
//                 }
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {

//     // Function to show the specified step and hide others
//     function showStep(stepNumber) {
//         // Hide all steps
//         document.querySelectorAll('.step').forEach((step) => {
//             step.style.display = 'none'; // Hide each step
//         });
//         // Show the specific step
//         const currentStep = document.getElementById(`step${stepNumber}`);
//         if (currentStep) {
//             currentStep.style.display = 'block';
//         }
//     }

//     // Function to display a notification for validation issues
//     function displayNotification(message) {
//         let notification = document.getElementById('validation-notification');
//         if (!notification) {
//             // Create the notification element if it doesn't exist
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

//     // Validation function
//     function validateStep(stepNumber) {
//         let isValid = true; // Assume valid until proven otherwise
//         const step = document.getElementById(`step${stepNumber}`);
//         const requiredFields = step.querySelectorAll('[required]'); // Find all required fields in the step

//         requiredFields.forEach((field) => {
//             // Check if the field is valid
//             if (!field.value.trim()) {
//                 isValid = false;
//                 field.classList.add('is-invalid'); // Add a class for invalid styling
//                 field.nextElementSibling?.remove(); // Remove existing error messages
//                 const errorMessage = document.createElement('div');
//                 errorMessage.className = 'invalid-feedback';
//                 errorMessage.textContent = 'This field is required.';
//                 field.parentNode.appendChild(errorMessage);
//             } else {
//                 field.classList.remove('is-invalid');
//                 field.nextElementSibling?.remove(); // Remove existing error messages
//             }
//         });

//         if (!isValid) {
//             displayNotification('Please fill all required fields correctly.');
//         } else {
//             // Clear the notification if the step is valid
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
//                     // Validate the current step before moving forward
//                     if (validateStep(currentStepNumber)) {
//                         showStep(Number(targetStep));
//                     }
//                 } else {
//                     // If going back, no validation needed
//                     showStep(Number(targetStep));
//                 }
//             }
//         });
//     });

//     // function handleSubmit(event) {
//     //     event.preventDefault(); // Prevent traditional form submission

//     //     const form = document.getElementById('gownsForm');
//     //     const formData = new FormData(form);
//     //     const formDataObject = {};

//     //     // Capture the form data
//     //     formData.forEach((value, key) => {
//     //         formDataObject[key] = value;
//     //     });

//     //     // Display the form data on the review page
//     //     displayReviewData(formDataObject);
//     // }

//     // // Function to display collected form data in a readable format
//     // function displayReviewData(data) {
//     //     const reviewSection = document.getElementById('reviewData');
//     //     let dataHtml = "<h3>Collected Data:</h3><ul>";

//     //     for (const key in data) {
//     //         if (data.hasOwnProperty(key)) {
//     //             dataHtml += `<li><strong>${key}:</strong> ${data[key]}</li>`;
//     //         }
//     //     }

//     //     dataHtml += "</ul>";
//     //     reviewSection.innerHTML = dataHtml;
//     // }

//     // // Show the review step when the user clicks "Review Data"
//     // function showReviewStep() {
//     //     document.getElementById('step1').style.display = 'none'; // Hide the form step
//     //     document.getElementById('reviewStep').style.display = 'block'; // Show the review step
//     // }

//     // // Allow user to go back to the form to edit data
//     // function goBackToEdit() {
//     //     document.getElementById('step1').style.display = 'block'; // Show the form step again
//     //     document.getElementById('reviewStep').style.display = 'none'; // Hide the review step
//     // }

//     (function ($) {
//         "use strict";

//         // Display current year
//         $("span#mgsYear").html(new Date().getFullYear());

//         // Handle form submission
//         $("#gownsForm").on("submit", function (event) {
//             event.preventDefault();
//             if (validateForm()) {
//                 submitForm();
//             }
//         });

//         // Form validation before submission
//         function validateForm() {
//             let isValid = true;
//             $(".help-block.with-errors").addClass("hidden"); // Reset errors

//             // Check required fields
//             $("#gowns [required]").each(function () {
//                 if (!$(this).val().trim()) {
//                     isValid = false;
//                     $(this).siblings(".help-block.with-errors").removeClass("hidden").text("This field is required.");
//                 }
//             });

//             // Check email validity
//             const emailField = $("#quoteMeForm [type='email']");
//             if (emailField.length && !isEmail(emailField.val())) {
//                 isValid = false;
//                 emailField.siblings(".help-block.with-errors").removeClass("hidden").text("Please enter a valid email.");
//             }

//             return isValid;
//         }

//         // Function to handle form data collection and review

//         // Submit form data via AJAX
//         function submitForm() {
//             const form_data = new FormData($("#gownsForm")[0]);
//             $("#processing-image").show();
//             $("#final-step-buttons").hide();

//             $.ajax({
//                 type: "POST",
//                 url: "gowns.php",
//                 data: form_data,
//                 processData: false,
//                 contentType: false,
//                 success: function (response) {
//                     if ($.trim(response) === "success") {
//                         formSuccess();
//                     } else {
//                         formError(response);
//                     }
//                 },
//                 error: function (xhr, status, error) {
//                     formError(`An error occurred: ${xhr.status} - ${error}`);
//                 },
//                 complete: function () {
//                     $("#processing-image").hide();
//                     $("#final-step-buttons").show();
//                 },
//             });
//         }

//         // Handle file selection feedback
//         $(function () {
//             $(document).on("change", ":file", function () {
//                 const input = $(this),
//                     numFiles = input.get(0).files ? input.get(0).files.length : 1,
//                     label = input.val().replace(/\\/g, "#").replace(/.*\//, "");

//                 input.trigger("fileselect", [numFiles, label]);
//             });

//             $(":file").on("fileselect", function (event, numFiles, label) {
//                 const fileFeedback = numFiles > 1 ? `${numFiles} files selected` : label;
//                 $(this).parents(".form-group").find(".file-feedback").text(fileFeedback);
//             });
//         });

//         // Display success message
//         function formSuccess() {
//             $("#quoteMeForm")[0].reset();
//             submitMSG(true, "Your information has been submitted successfully!");
//         }

//         // Display error message
//         function formError(message) {
//             $(".help-block.with-errors").removeClass("hidden").text(message);
//         }

//         // Display messages
//         function submitMSG(valid, msg) {
//             const msgClasses = valid ? "h3 text-center text-success" : "h3 text-center text-danger";
//             $("#mgsContactSubmit").removeClass().addClass(msgClasses).text(msg);
//         }

//     })(jQuery);


//     function isEmail(email) {
//         var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//         return regex.test(email);
//     }
// });

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
//                     formData[input.name] = input.value; // Save data by field name
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

//     // Validation function
//     function validateStep(stepNumber) {
//         let isValid = true;
//         const step = document.getElementById(`step${stepNumber}`);
//         const requiredFields = step.querySelectorAll('[required]');

//         requiredFields.forEach((field) => {
//             if (!field.value.trim()) {
//                 isValid = false;
//                 field.classList.add('is-invalid');
//                 field.nextElementSibling?.remove();
//                 const errorMessage = document.createElement('div');
//                 errorMessage.className = 'invalid-feedback';
//                 errorMessage.textContent = 'This field is required.';
//                 field.parentNode.appendChild(errorMessage);
//             } else {
//                 field.classList.remove('is-invalid');
//                 field.nextElementSibling?.remove();
//             }
//         });

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
//                     showStep(Number(targetStep));
//                 }
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const formData = {}; // Global object to store form data

    // Function to show the specified step and hide others
    function showStep(stepNumber) {
        document.querySelectorAll('.step').forEach((step) => {
            step.style.display = 'none'; // Hide each step
        });
        const currentStep = document.getElementById(`step${stepNumber}`);
        if (currentStep) {
            currentStep.style.display = 'block';
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
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'validation-notification';
            notification.style.color = 'red';
            notification.style.fontSize = '1em';
            notification.style.margin = '10px 0';
            notification.style.textAlign = 'center';
            document.body.insertBefore(notification, document.body.firstChild);
        }
        notification.textContent = message;
    }

    // Validation function
    function validateStep(stepNumber) {
        let isValid = true;
        const step = document.getElementById(`step${stepNumber}`);
        const requiredFields = step.querySelectorAll('[required]');

        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('is-invalid');
                field.nextElementSibling?.remove();
                const errorMessage = document.createElement('div');
                errorMessage.className = 'invalid-feedback';
                errorMessage.textContent = 'This field is required.';
                field.parentNode.appendChild(errorMessage);
            } else {
                field.classList.remove('is-invalid');
                field.nextElementSibling?.remove();
            }
        });

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
                        showStep(Number(targetStep));
                    }
                } else {
                    saveStepData(currentStepNumber); // Save data before moving back
                    showStep(Number(targetStep));
                }
            }
        });
    });

    // // Submit the form data
    // const publishButton = document.getElementById('publish-btn'); // Replace with the actual ID of the Publish button
    // if (publishButton) {
    //     publishButton.addEventListener('click', (event) => {
    //         event.preventDefault(); // Prevent default form submission if needed

    //         const totalSteps = document.querySelectorAll('.step').length;
    //         saveStepData(totalSteps); // Save data from the last step


    //         // Add additional actions, such as submitting data to a server, here
    //     });
    // }

    (function ($) {
        "use strict";
    
        // Submit form data via AJAX
        window.submitForm = function (formData) {

            console.log('Collected Form Data inside the Submit function :', formData); // Log the form data
            
            $("#processing-image").show(); // Show loading indicator
            $("#final-step-buttons").hide(); // Hide buttons during submission
    
            $.ajax({
                type: "POST",
                url: "gowns.php", // Update this with your server-side script
                data: JSON.stringify(formData), // Convert formData to JSON
                processData: false, // Not using FormData here, so process the data
                contentType: "application/json", // Correct content type for JSON
                success: function (response) {
                    if ($.trim(response) === "success") {
                        formSuccess();
                        console.log('Your form has been successfully submitted :'); // Log the form data
                    } else {
                        formError(response);
                    }
                },
                error: function (xhr, status, error) {
                    formError(`An error occurred: ${xhr.status} - ${error}`);
                },
                complete: function () {
                    $("#processing-image").hide(); // Hide loading indicator
                    $("#final-step-buttons").show(); // Show buttons again
                },
            });
        };
    
        // Display success message
        function formSuccess() {
            submitMSG(true, "Your information has been submitted successfully!");
        }
    
        // Display error message
        function formError(message) {
            $(".help-block.with-errors").removeClass("hidden").text(message);
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
                    gownDesignation: $("#gown-designation").val(),
                };
    
                console.log("Collected Form Data Before Submission:", formData);
                submitForm(formData);
            });
        });
    })(jQuery);
});




