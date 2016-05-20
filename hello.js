function loadInfo(username){
		$.ajax({
			url: "https://api.github.com/users/+username+?client_id=e88d129cce8c83096aca&client_secret=690da0736d3536e9df6c5bb8a231848fea02254c"
		}).then(function(data){
			document.getElementById("img").src = data.avatar_url;
			$('.id').append(data.id);
			$('.avatar').append(data.login);
			$('.email').append(data.email);
			$('.login').append(data.login);
		});
}




$(document).ready(function() {
	$('#userdata').on('click', function() {
            var username = $('#username').val();
            $('.returned_data').empty();
            loadInfo(username);
        });


            
});







