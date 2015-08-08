/* Kurdish/KU initialisation for the jQuery UI date picker plugin. */
/* Written by Ako. */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['ku-KU'] = {
	closeText: 'داخستن',
	prevText: 'رابوورد',
	nextText: 'دواتر',
	currentText: 'ئەمرۆ',
	monthNames: ['کانوونی دووەم','شوبات','ئادار','نیسان','ئایار','حوزەیران',
	'تەمووز','ئاب','ئەیلوول','تشرینی یەکەم','تشرینی دووەم','کانوونی یەکەم'],
	monthNamesShort: ['یەک', 'دوو', 'سێ', 'چوار', 'پێنج', 'شەش',
	'حەوت', 'هەشت', 'نۆ', 'دە', 'یانزە', 'دوانزە'],
	dayNames: ['یەکشەممە', 'دووشەممە', 'سێشەممە', 'چوارشەممە', 'پێنجشەممە', 'هەینی', 'شەممە'],
	dayNamesShort: ['یەک','دوو','سێ','چوار','پێنج','هەینی','شەممە'],
	dayNamesMin: ['ی','د','س','چ','پ','هـ','ش'],
	weekHeader: 'هەفتە',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: true,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['ku']);

return datepicker.regional['ku'];

}));
