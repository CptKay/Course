
            /* 
               Validation Part
            */

                
                function validateForm() {
                    if (!validateFirstName()) return false;
                    if (!validateCourse()) return false;
                    if (!validateEmail()) return false;
                    if (!validatePhone()) return false;
                    return true;
                            }

                            function validateFirstName() {
                                let inputElement = document.getElementById("formName");
                                let value = inputElement.value;
                
                                if (!value) { 
                                    // Bsp. '', null, undefined
                                    setMessage1('Please fill in your Name.');
                                    return false;
                                }
                                else {
                                    setLocalStorage("formName", value);
                                    setMessage1(value); 
                                    return true;
                                }
                            }

                    function validateCourse() {
                        let inputElement = document.getElementById("formCourse");
                        let value = inputElement.value;
        
                        if (!value) { 
                            // Bsp. '', null, undefined
                            setMessage2('Please choose a date.');
                            return false;
                        }
                        else {
                            setLocalStorage("formCourse", value);
                            setMessage2(value); 
                            return true;
                        }
                    }

                    function validateEmail() {
                        let inputElement = document.getElementById("formEmail");
                        let value = inputElement.value;
        
                        if (!value) { 
                            // Bsp. '', null, undefined
                            setMessage3('Please fill in your email.');
                            return false;
                        }
                        // Ab hier enthält value einen nicht leeren String.
                        // indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf?retiredLocale=de
                        else if (value.indexOf('@') === -1) { 
                            // value enthält KEIN '@' Symbol.
                            setMessage3('Please correct your email.');
                            return false;
                        }
                        else {
                            setLocalStorage("formEmail", value);
                            setMessage3(value); 
                            return true;
                        }
                    }
        
                    function validatePhone() {
                        let inputElement = document.getElementById("formPhone");
                        let value = inputElement.value;
        
                        if (!value) { 
                            // Bsp. '', null, undefined
                            setMessage4('Please put your Number.');
                            return false;
                        }
                        
                        else {
                            setLocalStorage("formPhone", value);
                            setMessage4(value); 
                            return true;
                        }
                    }

                    // Other fields

                    

                    
                    
                    /* function getAdress() {
                        let inputElement = document.getElementById("formStreet");
                        let value = inputElement.value;
                        setLocalStorage("formStreet", value);
                        return true;
                    }   

                    function getLastName() {
                        let inputElement = document.getElementById("formLastName");
                        let value = inputElement.value;
                        if (!value) { 
                            // Bsp. '', null, undefined
                            return false;
                        }
                        
                        else {
                            console.log()
                        setLocalStorage("formLastName", value);
                        return true;
                        }
                    } */           
        
                    function setMessage1(value) {
        
                        document.getElementById("message-1").innerText = value;
                    }
        
                    function setMessage2(value) {
                        document.getElementById("message-2").innerText = value;
                    }
        
                    function setMessage3(value) {
                        document.getElementById("message-3").innerText = value;
                    }

                    function setMessage4(value) {
                        document.getElementById("message-4").innerText = value;
                    }


                    // Funktion: Schlüssel und Wert in LocalStorage setzen.

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}



// Funktion: Wert zum Schlüssel aus LocalStorage auslesen.

function getLocalStorage(key) {
    return localStorage.getItem(key);
}

// Funktion: Bestätigung generieren

function writeConfirmation() {



    // Die Personalien werden in Variablen ausgelesen.

let firstName = getLocalStorage("formName");
let LastName = getLocalStorage("formLastName");
let street = getLocalStorage("formStreet");
let courseDate = getLocalStorage("formCourse");
let email = getLocalStorage("formEmail");
let phone = getLocalStorage("formPhone");
// alert(`firstName = ${firstName}`);


    /*
        Die Beschriftungen und Platzhalter für die obigen Variablen werden in ein 
        String Template eingetragen. Zur Gliederung und Gestaltung werden zudem 
        <p> und <span> Elemente verwendet.
    */
let confirmation = 
`   <p><span class="confirmation-label">Name:</span> ${firstName} ${LastName}</p>
    <p><span class="confirmation-label">Street:</span> ${street}</p>
    <p><span class="confirmation-label">Date:</span> ${courseDate}</p>
    <p><span class="confirmation-label">Email:</span> ${email}</p>
    <p><span class="confirmation-label">Phone:</span> ${phone}</p>
`
;

    // Die Bestätigung wird als innerHTML gesetzt.
document.getElementById("confirmation-message").innerHTML = confirmation;
}
                
                