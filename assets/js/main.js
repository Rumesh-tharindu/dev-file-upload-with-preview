$(document).ready(function () {
	const fileInput = $('#fileInput');
	const filesWrapper = $('.files');

	fileInput.on('change', function () {
		let fileName = $(this).val().split('\\').pop();
		filesWrapper.html(
			`<div class='file'>
        <div class="fileLeft">
          <img src='./assets/images/pages/fileupload/file.png' />
          <p>${fileName}</p>
        </div>
        .<button class="fileAction">
          <img src='./assets/images/icons/cross-icon.png' />
        </button>
            
           </div>`
		);

		// If you want to make on method to attach handlers to elements dynamically created, you should use it like this:

		$('.file').on('click', '.fileAction', function (ev) {
			$(this).parent().remove();
		});
	});
});
