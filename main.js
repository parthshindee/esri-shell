require(["esri/Map", "esri/views/MapView", "esri/Graphic"],
  (Map, MapView, Graphic) => {
    // Create the Map
    const map = new Map({
      basemap: "topo-vector"
      
    });
    console.log("Map Created");

    const view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-117.2344, 32.8812], //long, lat
      zoom: 12
    });
    console.log("View Created");
    

    view.on("double-click", function(event){
      createGraphic(event.mapPoint.latitude, event.mapPoint.longitude);
      console.log("click");
      console.log("Lat: " + event.mapPoint.latitude + ", Long: " + event.mapPoint.longitude);
    });

    function createGraphic(lat, long){
      // First create a point geometry 
      var point = {
        type: "point", // autocasts as new Point()
        longitude: long,
        latitude: lat
      };
    
      // Create a symbol for drawing the point
      var markerSymbol = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        color: [226, 119, 40]
      };
    
      // Create a graphic and add the geometry and symbol to it
      var pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol
      });
    
      // Add the graphics to the view's graphics layer
      view.graphics.add(pointGraphic);
    }
  });

