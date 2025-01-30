const canvas = document.getElementById("stella");
const stella = canvas.getContext("2d");
let passo = 0;
stella.lineWidth = 7;
stella.strokeStyle = "#FFF000";

function passi() {
    stella.beginPath(); 

    switch (passo) {
        case 5:
            stella.arc(250, 250, 200, 0, 2 * Math.PI);
            stella.stroke();
            passo++;
            break;
        case 0:
            stella.moveTo(125, 400);
            stella.lineTo(250, 53);
            stella.stroke();
            passo++;
            break;
        case 1:
            stella.moveTo(250, 53);
            stella.lineTo(375, 400);
            stella.stroke();
            passo++;
            break;
        case 2:
            stella.moveTo(375, 400);
            stella.lineTo(70, 175);
            stella.stroke();
            passo++;
            break;
        case 3:
            stella.moveTo(70, 175);
            stella.lineTo(430, 175);
            stella.stroke();
            passo++;
            break;
        case 4:
            stella.moveTo(430, 175);
            stella.lineTo(125, 400);
            stella.stroke();
            passo++;
            break;
        default:
            stella.clearRect(0, 0, canvas.width, canvas.height);
            passo=0;
            break;
    }
}

function istantaneo() {
    passo=10;
    stella.beginPath();
    stella.arc(250, 250, 200, 0, 2 * Math.PI);
    stella.moveTo(125, 400);
    stella.lineTo(250, 53);
    stella.lineTo(375, 400);
    stella.lineTo(70, 175);
    stella.lineTo(430, 175);
    stella.lineTo(125, 400);
    stella.stroke();
}
