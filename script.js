
function toggleShow(){
	var btn = document.getElementById('toggle');
	if(btn.innerHTML == 'Masquer'){
		document.getElementById('togglePanel').style.display = 'none';
		btn.innerHTML = 'Afficher';
	}
	else if(btn.innerHTML == 'Afficher'){
		document.getElementById('togglePanel').style.display = 'block';
		btn.innerHTML = 'Masquer';
		document.getElementById('ta').focus();
	}
}


function recupArray(){
	var ta = document.getElementById('ta').value.split('\n');	
	var tab = [];
	var tab2 = [];
	for(let i in ta){
		tab.push(ta[i].split('\t'));
	}
	for(let i in tab){
		if(tab[i] != ''){
			tab2.push(tab[i]);
		}		
	}
	document.getElementById('generatedTable').style.backgroundColor = 'white';	
	document.getElementById('generatedTable').innerHTML = JSON.stringify(tab2);
	
}

function createObject(){
	var ta = document.getElementById('ta').value.split('\n');	
	var tab = [];
	var tab2 = [];
	for(let i in ta){
		tab.push(ta[i].split('\t'));
	}
	for(let i in tab){
		if(tab[i] != ''){
			tab2.push(tab[i]);
		}		
	}
	var db = [];
	var keys = tab2[0];
	var values = [];
	for(i=1;i<tab2.length;i++){
		values.push(tab2[i])
	}
	for(j=0;j<values.length;j++){
		var obj = {};
		for(k=0;k<keys.length;k++){
		    obj[keys[k]] = values[j][k];
		}
		db.push(obj);
	}
	document.getElementById('generatedTable').style.backgroundColor = 'white';
	document.getElementById('generatedTable').innerHTML = JSON.stringify(db);
}

function clearResult(){
	document.getElementById('generatedTable').innerHTML = '';
	document.getElementById('generatedTable').style.backgroundColor = 'gainsboro';
}

function clearAll(){
	document.getElementById('ta').value = '';
	document.getElementById('ta').focus();
	document.getElementById('generatedTable').innerHTML = '';
	document.getElementById('generatedTable').style.backgroundColor = 'gainsboro';
}

function arrayHtml(){
	document.getElementById('generatedTable').innerHTML = '';
	document.getElementById('generatedTable').style.backgroundColor = 'gainsboro';
	
	function returnArray(){
		var ta = document.getElementById('ta').value.split('\n');
		var tab = [];
		var tab2 = [];
		for(let i in ta){
			tab.push(ta[i].split('\t'));
		}
		for(let i in tab){
			if(tab[i] != ''){
				tab2.push(tab[i]);
			}		
		}
		return tab2;
	}
	
	var recupTable = returnArray();
	var nbLignes = recupTable.length;
	var nbColonnes = recupTable[0].length;
	
	var table = document.createElement('table');	
	table.setAttribute('id', 'generated-table');
	table.setAttribute('class', 'w3-table-all');
	var th = document.createElement('tr');
	for(i=0;i<nbColonnes;i++){
		var tdh = document.createElement('th');
		tdh.setAttribute('id','th-cell-' + i);
		tdh.setAttribute('class', 'w3-dark-grey');
		tdh.setAttribute('contenteditable', 'true');
		tdh.innerHTML = recupTable[0][i];
		tdh.style.border = '1px solid grey';
		tdh.style.borderCollapse = 'collapse';
		//tdh.style.height = '20px';
		tdh.style.backgroundColor = 'grey';
		tdh.style.color = 'white';
		tdh.style.textAlign = 'center';
		tdh.style.paddingLeft = '2px';
		tdh.style.paddingRight = '2px';
		tdh.style.minWidth = '20px';
		th.appendChild(tdh);
	}
	table.appendChild(th);
	
	for(j=1;j<nbLignes;j++){
		var tr = document.createElement('tr');
		for(k=0;k<nbColonnes;k++){
			var td = document.createElement('td');
			td.setAttribute('id','tr-' + j + '-cell-' + k);
			td.setAttribute('contenteditable', 'true');
			td.innerHTML = recupTable[j][k];
			td.style.border = '1px solid black';
			td.style.borderCollapse = 'collapse';
			td.style.height = '20px';
			td.style.backgroundColor = 'white';
			td.style.textAlign = 'center';
			td.style.paddingLeft = '2px';
			td.style.paddingRight = '2px';
			td.style.minWidth = '20px';
			//td.style.maxWidth = '100px';
			tr.appendChild(td);
		}
		table.appendChild(tr); 
	}
	// style table
	//table.style.width = '100%';
	table.style.border = '1px solid black';
	table.style.borderCollapse = 'collapse';
	table.style.fontFamily = 'sans-serif';
	
	document.getElementById('generatedTable').appendChild(table);
	
}





