//turning on strict mode
"use strict";

const searchForm = document.getElementById("searchform");
const searchBar = document.getElementById("searchbar");
const result = document.getElementById("result");

// list of artimages tagged with descriptions
const artList = [
  ,
  {
    imgsrc:
      "../artimages/Abstract_art/an_artist_is_not_paid_for_his_labor_but_for_his_vision/an_artist_is_not_paid_for_his_labor_but_for_his_vision.jpg",
    name: "An artist is not paid for his labor but for his vision.",
    size: "",
    type: "Abstract Art",
    date: "June 2020",
    listenedto: "Childish Gambino's 3.15.20 Album",
    series: "An artist is not paid for his labor but for his vision.",
  },
  {
    imgsrc:
      "../artimages/Abstract_art/an_artist_is_not_paid_for_his_labor_but_for_his_vision/an_artist_is_not_paid_for_his_labor_but_for_his_vision_no_color.JPG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc:
      "../artimages/Abstract_art/an_artist_is_not_paid_for_his_labor_but_for_his_vision/an_artist_is_not_paid_for_his_labor_but_for_his_vision.jpg",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc:
      "../artimages/Abstract_art/einfach_verruckt/einfach_verruckt_faded.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/einfach_verruckt/einfach_verruckt.JPG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/home/home_1.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/home/home_2.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/oddity_series/alien_planet.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/oddity_series/alright_all_wrong.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/oddity_series/approaching_fire.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/oddity_series/blue_moon.png",
    name: "Blue Moon",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/oddity_series/broken_city.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/oddity_series/complex.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/oddity_series/endless_nothing.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/oddity_series/entropy_chart.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/oddity_series/freedom.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/oddity_series/intelectual_swamp.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc:
      "../artimages/Abstract_art/openminded_series/openminded_digita_art.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc:
      "../artimages/Abstract_art/openminded_series/openminded_painted.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc:
      "../artimages/Abstract_art/several_steps_down/several_steps_down_color.JPG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/skater_series/skater_faded.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/skater_series/skater_outline.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/skater_series/skater_shirt.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/untitled_series/untitled_10.png",
    name: "Untitled 10",
    size: "100px by 100px",
    type: "Digital Art (made with: prismacolor markers)",
    date: "2023",
    listenedto: "",
    series: "Untitled Series",
  },
  {
    imgsrc: "../artimages/Abstract_art/untitled_series/untitled_11.png",
    name: "Untitled 11",
    size: "100px by 100px",
    type: "Digital Art (made with: coffee, and various stains)",
    date: "2022",
    listenedto: "",
    series: "Untitled Series",
  },
  {
    imgsrc: "../artimages/Abstract_art/untitled_series/untitled_1.PNG",
    name: "Untitled 1",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/untitled_series/untitled_2.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/untitled_series/untitled_3.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/untitled_series/untitled_4.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/2020_to_2022/comfort_for_the_future.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/2020_to_2022depression.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/2020_to_2022/doubt_at_twilight.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/2020_to_2022/essay.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/2020_to_2022/ramp_fear.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc:
      "../artimages/Abstract_art/2020_to_2022/you_cant_love_what_you_dont_know.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/year_series/year_16.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/year_series/year_17.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/year_series/year_18.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/blended_16-year-old_me.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/brother.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/earliest_memory.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/eternal_grey.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/mo_cardboard.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/peace_in_chaos.JPG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/red.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/redundant.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/that_inner_fire.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/the_real_america.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Abstract_art/this_life_it's_not_about_the.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Collages/mishap.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Collages/silicon.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Stencil_grafiti/spotlight-grafit.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Stencil_grafiti/spider_series/spider_grafit.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Stencil_grafiti/spider_series/spider_purple.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Sculptures/progress.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Portraits/self_portrait_procreate.PNG",
    name: "Self Portrait (procreate)",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Illustrations/how_I_cope.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Illustrations/i_am_homie.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Illustrations/punk.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Drawings/buffalo.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Drawings/mushroom.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Drawings/where_shelby_meets_kentucky.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Concept_art/demagorgon_concept-art.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Digital_art/diy_vans.JPG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Digital_art/don't_walk_sign.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Digital_art/haloween-candy.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Digital_art/untitled_5.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Digital_art/untitled_6.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Digital_art/untitled_7.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/Digital_art/walksign.JPG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/landscapes/an_ode_to_adventure.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/landscapes/beach_outline.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/landscapes/cabin_in_the_mountains.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/landscapes/death_valley_mountains.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/landscapes/desert_tree.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/landscapes/far_east_country.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/landscapes/montana_vacae.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/landscapes/sailboat_on_the_lake.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc: "../artimages/landscapes/winter_loss.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc:
      "../artimages/landscapes/angels_landing_series/angels_landing_digital-art.PNG",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc:
      "../artimages/landscapes/angels_landing_series/angels_landing_on_paper_colored.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc:
      "../artimages/landscapes/angels_landing_series/angels_landing_on_paper_outline.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc:
      "../artimages/landscapes/angels_landing_series/angels_landing_on_paper_shaded.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
  {
    imgsrc:
      "../artimages/landscapes/angels_landing_series/angels_landing_sketch.png",
    name: "",
    size: "",
    type: "",
    date: "",
    listenedto: "",
    series: "",
  },
];

let searchString = ""
// grabbing list of artworks with their descriptions

function findArtListMatch(searchString) {
  const matchingArt = artList.filter(
    (art) =>
      art.name.toLowerCase().includes(searchString.toLowerCase()) ||
      art.size.toLowerCase().includes(searchString.toLowerCase()) ||
      art.type.toLowerCase().includes(searchString.toLowerCase()) ||
      art.date.toLowerCase().includes(searchString.toLowerCase()) ||
      art.listenedto.toLowerCase().includes(searchString.toLowerCase()) ||
      art.series.toLowerCase().includes(searchString.toLowerCase())
  );
  return matchingArt;
}

// displaying descriptions and image attached

//grabbing html elements for displaying
const resultImage = document.getElementById("result-image");
const artNameText = document.getElementById("artname-text");
const sizeText = document.getElementById("size-text");
const typeOfArtText = document.getElementById("type-of-art-text");
const dateText = document.getElementById("date-text");
const listenedToText = document.getElementById("listened-to-text");
const seriesText = document.getElementById("series-text");

function displayArt(matchingArt) {
  if (matchingArt.length > 0) {
    // display the matching items
    matchingArt.forEach((art) => {
      
      // display the right artimage per search
      resultImage.setAttribute("src", art.imgsrc);

      // show the description of the art
      artNameText.innerHTML = art.name;
      sizeText.innerHTML = art.size;
      typeOfArtText.innerHTML = art.type;
      dateText.innerHTML = art.date;
      listenedToText.innerHTML = art.listenedto;
      seriesText.innerHTML = art.series;
    });
  } else {
    // when there are no matching results...
    console.log("no results");
    resultImage.style.display = "none";
    document.getElementById("result-image").setAttribute("src", "");
    document.getElementById("artname-text").innerHTML = "Art not found";
    document.getElementById("size-text").innerHTML = "";
    document.getElementById("type-of-art-text").innerHTML = "";
    document.getElementById("date-text").innerHTML = "";
    document.getElementById("listened-to-text").innerHTML = "";
    document.getElementById("series-text").innerHTML = "";
  }
};

// search button
const searchButton = document.getElementById("searchbutton");

searchButton.addEventListener("click", (e) => {
  const pattern = /^[\w\W]{2,15}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue);

  if (valid) {
    console.log("clicked");
    const searchString = document.getElementById("searchbar").value;
    console.log(searchString);
    console.log(artList);

    // stop hidden style on image
    resultImage.style.display = "block";

    const matchingArt = findArtListMatch(searchString);
    displayArt(matchingArt);
  } else {
    // when the input is empty
    console.log("no results");
    resultImage.style.display = "none";
    document.getElementById("result-image").setAttribute("src", "");
    document.getElementById("artname-text").innerHTML = "";
    document.getElementById("size-text").innerHTML = "";
    document.getElementById("type-of-art-text").innerHTML = "";
    document.getElementById("date-text").innerHTML = "";
    document.getElementById("listened-to-text").innerHTML = "";
    document.getElementById("series-text").innerHTML = "";
  }
});

// watch search bar input and filter items
searchBar.addEventListener("keyup", (e) => {
  const pattern = /^[\w\W]{2,15}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue);

  if (e.key === "Enter" && valid) {
    const searchString = e.target.value.toLowerCase();

    // logging array data on console
    console.log(searchString);
    console.log(artList);

    // stop hidden style on image
    resultImage.style.display = "block";

    // find matching items form artList
    const matchingArt = findArtListMatch(searchString);
    displayArt(matchingArt);
  } else {
    // when the input is empty
    console.log("no results");
    resultImage.style.display = "none";
    document.getElementById("result-image").setAttribute("src", "");
    document.getElementById("artname-text").innerHTML = "";
    document.getElementById("size-text").innerHTML = "";
    document.getElementById("type-of-art-text").innerHTML = "";
    document.getElementById("date-text").innerHTML = "";
    document.getElementById("listened-to-text").innerHTML = "";
    document.getElementById("series-text").innerHTML = "";
  }
});

// displaying none when reset button is clicked
searchBar.addEventListener("input", function (e) {
  const pattern = /^[\w\W]{2,15}$/;
  const currentValue = e.target.value;
  const valid = pattern.test(currentValue);

  if (valid) {
    const searchString = e.target.value.toLowerCase();

    // logging array data on console
    console.log(searchString);
    console.log(artList);

  } else {
    resultImage.style.display = "none";
    document.getElementById("result-image").setAttribute("src", "");
    document.getElementById("artname-text").innerHTML = "";
    document.getElementById("size-text").innerHTML = "";
    document.getElementById("type-of-art-text").innerHTML = "";
    document.getElementById("date-text").innerHTML = "";
    document.getElementById("listened-to-text").innerHTML = "";
    document.getElementById("series-text").innerHTML = "";
    e.preventDefault();
    return false;
  }
});