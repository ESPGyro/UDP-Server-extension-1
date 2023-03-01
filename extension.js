({
    name: "UDP伺服器", // Category Name
    description: "UDP server",
    author: "YP",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#F39C12", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category      
         "udp_server_device",
         "udp_server_task",
         "udp_server_senddata",
         "udp_on_receive",
         "udp_rec_msg",
         "applist_decode",
         "appstring_decode",
         "string_decode",
         "math_number",
         "text",
         "text_join"
         ]
});
