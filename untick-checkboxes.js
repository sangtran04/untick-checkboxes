/**
* @OnlyCurrentDoc
*/
'use strict';

/**
* Trigger sự kiện mở google sheet 
* thì sẽ hiển thị ra chức năng Checkboxes trên thanh menu
* Created by: TMSANG (13/02/2023)
*/
function onOpen(e) {
  e.source.addMenu(
    'Checkboxes',
    [
      {
        name: 'Untick all selected checkboxes',
        functionName: 'untickCheckboxes',
      },
    ]
  );
}
 
/**
* Uncheck tất cả các checkbox đã được bôi đen
* Created by: TMSANG (13/02/2023)
*/
function untickCheckboxes() {
  SpreadsheetApp.getActive().getSelection().getActiveRange().uncheck();
}
