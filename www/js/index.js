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
var app = {
    SOME_CONSTANTS : false,  // some constant


    // Application Constructor
    initialize: function() {
        console.log("console log init");
        this.bindEvents();
        this.initFastClick();
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
        alert(" Am ready");

        try
            {
                var pushNotification = window.plugins.pushNotification;
                if (window.device.platform == 'iOS') {
                    // Register for IOS:
                    pushNotification.register(
                        pushSuccessHandler,
                        pushErrorHandler, {
                            "badge":"true",
                            "sound":"true",
                            "alert":"true",
                            "ecb":"onNotificationAPNS"
                        }
                    );
                }
            }
            catch(err)
            {
                // For this example, we'll fail silently ...
                console.log(err);
                alert("Try Error - " + err);
            }
             
            /**
             * Success handler for when connected to push server
             * @param result
             */
            var pushSuccessHandler = function(result)
            {
                console.log(result);
                alert("Success" + result);
            };
             
            /**
             * Error handler for when not connected to push server
             * @param error
             */
            var pushErrorHandler = function(error)
            {
                console.log(error);
                alert("error" + error);
            };
             
            /**
             * Notification from Apple APNS
             * @param e
             */
            var onNotificationAPNS = function(e)
            {
                // ...
            };

    } 

};

app.initialize();