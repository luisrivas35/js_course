
// $.fn.superColor = function() {
//     this.css({
//       color: "pink",
//       backgroundColor: "black",
//     });

//     this.fadeOut(5000);
//     this.fadeIn(100);
//     return this;
// }



$(function () {
  //   const usersResult = $("#userResults");
  //   $.ajax({
  //     url: "https://jsonplaceholder.typicode.com/users",
  //     method: "GET",
  //     success(data) {
  //       const array = data;
  //       console.dir(data);
  //       array.forEach((user) => {
  //         usersResult.append(`
  //         <article class="col-12 col-md-4 mb-5">
  //             <div>
  //                      <li class="list-group-item">name: ${user.name} </li>
  //                      <li class="list-group-item">username: ${user.username} </li>
  //                      <li class="list-group-item">email: ${user.email} </li>
  //                      <li class="list-group-item">company: ${user.company.name} </li>
  //                      <li class="list-group-item">phone: ${user.phone} </li>
  //                      <li class="list-group-item">website: ${user.website} </li>
  //                      <li class="list-group-item">address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode} </li>
  //             </div>
  //         </article>
  //         `);
  //       });
  //     },
  //     error(e) {
  //       console.log(e);
  //     },
  //   });

  const showResults = $("#show")

  $.ajax({
    url: "https://mindicador.cl/api",
    method: "GET",
    success(data) {
        console.dir(data)
        const option = $("#option")
        

    },
    error(e){

    }

  })
//   const title = $("#title");

//   title.superColor()
//   $("p").superColor()

// const container = $("#chartContainer");

// const options = {
//   animationEnabled: true,
//   title: {
//     text: "jQuery Chart",
//   },
//   data: [
//     {
//       type: "column", //change it to line, area, bar, pie, etc
//       legendText: "Try Resizing with the handle to the bottom right",
//       showInLegend: true,
//       dataPoints: [
//         { y: 10, label: "02-02-2024" },
//         { y: 6 },
//         { y: 14 },
//         { y: 12 },
//         { y: 19 },
//         { y: 14 },
//         { y: 26 },
//         { y: 10 },
//         { y: 22 },
//       ],
//     },
//   ],
// };

// container.CanvasJSChart(options)

})




