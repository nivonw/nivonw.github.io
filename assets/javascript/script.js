function execute() {
    var startBtn = document.getElementById("start");
    var spinner = document.getElementById("loadingSpinner");

    function showSpinner() {
        spinner.style.display = "inline-block";
    }

    function hideSpinner() {
        spinner.style.display = "none";
    }

    function startHandler() {
        showSpinner();
        setTimeout(function() {
            hideSpinner();
            startBtn.id = "stop";
            startBtn.innerText = "Stop";
            startBtn.removeEventListener('click', startHandler);
            startBtn.addEventListener('click', stopHandler);
        }, 3000);
    }

    function stopHandler() {
        showSpinner();
        setTimeout(function() {
            hideSpinner();
            startBtn.id = "start";
            startBtn.innerText = "Start";
            startBtn.removeEventListener('click', stopHandler);
            startBtn.addEventListener('click', startHandler);
        }, 3000);
    }

    startBtn.addEventListener('click', startHandler);
}



function showTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.add('active');
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.remove('active');
}

function updateTooltipPosition(e) {
    const x = e.clientX - 250;
    const y = e.clientY - 300;

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

function toggle() {
    const onOffElements = document.querySelectorAll('.on_off');

    onOffElements.forEach(function (onOffElement) {
        onOffElement.addEventListener('click', function () {
            const isActive = onOffElement.classList.contains('active');

            if (!isActive) {
                onOffElement.classList.add('active');
            } else {
                onOffElement.classList.remove('active');
            }
        });
    });
};

function executeCommand() {
    var input = document.getElementById('consoleInput').value;
    var output = document.getElementById('consoleOutput');
    if (input.trim()) {
        output.innerHTML += '<div id="output">' + input + '</div>';
        document.getElementById('consoleInput').value = '';
        output.scrollTop = output.scrollHeight; 
    }
}

function showPage(pageId) {
    var pages = document.querySelectorAll('.content > div');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    var selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        if (pageId == "console-page") {
            selectedPage.style.display = 'flex';
        } else {
            selectedPage.style.display = 'block';
        }
    }
}

document.addEventListener('DOMContentLoaded', execute)
//document.addEventListener('DOMContentLoaded', toggle);
//document.addEventListener('mousemove', updateTooltipPosition); 