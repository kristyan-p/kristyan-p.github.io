// PSEUDOCODE:
// 1) When visitor comes to this page, have info box open - based on user's answer from questionnaire page 
// 2) When user clicks X or clicks out of box, box shrinks back and user can click on new box to expand 
var map;
      function initMap() { // basic map data and style
        map = new google.maps.Map(document.getElementById('map'), {
          //center: {lat: 40.769013, lng: -73.966270},
          zoom: 12,
          styles: [
            {
              featureType: 'landscape.man_made',
              elementType: 'geometry',
              stylers: [{color: '#f7f0df'}]
            },
            {
              featureType: 'landscape.natural',
              elementType: 'geometry',
              stylers: [{color: '#d4e9b6'}, {visibility: 'on'}]
            },
            {
              featureType: 'landscape.natural.landcover',
              elementType: 'geometry',
              stylers: [{hue: '#ff0000'}, {visibility: 'off'}]
            },
            {
              featureType: 'landscape.natural.terrain',
              elementType: 'geometry',
              stylers: [{hue: '#ff0000'}, {visibility: 'off'}]
            },
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#90805C'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#c3e2aa'}]
            },
            {
              featureType: 'poi.business',
              elementType: 'all',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.medical',
              elementType: 'geometry',
              stylers: [{color: '#fbd3da'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [{color: '#ffe15f'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road.arterial',
              elementType: 'labels',
              stylers: [{visibility: 'simplified'}]
            },
            {
              featureType: 'road.arterial',
              elementType: 'labels.text',
              stylers: [{visibility: 'simplified'}]
            },
            {
              featureType: 'road.local',
              elementType: 'geometry.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'road.local',
              elementType: 'labels',
              stylers: [{visibility: 'simplified'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#efd151'}]
            },
            {
              featureType: 'transit.station.airport',
              elementType: 'geometry.fill',
              stylers: [{color: '#c9bfd1'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#a6d1e3'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#fff'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });  
        
        // Pier C Park
        var pierCcontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Pier C Park</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026376/PierCPark_Night_iStock_irtxoh.jpg"></div>'+
            '<p>Need to get out of Manhattan but want to be home in time for dinner? Visit Pier C Park located in Hoboken, New Jersey. Take the PATH train to Hoboken and walk north along the water. Pier C Park is a great place to enjoy views of Manhattan’s entire west side. Downtown views are especially clear here, so be sure to come when it’s not overcast! Daytime and nighttime views are equally enjoyable so stay a couple hours to see the sunset. There are plenty of restaurants and bars so feel free to come hungry.</p>'+'<div class="directions"><a href="https://goo.gl/maps/isWMrtA7pn42" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var pierCinfowindow = new google.maps.InfoWindow({
          content: pierCcontentString
        });

        var pierCmarker = new google.maps.Marker({
          position: {lat: 40.740318, lng: -74.025789},
          map: map,
          title: 'Pier C Park'
        });
        pierCmarker.addListener('click', function() {
          pierCinfowindow.open(map, pierCmarker);
        });
        
        // George Washington Bridge
        var GWBcontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">George Washington Bridge and Fort Lee</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026309/GWB_Day_yrbz6e.jpg"></div>'+
            '<p>Have a couple of hours to spare and want to get your step count in? Walk across the George Washington Bridge into Fort Lee, New Jersey. During the twenty minute walk across the bridge you’ll see views of Manhattan’s west side as well as the Hudson River, from the Bronx to downtown. Once in Fort Lee, walk through the Fort Lee Historic park back toward Manhattan to see views of the bridge. Be sure to pack water and snacks!</p>'+'<div class="directions"><a href="https://goo.gl/maps/i5H2hvmdBV32" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var GWBinfowindow = new google.maps.InfoWindow({
          content: GWBcontentString
        });

        var GWBmarker = new google.maps.Marker({
          position: {lat: 40.851913, lng: -73.961272},
          map: map,
          title: 'George Washington Bridge and Fort Lee'
        });
        GWBmarker.addListener('click', function() {
          GWBinfowindow.open(map, GWBmarker);
        });
        
        // Governors Island
         var govIslandcontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Governors Island</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026307/GovIsland_Day3_biszkj.jpg"></div>'+
            '<p>Any summer weekend plans? From May through October, Governors Island is open for visitors. Be sure to leave before 11:30am on Saturdays and Sundays for a free ferry ride. Enjoy views of downtown Manhattan by bike or on foot, and explore the various attractions available on the island from art galleries to adult-sized slides to giant hammocks. There aren’t many food options available, so feel free to pack a picnic.</p>'+'<div class="directions"><a href="https://goo.gl/maps/RZ1Gsseykop" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var govIslandinfowindow = new google.maps.InfoWindow({
          content: govIslandcontentString
        });

        var govIslandmarker = new google.maps.Marker({
          position: {lat: 40.69287, lng: -74.0168},
          map: map,
          title: 'Governors Island'
        });
        govIslandmarker.addListener('click', function() {
          govIslandinfowindow.open(map, govIslandmarker);
        });
        
         // Staten Island Ferry
         var ferrycontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Staten Island Ferry</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026306/Ferry_Day2_kyqjbg.jpg"></div>'+
            '<p>The Staten Island Ferry is on every NYC tourist agenda, and for good reason. For absolutely no cost you can see sweeping views of downtown Manhattan and the Statue of Liberty. To see the statue of Liberty, head to the right side of the ferry and go to the upstairs deck. For views of downtown, stay in the back of the ferry when departing Manhattan, and go to the front of the ferry when returning. Or, you can stay and get a slice at one of SI’s famous pizza joints.</p>'+'<div class="directions"><a href="https://goo.gl/maps/xt1UWfew17E2" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var ferryinfowindow = new google.maps.InfoWindow({
          content: ferrycontentString
        });

        var ferrymarker = new google.maps.Marker({
          position: {lat: 40.70058, lng: -74.01312},
          map: map,
          title: 'Staten Island Ferry'
        });
        ferrymarker.addListener('click', function() {
          ferryinfowindow.open(map, ferrymarker);
        });
        
        // Greenpoint
         var greenpointcontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Greenpoint</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026308/Greenpoint_Day_vv2csu.jpg"></div>'+
            '<p>Move aside, Williamsburg. Greenpoint is the new place to be in Brooklyn, and its popularity is growing fast. Home to the world’s best pizza, Paulie Gee’s, the amazing bakery Ovenly, as well as numerous art galleries and chill bars, Greenpoint is quickly becoming a great destination for weekend nights. While Greenpoint may be famous for its restaurant scene, don’t skip out on its great views of Manhattan! Check out the WNYC Transmitter Park between Kent Street and Greenpoint Avenue and enjoy live music, murals, and piers. It’s a great place to hang out while you wait for your table to open.</p>'+'<div class="directions"><a href="https://goo.gl/maps/Q3Nj4qRD6PD2" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var greenpointinfowindow = new google.maps.InfoWindow({
          content: greenpointcontentString
        });

        var greenpointmarker = new google.maps.Marker({
          position: {lat: 40.72992, lng: -73.962273},
          map: map,
          title: 'Greenpoint'
        });
        greenpointmarker.addListener('click', function() {
          greenpointinfowindow.open(map, greenpointmarker);
        });
        
        // Gantry Plaza State Park
         var gantrycontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Gantry Plaza State Park</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026310/Gantry_Day_cxyyev.jpg"></div>'+
            '<p>Gantry Plaza State Park, once Long Island City’s (LIC) best kept secret, is now a popular destination for locals. Here you’ll find multi-generational and multi-ethnic Queens residents picnicking and playing sports, and walking their dogs. Visit LIC Landing for beer, wine, or coffee, and enjoy live music or spoken word poetry slam. There are plenty of piers to walk down and explore, each providing a unique photo opportunity. The Pepsi sign is an Instagram staple. Use your MetroCard or take the NYC Ferry for easy access.</p>'+'<div class="directions"><a href="https://goo.gl/maps/kGHRCSLwtVo" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var gantryinfowindow = new google.maps.InfoWindow({
          content: gantrycontentString
        });

        var gantrymarker = new google.maps.Marker({
          position: {lat: 40.74611, lng: -73.958935},
          map: map,
          title: 'Gantry Plaza State Park'
        });
        gantrymarker.addListener('click', function() {
          gantryinfowindow.open(map, gantrymarker);
        });
        
        // Brooklyn Bridge Park and Promenade
         var BKcontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Brooklyn Bridge Park and Promenade</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026305/BKPark_Sunset_of5bpv.jpg"></div>'+
            '<p>Yes, they may be touristy, but the Brooklyn Bridge Park and the Brooklyn Heights Promenade are definitely not traps. Start in Manhattan and walk across the world-famous Brooklyn Bridge. Once across, head back toward the water and enjoy views of downtown Manhattan. Walk along the water to the promenade and enjoy the elevated view. Both views are great during the daytime or nighttime - just be aware it may be crowded! This area is also referred to as DUMBO - Down Under the Manhattan Bridge Overpass.</p>'+'<div class="directions"><a href="https://goo.gl/maps/Q3Nj4qRD6PD2" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var BKinfowindow = new google.maps.InfoWindow({
          content: BKcontentString
        });

        var BKmarker = new google.maps.Marker({
          position: {lat: 40.70234, lng: -73.997122},
          map: map,
          title: 'Brooklyn Bridge Park and Promenade'
        });
        BKmarker.addListener('click', function() {
          BKinfowindow.open(map, BKmarker);
        });
        
        // Astoria Park
         var astoriacontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Astoria Park</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026305/AstoriaPark_Night_hi6vha.jpg"></div>'+
            '<p>Astoria Park, located between the Robert F. Kennedy and the Hell Gate Bridge, is the perfect place to spend a lazy Sunday afternoon. Here you’ll see families of all shapes and sizes enjoying their time together in one of NYC’s less manicured but still awesome parks. Bring your picnic blankets and snacks, and if you’re going in the summer, your swimsuit. It’s a bit of a trek from the nearest subway station, so keep in mind you may have to walk a bit!</p>'+'<div class="directions"><a href="https://goo.gl/maps/JUqGBg7D7wt" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var astoriainfowindow = new google.maps.InfoWindow({
          content: astoriacontentString
        });

        var astoriamarker = new google.maps.Marker({
          position: {lat: 40.77771, lng: -73.92648},
          map: map,
          title: 'Astoria Park'
        });
        astoriamarker.addListener('click', function() {
          astoriainfowindow.open(map, astoriamarker);
        });
        
        // Roosevelt Island and Tram
         var rooseveltcontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Roosevelt Island and Tram</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026311/Tram_Day_kvw0x4.jpg"></div>'+
            '<p>Looking for a cheaper alternative to a bird\'s\-eye\-view of NYC? Try the Roosevelt Island Tram. Take the F train to Roosevelt Island and enjoy views of Manhattan’s east side. Walk south on the island and explore historical buildings and learn about the island’s history. When you’re ready to leave, use a swipe on your Metrocard to take the tram back to Manhattan. Be sure to return in early spring to catch the Roosevelt Island Cherry Blossom festival.</p>'+'<div class="directions"><a href="https://goo.gl/maps/7T672wSZnT52" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var rooseveltinfowindow = new google.maps.InfoWindow({
          content: rooseveltcontentString
        });

        var rooseveltmarker = new google.maps.Marker({
          position: {lat: 40.75737, lng: -73.954161},
          map: map,
          title: 'Roosevelt Island and Tram'
        });
        rooseveltmarker.addListener('click', function() {
          rooseveltinfowindow.open(map, rooseveltmarker);
        });
        
        // The Highline
         var highlinecontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">The Highline</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026308/Highline_Day_tjtiy0.jpg"></div>'+
            '<p>The Highline has quickly become one of NYC’s must-see destinations. During the summer and on weekends, however, the crowds can be overwhelming. Come on a weekday or early on a weekend to enjoy a quieter stroll with elevated views of Manhattan’s west side from the Meatpacking District through Chelsea. The Highline begins at Gansevoort and Washington Street, but feel free to enter at any point. Be sure to check the hours of operation as they vary season to season. Walk to the northernmost part of the Highline for vast, uninterrupted views of the Hudson River into New Jersey (technically not Manhattan, but admittedly still pretty.)</p>'+'<div class="directions"><a href="https://goo.gl/maps/wn4utZRTSfq" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var highlineinfowindow = new google.maps.InfoWindow({
          content: highlinecontentString
        });

        var highlinemarker = new google.maps.Marker({
          position: {lat: 40.747993, lng: -74.004765},
          map: map,
          title: 'The Highline'
        });
        highlinemarker.addListener('click', function() {
          highlineinfowindow.open(map, highlinemarker);
        });
        
        // The Whitney Museum Free Fridays
         var whitneycontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">The Whitney Museum Free Fridays</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026311/Whitney_Day_d45ncx.jpg"></div>'+
            '<p>Free this Friday night? Stop by The Whitney Museum from 7 to 10pm and pay what you wish. Stop at each outdoor terrace to enjoy views of Manhattan’s west side and the Meatpacking District. Daytime views make for a great photo opportunity, but the nighttime views are even more magical. It can get windy up there, so dress accordingly!</p>'+'<div class="directions"><a href="https://goo.gl/maps/b1DutEk5iGE2" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var whitneyinfowindow = new google.maps.InfoWindow({
          content: whitneycontentString
        });

        var whitneymarker = new google.maps.Marker({
          position: {lat: 40.739588, lng: -74.008863},
          map: map,
          title: 'The Highline'
        });
        whitneymarker.addListener('click', function() {
          whitneyinfowindow.open(map, whitneymarker);
        });
        
        // Central Park Reservoir
         var reservoircontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Central Park Reservoir</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026310/Reservoir_Sunset_wmp20f.jpg"></div>'+
            '<p>Go for a quick jog in Central Park right before sunset and catch your breath at the Central Park Reservoir. Stop at the northwest corner of the reservoir near 92nd street to see the best views of downtown. Be sure to stay on the left of the path if you prefer to stroll; runners will pass on your right.</p>'+'<div class="directions"><a href="https://goo.gl/maps/7HBixahMZPF2" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var reservoirinfowindow = new google.maps.InfoWindow({
          content: reservoircontentString
        });

        var reservoirmarker = new google.maps.Marker({
          position: {lat: 40.78832, lng: -73.962526},
          map: map,
          title: 'Central Park Reservoir'
        });
        reservoirmarker.addListener('click', function() {
          reservoirinfowindow.open(map, reservoirmarker);
        });
        
        // Morningside Park
         var morningsidecontentString = '<div class="content">'+
            '<div class="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Morningside Park</h1>'+
            '<div id="bodyContent">'+
            '<div class="img-div"><img class="pierCimg" src="http://res.cloudinary.com/dxg6sopth/image/upload/v1513026310/Reservoir_Sunset_wmp20f.jpg"></div>'+
            '<p>If you’re near Columbia University, be sure to check out the view from the west side of Morningside Park. Here you’ll see views of Central Harlem. Take the stairs down and end your tour with a stroll through the park. Just look out for the feral cats!</p>'+'<div class="directions"><a href="https://goo.gl/maps/7HBixahMZPF2" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i> Take me here</a> <a href="https://kristyan-p.github.io/Final_Project/about.html" target="_blank"><i class="fa fa-building" aria-hidden="true"></i> About Cheap Viewz</a> <a href="https://kristyan-p.github.io/Final_Project/questionnaire.html" target="_blank"><i class="fa fa-repeat" aria-hidden="true"></i> Take quiz again</a></div>'+
            '</div>'+
            '</div>';

        var morningsideinfowindow = new google.maps.InfoWindow({
          content: morningsidecontentString
        });

        var morningsidemarker = new google.maps.Marker({
          position: {lat: 40.80673, lng: -73.95883},
          map: map,
          title: 'Morningside Park'
        });
        morningsidemarker.addListener('click', function() {
          morningsideinfowindow.open(map, morningsidemarker);
        });
        
        // Closes infowindow when map is clicked 
         google.maps.event.addListener(map, "click", function(event) {
           morningsideinfowindow.close();
           reservoirinfowindow.close();
           whitneyinfowindow.close();
           highlineinfowindow.close();
           rooseveltinfowindow.close();
           astoriainfowindow.close();
           BKinfowindow.close();
           gantryinfowindow.close();
           greenpointinfowindow.close();
           GWBinfowindow.close();
           pierCinfowindow.close();
           govIslandinfowindow.close();
           ferryinfowindow.close();
        });
        
        // Set up infoboxes to automatically open 
        // grab local storage 
        var result = localStorage.getItem('result');
        //if/else to open according to 
        if (result == 'morningside') {
            morningsideinfowindow.open(map, morningsidemarker);
            map.setCenter(morningsidemarker.getPosition());
            morningsideinfowindow.css({'margin-top': '100px'});
        } else if (result == 'reservoir') {
            reservoirinfowindow.open(map, reservoirmarker);
            map.setCenter(reservoirmarker.getPosition());
        } else if (result == 'whitney') {
            whitneyinfowindow.open(map, whitneymarker);
            map.setCenter(whitneymarker.getPosition()); 
        } else if (result == 'highline') {
            highlineinfowindow.open(map, highlinemarker);
            map.setCenter(highlinemarker.getPosition());
        } else if (result == 'roosevelt') {
            rooseveltinfowindow.open(map, rooseveltmarker);
            map.setCenter(rooseveltmarker.getPosition());
        } else if (result == 'astoria') {
            astoriainfowindow.open(map, astoriamarker);
            map.setCenter(astoriamarker.getPosition());
        } else if (result == 'BK') {
            BKinfowindow.open(map, BKmarker);
            map.setCenter(BKmarker.getPosition());
        } else if (result == 'gantry') {
            gantryinfowindow.open(map, gantrymarker);
            map.setCenter(gantrymarker.getPosition());
        } else if (result == 'greenpoint') {
            greenpointinfowindow.open(map, greenpointmarker);
            map.setCenter(greenpointmarker.getPosition());
        } else if (result == 'GWB') {
            GWBinfowindow.open(map, GWBmarker);
            map.setCenter(GWBmarker.getPosition());
        } else if (result == 'pierC') {
            pierCinfowindow.open(map, pierCmarker);
            map.setCenter(pierCmarker.getPosition());
        } else if (result == 'govIsland') {
            govIslandinfowindow.open(map, govIslandmarker);
            map.setCenter(govIslandmarker.getPosition());
        } else if (result == 'ferry') {
            ferryinfowindow.open(map, ferrymarker);
            map.setCenter(ferrymarker.getPosition());
        };
      }