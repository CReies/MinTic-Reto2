boatCallback = (res) => {
	tBodyBoat = document.getElementById('tBodyBoat');
	while (tBodyBoat.firstChild) {
		tBodyBoat.removeChild(tBodyBoat.firstChild);
	}
	for (let i = 0; i < res.items.length; i++) {
		const boat = res.items[i];
		const row = document.createElement('tr');
		row.setAttribute('id', `tr-boat-${boat.id}`);
		const btnUpdate = document.createElement('button');
		const btnDelete = document.createElement('button');
		btnUpdate.setAttribute('class', 'btn btn-primary mx-2');
		btnDelete.setAttribute('class', 'btn btn-danger mx-2');
		btnUpdate.innerText = 'Update';
		btnDelete.innerText = 'Delete';
		btnUpdate.addEventListener('click', () => updateBoat(boat));
		btnDelete.addEventListener('click', () => deleteBoat(boat.id));
		const tdId = document.createElement('td');
		const tdBrand = document.createElement('td');
		const tdModel = document.createElement('td');
		const tdCategoryId = document.createElement('td');
		const tdName = document.createElement('td');
		const tdButtons = document.createElement('td');
		tdId.innerText = boat.id;
		tdBrand.innerText = boat.brand;
		tdModel.innerText = boat.model;
		tdCategoryId.innerText = boat.category_id;
		tdName.innerText = boat.name;
		tdButtons.appendChild(btnUpdate);
		tdButtons.appendChild(btnDelete);
		row.appendChild(tdId);
		row.appendChild(tdBrand);
		row.appendChild(tdModel);
		row.appendChild(tdCategoryId);
		row.appendChild(tdName);
		row.appendChild(tdButtons);
		tBodyBoat.appendChild(row);
	}
};

clientCallback = (res) => {
	tBodyClient = document.getElementById('tBodyClient');
	while (tBodyClient.firstChild) {
		tBodyClient.removeChild(tBodyClient.firstChild);
	}
	for (let i = 0; i < res.items.length; i++) {
		const client = res.items[i];
		const row = document.createElement('tr');
		row.setAttribute('id', `tr-client-${client.id}`);
		const btnUpdate = document.createElement('button');
		const btnDelete = document.createElement('button');
		btnUpdate.setAttribute('class', 'btn btn-primary mx-2');
		btnDelete.setAttribute('class', 'btn btn-danger mx-2');
		btnUpdate.innerText = 'Update';
		btnDelete.innerText = 'Delete';
		btnUpdate.addEventListener('click', () => updateClient(client));
		btnDelete.addEventListener('click', () => deleteClient(client.id));
		const tdId = document.createElement('td');
		const tdName = document.createElement('td');
		const tdEmail = document.createElement('td');
		const tdAge = document.createElement('td');
		const tdButtons = document.createElement('td');
		tdId.innerText = client.id;
		tdName.innerText = client.name;
		tdEmail.innerText = client.email;
		tdAge.innerText = client.age;
		tdButtons.appendChild(btnUpdate);
		tdButtons.appendChild(btnDelete);
		row.appendChild(tdId);
		row.appendChild(tdName);
		row.appendChild(tdEmail);
		row.appendChild(tdAge);
		row.appendChild(tdButtons);
		tBodyClient.appendChild(row);
	}
};

messageCallback = (res) => {
	tBodyMessage = document.getElementById('tBodyMessage');
	while (tBodyMessage.firstChild) {
		tBodyMessage.removeChild(tBodyMessage.firstChild);
	}
	for (let i = 0; i < res.items.length; i++) {
		const message = res.items[i];
		const row = document.createElement('tr');
		row.setAttribute('id', `tr-message-${message.id}`);
		const btnUpdate = document.createElement('button');
		const btnDelete = document.createElement('button');
		btnUpdate.setAttribute('class', 'btn btn-primary mx-2');
		btnDelete.setAttribute('class', 'btn btn-danger mx-2');
		btnUpdate.innerText = 'Update';
		btnDelete.innerText = 'Delete';
		btnUpdate.addEventListener('click', () => updateMessage(message));
		btnDelete.addEventListener('click', () => deleteMessage(message.id));
		const tdId = document.createElement('td');
		const tdMessagetext = document.createElement('td');
		const tdButtons = document.createElement('td');
		tdId.innerText = message.id;
		tdMessagetext.innerText = message.messagetext;
		tdButtons.appendChild(btnUpdate);
		tdButtons.appendChild(btnDelete);
		row.appendChild(tdId);
		row.appendChild(tdMessagetext);
		row.appendChild(tdButtons);
		tBodyMessage.appendChild(row);
	}
};

updateBoat = (boat) => {
	const row = document.getElementById(`tr-boat-${boat.id}`);
	while (row.firstChild) {
		row.removeChild(row.firstChild);
	}
	const tdId = document.createElement('td');
	const tdBrand = document.createElement('td');
	const tdModel = document.createElement('td');
	const tdCategoryId = document.createElement('td');
	const tdName = document.createElement('td');
	const tdButtons = document.createElement('td');
	const inputBrand = document.createElement('input');
	const inputModel = document.createElement('input');
	const inputCategoryId = document.createElement('input');
	const inputName = document.createElement('input');
	const btnUpdate = document.createElement('button');
	inputBrand.setAttribute('class', 'form-control');
	inputBrand.setAttribute('type', 'text');
	inputModel.setAttribute('class', 'form-control');
	inputModel.setAttribute('type', 'number');
	inputCategoryId.setAttribute('class', 'form-control');
	inputCategoryId.setAttribute('type', 'number');
	inputName.setAttribute('class', 'form-control');
	inputName.setAttribute('type', 'text');
	btnUpdate.setAttribute('class', 'btn btn-primary mx-2');
	tdId.innerText = boat.id;
	inputBrand.value = boat.brand;
	inputModel.value = boat.model;
	inputCategoryId.value = boat.category_id;
	inputName.value = boat.name;
	btnUpdate.innerText = 'Update';
	btnUpdate.addEventListener('click', () => {
		data = {
			id: boat.id,
			brand: inputBrand.value,
			model: inputModel.value,
			category_id: inputCategoryId.value,
			name: inputName.value,
		};
		putBoat(data);
	});
	tdBrand.appendChild(inputBrand);
	tdModel.appendChild(inputModel);
	tdCategoryId.appendChild(inputCategoryId);
	tdName.appendChild(inputName);
	tdButtons.appendChild(btnUpdate);
	row.appendChild(tdId);
	row.appendChild(tdBrand);
	row.appendChild(tdModel);
	row.appendChild(tdCategoryId);
	row.appendChild(tdName);
	row.appendChild(tdButtons);
};

updateClient = (client) => {
	const row = document.getElementById(`tr-client-${client.id}`);
	while (row.firstChild) {
		row.removeChild(row.firstChild);
	}
	const tdId = document.createElement('td');
	const tdName = document.createElement('td');
	const tdEmail = document.createElement('td');
	const tdAge = document.createElement('td');
	const tdButtons = document.createElement('td');
	const inputName = document.createElement('input');
	const inputEmail = document.createElement('input');
	const inputAge = document.createElement('input');
	const btnUpdate = document.createElement('button');
	inputName.setAttribute('class', 'form-control');
	inputName.setAttribute('type', 'text');
	inputEmail.setAttribute('class', 'form-control');
	inputEmail.setAttribute('type', 'email');
	inputAge.setAttribute('class', 'form-control');
	inputAge.setAttribute('type', 'number');
	btnUpdate.setAttribute('class', 'btn btn-primary mx-2');
	tdId.innerText = client.id;
	inputName.value = client.name;
	inputEmail.value = client.email;
	inputAge.value = client.age;
	btnUpdate.innerText = 'Update';
	btnUpdate.addEventListener('click', () => {
		data = {
			id: client.id,
			name: inputName.value,
			email: inputEmail.value,
			age: inputAge.value,
		};
		putClient(data);
	});
	tdName.appendChild(inputName);
	tdEmail.appendChild(inputEmail);
	tdAge.appendChild(inputAge);
	tdButtons.appendChild(btnUpdate);
	row.appendChild(tdId);
	row.appendChild(tdName);
	row.appendChild(tdEmail);
	row.appendChild(tdAge);
	row.appendChild(tdButtons);
};

updateMessage = (message) => {
	const row = document.getElementById(`tr-message-${message.id}`);
	while (row.firstChild) {
		row.removeChild(row.firstChild);
	}
	const tdId = document.createElement('td');
	const tdMessagetext = document.createElement('td');
	const tdButtons = document.createElement('td');
	const inputMessagetext = document.createElement('input');
	const btnUpdate = document.createElement('button');
	inputMessagetext.setAttribute('class', 'form-control');
	inputMessagetext.setAttribute('type', 'text');
	btnUpdate.setAttribute('class', 'btn btn-primary mx-2');
	tdId.innerText = message.id;
	inputMessagetext.value = message.messagetext;
	btnUpdate.innerText = 'Update';
	btnUpdate.addEventListener('click', () => {
		data = {
			id: message.id,
			messagetext: inputMessagetext.value,
		};
		putMessage(data);
	});
	tdMessagetext.appendChild(inputMessagetext);
	tdButtons.appendChild(btnUpdate);
	row.appendChild(tdId);
	row.appendChild(tdMessagetext);
	row.appendChild(tdButtons);
};

getBoat = () => {
	$.ajax({
		url: 'https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/boat/boat',
		type: 'GET',
		datatype: 'JSON',
		success: (res) => {
			boatCallback(res);
		},
	});
};

getClient = () => {
	$.ajax({
		url: 'https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
		type: 'GET',
		datatype: 'JSON',
		success: (res) => {
			clientCallback(res);
		},
	});
};

getMessage = () => {
	$.ajax({
		url: 'https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
		type: 'GET',
		datatype: 'JSON',
		success: (res) => {
			messageCallback(res);
		},
	});
};

postBoat = (e) => {
	e.preventDefault();
	const data = {
		id: Number($('#idBoat').val()),
		brand: $('#brandBoat').val(),
		model: Number($('#modelBoat').val()),
		category_id: Number($('#categoryIdBoat').val()),
		name: $('#nameBoat').val(),
	};
	$.ajax({
		url: 'https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/boat/boat',
		type: 'POST',
		datatype: 'JSON',
		data: data,
		success: (res) => {
			getBoat();
		},
	});
};

postClient = (e) => {
	e.preventDefault();
	const data = {
		id: Number($('#idClient').val()),
		name: $('#nameClient').val(),
		email: $('#emailClient').val(),
		age: Number($('#ageClient').val()),
	};
	$.ajax({
		url: 'https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
		type: 'POST',
		datatype: 'JSON',
		data: data,
		success: (res) => {
			getClient();
		},
	});
};

post_Message = (e) => {
	e.preventDefault();
	const data = {
		id: Number($('#idMessage').val()),
		messagetext: $('#messageMessagetext').val(),
	};
	console.log(data);
	$.ajax({
		url: 'https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
		type: 'POST',
		datatype: 'JSON',
		data: data,
		success: (res) => {
			console.log(res);
			getMessage();
		},
	});
};

putBoat = (data) => {
	$.ajax({
		url: 'https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/boat/boat',
		type: 'PUT',
		datatype: 'JSON',
		contentType: 'application/JSON',
		data: JSON.stringify(data),
		success: (res) => {
			getBoat();
		},
	});
};

putClient = (data) => {
	$.ajax({
		url: 'https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
		type: 'PUT',
		datatype: 'JSON',
		contentType: 'application/JSON',
		data: JSON.stringify(data),
		success: (res) => {
			getClient();
		},
	});
};

putMessage = (data) => {
	$.ajax({
		url: 'https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
		type: 'PUT',
		datatype: 'JSON',
		contentType: 'application/JSON',
		data: JSON.stringify(data),
		success: (res) => {
			getMessage();
		},
	});
};

deleteBoat = (id) => {
	$.ajax({
		url: `https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/boat/boat/${id}`,
		type: 'DELETE',
		datatype: 'JSON',
		success: (res) => {
			getBoat();
		},
	});
};

deleteClient = (id) => {
	$.ajax({
		url: `https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/${id}`,
		type: 'DELETE',
		datatype: 'JSON',
		success: (res) => {
			getClient();
		},
	});
};

deleteMessage = (id) => {
	$.ajax({
		url: `https://gaec862dd147e3d-dbretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/${id}`,
		type: 'DELETE',
		datatype: 'JSON',
		success: (res) => {
			getMessage();
		},
	});
};

getBoat();
getClient();
getMessage();
