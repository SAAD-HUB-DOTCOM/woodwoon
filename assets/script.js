  document.getElementById('nav-icon-1').addEventListener('click', function () {
            var chatBox = document.getElementById('navformat1');
            var overlay = document.getElementById('overlay-1');

            if (chatBox.style.display === 'none' || chatBox.style.display === '') {
                chatBox.style.display = 'block';
                overlay.style.display = 'block';


            } else {
                chatBox.style.display = 'none';
                overlay.style.display = 'none';

            }
  });
        
   document.addEventListener('click', function (event) {
            var chatBox = document.getElementById('navformat1');
            var overlay = document.getElementById('overlay-1');
            var navIcon = document.getElementById('nav-icon-1');

            // Check if the click was outside the chat box and the nav icon
            if (!chatBox.contains(event.target) && !navIcon.contains(event.target)) {
                chatBox.style.display = 'none';
                overlay.style.display = 'none';
            }
   });

    document.getElementById('whatsappToggle').addEventListener('click', function () {
         var chatBox = document.getElementById('whatsappChat');
            if (chatBox.style.display === 'none' || chatBox.style.display === '') {
                chatBox.style.display = 'block';
            } else {
                chatBox.style.display = 'none';
            }
    });
        
 
    
        
  

            