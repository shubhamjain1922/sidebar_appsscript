
function onOpen(event) {
  SlidesApp.getUi().createAddonMenu()
      .addItem('Open Sidebar', 'showSidebar')
      .addToUi();
}

function onInstall(event) {
  onOpen(event);
}

function showSidebar() {
  var ui = HtmlService
      .createHtmlOutputFromFile('sidebar')
      .setTitle('Sidebar');
  SlidesApp.getUi().showSidebar(ui);
}

