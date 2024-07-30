import "./index.css";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

defineMapElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets",
});

/**
 * Use `document.querySelector()` to get a reference to the `arcgis-map` component.
 * Add an event listener for the `arcgis-map` component's `viewReadyChange` event.
 */
document
  .querySelector("arcgis-map")
  .addEventListener("arcgisViewReadyChange", (event) => {
    /**
     * Get a reference to the `WebMap`
     * from the `event.detail` object.
     */
    const { map } = event.detail;
    // Add more functionality here.
  });