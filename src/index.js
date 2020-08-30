import * as Papa from "papaparse";

// add the urls of the chat room to here !
// https://docs.google.com/spreadsheets/d/173OIZL1s1u0iD0m3swshseFh-z9tWDx9lPJHWVsROTQ/edit#gid=0

var SHEET_ID = "173OIZL1s1u0iD0m3swshseFh-z9tWDx9lPJHWVsROTQ";
var API_KEY = "AIzaSyADT3iqNAWUl75iqvwuT1yKVN7dlew2EvI";


function fetchSheet({ spreadsheetId, apiKey, complete }) {
    console.log("dd");
    let url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/roomKey/?key=${apiKey}`;
    return fetch(url).then(response =>
        response.json().then(result => {
            let data = Papa.parse(Papa.unparse(result.values), {
                header: true
            });
            complete(data);
        })
    );
}

function init() {
    console.log("dd");

    fetchSheet({
        spreadsheetId: SHEET_ID,
        apiKey: API_KEY,
        complete: dataArray
    });
}

function dataArray(result) {
    var data = result.data;
    console.log(data);
    var roomList = document.getElementById("roomList");
    var roomList_child = "";

    for (let i = 0; i < data.length; i++) {
        roomList_child += `
		<div class="col s3 ">
					<div class="card card-style">
						<div class="card-content">
							<span class="center card-title">${i + 1}번 방</span>
							<div class="card-action">
								<a class="btn center white-text "href="${data[i]["roomURL"]}">입장하기</a>
							</div>
						</div>
					</div>
				</div>
		`;
    }

    roomList.innerHTML = roomList_child;
}

window.addEventListener("DOMContentLoaded", init);
