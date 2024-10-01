document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('div.highlight pre').forEach(function(block) {
        var button = document.createElement('button');
        button.className = 'copy-button';
        button.type = 'button';
        button.innerHTML = '&#x1F4CB;'; // Clipboard icon

        button.addEventListener('click', function () {
            var code = block.innerText;
            var area = document.createElement('textarea');
            document.body.appendChild(area);
            area.value = code;
            area.select();
            document.execCommand('copy');
            document.body.removeChild(area);
            button.innerHTML = 'Copied!';
            setTimeout(function() {
                button.innerHTML = '&#x1F4CB;';
            }, 2000);
        });

        var div = document.createElement('div');
        div.className = 'copy-code';
        block.parentNode.insertBefore(div, block);
        div.appendChild(block);
        div.appendChild(button); // Append the button after the block
    });
});
