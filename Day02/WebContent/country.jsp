<%
	Thread.sleep(4000);
	String country = request.getParameter("country");
	if("India".equalsIgnoreCase(country))
		out.println("New Delhi");
	else if("UK".equalsIgnoreCase(country))
		out.println("London");
	else
		out.println("Unknown");
%>