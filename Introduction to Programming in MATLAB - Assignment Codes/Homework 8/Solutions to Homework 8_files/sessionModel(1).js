define(["bundles/assess/lib/backbone.hascollections","q"],function(HasCollectionsModel,Q){var SessionModel=HasCollectionsModel.extend({callSessionAction:function(name,argument){var url="sessions/"+this.get("sessionId")+"/action/"+name;return Q(this.options.api.post(url,{data:{argument:argument}})).then(function(data){return data["return"]})},callGetOrCreateSession:function(){return Q(this.options.api.post("sessions")).then(function(data){return data.session.id})}});return SessionModel});