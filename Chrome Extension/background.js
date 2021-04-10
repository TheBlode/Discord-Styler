/*
 * Discord Styler! - the script that allows you to customise your Discord experience and make it your own!
 * 03/04/21
 * Written by The_Blode
 * Version 1.0
 */

/* ================================
 *Set up local storage variables
 * ================================ */
// Reset locally stored variables
chrome.storage.local.set({chat_box: ""});
chrome.storage.local.set({sidebar: ""});
chrome.storage.local.set({channel_list: ""});
chrome.storage.local.set({chat_area: ""});
chrome.storage.local.set({members_list: ""});
chrome.storage.local.set({text_colour: ""});
chrome.storage.local.set({search_bar: ""});
chrome.storage.local.set({server_circle: ""});
chrome.storage.local.set({apply: 0});
chrome.storage.local.set({chat_box_text: ""});
chrome.storage.local.set({members_list_text: ""});
chrome.storage.local.set({channel_list_text: ""});
chrome.storage.local.set({chat_area_text: ""});
chrome.storage.local.set({search_bar_text: ""});
chrome.storage.local.set({chat_box_opacity: ""});
chrome.storage.local.set({chat_area_opacity: ""});
chrome.storage.local.set({members_list_opacity: ""});
chrome.storage.local.set({search_bar_opacity: ""});
chrome.storage.local.set({channel_list_opacity: ""});

// Global variables
var chat_box = "";
var sidebar = "";
var channel_list = "";
var chat_area = "";
var members_list = "";
var text_colour = "";
var search_bar = "";
var text_changer = "";
var server_circle = "";
var chat_box_text = "";
var members_list_text = "";
var channel_list_text = "";
var chat_area_text = "";
var search_bar_text = "";
var chat_box_opacity = 1.0;
var chat_area_opacity = 1.0;
var members_list_opacity = 1.0;
var search_bar_opacity = 1.0;
var channel_list_opacity = 1.0;

 /* ================================
 * Poll the Extension popup every second to check if the user wants to search for a partner
 * ================================ */
setInterval(function() {
    // Get apply variable
    chrome.storage.local.get("apply", function(data) {
        if (data.apply != undefined) {
            // If apply is true
            if (data.apply == 1) {
                // Reset apply flag
                chrome.storage.local.set({apply: 0});

                chrome.storage.local.get("chat_box", function(data) {
                    chat_box = data.chat_box;

                    // Assign to the script
                    assignChromeStorageLocally("1", chat_box);
                });

                chrome.storage.local.get("sidebar", function(data) {
                    sidebar = data.sidebar;

                    // Assign to the script
                    assignChromeStorageLocally("2", sidebar);
                });

                chrome.storage.local.get("channel_list", function(data) {
                    channel_list = data.channel_list;

                    // Assign to the script
                    assignChromeStorageLocally("3", channel_list);
                });

                chrome.storage.local.get("chat_area", function(data) {
                    chat_area = data.chat_area;

                    // Assign to the script
                    assignChromeStorageLocally("4", chat_area);
                });

                chrome.storage.local.get("members_list", function(data) {
                    members_list = data.members_list;

                    // Assign to the script
                    assignChromeStorageLocally("5", members_list);
                });

                chrome.storage.local.get("text_colour", function(data) {
                    text_colour = data.text_colour;

                    // Assign to the script
                    assignChromeStorageLocally("6", text_colour);
                });

                chrome.storage.local.get("search_bar", function(data) {
                    search_bar = data.search_bar;

                    // Assign to the script
                    assignChromeStorageLocally("7", search_bar);
                });

                chrome.storage.local.get("server_circle", function(data) {
                    server_circle = data.server_circle;

                    // Assign to the script
                    assignChromeStorageLocally("8", server_circle);
                });

                chrome.storage.local.get("chat_box_text", function(data) {
                    chat_box_text = data.chat_box_text;

                    // Assign to the script
                    assignChromeStorageLocally("9", chat_box_text);
                });

                chrome.storage.local.get("members_list_text", function(data) {
                    members_list_text = data.members_list_text;

                    // Assign to the script
                    assignChromeStorageLocally("10", members_list_text);
                });

                chrome.storage.local.get("channel_list_text", function(data) {
                    channel_list_text = data.channel_list_text;

                    // Assign to the script
                    assignChromeStorageLocally("11", channel_list_text);
                });

                chrome.storage.local.get("chat_area_text", function(data) {
                    chat_area_text = data.chat_area_text;

                    // Assign to the script
                    assignChromeStorageLocally("12", chat_area_text);
                });

                chrome.storage.local.get("search_bar_text", function(data) {
                    search_bar_text = data.search_bar_text;

                    // Assign to the script
                    assignChromeStorageLocally("13", search_bar_text);
                });

                chrome.storage.local.get("chat_box_opacity", function(data) {
                    chat_box_opacity = data.chat_box_opacity;

                    // Assign to the script
                    assignChromeStorageLocally("14", chat_box_opacity);
                });

                chrome.storage.local.get("chat_area_opacity", function(data) {
                    chat_area_opacity = data.chat_box_opacity;

                    // Assign to the script
                    assignChromeStorageLocally("15", chat_area_opacity);
                });

                chrome.storage.local.get("members_list_opacity", function(data) {
                    members_list_opacity = data.members_list_opacity;

                    // Assign to the script
                    assignChromeStorageLocally("16", members_list_opacity);
                });

                chrome.storage.local.get("search_bar_opacity", function(data) {
                    search_bar_opacity = data.search_bar_opacity;

                    // Assign to the script
                    assignChromeStorageLocally("17", search_bar_opacity);
                });

                chrome.storage.local.get("channel_list_opacity", function(data) {
                    channel_list_opacity = data.channel_list_opacity;

                    // Assign to the script
                    assignChromeStorageLocally("18", channel_list_opacity);
                });

                setTimeout(function() {
                    // Apply styles!
                    applyStyles();
                }, 2000);
            }
        }
    });
}, 1000);

/* =====================
 * Function name: assignChromeStorageLocally
 * Function description: this function will assign Chrome storage variables locally
 * Date: 22/02/21
 * =====================
 */
function assignChromeStorageLocally(variable, value) {
    if (variable == "1") {
        chat_box = value;
    }

    if (variable == "2") {
        sidebar = value;
    }

    if (variable == "3") {
        channel_list = value;
    }

    if (variable == "4") {
        chat_area = value;
    }

    if (variable == "5") {
        members_list = value;
    }

    if (variable == "6") {
        text_colour = value;
    }

    if (variable == "7") {
        search_bar = value;
    }
 
    if (variable == "8") {
        server_circle = value;
    }

    if (variable == "9") {
        chat_box_text = value;
    }

    if (variable == "10") {
        members_list_text = value;
    }

    if (variable == "11") {
        channel_list_text = value;
    }

    if (variable == "12") {
        chat_area_text = value;
    }

    if (variable == "13") {
        search_bar_text = value;
    }

    if (variable == "14") {
        chat_box_opacity = value;
    }

    if (variable == "15") {
        chat_area_opacity = value;
    }

    if (variable == "16") {
        members_list_opacity = value;
    }

    if (variable == "17") {
        search_bar_opacity = value;
    }

    if (variable == "18") {
        channel_list_opacity = value;
    }
}

/* =====================
 * Function name: applyStyles
 * Function description: this function will apply styles to Discord
 * Date: 03/04/21
 * =====================
 */
function applyStyles() {
    // Clear text changer interval
    clearInterval(text_changer);

    text_changer = setInterval(function() {
        // Apply style to the chat box
        var elem = document.querySelector(".attachWrapper-2TRKBi");

        // Set the background colour
        elem.style.backgroundColor = chat_box;

        // Apply style to the chat box
        elem = document.querySelector(".textArea-12jD-V");

        // Set the background colour
        elem.style.backgroundColor = chat_box;

        // Apply style to the chat box
        elem = document.querySelector(".inner-MADQqc");

        // Set the background colour
        elem.style.backgroundColor = chat_box;

        elem = document.querySelector(".attachWrapper-2TRKBi");

        // Set the text colour
        elem.style.color = chat_box_text;

        // Apply style to the chat box
        elem = document.querySelector(".textArea-12jD-V");

        // Set the text colour
        elem.style.color = chat_box_text;

        // Apply style to the chat box
        elem = document.querySelector(".inner-MADQqc");

        // Set the text colour
        elem.style.color = chat_box_text;

        elem = document.querySelector(".attachWrapper-2TRKBi");

        // Set the text colour
        elem.style.opacity = chat_box_opacity;

        // Apply style to the chat box
        elem = document.querySelector(".textArea-12jD-V");

        // Set the text colour
        elem.style.opacity = chat_box_opacity;

        // Apply style to the chat box
        elem = document.querySelector(".inner-MADQqc");

        // Set the text colour
        elem.style.opacity = chat_box_opacity;

        // Apply style to the sidebar
        elem = document.querySelector(".scroller-1Bvpku");

        // Set the background colour
        elem.style.backgroundColor = sidebar;

        // Apply style to the members list
        var channel_list_text_element = document.getElementsByClassName('channelName-2YrOjO');

        for (var i = 0, max = channel_list_text_element.length; i < max; i++) {
            channel_list_text_element[i].style.color = channel_list_text;
        }

        // Apply style to the channel list
        elem = document.querySelector(".container-3w7J-x");

        // Set the background colour
        elem.style.backgroundColor = channel_list;

        // Apply style to the channel list
        elem = document.querySelector(".container-3baos1");

        // Set the background colour
        elem.style.backgroundColor = channel_list;

        // Apply style to the channel list
        elem = document.querySelector(".container-3w7J-x");

        // Set the background colour
        elem.style.opacity = channel_list_opacity;

        // Apply style to the channel list
        elem = document.querySelector(".container-3baos1");

        // Set the background colour
        elem.style.opacity = channel_list_opacity;

        // Apply style to the chat area list
        var chat_area_text_element = document.getElementsByClassName('markup-2BOw-j');

        for (var i = 0, max = chat_area_text_element.length; i < max; i++) {
            chat_area_text_element[i].style.color = channel_list_text;
        }

        // Apply style to the chat area list
        elem = document.querySelector(".chat-3bRxxu");

        // Set the background colour
        elem.style.backgroundColor = chat_area;

        // Apply style to the chat area
        elem = document.querySelector(".title-3qD0b-");

        // Set the background colour
        elem.style.backgroundColor = chat_area;

        // Apply style to the chat area list
        elem = document.querySelector(".chat-3bRxxu");

        // Set the background colour
        elem.style.opacity = chat_area_opacity;

        // Apply style to the chat area
        elem = document.querySelector(".title-3qD0b-");

        // Set the background colour
        elem.style.opacity = chat_area_opacity;

        // Apply style to the chat area list
        var search_bar_text_element = document.getElementsByClassName('placeholder-4kjvi');

        for (var i = 0, max = search_bar_text_element.length; i < max; i++) {
            search_bar_text_element[i].style.color = channel_list_text;
        }

        // Apply style to the search bar
        elem = document.querySelector(".searchBar-3dMhjb");

        // Set the background colour
        elem.style.backgroundColor = search_bar;

        // Apply style to the search bar
        elem = document.querySelector(".searchBar-3dMhjb");

        // Set the background colour
        elem.style.opacity = search_bar_opacity;

        // Apply style to the search bar
        elem = document.querySelector(".circleIconButton-1QV--U");

        // Set the background colour
        elem.style.backgroundColor = server_circle;

        // Apply style to the members list
        elem = document.getElementsByClassName('content-3YMskv')[2];

        // Set the background colour
        elem.style.backgroundColor = members_list;

        // Apply style to the members list
        elem = document.getElementsByClassName('content-3YMskv')[2];

        // Set the background colour
        elem.style.opacity = members_list_opacity;

        // Apply style to the members list
        var members_list_text_element = document.getElementsByClassName('roleColor-rz2vM0');

        for (var i = 0, max = members_list_text_element.length; i < max; i++) {
            members_list_text_element[i].style.color = members_list_text;
        }

        elem = document.getElementsByClassName('content-3YMskv')[2];

        // Set the background colour
        elem.style.backgroundColor = members_list;
    }, 1000);
}