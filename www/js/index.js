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

var pushNotification;
try {
    
     alert("try");
    
}
catch(err) {
    
    //document.getElementById("demo").innerHTML = err.message;
    alert("Try Error : -- " + err.message)
}


var app = {
    SOME_CONSTANTS : false,  // some constant


    // Application Constructor
    initialize: function() {
        console.log("console log init");
        this.bindEvents();
        this.initFastClick();
        alert("initialize");
        var pushNotification = window.plugins.pushNotification;

        pushNotification.register(
            tokenHandler, 
            errorHandler, 
            {
                'badge':'false',
                'sound':'false',
                'alert':'true',
                'ecb':'onNotificationAPN'
            }
        );

        function tokenHandler (result) {
            console.log('device token: '+ result);
            alert("Device token is : " + result);
            // This is a device token you will need later to send a push
            // Store this to PubNub to make your life easier :-)
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
        
        pushNotification = window.plugins.pushNotification;
        alert("Welcome guest!");

        if(device.platform == 'iOS') {
        //　call the registration function for iOS
        alert("Am iOS!");
        } else if (device.platform == 'Android' || device.platform == 'amazon-fireos') {
            // Android
             alert("Am Android!");
        }
        else{

             alert("Who am I?");
        }
         
    } 

};

app.initialize();