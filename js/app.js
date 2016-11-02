/*var pcmMM = Kotlin.modules['org.opencompare.model.pcm'].org.opencompare.model.pcm;
var factory = new pcmMM.factory.DefaultPcmFactory();
var loader = factory.createJSONLoader();
var pcmSample2String = JSON.stringify(pcmSample2);
$("body").html(pcmSample2String);
var pcmContainer = loader.loadModelFromString(pcmSample2String).get(0);

console.log(pcmContainer);*/

/*
Decode a pcm from a String or a JSON
atob(String) is the javacript function to decode Base64 String
*/
function decodePCM(pcm){
	//If pcm is a String we convert it into a JSON
	if(typeof pcm == "string"){
		pcm = JSON.parse(pcm);
	}
	
	//Decode all Base64 String
	//Decode pcm name
	pcm.pcm.name = atob(pcm.pcm.name);
	//Decode the name of each features
	for(var f in pcm.pcm.features){ 
		pcm.pcm.features[f].name = atob(pcm.pcm.features[f].name);
	}
	
	//Decode all pcm > products > cells > content and rawContent from Base64
	for(var p in pcm.pcm.products){ 
		for(var c in pcm.pcm.products[p].cells){
			pcm.pcm.products[p].cells[c].content = atob(pcm.pcm.products[p].cells[c].content);
			pcm.pcm.products[p].cells[c].rawContent = atob(pcm.pcm.products[p].cells[c].rawContent);
		}
	}
	
	//Display the decoded PCM
	console.log(pcm); //in console
	
	//In DOM
	var html = "<table><tr>";
	for(var f in pcm.pcm.features){
		html += "<th>" + pcm.pcm.features[f].name + "</th>";
	}
	html += "</tr>";
	for(var p in pcm.pcm.products){
		html += "<tr>";
		for(var f in pcm.pcm.features){
			for(var c in pcm.pcm.products[p].cells){
				if(pcm.pcm.products[p].cells[c].feature[0] == "features["+pcm.pcm.features[f].generated_KMF_ID+"]"){
					html += "<td>" + pcm.pcm.products[p].cells[c].content + "</td>";
					break;
				}
			}
		}
		html += "</tr>";
	}
	html += "</table>";
	$("body").html(html);
}

decodePCM(pcmSample2);