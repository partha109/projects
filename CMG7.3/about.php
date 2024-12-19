<?php
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMG Massage Therapy</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
	<!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-CPW742VFLZ"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-CPW742VFLZ'); </script>
	<script>
    function getDeviceType() {
      // Check for iOS or Android
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // If it's an iOS device (iPhone, iPad, iPod)
      if (/iPhone|iPad|iPod/.test(userAgent)) {
        return 'ios';
      }
      // If it's an Android device
      if (/android/i.test(userAgent)) {
        return 'android';
      }
      // Default if it's neither (e.g., desktop)
      return 'desktop';
    }

    function updateLink() {
      const deviceType = getDeviceType();

      let link = '';
      if (deviceType === 'ios') {
        // Apple Maps link for iOS
        link = `http://maps.apple.com/?daddr=290+Snowdon+Dr%2C+290+Snowdon+Dr+Merrickville+ON+K0G+1N0+Canada`;
      } else if (deviceType === 'android') {
        // Google Maps link for Android
        link = `https://www.google.com/maps/dir/?api=1&destination=290+Snowdon+Dr%2C+290+Snowdon+Dr+Merrickville+ON+K0G+1N0+Canada`;
      } else {
        // Default to a general Google Maps link for desktop
        link = `https://www.google.com/maps/dir/?api=1&destination=290+Snowdon+Dr%2C+290+Snowdon+Dr+Merrickville+ON+K0G+1N0+Canada`;
      }

      // Update the button's link
      document.getElementById('GPS').href = link;
    }

    // Call updateLink function on page load to update the button
    window.onload = updateLink;
  </script>
</head>


<body>
    <header>
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto justify-content-center">
                        <li class="nav-item"><a class="nav-link" href="index.php#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.php#treatments">Treatments</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.php#direction">Contact Us</a></li>
                    </ul>
                    <div>
                        <a href="https://www.google.com/maps?q=44.85559,-75.76025" target="_blank" class="btn btn-gps" id="GPS">
                            Open GPS
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    
    <section id="about" class="content-section">
        <div class="aboutmecontainer">
            <div class="about-us-section-onpage">
                <a href="index.php#about" class='homeButton'> 
                    <button class="backtohome"> 
                        <span class="arrow"></span>
                    </button>
                </a>
                <div class="infoaboutme">
                    <p>I am a proud honors graduate and a newly Registered Massage Therapist with a passion for helping people improve their activities of daily living. My focus is on enhancing mobility, relieving discomfort, and empowering individuals to live life to the fullest. Throughout my career, I have been dedicated to sharing knowledge, fostering understanding, and equipping others with the tools they need to support their well-being.</p>

                    <p>I am committed to providing personalized care, tailoring each treatment to meet my clients' unique needs and health goals. Massage therapy, in my view, is a powerful way to promote overall wellness, ease pain, and improve quality of life.</p>

                    <p>Outside of treating clients, I find joy in traveling and creating lasting memories with my family. Staying active is a vital part of my lifestyle—I love the peace of a brisk walk, the mindfulness of yoga, and the energy of cycling. Living in the picturesque community of Merrickville is something I truly cherish. Its welcoming charm, vibrant local culture, and beautiful surroundings inspire me daily and make it the perfect place to call home.</p>
                </div>
                <div class="image-container-onpage">
                    <img src="image/aboutme.png" alt="About Us" class="img-fluid rounded-img">
                </div>
            </div>
        </div>
    </section>

</body>

</html>