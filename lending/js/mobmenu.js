$('.chdiv').click(function() {
			$('#content div').hide();
			var target = '#' + $(this).data('target');
			$(target).show();
			$("input[type='checkbox']").prop('checked', false)
		})