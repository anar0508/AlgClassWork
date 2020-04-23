const body = {
    'properties': { 'title': 'Название документа', 'locale': 'ru_RU' },
    'sheets': [
        {
            'properties': {
                'sheetType': 'GRID',
                'sheetId': 0,
                'title': 'Название листа',
                'gridProperties': {
                    'rowCount': 8,
                    'columnCount': 5
                }
            }
        }
    ]
};

fetch(`https://sheets.googleapis.com/v4/spreadsheets`, {
	method: `POST`,
	body: JSON.stringify(body),
	headers: {
		Authorization: `Bearer YOUR_TOKEN`
	}
})
