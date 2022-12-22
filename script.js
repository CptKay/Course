
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
                            setMessage4(value); 
                            return true;
                        }
                    }
        
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
        
                    function validateAnswers() {
            
                        if (!checkRadio()) return false;
                        if (!validateCheckboxes()) return false;
                        alert ('Good!');
                        return true;
                    }
        
                  
        
                    function checkRadio() {
                        
                        let radioElementYes = document.getElementById('yes');
                        let radioElementNo = document.getElementById('no');
        
        
                    if (!(radioElementYes.checked || radioElementNo.checked)) {
                        setMessage1 ('Bitte wähle!');
                        return false;
                    }
                    else {
                        let radioButtons = document.getElementsByName("radio-mood");
                        let value;
                        for (let b = 0; b < radioButtons.length; ++b) {
                            let button = radioButtons[b];
                            if (button.checked) {
                                value = button.value;
                                break;
                            }
                        }
                      
                        setMessage1('Du hast "' + value + '" ausgewählt' );
                        return true;
                    }
                } 
        
                function validateCheckboxes() {
                        let checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
                        
                        console.log('checkedCheckboxes =', checkedCheckboxes);
        
                        let redSelected = false;
                        let whiteSelected = false;
                        let wrongColorSelected = false;
        
                    
        
                    for (let c = 0; c < checkedCheckboxes.length; ++c) {
                        let checkbox = checkedCheckboxes[c];
        
                        if (checkbox.value === 'rot') redSelected = true;
                        else if (checkbox.value === 'weiss') whiteSelected = true;
                        else wrongColorSelected = true;
                    }
        
        console.log('redSelected=', redSelected);
        console.log('whiteSelected=', whiteSelected);
        console.log('wrongColorSelected =', wrongColorSelected);
        
                            if (!(redSelected && whiteSelected && ! wrongColorSelected) ) {
                                // Fehlerfall
                                setMessage2('Try harder!')
                            
                            return false;
                        }
                        else {
                            // Erfolgsfall
                            setMessage2('Gut!')
                            return true;
                        }
                    }
                
                