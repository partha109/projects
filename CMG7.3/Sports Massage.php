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

    <!-- Font Awesome for social media icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

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
    
    <section id="AllContent">
        <div id="ContentTextandPicture">
            <a class="buttonspace" href="index.php#treatments"> 
                <button class="backtohomeforotherpages"> 
                    <span class="arrow"></span>
                </button>
            </a>
            <img src="image/fullsport.png" alt="Sports Massage" class="card-img-top img-fluid specficonpageimage rounded-img">
            <br>
            <div id="underpicture_content">
                <h2>Sports Massage</h2>
                <p>Sports massage is a specialized form of therapy designed to address the unique needs of athletes and active individuals. It focuses on optimizing performance, preventing injuries, and aiding in recovery. Whether you're a professional athlete, a weekend warrior, or someone who leads an active lifestyle, sports massage can help maintain peak physical condition and improve overall movement quality.</p>
                <div> 
                    <p class="priceonpage">
                        30 minutes - $70.00
                        <br>
                        45 minutes - $90.00
                        <br>
                        60 minutes - $110.00
                        <br>
                        90 minutes - $150.00
                    </p>
                </div>
            </div>
        </div>
        <div class="content_massage">
            <h1 class="onpagetext">Effective in Addressing</h1>
            <ul class="list_Text">
                <li>Muscle tightness and stiffness: Relieves tension in overworked or stressed muscles. </li>
                <li>Injuries: Assists in the healing of strains, sprains, or overuse injuries.  </li>
                <li>Scar tissue and adhesions: Breaks down restrictions caused by injury or repetitive strain.  </li>
                <li>Pain and soreness: Reduces delayed onset muscle soreness (DOMS) after intense activity.  </li>
                <li>Joint range of motion: Improves flexibility and mobility. </li>
                <li>Circulatory issues: Enhances blood flow to promote faster recovery and oxygenation of tissues. </li>
            </ul>
            <!--
			<h1 class="onpagetext">Techniques Used</h1>
            <ul class="list_Text">
                <li>Effleurage: Long, gliding strokes to warm up the muscles and increase circulation.  </li>
                <li>Petrissage: Kneading and rolling techniques to release tension and improve muscle elasticity.</li>
                <li>Deep Tissue Massage: Targets deeper layers of muscle and connective tissue to release chronic tension. </li>
                <li>Trigger Point Therapy: Focuses on areas of hyperirritability to alleviate referred pain and discomfort.  </li>
                <li>Myofascial Release: Relieves restrictions in connective tissues to enhance flexibility and reduce pain.</li>
                <li>Stretching (PNF or static): Improves flexibility, lengthens muscle fibers, and helps restore range of motion</li>
                <li>Cross-Fiber Friction: Reduces scar tissue and improves the alignment of collagen fibers after injury. </li>
            </ul>
            <br>
			-->
            <p>Whether you're preparing for a competition, recovering from an event, or simply maintaining your body’s optimal function, sports massage offers a targeted approach to help you achieve your goals.</p>
            <span class='spacer'></span>
            <a href="https://www.lorimcintosh-belanger.clinicsense.com/book" target="_blank" class="btn btn-secondary">Book Your Massage Now</a>
            
        </div>
        
    </section>

    <!-- Font Awesome for Social Media Icons -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
