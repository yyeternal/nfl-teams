//variables and filtered lists set
var team = getColumn("NFL Teams", "Team");
var stadium = getColumn("NFL Teams", "Stadium");
var stadiumSize = getColumn("NFL Teams", "Capacity");
var conference = getColumn("NFL Teams", "Conference");
var filteredAFCTeam = [];
var filteredNFCTeam = [];
var filteredNFCStadium = [];
var filteredAFCStadium = [];
var filteredNFCStadiumSize = [];
var filteredAFCStadiumSize = [];
//setting the screen when you click either button
//https://sportytell.com/nfl/nfl-team-logos/
// https://i.ytimg.com/vi/K6U89yFBlsc/maxresdefault.jpg
// https://www.ducksters.com/sports/national_football_league.php
filter();
onEvent("AFCbutton", "click", function( ) {
  setScreen("AFC");
});
onEvent("NFCbutton", "click", function( ) {
  setScreen("NFC");
});
//select AFC team and see their stadium size
onEvent("heheh", "click", function( ) {
  setScreen("heheha");
  playSound("assets/Clash-Royale-Laughing-heheheha-Emote-Green-Screen-1080p-60fps-_download-link-in-description_.mp3", true);
});
onEvent("selectafcteam", "click", function( ) {
  setProperty("AFCmorethen70k", "text-color", "white");
  setProperty("AFClessthan70k", "text-color", "white");
  AFCLoop(getText("selectafcteam"));
});
onEvent("backNFC", "click", function( ) {
  setScreen("homescreen");
});
onEvent("backAFC", "click", function( ) {
  setScreen("homescreen");
});
//Highlighting the capacity of the stadium and stating the capacity for NFC Teams
onEvent("dropdownNFC", "click", function( ) {
  setProperty("NFCmorethan70k", "text-color", "white");
  setProperty("nfclessthan70k", "text-color", "white");
  NFCLoop(getText("dropdownNFC"));
});
//filters the team based on conference
function filter() {
  for (var i = 0; i < team.length; i++) {
    if (conference[i] == "AFC") {
      appendItem(filteredAFCTeam, team[i]);
      appendItem(filteredAFCStadium, stadium[i]);
      appendItem(filteredAFCStadiumSize, stadiumSize[i]);
    } else {
      appendItem(filteredNFCTeam, team[i]);
      appendItem(filteredNFCStadium, stadium[i]);
      appendItem(filteredNFCStadiumSize, stadiumSize[i]);
    }
  }
}
function AFCLoop(team) {
  for (var i = 0; i < filteredAFCTeam.length; i++) {
    if (filteredAFCTeam[i] == team) {
      setText("AFCOutput", "This team's stadium size is "+filteredAFCStadiumSize[i]+" and its stadium is "+ filteredAFCStadium[i]);
      if (filteredAFCStadiumSize[i] > 70000) {
        setProperty("AFCmorethen70k", "text-color", "green");
      } else {
        setProperty("AFClessthan70k", "text-color", "green");
      }
    }
  }
  return team;
}
function NFCLoop(team) {
  for (var i = 0; i < filteredNFCTeam.length; i++) {
    if (filteredNFCTeam[i] == team) {
      setText("NFCoutput", "This team's stadium size is "+filteredNFCStadiumSize[i]+" and its stadium is "+filteredNFCStadium [i]);
      if (filteredNFCStadiumSize[i] > 70000) {
        setProperty("NFCmorethan70k", "text-color", "green");
      } else {
        setProperty("nfclessthan70k", "text-color", "green");
      }
    }
  }
  return team;
}
// ruhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaharuhaha
