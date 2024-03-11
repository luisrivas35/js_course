$(function () {
  const showHero = $("#showHero");
  const message = $("#message");
  const title = $("#title");

  $("#searchBtn").on("click", function (e) {
    e.preventDefault();
    const heroId = $("#heroId").val();
    if (!isNaN(parseInt(heroId)) && isFinite(heroId)) {
      searchHero(heroId);
    } else {
      message
        .text("Invalid Input: please be sure it's a number. Try Again !!!")
        .css("color", "red")
        .fadeOut(2800, function () {
          location.reload();
        });
    }
  });

  function searchHero(heroId) {
    $.ajax({
      url: `https://www.superheroapi.com/api.php/4905856019427443/${heroId}`,
      method: "GET",
      success(response) {
        if (response.response === "success") {
          const hero = response;
          title.html(`${hero.name}`);
          showHero.html("");
          showHero.append(`
              <div>
                  <div class="card" style="width: 30rem">
                      <img src="${
                        hero.image.url
                      }" class="card-img-top" alt="..." />
                      <div class="card-body">
                          <h5 class="card-title">Name: ${hero.name}</h5>
                          <p class="card-text"></p>
                          <ul class="list-group list-group-flush">
                              <h6>Power Stats</h6>
                              <li class="list-group-item">Intelligence: ${
                                hero.powerstats.intelligence
                              } - Strenght: ${
            hero.powerstats.strength
          } -  Speed: ${hero.powerstats.speed} - Durability: ${
            hero.powerstats.durability
          } - Power: ${hero.powerstats.power} - Combat: ${
            hero.powerstats.combat
          }</li>
                              <h6>Biography</h6>
                              <li class="list-group-item">Full Name: ${
                                hero.biography["full-name"]
                              } - Alter Egos: ${
            hero.biography["alter-egos"]
          } - Aliases: ${hero.biography.aliases.join(", ")}</li>
                              <h6>Appearance</h6>
                              <li class="list-group-item">Gender: ${
                                hero.appearance.gender
                              } - Race: ${
            hero.appearance.race
          } - Height: ${hero.appearance.height.join(
            "/"
          )} - Weight: ${hero.appearance.weight.join("/")} - Eye Color: ${
            hero.appearance["eye-color"]
          } - Hair Color: ${hero.appearance["hair-color"]}</li>
                              <h6>Work</h6>
                              <li class="list-group-item">Occupation: ${
                                hero.work.occupation
                              } - Base: ${hero.work.base}</li>
                              <h6>Connections</h6>
                              <li class="list-group-item">Group Affiliation: ${
                                hero.connections["group-affiliation"]
                              } - Relatives: ${hero.connections.relatives}</li>
                          </ul>
                      </div>
                  </div>
              </div>
              
          `);
          drawChartHero(hero);
        } else {
          message
            .text("This number is not in database, try another one !!!")
            .css("color", "red")
            .fadeOut(2800, function () {
              location.reload();
            });
        }
      },
      error(e) {
        console.log("Error: ", e);
        message
          .text("Error Handling the API Call !!!")
          .css("color", "red")
          .fadeOut(2800, function () {
            location.reload();
          });
      },
    });
  }

  function drawChartHero(hero) {
    const dataPoints = [];

    for (const [key, value] of Object.entries(hero.powerstats)) {
      dataPoints.push({
        y: parseInt(value),
        name: key.charAt(0).toUpperCase() + key.slice(1),
      });
    }

    const options = {
      animationEnabled: true,
      title: {
        text: `${hero.name} Power Stats`,
      },
      data: [
        {
          type: "pie",
          showInLegend: true,
          legendText: "{name}: {y}",
          toolTipContent: "{name}: <strong>{y}</strong>",
          indexLabel: "{name} - {y}",
          dataPoints: dataPoints,
        },
      ],
    };

    $("#chartContainer").CanvasJSChart(options);
  }
});
