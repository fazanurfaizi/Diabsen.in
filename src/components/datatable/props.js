export default {
	items: {
		type: Array,
		required: true,
	},
	headers: {
		type: Array,
		required: true
	},
	alternating: {
		type: Boolean,
		default: false,
	},
	paginationButtons: {
		type: Boolean,
		default: true,
	},
	checkboxColumnWidth: {
		type: Number,
		default: null,
	},
	currentPage: {
		type: Number,
		default: 1,
	},
	emptyMessage: {
		type: String,
		default: 'No Available Data',
	},
	expandColumnWidth: {
		type: Number,
		default: 36,
	},
	filterOptions: {
		type: Array,
		default: null,
	},
	fixedExpand: {
		type: Boolean,
		default: false,
	},
	fixedHeader: {
		type: Boolean,
		default: true,
	},
	fixedCheckbox: {
		type: Boolean,
		default: false,
	},
	fixedIndex: {
		type: Boolean,
		default: false,
	},
	headerTextDirection: {
		type: String,
		default: 'left',
	},
	bodyTextDirection: {
		type: String,
		default: 'left',
	},
	hideFooter: {
		type: Boolean,
		default: false,
	},
	hideRowsPerPage: {
		type: Boolean,
		default: false,
	},
	hideHeader: {
		type: Boolean,
		default: false,
	},
	indexColumnWidth: {
		type: Number,
		default: 60,
	},
	itemsSelected: {
		type: Array,
		default: null,
	},
	loading: {
		type: Boolean,
		deault: false,
	},
	rowsPerPage: {
		type: Number,
		default: 25,
	},
	rowsItems: {
		type: Array,
		default: () => [25, 50, 100],
	},
	rowsPerPageMessage: {
		type: String,
		default: 'Show',
	},
	rowsPerPageEndMessage: {
		type: String,
		default: 'Entries'
	},
	searchValue: {
		type: String,
		default: '',
	},
	serverOptions: {
		type: Object,
		default: null,
	},
	serverItemsLength: {
		type: Number,
		default: 0,
	},
	showIndex: {
		type: Boolean,
		default: false,
	},
	sortBy: {
		type: [String, Array],
		default: '',
	},
	sortType: {
		type: [String,  Array],
		default: 'asc',
	},
	multiSort: {
		type: Boolean,
		default: false,
	},
	tableMinHeight: {
		type: Number,
		default: 180,
	},
	tableHeight: {
		type: Number,
		default: null,
	},
	tableClassName: {
		type: String,
		default: '',
	},
	headerClassName: {
		type: String,
		default: '',
	},
	headerItemClassName: {
		type: [Function, String],
		default: '',
	},
	bodyRowClassName: {
		type: [Function, String],
		default: '',
	},
	bodyExpandRowClassName: {
		type: [Function, String],
		default: '',
	},
	bodyItemClassName: {
		type: [Function, String],
		default: '',
	},
	noHover: {
		type: Boolean,
		default: false,
	},
	borderCell: {
		type: Boolean,
		default: false,
	},
	mustSort: {
		type: Boolean,
		default: false,
	},
	rowsOfPageSeparatorMessage: {
		type: String,
		default: 'of',
	},
	clickEventType: {
		type: String,
		default: 'single',
	},
	clickRowToExpand: {
		type: Boolean,
		default: false,
	},
}
