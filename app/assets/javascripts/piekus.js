$(function() {

	// var somePieku = new Pieku({line1: "", ....})

	var piekuController = {

		template: $('#post-template').html(),

		allPiekus: [],

		all: function() {
			$.get('/piekus', function (data) {
				allPiekus = data;
				piekuController.addEventHandlers();
			});
		},

		getPieku: function (id) {

			return find(allPiekus).attr('#pieku.id');
		},

		update: function(id, title, line1, line2, line3) {

			$.ajax({
				type: 'PUT',
				url: '/piekus/' + id,
				data: {
					title: title,
					line1: line1,
					line2: line2,
					line3: line3
				},
				success: function (d) {
					var $piekuHtml = $(piekuController.template(data));
					$('#pieku-' + piekuId.replaceWith($piekuHtml));
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(textStatus);
				}
			});
		},

		addEventHandlers: function () {
			$('update-pieku').on('submit', function (e){

				event.preventDefault();
		
				var piekuId = $(this).find('.update-id').val();
				var updateTitle = $(this).find('.update-title').val();
				var updateLine1 = $(this).find('.update-line1').val();
				var updateLine2 = $(this).find('.update-line2').val();
				var updateLine3 = $(this).find('.update-line3').val();
				piekuController.update(piekuId, updateTitle, updateLine1, updateLine2, updateLine3);

				// reset form
				$(this)[0].reset();
				$('#update-pieku').focus();

				// hides modal and give alert upon submit
				$('#updateModal').modal('hide');
			});
		}
	};

	$('#updateModal').on('shown.bs.modal', function (e) {
		$('#update-title').focus();
	});

	$('#updateModal').on('show.bs.modal', function (e) {
		// update button in html
		var button = $(event.relatedTarget);
		// retrieving id of made pieku
		var id = button.data('pieku-id');
		// Gets the pieku data
		var pieku = piekuController.getPieku(id);
		// reference to modal
		var modal = $(this);
		// giving values of pieku prior to update.
		modal.find('.update-id').val(id);
		modal.find('.update-title').val(pieku.title);
		modal.find('.update-line1').val(pieku.line1);
		modal.find('.update-line2').val(pieku.line2);
		modal.find('.update-line3').val(pieku.line3);
	});

});

