<html>
    <head>
        <title>Example Bullet Animation/Sideframe</title>
        <!-- Bootstrap -->
            <!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            
            <!-- Jquery -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

            <!-- Latest compiled and minified JavaScript -->
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	        <!-- Google Fonts -->
	        <link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet">
	        <!-- Stylesheets -->
            <link rel="stylesheet" type="text/css" href="css/styles.css">
            <link rel="stylesheet" type="text/css" href="css/bio.css">
            <link rel="stylesheet" type="text/css" href="css/menu.css">
	        <link rel="stylesheet" type="text/css" href="css/nav.css">
	        <link rel="stylesheet" type="text/css" href="css/animate.css">
    </head>
    <body>
        <nav>
            <div class="menubutton glyphicon glyphicon-menu-hamburger" aria-hidden="true"></div>
            <h1 class="title">World War 1 Memorial</h1>
        </nav>
        <div class="flexbox-cont">
            <div class="menu hidden-xs">
                <ul class="navitems">
                    <a href="#"><li class="nametag">N. Steadman</li></a>
                    <a href="#"><li class="nametag">D. Schmidtke</li></a>
                    <a href="#"><li class="nametag">T. Lengyel</li></a>
                    <a href="#"><li class="nametag">U. Dejarnette</li></a>
                    <a href="#"><li class="nametag">C. Lacross</li></a>
                    <a href="#"><li class="nametag">A. Abram</li></a>
                    <a href="#"><li class="nametag">R. Doepke</li></a>
                    <a href="#"><li class="nametag">M. Lummus</li></a>
                    <a href="#"><li class="nametag">R. Salvador</li></a>
                    <a href="#"><li class="nametag">A. Sharpton</li></a>
                    <a href="#"><li class="nametag">C. Watford</li></a>
                    <a href="#"><li class="nametag">D. Kahan</li></a>
                    <a href="#"><li class="nametag">A. Stjean</li></a>
                    <a href="#"><li class="nametag">G. Parisien</li></a>
                    <a href="#"><li class="nametag">N. Kost</li></a>
                    <a href="#"><li class="nametag">C. Winslow</li></a>
                    <a href="#"><li class="nametag">G. Dubin</li></a>
                    <a href="#"><li class="nametag">E. Andersen</li></a>
                    <a href="#"><li class="nametag">J. Conkling</li></a>
                    <a href="#"><li class="nametag">L. Fredericks</li></a>
                    <a href="#"><li class="nametag">L. Harris</li></a>
                </ul>
            </div>
            <div class="main">
                <div class="bg"></div>
                <div class="content row bio">
                    <div class="col-lg-8 col-lg-offset-2 info">
                        <img class="profile" src="img/faces/noel_steadman-zoom.png">
                        <div class="card">
                            <h1>Noel Steadman</h1>
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <h4 id="dob">
                                        <strong>DOB:</strong>
                                        26/12/1890
                                    </h4>
                                    <h4 id="sid">
                                        <strong>Service ID:</strong>
                                        12/4
                                    </h4>
                                    <h4 id="birthplace">
                                        <strong>Place of Birth:</strong>
                                        Whangarei, New Zealand
                                    </h4>
                                </div>
                                <div class="col-sm-6 text-right">
                                    <h4 id="dod">
                                        <strong>DOD:</strong>
                                        15/05/1915
                                    </h4>
                                    <h4 id="occ">
                                        <strong>Occupation:</strong>
                                        WW1 Electrical engineer
                                    </h4>
                                    <h4 id="deathplace">
                                        <strong>Place of Death:</strong>
                                        Dardanelles, Gallipoli, Turkey.
                                    </h4>
                                </div>
                            </div>
                            <h4 id="deathcause" class="text-center">
                                <strong>Cause of Death:</strong>
                                Killed in Action
                            </h4>
                            <div id="bio">
                                <h3>Biography:</h3>
                                <div>
									<h5> Noel Steadman</h5>
									<p>Noel Steadman was the son of Lieutenant-Colonel Thomas Herbert Steadman 
									<i>(Territorial Force, 15th (North Auckland) Regiment)</i> and Edith Minnie Steadman of Whangarei. </p>
	 
									<p>He was a pupil at Whangarei High School during 1904 and 1905 but left in 1906 to enter King’s College in Auckland.</p>  

									<p>After leaving school he devoted his studies to engineering.</p> 
									  
									<p>When war broke out he enlisted and left with the Main Body as a lieutenant in the Auckland Infantry. </p> 
									 
									<p>He took part in the defence of the Suez Canal and the landing at Gallipoli and was afterwards 
									killed on the 8th May 1915 in the attack on Krithia in the Dardanelles.</p> 
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            $(".bullet").click(function () {
                $( this ).addClass("fly");
            });

            $("nav .menubutton").click(function () {
                $( this ).toggleClass("active");
                $(".main").toggleClass("menu-hidden");
            });

            if( $(document).width() > 900 ) {
                $(".main").toggleClass("menu-hidden");
            }
        </script>
    </body>
</html>