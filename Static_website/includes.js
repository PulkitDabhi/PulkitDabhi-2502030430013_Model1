document.addEventListener('DOMContentLoaded', function() {
    var includes = document.querySelectorAll('[data-include]');
    includes.forEach(function(el) {
        var url = el.getAttribute('data-include');
        if (!url) {
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status === 200 || xhr.status === 0) {
                el.innerHTML = xhr.responseText;
            } else {
                console.error('Could not load include:', url, 'status:', xhr.status);
            }
        };
        xhr.send();
    });
});
