
(function () {

    let jsonData = null;

    function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event) {
        console.log(event.target.result);
        jsonData = JSON.parse(event.target.result);
        createButtons();
    }

    function createButtons() {
        if (jsonData == null)
            return;

        for (const emocion in jsonData){
            console.log(emocion)
        
            const newButton = document.createElement('button');
            newButton.textContent = emocion;
            newButton.id = emocion;
            newButton.addEventListener('click', rollText);
            document.getElementById('buttons_div').appendChild(newButton);
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    function rollText(event) {
        const options = jsonData[event.target.id];
        const textArea = document.getElementById('log');
        textArea.innerHTML += options[getRandomInt(options.length)] + "\n";
        textArea.scrollTop = textArea.scrollHeight;
    }

    document.getElementById('file').addEventListener('change', onChange);

}());