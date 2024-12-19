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
    <link rel="stylesheet" href="styleAlt.css">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-CPW742VFLZ"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-CPW742VFLZ');
    </script>
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
        <nav id="navbar" class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto justify-content-center">
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#treatments">Treatments</a></li>
                        <li class="nav-item"><a class="nav-link" href="#direction">Contact Us</a></li>
                    </ul>
                    <div>
                        <a href="https://www.google.com/maps?q=44.85559,-75.76025" target="_blank" id="GPS" class="btn btn-gps">
                            Open GPS
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
	<div>
		<section id="head1" class="Parallax">
			<div class="hero-content">
				<img src="image/LogoNegativ.png" height="100px">
				<br>
				<h1 id="text1">"Embrace life fully—move freely and without limitations."</h1>
				<br>
				<div>
					<a href="https://lorimcintosh-belanger.clinicsense.com/book" target="_blank" class="btn btn-primary">Book Your Massage Now</a>
				</div>
			</div>
		</section>

		<section id="about" class="content-section aboutmecontainer">
			<div class="container">
				<div class="about-us-section">
					<div class="image-container">
						<img src="image/5 1.png" alt="About Us" class="img-fluid rounded-img">
						<h3 class="bubble">Lori McIntosh- Belanger, RMT</h3>
					</div>
					<div class="info bubble">
						<h2>About Me</h2>
						<p>I am committed to collaborating with patients to move without pain, enhance their overall well-being and actively participate in their own recovery.</p>
						<a href="about.php">
							<button class="learn">Learn more</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>

    <section id="parallax2" class="parallax">
        <div class="parallax-content2">
            <div class="aligning-content">
                <img src="image/White tree 2.png" height="100px">
                <h1>Massage therapy provides a natural, hands-on approach to wellness.
                    It serves both preventive and restorative purposes, focusing on addressing the root causes
                    of pain or discomfort rather than merely treating individual symptoms.</h1>
            </div>
        </div>
    </section>

    <section id="treatments" class="content-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <a href="Swedish Massage.php" class="cardLink">
                        <div class="card service-card">
                            <img src="image/Swedish Massage.png" alt="Swedish Massage" class="card-img-top rounded-img img-fluid">
                            <div class="card-body">
                                <h5 class="card-title text-left">Swedish Massage </h5>

                                <button class="learn">Learn more</button>

                            </div>
                        </div>
                    </a>
                </div>


                <div class="col-md-6 col-lg-4">
                    <a href="Deep Tissue Massage.php" class="cardLink">
                        <div class="card service-card">
                            <img src="image/Deep Tissue Massage.png" alt="Deep Tissue Massage" class="card-img-top rounded-img img-fluid">
                            <div class="card-body">
                                <h5 class="card-title text-left">Deep Tissue Massage </h5>

                                <button class="learn">Learn more</button>

                            </div>
                        </div>
                    </a>
                </div>


                <div class="col-md-6 col-lg-4">
                    <a href="Sports Massage.php" class="cardLink">
                        <div class="card service-card">
                            <img src="image/Sports.png" alt="Sports" class="card-img-top rounded-img img-fluid">
                            <div class="card-body">
                                <h5 class="card-title text-left">Sports Massage</h5>

                                <button class="learn">Learn more</button>

                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- Bootstrap JS for modal -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

    <section id="direction">
        <div class="AllLocationContent">
            <div class="Locationhours">
                <h1>Location</h1>
                <p>
                    290 Snowdon Drive East <br>
                    Merrickville, ON. K0G 1N0 <br>
                    Canada
                </p>
                <br>
				<h1>Contact Us</h1>
				<p>
					<a href="tel:+16138002018" class='btn btn-primary'>Phone: (613) 800-2018</a>
				</p>
            </div>
            <div class="MapAll">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d707.082936850555!2d-75.76057984045127!3d44.85554074154542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccd982126bb630b%3A0xf37fab8ce183918!2s290%20Snowdon%20Dr%2C%20Merrickville-Wolford%2C%20ON%20K0G%201N0!5e0!3m2!1sen!2sca!4v1733372352047!5m2!1sen!2sca"
                    class="mapObject"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>


    <footer class="footer pt-5 pb-4">
        <div class="container">
            <div class="row">

                <div class="col-md-3 d-flex flex-column">
                    <br>
                    <a href="https://lorimcintosh-belanger.clinicsense.com/book" target="_blank" class="btn btn-secondary footbuttoncolor">Book Your Massage Now</a>
                </div>

                <div class="col-md-3 d-flex flex-column justify-content-center align-items-center">
                    <a class="nav-link" href="#treatments"><h5 class="text-center">Our Services</h5></a>
                    <ul class="list-unstyled text-center">
                        <li><a href="Swedish Massage.php" class="footcolor">Swedish Massage</a></li>
                        <li><a href="Deep Tissue Massage.php" class="footcolor">Deep Tissue Massage</a></li>
                        <li><a href="Sports Massage.php" class="footcolor">Sport Massage</a></li>
                    </ul>
                </div>

                <div class="col-md-3 d-flex flex-column justify-content-center align-items-center">
                    <div class="mt-4">
                        <img src="image/LogoPositiv.png" height="100px">
                    </div>
                </div>
            </div>
        </div>
    </footer>

</body>

</html>