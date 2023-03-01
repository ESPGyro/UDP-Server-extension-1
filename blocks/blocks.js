Blockly.defineBlocksWithJsonArray(
[
{
  "type": "udp_server_device",
  "message0": "啟動UDP伺服器的巡迴服務 綁定於 IP位址 : %1 連接埠號 : %2",
  "args0": [
     {
      "type": "input_value",
      "name": "udpser_ip",
      "check": ""
    },
    {
      "type": "field_number",
      "name": "bind_port",
      "value":6188
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "udp_server_task",
  "message0": "創建UDP伺服器服務的任務 綁定於 IP位址 : %1 連接埠號 : %2",
  "args0": [
     {
      "type": "input_value",
      "name": "udpser_ip",
      "check": ""
    },
    {
      "type": "field_number",
      "name": "bind_port",
      "value":6188
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "udp_server_senddata",
  "message0": "UDP伺服器傳送訊息: %1 至 IP位址 : %2 連接埠號 : %3",
  "args0": [
     {
      "type": "input_value",
      "name": "udp_data",
      "check": "String"
     },
     {
      "type": "input_value",
      "name": "udpser_ip",
      "check": ""
    },
    {
      "type": "field_number",
      "name": "bind_port",
      "value":6188
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "udp_on_receive",
  "message0": "UDP伺服器 接收資料的區塊 %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "cb"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "udp_rec_msg",
  "message0": "UDP伺服器 所接收到的資料",
  "output": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{  
  "type": "applist_decode",
  "message0": "所取得自定格式資料: %1 的第 %2 筆數值",
  "args0": [
    {
      "type": "input_value",
      "name": "applist_string",
      "check": ""
    },
    {
      "type": "field_number",
      "name": "decode_num1",
      "value":1
    }	
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{  
  "type": "appstring_decode",
  "message0": "所取得字串資料: %1 解碼 [%2:%3]的數值",
  "args0": [
    {
      "type": "input_value",
      "name": "app_string",
      "check": ""
    },
    {
      "type": "field_number",
      "name": "decode_num1",
      "value":0
    },
    {
      "type": "field_number",
      "name": "decode_num2",
      "value":0
    }	
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{  
  "type": "string_decode",
  "message0": "所取得 V7RC_Code: %1 解碼 [%2:%3]",
  "args0": [
    {
      "type": "input_value",
      "name": "v7rc_string",
      "check": ""
    },
    {
      "type": "field_number",
      "name": "decode_num1",
      "value":0
    },
    {
      "type": "field_number",
      "name": "decode_num2",
      "value":0
    }	
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
}
]
);
