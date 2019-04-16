jQuery(document).ready(function($) {
  $("#google-reviews").googlePlaces({
    placeId: "ChIJ_zmorIDx9IgRxVw4PJByGA4", //Find placeID @: https://developers.google.com/places/place-id
    render: ["reviews"],
    min_rating: 4,
    max_rows: 4
  });
});
