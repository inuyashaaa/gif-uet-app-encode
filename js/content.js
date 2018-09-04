var idCurrentRecieveUser = ''
chrome.storage.local.set({ idCurrentRecieveUser }, function () {
  console.log('Value is set to ' + idCurrentRecieveUser)
});

$('body').on('click', function (event) {
  var $currentTarget = $(event.target)
  if($currentTarget.hasClass('_1mf') && $currentTarget.hasClass('_1mj')) {
    
    var listClass = $currentTarget.closest('._5qi9._5qib').find('._3_9e._s0f').attr('class').split(' ')
    idCurrentRecieveUser = listClass[listClass.length-1].split(':')[1]
    chrome.storage.local.set({ "idCurrentRecieveUser": idCurrentRecieveUser }, function () {
      console.log('Value is set to ' + idCurrentRecieveUser)
    });
  }else {
    chrome.storage.local.set({ "idCurrentRecieveUser": "" }, function () {
      console.log('Clear info user')
    });
  }
})
