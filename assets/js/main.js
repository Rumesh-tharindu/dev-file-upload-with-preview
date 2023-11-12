$(document).ready(function () {
	const fileInput = $('#fileInput');
	const filesWrapper = $('.files');

	fileInput.on('change', function () {
		let fileName = $(this).val().split('\\').pop();
		filesWrapper.append(
			`<div class='file'>
        <div class="fileLeft">
          <img src='./assets/images/pages/fileupload/file.png' />
          <p>  ${fileName}</p>
        </div>
        .<button class="fileAction">
          <img src='./assets/images/icons/cross-icon.png' />
        </button>
            
           </div>`
		);
	});
});
