const shows = require("./shows.js");
const bannedShows = require("./bannedShows.js");

searchShows(shows, bannedShows);
EffectiveSearchShows(shows, bannedShows);
shows.forEach((show) => {
  if (!show.isBanned) {
    /* console.log(show); */
  }
});

function searchShows(paramShows, paramBS) {
  console.time("execution time 2")
  paramShows.forEach((show) => {
    paramBS.forEach((showBS) => {
      if (show.id == showBS.id) {
        show.isBanned = true;
      }
    });
  });
  console.timeEnd("execution time 2")
}

function EffectiveSearchShows(showsE, bannedShowsE) {
  console.time("execution time")
  const bannedShowsIdDictionary = {};
  bannedShowsE.forEach((showBS) => {
    const { id: bannedShowId } = showBS;
    bannedShowsIdDictionary[bannedShowId] = true;
  });
  /* console.log(bannedShowsIdDictionary); */
  showsE.forEach((showE) => {
    const showId = showsE.id;
    if (bannedShowsIdDictionary[showId]) {
      showE.isBanned = true;
    }
  });
  console.timeEnd("execution time")
}
