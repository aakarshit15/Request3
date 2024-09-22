function doGet(req){
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = [
    'spidey_squad',
    'tony_techies',
    'cap_crusader',
    'odinson_olympians'
  ];
  var frontendsheets = [
    "Spidey's Squad",
    "Tony's Techies",
    "Cap's Crusader",
    "Odinson Olympians"
  ];
  var totalPoints = [];

  for (var i = 0; i < sheets.length; i++) {
    var sheetName = sheets[i];
    var sheet = doc.getSheetByName(sheetName);
    if (sheet) {
      var values = sheet.getDataRange().getValues();
      var sum = 0;
      for (var j = 1; j < values.length; j++) {
        var points = values[j][1];
        if (!isNaN(points)) {
          sum += points;
        }
      }
      var row = {};
      row['name']=frontendsheets[i];
      row['score']=sum;
      totalPoints.push(row);
      // totalPoints[sheetName] = sum;
    }
  }

  var doc = SpreadsheetApp.getActiveSpreadsheet(); 
  var sheet = doc.getSheetByName('spidey_squad'); 
  var values = sheet.getDataRange().getValues();

  var outputSpidey = [];
  for (var i=1; i<values.length; i++) {
    var row = {};
    row['name'] = values[i][0];
    row['score']= values[i][1];
    outputSpidey.push(row);

  }

  var doc = SpreadsheetApp.getActiveSpreadsheet(); 
  var sheet = doc.getSheetByName('tony_techies'); 
  var values = sheet.getDataRange().getValues();

  var outputTony = [];
  for (var i=1; i<values.length; i++) {
    var row = {};
    row['name'] = values[i][0];
    row['score']= values[i][1];
    outputTony.push(row);

  }

  var doc = SpreadsheetApp.getActiveSpreadsheet(); 
  var sheet = doc.getSheetByName('cap_crusader'); 
  var values = sheet.getDataRange().getValues();

  var outputCap = [];
  for (var i=1; i<values.length; i++) {
    var row = {};
    row['name'] = values[i][0];
    row['score']= values[i][1];
    outputCap.push(row);

  }

  var doc = SpreadsheetApp.getActiveSpreadsheet(); 
  var sheet = doc.getSheetByName('odinson_olympians'); 
  var values = sheet.getDataRange().getValues();

  var outputOdinson = [];
  for (var i=1; i<values.length; i++) {
    var row = {};
    row['name'] = values[i][0];
    row['score']= values[i][1];
    outputOdinson.push(row);
  }
  return ContentService.createTextOutput (JSON.stringify({home: totalPoints, spidey_squad:outputSpidey, tony_techies: outputTony, cap_crusader: outputCap, odinson_olympians: outputOdinson, headers: headers})).setMimeType (ContentService.MimeType.JSON);

}