<%
	//Thread.sleep(4000);
	String country = request.getParameter("country");
	//String json = {"capital":"New Delhi","continent":"Asia""};
	if("India".equalsIgnoreCase(country))
		out.println("{\"capital\":\"New Delhi\",\"continent\" : \"Asia\"}");
	else if("UK".equalsIgnoreCase(country))
		out.println("{\"capital\":\"London\",\"continent\" : \"Europe\"}");
	else
		out.println("{\"capital\":\"Unknown\",\"continent\" : \"Unknown\"}");
%>