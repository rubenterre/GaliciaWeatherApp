<script>
    //Fases lunares

/*

let day = new Date().getDay()
let mes = new Date().getMonth() + 1;
let year = new Date().getFullYear();

const fechaHoy = `${year}-${mes}-${day}`;
console.log(fechaHoy)


const fetchLuna = (async () => {
	const dataLuna = await fetch(`https://api.met.no/weatherapi/sunrise/2.0/.json?date=${fechaHoy}&lat=40&lon=-8&offset=%2B01%3A00`)
    return await dataLuna.json()
    })()

*/

function load_moon_phases(obj, callback) {
    var gets = []
    for (var i in obj) {
        gets.push(i + "=" + encodeURIComponent(obj[i]))
    }
    gets.push("LDZ=" + new Date(obj.year, obj.month - 1, 1) / 1000)
    var xmlhttp = new XMLHttpRequest()
    var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&")
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(JSON.parse(xmlhttp.responseText))
        }
    }
    xmlhttp.open("GET", url, true)
    xmlhttp.send()
}


function example_2(moon) {
    var phMax = []
    for (var nDay in moon.phase) {
        if (moon.phase[nDay].isPhaseLimit) {
            phMax.push(
                '<div>' +
                '<span>' + nDay + '</span>' +
                moon.phase[nDay].svg +
                '</div>'
            )
        }
    }
    var width = 100 / phMax.length
    var html = "<b>" + "" + "</b>"
    phMax.forEach(function (element) {
        html += '<div style="width:' + width + '%;padding:10px;">' + element + '</div>'
    })
    document.getElementById("ex2").innerHTML = html
}
var configMoon = {
    lang: 'es',
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    size: "100%",
    lightColor: "rgb(255,255,230)",
    shadeColor: "transparent",
    texturize: true,
}
load_moon_phases(configMoon, example_2)

</script>

<div class="white-text">
<div class="container">
    <div class="row">
        <div class="fases_lunares col s12">
            <p>Fases da lúa deste mes</p>
            <div id="ex2">
            </div>
        </div>
    </div>
</div>
</div>

<style>
    /*Fases lunares */

    #ex2 {
    width: 100%;
    margin: 10px auto;
    color: white;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-bottom: 10px;
}

#ex2>b {
    display: block;
    font-size: 14px;
    text-align: center;
    padding-bottom: 20px;
}

#ex2>div {
    display: inline-block;
    vertical-align: top;
}

#ex2>div>div {
    margin: 1%;
    padding: 1%;
}

#ex2>div>div>span {
    font-size: 20px;
}

#ex2>div>div>div {
    font-size: 14px;
    text-align: center;
    overflow-x: hidden;
    display: none;
}

#ex2>div>div>svg {
    width: 60%;
    display: block;
    margin: 10px auto 0 auto;
}

</style>