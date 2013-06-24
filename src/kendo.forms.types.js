(function (kendo) {
	kendo.forms = kendo.forms || {};
	
	function dateTimeUpgrade(index, val) {
		var input = $(val);

		input.kendoDateTimePicker({
			value: input.val().length > 0 ? new Date(input.val()) : null,
			min: input.attr('min') ? new Date(input.attr('min')) : new Date(1900, 0, 1),
			max: input.attr('max') ? new Date(input.attr('max')) : new Date(2099, 11, 31),
			// Step attribute is seconds, interval in minute
			interval: input.attr('step') ? Math.round(parseInt(input.attr('step'), 10)/60) : 30
		});
	}

	var typeUpgrades = [
		{ 
			type: 'color',
			upgrade: function(index, val) {
				$(val).kendoColorPicker({ palette: "basic" });
			}
		},
		{
			type: 'number',
			upgrade: function(index, val) {
				$(val).kendoNumericTextBox();
			}
		},
		{
			type: 'range',
			upgrade: function(index, val) {
				$(val).kendoSlider({
					showButtons: false,
					tickPlacement: 'none'
				});
			}
		},
		{
			type: 'file',
			upgrade: function(index, val) {
				$(val).kendoUpload();
			}
		},
		{
			type: 'datetime',
			upgrade: dateTimeUpgrade
		},
		{
			type: 'datetime-local',
			upgrade: dateTimeUpgrade
		}
	];

	kendo.forms.types = typeUpgrades;
} (kendo));