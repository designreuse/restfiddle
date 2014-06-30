/* global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

$(function() {
    'use strict';

    function send() {
	var item = {
	    apiUrl : $("#apiUrl").val(),
	    methodType : $(".apiRequestType").val(),
	    apiBody : $("#apiBody").val()
	};

	$.ajax({
	    url : '/api/processor',
	    type : 'post',
	    dataType : 'json',
	    contentType : "application/json",
	    success : function(response) {
		console.log("####" + response);
		$("#response-wrapper").html('<pre class="prettyprint">' + JSON.stringify(response, null, 4) + '</pre>');
		prettyPrint();
	    },
	    data : JSON.stringify(item)
	});
    }

    function saveWorkspace() {
		var newWorkspace = new app.Workspace({
		    name : $("#workspaceTextField").val(),
		});
		newWorkspace.save(null, {success : function(){
			$("#workspaceModal").modal("hide");
		}, error : function(e){
			$("#workspaceModal").modal("hide");
			alert('Some unexpected error occured Please try later.');
		}});
    }

    $("#run").bind("click", send);
    $("#saveWorkspaceBtn").bind("click", saveWorkspace);

});