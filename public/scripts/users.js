// Client facing scripts here
$(() => {
  $('#fetch-users').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/users'
    })
    .done((response) => {
      const $usersList = $('#users');
      $usersList.empty();

      for(const user of response.users) {
        $(`<li class="user">`).text(user.name).appendTo($usersList);
      }
    });
  });
});


// const productIdTemplate = document.querySelector("data-product-template")
// const search = document.getElementById('search');
// const data = require('../migrations')

// let products = [];
// search.addEventListener('keyup', (e) => {
//   const searchstring = e.target.value.toLowerCase();
//   const fileteredItems = item.filter(item => {
//     return (item.id.toLowerCase().includes(searchstring) ||
//       item.name.toLowerCase().includes(searchstring) ||
//       item.niche_id.toLowerCase().includes(searchstring)
//     );
//   });
// displayitems(fileteredItems)

// })
