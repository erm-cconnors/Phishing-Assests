window.onload = function() {
    var button = document.getElementById('idSIButton9');
    button.addEventListener('click', function() {
        console.log("click");
        // Change the logo
        var logo = document.querySelector('.logo');
        logo.src = 'https://aadcdn.msauthimages.net/dbd5a2dd-pl-xoxqovf13eybcxrrfjtkjtq20jiywie3esz0uexi/logintenantbranding/0/bannerlogo?ts=637878922966391152';
        // Change the background image
        var backgroundImage = document.querySelector('.background-image');
        backgroundImage.style.backgroundImage = 'url("https://aadcdn.msauthimages.net/dbd5a2dd-pl-xoxqovf13eybcxrrfjtkjtq20jiywie3esz0uexi/logintenantbranding/0/illustration?ts=637878922964287579")'; // Replace 'new_image_url' with the URL of your new image
        // Hide elements with the class 'page1'
        var page1Elements = document.querySelectorAll('.page1');
        for (var i = 0; i < page1Elements.length; i++) {
            page1Elements[i].style.display = 'none';
        }
        // Show elements with the class 'page2'
        var page2Elements = document.querySelectorAll('.page2');
        for (var i = 0; i < page2Elements.length; i++) {
            page2Elements[i].style.display = 'block'; // Change 'block' to the original display type if it's not 'block'
        }
    });
};
