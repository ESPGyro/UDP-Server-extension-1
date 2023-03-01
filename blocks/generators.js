Blockly.Python['udp_server_task'] = function(block) {
  Blockly.Python.definitions_['import uasyncio'] = 'import uasyncio';
  Blockly.Python.definitions_['from dgram import UDPServer']='from dgram import UDPServer';
  var text_udpser_ip = Blockly.Python.valueToCode(block, 'udpser_ip', Blockly.Python.ORDER_ATOMIC);
  var text_bind_port= block.getFieldValue('bind_port');
  var code = `loop.create_task(UDPServer().serve(cb, ${text_udpser_ip},${text_bind_port}))\n`;
  return code;
};

Blockly.Python['udp_server_senddata'] = function(block) {
  Blockly.Python.definitions_['import uasyncio'] = 'import uasyncio';
  Blockly.Python.definitions_['import_gc'] = 'import gc';
  Blockly.Python.definitions_['from dgram import UDPServer']='from dgram import UDPServer';
  var text_udp_data = Blockly.Python.valueToCode(block, 'udp_data', Blockly.Python.ORDER_ATOMIC);
  var text_udpser_ip = Blockly.Python.valueToCode(block, 'udpser_ip', Blockly.Python.ORDER_ATOMIC);
  var text_bind_port= block.getFieldValue('bind_port');
  var code = `gc.collect()\nUDPServer().sock.sendto(${text_udp_data},(${text_udpser_ip},${text_bind_port})); UDPServer().sock.close()\n`;
  return code;
};

Blockly.Python['udp_server_device'] = function(block) {
  Blockly.Python.definitions_['import uasyncio'] = 'import uasyncio';
  Blockly.Python.definitions_['from dgram import UDPServer']='from dgram import UDPServer';
  var text_udpser_ip = Blockly.Python.valueToCode(block, 'udpser_ip', Blockly.Python.ORDER_ATOMIC);
  var text_bind_port= block.getFieldValue('bind_port');
  var code = `s = UDPServer(); l= uasyncio.get_event_loop(); l.run_until_complete(s.serve(cb, ${text_udpser_ip},${text_bind_port}))\n`;
  return code;
};

Blockly.Python['udp_on_receive'] = function(block) {
  var statements_callback = Blockly.Python.statementToCode(block, 'cb');
  
  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (block.getVars().indexOf(varName) == -1) {
      globals.push(Blockly.Python.variableDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  // Add developer variables.
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }

  globals = globals.length ?
      Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';

  var functionName = Blockly.Python.provideFunction_(
    'cb',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(msg,adr):',
    globals,
    statements_callback|| Blockly.Python.PASS]);

  var code = ``;
  return code;
};


Blockly.Python['udp_rec_msg'] = function(block) {
  var code = `msg.decode()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['appstring_decode'] = function(block) {
  var text_app_string = Blockly.Python.valueToCode(block, 'app_string', Blockly.Python.ORDER_ATOMIC);
  var text_decode_num1= block.getFieldValue('decode_num1');
  var text_decode_num2= block.getFieldValue('decode_num2');

  var code = `int(${text_app_string}[${text_decode_num1}:${text_decode_num2}],10)`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['applist_decode'] = function(block) {
  var text_app_string = Blockly.Python.valueToCode(block, 'applist_string', Blockly.Python.ORDER_ATOMIC);
  var text_decode_num1= block.getFieldValue('decode_num1')-1;

  var code = `int(${text_app_string}[1:-1].split(' ')[${text_decode_num1}])`;
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['string_decode'] = function(block) {
  var text_v7rc_string = Blockly.Python.valueToCode(block, 'v7rc_string', Blockly.Python.ORDER_ATOMIC);
  var text_decode_num1= block.getFieldValue('decode_num1');
  var text_decode_num2= block.getFieldValue('decode_num2');

  var code = `${text_v7rc_string}[${text_decode_num1}:${text_decode_num2}]`;
  return [code, Blockly.Python.ORDER_NONE];
};


