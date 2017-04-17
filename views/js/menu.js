$(document).ready(function() {

	const espressoItems = {
		espressoShot: {
			title: {
				text: 'Espresso Shot',
				price: ''
			},
			rows: [
				{
					text: '1 shot',
					price: '2.10'
				},
				{
					text: '2 shots',
					price: '2.35'
				}
			]
		},
		macchiato: {
			title: {
				text: 'Macchiato',
				price: ''
			},
			rows: [
				{
					text: '1 shot',
					price: '2.25'
				},
				{
					text: '2 shots',
					price: '2.95'
				}
			]
		},
		latte: {
			title: {
				text: 'Latte',
				price: ''
			},
			rows: [
				{
					text: 'small',
					price: '3.50'
				},
				{
					text: 'medium',
					price: '3.75'
				},
				{
					text: 'large',
					price: '4.50'
				}

			]
		}

	};

	const itemRows = (rows) => {
		rows.map( (row) => {
			return (
				'<div class="item-row"' +
				'<span class="sub-title">' + row.text + '</span>' +
				'<span class="price">' + row.price + '</span>'
			);
		});
	};

	const menuTemplate = (section, divClass) => {
		$(divClass).html(function() {
			let sectionDisplay;
			return sectionDisplay = section.map( (item) => {
				return(
					'<div class="item"' +
					'  <div class="item-row"' +
					'    <span class="title">' + item.title.text + '</span>' +
					'    <span class="price"' + item.title.price + '</span>' +
					itemRows(item.rows) +
					'</div>'
				);
			});
		});
	};

	menuTemplate(espressoItems, '#espressoItems');

});
