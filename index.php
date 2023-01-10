<!doctype html>
<html lang="en">

<head>
  <title>Gato Zen Cat Yoga</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <!-- styles -->
    <link rel="stylesheet" type="text/css" href="styles.css">

</head>

<body>

<!-- HEADER -->
<?php 
    include "./includes/tools.php";
    include "./includes/header.php"; 
?>
<!-- END:HEADER -->

<section class="h-100" id="about">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card my-4">
              <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                  <img src="images/frau-macht-cat-yoga-mit-katze-1024x683-1.jpeg"
                    alt="Sample photo" class="img-fluid"
                    style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">The mewest exercise</h3>
                    Come enjoy a soothing Hatha
flow yoga session with your
cat.
Your instructor leads you in a
practice suitable for all ex-
perience levels.

A full espresso bar is available
after the practice, as well as
tea, other drinks, and snacks.

Space is limited and re-
servations are required, so
book today to ensure you have
a spot!
    
                    <div class="row">
                      
                      <div class="col-md-6 mb-4">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </section>
    
    <section class="h-100" id="booking">

    <script src="script.js"></script>
     
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card card-registration my-4">
                <div class="row g-0">
                  
                  <div class="col-xl-6 d-none d-xl-block">
                    
                    <img src="images/Logo_GatoZen.png"
                      alt="Sample photo" class="img-fluid"
                      style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                      
                  </div>
                  <div class="col-xl-6">
                    
                    <div class="card-body p-md-5 text-black">
                      <h3 class="mb-5 text-uppercase">Apply for a course</h3>
                          <!-- FORMULAR -->
                          <!-- <form action="#confirmation" onsubmit="return validateForm();"> -->
                          <form action="#confirmation" method="post" onsubmit="return validateForm();">
                      <div class="row">
                          <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input type="text" name="formFormAdress" id="formFormAdress" class="form-control form-control-lg" placeholder="Form of adress" />
                            <label class="form-label" for="formFormAdress">form of adress</label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input type="text" name="formName" id="formName" class="form-control form-control-lg" placeholder="Name" />
                            <label class="form-label" for="formName">Name</label>
                          </div>
                        </div>
                      </div>
      
                      <div class="row">
                      <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input type="text" name="formLastName" id="formLastName" class="form-control form-control-lg" placeholder="Last Name" />
                            <label class="form-label" for="formLastName">Last name</label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input type="date" name="formCourse" id="formCourse" onfocus="this.min=new Date().toISOString().split('T')[0]" class="form-control form-control-lg" placeholder="new Date()" />
                            <label class="form-label" for="formCourse">Course date</label>
                          </div>
                        </div>
                      </div>
      
                      <div class="form-outline mb-4">
                        <input type="text" name="formStreet" id="formStreet" class="form-control form-control-lg" placeholder="Street adress" />
                        <label class="form-label" for="formStreet">Street adress</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="text" name="formPostal" id="formPostal" class="form-control form-control-lg" placeholder="Postal code" />
                        <label class="form-label" for="formPostal">Postal code</label>
                      </div>
      
                      <div class="form-outline mb-4">
                        <input type="text" name="formCity" id="formCity" class="form-control form-control-lg" placeholder="City" />
                        <label class="form-label" for="formCity">City</label>
                      </div>
      
                      <div class="form-outline mb-4">
                        <input type="text" name="formEmail" id="formEmail" class="form-control form-control-lg" placeholder="Email" />
                        <label class="form-label" for="formEmail">Email</label>
                      </div>
      
                      <div class="form-outline mb-4">
                        <input type="number" min="0" step="1" name="formPhone" id="formPhone" class="form-control form-control-lg" placeholder="Phone" />
                        <label class="form-label" for="formPhone">Phone</label>
                      </div>
      
                      <div class="d-flex justify-content-end pt-3">
                        <!-- <button type="button" class="btn btn-light btn-lg">Reset all</button>
                        <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button> -->
                        <input type="submit" value="submit">
                      </form>
                      <div>
                      <p id="message-1"></p>
                      <p id="message-2"></p>
                      <p id="message-3"></p>
                      <p id="message-4"></p>
                    </div>
                      </div>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="h-100" id="confirmation">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card my-4">
                <div class="row g-0">
                  <div class="col-xl-6 d-none d-xl-block">
                    <img src="images/CatYoga.png"
                      alt="Sample photo" class="img-fluid"
                      style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                  </div>
                  <div class="col-xl-6">
                    <div class="card-body p-md-5 text-black">
                      <h3 class="mb-5 text-uppercase">Confirmation</h3>
      
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div id="confirmation-message" class="alert alert-success" role="alert">

      Welcome to the course @ <?php echo $_POST["formCourse"] . ", dear " .  $_POST["formFormAdress"] . " " . $_POST["formName"] . " " . $_POST["formLastName"]; ?>!<br>
      Your email is <?php echo $_POST["formEmail"]; ?>.<br>
      Your location is <?php echo $_POST["formCity"]; ?>.<br>

                          </div>
                          <script>
                            //   writeConfirmation();
                          </script>

                         
      
                      <div class="row">
                        <address>
                          Gato Zen Cat Yoga
Ashravi-House
Sitzweg 52
8005 Zürich

+417945454545
                        </address>
                        
                        <div class="col-md-6 mb-4">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
  
      </section>
</body>