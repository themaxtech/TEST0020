/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */ 


var app = {
    SOME_CONSTANTS : false,  // some constant


    // Application Constructor
    initialize: function() {
        console.log("console log init");
        this.bindEvents();
        this.initFastClick();
        alert("initialize"); 
         try {
            var pushNotification = window.plugins.pushNotification;
            alert("try");
            
        }
        catch(err) {
            
            //document.getElementById("demo").innerHTML = err.message;
            alert("Try Error : -- " + err.message)
        } 

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
    },
    initFastClick : function() {
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
    },
    // Phonegap is now ready...
    

    onDeviceReady: function() {
        console.log("device ready, start making you custom calls!"); 
        alert("Am ready"); 
        getDeviceToken();
         
    } 

};

app.initialize();

getDeviceToken = function(){
    if(typeof device != "undefined" && typeof cordova == "object"){
        var getToken = function(types, success, fail){
            cordova.exec(success, fail, "PushToken", "getToken", types);
        }
        getToken(["getToken"], function(token){
            device.token = token;
            alert(" Device Token Success" + token);
            return token;
            
         }, function(e){
             console.log("cannot get device token: "+e);
             alert(" Device Token Error" + e);
             return false;
         });
    }else{
        // console.log("device not ready, or not a native app");
        alert("device not ready, or not a native app");
        return false;

    }
}

getLastPushMessage = function(){
    if(typeof device != "undefined" && typeof cordova == "object"){
        var getMessageFromIos = function(types, success, fail){
            cordova.exec(success, fail, "LastPushMessage", "getLastPushMessage", types);
        }
        getMessageFromIos(["getLastPushMessage"], function(message){
            message = unescape(message);
            return message;
         }, function(e){
             console.log("cannot get last message: "+e);
             return false;
         });
    }else{
        // console.log("device not ready, or not a native app");
        return false;
    }
}