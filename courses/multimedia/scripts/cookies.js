// JavaScript Document

// Cookie functions
function setCookie(cookieName, cookieValue) {   // Store a cookie in the webbrowser for later use, like save files
	
	document.cookie = cookieName + "=" + cookieValue + ";expires=" + expireDate(100);
	
} // End setCookie



function expireDate(d) {   // Set a time limit for the cookie to store, prevents external storage in a webbrowser
	
	// Local variables
	var theDate = new Date();
	
	theDate.setTime(theDate.getTime()+(d*86400000));
	return theDate.toUTCString();

} // End expireDate



function getCookie(cookieName) {   // Read data from a stored cookie in a webbrowser (should only use if cookie exists)
	
	// Local variables
	var start, end, valueStr;
	
	start = document.cookie.indexOf(cookieName);
	if (start > -1) {
		start += cookieName.length + 1;
		end = document.cookie.indexOf(";", start);
		if (end < start)
			end = document.cookie.length;
		valueStr = document.cookie.substring(start, end);
		return valueStr;
	}
	else return null;
	
} // End getCookie