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
	document.getElementById('datenschutzinformation').innerHTML = 'Dr. Gersch (<a href="https://www.drgersch.de/english#imprint" target="_blank">imprint</a>) uses <a href="https://www.drgersch.de/english#privacy" target="_blank">cookies and tracking tools</a>. By using this website you agree with that, but you may <a href="https://www.drgersch.de/english#privacy" target="_blank">at any time via my privacy policy</a>. <input type="button" onclick="datenschutz_zustimmung();" name="button_zustimmung" value="OK, I agree" style="background-color:#f4f1ea; border-radius:5px; border:1px solid #18ab29; display:inline-block; cursor:pointer; color:#000000; font-size:11px; padding:3px 8px; text-decoration:none; letter-spacing:0.1em; text-transform:none; line-height:1rem; height:1.5rem;">';
}
function datenschutz_zustimmung()
{
	localStorage.setItem('datenschutzinfo_angezeigt', 'ja');
	document.getElementById('datenschutzinformation').innerHTML = 'You have agreed in this website using cookies and tracking tools. You may revoke this at any time using the <a href="https://www.drgersch.de/english#privacy" target="_blank">privacy policy</a>';
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