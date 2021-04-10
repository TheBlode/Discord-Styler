// Add event handler for on click event to start searching
document.getElementById("apply").onclick = function() {
    // Reset locally stored variables
    chrome.storage.local.set({chat_box: ""});
    chrome.storage.local.set({sidebar: ""});
    chrome.storage.local.set({channel_list: ""});
    chrome.storage.local.set({chat_area: ""});
    chrome.storage.local.set({members_list: ""});
    chrome.storage.local.set({text_colour: ""});
    chrome.storage.local.set({search_bar: ""});
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

    /* =======================
     * Set variables and pass to storage
     * ======================= */
    // Get chat box colour
    var chat_box = document.getElementById("chat_box").value;

    // Store the chat box colour in memory
    chrome.storage.local.set({"chat_box": chat_box});

    // Get chat box text colour
    var chat_box_text = document.getElementById("chat_box_text").value;

    // Store the chat box text colour in memory
    chrome.storage.local.set({"chat_box_text": chat_box_text});

    // Get chat box opacity
    var chat_box_opacity = document.getElementById("chat_box_opacity").value;

    // Convert to decimal
    chat_box_opacity = chat_box_opacity / 100;

    // Store the chat box opacity in memory
    chrome.storage.local.set({"chat_box_opacity": chat_box_opacity});

    // Get sidebar colour
    var sidebar = document.getElementById("sidebar").value;

    // Store the sidebar colour in memory
    chrome.storage.local.set({"sidebar": sidebar});

    // Get channel list colour
    var channel_list = document.getElementById("channel_list").value;

    // Store the channel list colour in memory
    chrome.storage.local.set({"channel_list": channel_list});

    // Get channel list text colour
    var channel_list_text = document.getElementById("channel_list_text").value;

    // Store the channel list text colour in memory
    chrome.storage.local.set({"channel_list_text": channel_list_text});

    // Get channel list opacity
    var channel_list_opacity = document.getElementById("channel_list_opacity").value;

    // Store the channel list opacity in memory
    chrome.storage.local.set({"channel_list_opacity": channel_list_opacity});

    // Get chat area colour
    var chat_area = document.getElementById("chat_area").value;

    // Store the chat area colour in memory
    chrome.storage.local.set({"chat_area": chat_area});

    // Get chat area text colour
    var chat_area_text = document.getElementById("chat_area_text").value;

    // Store the chat area text colour in memory
    chrome.storage.local.set({"chat_area_text": chat_area_text});

    // Get chat area opacity
    var chat_area_opacity = document.getElementById("chat_area_opacity").value;

    // Store the chat area opacity in memory
    chrome.storage.local.set({"chat_area_opacity": chat_area_opacity});

    // Get members list colour
    var members_list = document.getElementById("members_list").value;

    // Store the members list colour in memory
    chrome.storage.local.set({"members_list": members_list});

    // Get members list text colour
    var members_list_text = document.getElementById("members_list_text").value;

    // Store the members list text colour in memory
    chrome.storage.local.set({"members_list_text": members_list_text});

    // Get members list opacity 
    var members_list_opacity = document.getElementById("members_list_opacity").value;

    // Store the members list opacity in memory
    chrome.storage.local.set({"members_list_opacity": members_list_opacity});

    // Get search bar colour
    var search_bar = document.getElementById("search_bar").value;

    // Store the search bar colour in memory
    chrome.storage.local.set({"search_bar": search_bar});

    // Get search bar text colour
    var search_bar_text = document.getElementById("search_bar_text").value;

    // Store the search bar text colour in memory
    chrome.storage.local.set({"search_bar_text": search_bar_text});

    // Get search bar opacity 
    var search_bar_opacity = document.getElementById("search_bar_opacity").value;

    // Store the search bar opacity in memory
    chrome.storage.local.set({"search_bar_opacity": search_bar_opacity});

    // Get server circle colour
    var server_circle = document.getElementById("server_circle").value;

    // Store the server circle colour in memory
    chrome.storage.local.set({"server_circle": server_circle});

    // Set apply flag
    chrome.storage.local.set({"apply": 1});
}
