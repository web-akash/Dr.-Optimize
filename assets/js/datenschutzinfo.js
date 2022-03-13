function drittanbieterapps_laden()
{
	// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
	// (function(){
	// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
	// s1.async=true;
	// s1.src='https://embed.tawk.to/5d001befb534676f32ae6f76/default';
	// s1.charset='UTF-8';
	// s1.setAttribute('crossorigin','*');
	// s0.parentNode.insertBefore(s1,s0);
	// })();	
}
function datenschutzinfo()
{
	var datenschutzinfo_angezeigt = localStorage.getItem("datenschutzinfo_angezeigt");
	if(datenschutzinfo_angezeigt != 'ja')
	{
		var datenschutzDiv = document.createElement('div');
		datenschutzDiv.id = 'datenschutzinformation';
		datenschutzDiv.style = 'text-align:center; width:100%; display: block; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); font-family: inherit; font-size:11px; bottom: 0px; border-top: 4px solid rgb(68, 68, 68); position: fixed; z-index: 2000000002 !important; padding:5px;';
		document.body.appendChild(datenschutzDiv);
		setTimeout(function(){ datenschutzinfo_anzeigen() }, 100);
	}
	else
	{
			drittanbieterapps_laden();
	}
}
function datenschutzinfo_anzeigen()
{
	document.getElementById('datenschutzinformation').innerHTML = 'Ich (<a href="https://www.drgersch.de/#impressum" target="_blank">Impressum</a>) setze <a href="https://www.drgersch.de/#datenschutz" target="_blank">Cookies und Trackingtools</a> ein; mit der Nutzung des Angebots erkl&auml;ren Sie sich damit einverstanden, k&ouml;nnen dem aber mithilfe der <a href="https://www.drgersch.de/#datenschutz" target="_blank">Datenschutzerkl&auml;rung</a> <a href="https://www.drgersch.de/#datenschutz" target="_blank">widersprechen</a>. <input type="button" onclick="datenschutz_zustimmung();" name="button_zustimmung" value="OK, ich stimme zu" style="background-color:#f4f1ea; border-radius:5px; border:1px solid #18ab29; display:inline-block; cursor:pointer; color:#000000; font-size:11px; padding:3px 8px; text-decoration:none; letter-spacing:0.1em; text-transform:none; line-height:1rem; height:1.5rem;">';
}
function datenschutz_zustimmung()
{
	localStorage.setItem('datenschutzinfo_angezeigt', 'ja');
	document.getElementById('datenschutzinformation').innerHTML = 'Sie haben in die Speicherung von Cookies, in die Verwendung von Tracking und Analysetools eingewilligt. Diese Einwilligung k&ouml;nnen Sie jederzeit <a href="https://www.drgersch.de/#datenschutz" target="_blank">widerrufen</a>';
	
	
	if(Vimeo != undefined)
	{
		var iframelokal = document.querySelector('iframe');
		var playerlokal = new Vimeo.Player(iframelokal);
		playerlokal.play();
	}
	
	drittanbieterapps_laden();	
	setTimeout(function(){ ausblenden_nach_consent() }, 7500);
}

function ausblenden_nach_consent()
{
	var element = document.getElementById('datenschutzinformation');
    element.parentNode.removeChild(element);
	// document.getElementById('datenschutzinformation').innerHTML = ''
}

setTimeout(function(){ datenschutzinfo() }, 100);