Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"1 - Atendimento Consultório Familiar","publishDate":"16/12/2020 10:54:46","pages":[{"id":"820cf676-7cde-4e10-99dc-4c45c298526e","name":"Atendimento do usuário no Consultório Familiar","description":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Fluxo que descreve as atividades relacionadas ao atendimento do usu&aacute;rio no Consult&oacute;rio Familiar. </span></p>","mainProcessId":"322d77ed-1178-4adf-a1f7-ce0517503e3d","version":"1.0","author":"GOSS - UFERSA","image":"files\\diagrams\\Atendimento_do_usuario_no_Consultorio_Familiar.png","isSubprocessPage":false,"properties":[],"elements":[{"id":"322d77ed-1178-4adf-a1f7-ce0517503e3d","name":"Main Process","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":8.0,"y":5.0}],"radius":0.0,"height":350.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"b6488fc6-6061-43e3-80ae-914daa7319ce","name":"Imagem","elementImage":"files\\bpmnElements\\b6488fc6-6061-43e3-80ae-914daa7319ce.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":60.0,"width":240.0,"shape":"rect"},"elementType":"ImageArtifact"}]},{"id":"358464e4-2eb8-484b-8a8c-e16931407002","name":"Atendimento do usuário no Consultório Familiar","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":24.0,"y":220.0}],"radius":0.0,"height":1464.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"4f484c88-3226-40db-bb8a-50c96c9faa09","name":"Início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":135.0,"y":291.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"85827b68-f209-4346-88d7-62183b714b48","name":"Gateway inclusivo","elementImage":"files\\bpmnElements\\InclusiveGateway.png","imageBounds":{"points":[{"x":1076.0,"y":752.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"InclusiveGateway","properties":[],"pageElements":[{"name":"Atendimento pelo CF","elementType":"SequenceFlow","properties":[]},{"name":"Atendimento fora do CF","elementType":"SequenceFlow","properties":[]}]},{"id":"94760372-50ba-4135-aa6c-53035d71643a","name":"PREENCHER ficha","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Preencher ficha de atendimento do acolhimento e estudo de demanda.</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":837.0,"y":742.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[{"id":"bab86a49-a309-4835-a610-f9b1561eda72","name":"Attachment","value":"files\\attachments\\Ficha_de_Acolhimento_e_Estudo_de_demanda.pdf","type":"url","urlText":"Ficha de Acolhimento e Estudo de demanda.pdf"}]},{"id":"bda4d64b-fd80-485c-ac3e-fe62ae283885","name":"     PREENCHER ficha do usuário","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Preencher Ficha de Cadastro com as informa&ccedil;&otilde;es do usu&aacute;rio. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":452.0,"y":476.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[{"id":"bab86a49-a309-4835-a610-f9b1561eda72","name":"Attachment","value":"files\\attachments\\Ficha_de_cadastro_do_usuario.docx.pdf","type":"url","urlText":"Ficha de cadastro do usuário.docx.pdf"}]},{"id":"def72e26-7994-491d-bd9d-493199567d94","name":"RECEBER usuário","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Identificar qual o tipo de encaminhamento do usu&aacute;rio e receber encaminhamento caso seja direcionado por chefes de setores do HMAC ou UBS. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":324.0,"y":476.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"523d7282-3af1-4305-aa30-a4c770644c73","name":"SOLICITAR atendimento","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O usu&aacute;rio poder&aacute; ter acesso ao Consult&oacute;rio Familiar de tr&ecirc;s formas:</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">1) Encaminhamento atrav&eacute;s da Maternidade Almeida Castro (HMAC) pelos chefes de setores;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">2) Encaminhamento atrav&eacute;s da Unidade B&aacute;sica de Sa&uacute;de (UBS);</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">3) Demanda espont&acirc;nea.</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":196.0,"y":276.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"bc44f5ae-b48a-48be-9c93-f23b473908c1","name":"  ENCAMINHAR usuário ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Direcionar o usu&aacute;rio para o acolhimento pela equipe interprofissional.</span></p>","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":570.0,"y":476.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"a4d51f2d-2a67-41fe-8c7c-c9ddcae66826","name":"IDENTIFICAR necessidades ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Escuta da demanda do usu&aacute;rio, avalia&ccedil;&atilde;o do risco biol&oacute;gico e da vulnerabilidade social. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":718.0,"y":742.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"d4c2dccf-5b73-47da-8c0e-5bf582b25388","name":"  AVALIAR usuário","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Decidir qual a melhor conduta (tempo e profissional) para o tratamento do usu&aacute;rio. </span></p>","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":963.0,"y":742.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"1e510e77-a845-4b06-979c-7f9de3d62e86","name":"CONSULTAR usuário","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Consulta de enfermagem, m&eacute;dico de fam&iacute;lia, ginecologista, obstetra, pediatra, odontologia, nutri&ccedil;&atilde;o, psicologia , interprofissional, a&ccedil;&otilde;es coletivas e PICS. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1378.0,"y":1085.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[{"id":"bab86a49-a309-4835-a610-f9b1561eda72","name":"Attachment","value":"files\\attachments\\Ficha_de_atendimento_especializado_SOAP_.pdf","type":"url","urlText":"Ficha de atendimento especializado  SOAP .pdf"}]},{"id":"f69bcf97-9434-4623-9522-70e729fceb35","name":"Gateway inclusivo","elementImage":"files\\bpmnElements\\InclusiveGateway.png","imageBounds":{"points":[{"x":1497.0,"y":1095.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"InclusiveGateway","properties":[],"pageElements":[{"name":"Demanda não completamente atendida no CF","elementType":"SequenceFlow","properties":[]},{"name":"Demanda  atendida pelo CF  ","elementType":"SequenceFlow","properties":[]}]},{"id":"7e4f0c31-9fdf-44cc-a96d-3cc9e3c041dc","name":"         REALIZAR encaminham.","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Preencher encaminhamento direcionando para outro profissional que n&atilde;o &eacute; do consult&oacute;rio familiar e abrir solicita&ccedil;&atilde;o junto ao gerente administrativo para agendamento atrav&eacute;s da regula&ccedil;&atilde;o. </span></p>","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1640.0,"y":1162.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"},{"id":"1f55a2a6-0e7f-4b3c-9e7c-b8fdeac2a69d","name":"Attachment","value":"files\\attachments\\Ficha_de_encaminhamento.pdf","type":"url","urlText":"Ficha de encaminhamento.pdf"}]},{"id":"77f99a0d-164d-4daf-b0c7-208baa65d1ff","name":"REGISTRAR atendimento","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Registrar atendimento no prontu&aacute;rio do usu&aacute;rio e inform&aacute;-lo sobre atendimento na UBS mais pr&oacute;xima da sua resid&ecirc;ncia para coordena&ccedil;&atilde;o do cuidado. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1639.0,"y":1009.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[{"id":"bab86a49-a309-4835-a610-f9b1561eda72","name":"Attachment","value":"files\\attachments\\Ficha_contrarreferencia_encaminhamento.pdf","type":"url","urlText":"Ficha contrarreferência encaminhamento.pdf"}]},{"id":"469cff49-1085-4459-ba52-d873c5ad18ef","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2142.0,"y":1500.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Usuário não deve retornar para CF ","elementType":"SequenceFlow","properties":[]},{"name":"Usuário deve retornar para CF ","elementType":"SequenceFlow","properties":[]}]},{"id":"3200bb92-1023-4ca6-a098-82e93daec531","name":"RECEBER usuário ","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1885.0,"y":1490.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"c4104813-47ce-4895-b343-4fdb81a6ae5f","name":"CONSULTAR usuário","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2018.0,"y":1490.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"cf8190d0-4650-48e4-816b-7e9e7f0caa2f","name":"            REGISTRAR atendimento","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Preencher contrarrefer&ecirc;ncia com as informa&ccedil;&otilde;es do atendimento.</span></p>","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":2270.0,"y":1424.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"},{"id":"1f55a2a6-0e7f-4b3c-9e7c-b8fdeac2a69d","name":"Attachment","value":"files\\attachments\\Ficha_contrarreferencia_encaminhamento.pdf","type":"url","urlText":"Ficha contrarreferência encaminhamento.pdf"}]},{"id":"39556fc1-24f3-48ea-a4b8-28b581bb359f","name":"COMUNICAR equipe CF","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Registrar informa&ccedil;&otilde;es do atendimento. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2273.0,"y":1568.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[{"id":"bab86a49-a309-4835-a610-f9b1561eda72","name":"Attachment","value":"files\\attachments\\Ficha_contrarreferencia_encaminhamento.pdf","type":"url","urlText":"Ficha contrarreferência encaminhamento.pdf"}]},{"id":"39747808-6dd8-4a31-b510-6c95760d3158","name":"Contrarreferência enviada","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":2398.0,"y":1583.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd"},{"id":"a7d41237-4cf2-4843-97e9-1f2918cac30a","name":"        ENCAMINHAR p atendimento no CF","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso o usu&aacute;rio se encaixe no perfil de atendimento do Consult&oacute;rio Familiar o encaminhamento pode ser para atendimento imediato ou marcado conforme agenda. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Usu&aacute;rios vitimas de abuso s&atilde;o encaminhados para atendimento imediato pelo programa Flor de L&oacute;tus. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1193.0,"y":686.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"1b53d028-40bc-4da2-bdce-d36f48278a59","name":"REALIZAR encaminham. responsável","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso realize o encaminhamento respons&aacute;vel, o usu&aacute;rio &eacute; orientado e encaminhado para a UBS ou outro servi&ccedil;o especializado de Mossor&oacute;.</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1192.0,"y":809.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[{"id":"bab86a49-a309-4835-a610-f9b1561eda72","name":"Attachment","value":"files\\attachments\\Ficha_de_encaminhamento.pdf","type":"url","urlText":"Ficha de encaminhamento.pdf"}]},{"id":"27a51aab-51fc-4b27-8081-649b4168bbaf","name":"Usuário liberado ","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1930.0,"y":1125.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"7ed423cb-b6b0-4830-a4d0-9184a9541bca","name":" VERIFICAR agenda","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Verificar agenda do profissional especializado. </span></p>","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2422.0,"y":545.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"837cf7d6-117c-4e9d-bbae-f27b9057f068","name":"    DIRECIONAR p/ recepção","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Direcionar o usu&aacute;rio para a recep&ccedil;&atilde;o agendar retorno. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1956.0,"y":1009.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"1271b742-c2a0-4536-8b22-0a951f12ebad","name":"AGENDAR retorno","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Agendar retorno do usu&aacute;rio, que dever&aacute; retornar no dia e hor&aacute;rios marcados diretamente para o atendimento com o profissional especializado.</span></p>","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2544.0,"y":545.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"b8bf8813-5c51-4c91-a058-5bdef8333c25","name":"Retorno agendado","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2676.0,"y":560.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"4438248e-932b-4b0e-994b-24c6b31e92c9","name":"   AGENDAR encaminham. p/ serv. esp.  ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Agendar atendimento do(a) usu&aacute;rio(a) atrav&eacute;s da regula&ccedil;&atilde;o e notificar usu&aacute;rio (email ou pessoalmente), UBS de refer&ecirc;ncia e profissional especializado. </span></p>","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1760.0,"y":1295.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"52493d1c-ae3e-4ba1-9918-bdea0f3bd834","name":"ENCAMINHAR p/ grupo de ação coletiva ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Usu&aacute;rios (as) que se enquadram no perfil de atendimento dos grupos de a&ccedil;&atilde;o coletiva s&atilde;o encaminhados para recep&ccedil;&atilde;o preencher formul&aacute;rio.</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1961.0,"y":917.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"deda0ca3-043d-4898-8ed7-2c4cdea47c7b","name":"PREENCHER cadastro ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Verificar em qual grupo de a&ccedil;&atilde;o coletiva o usu&aacute;rio se enquadra e preencher respectivo formul&aacute;rio de inicia&ccedil;&atilde;o. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2324.0,"y":415.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"f69b78f8-b253-4415-83ee-b89d4f721a21","name":"  VERIFICAR disponibilidade de vagas ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Verificar se existem vagas dispon&iacute;veis no grupo de a&ccedil;&atilde;o coletiva. </span></p>","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2438.0,"y":415.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"c329dfde-6397-470d-9373-94ef8976fb86","name":"Usuário liberado ","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2675.0,"y":430.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"70a079ed-2dd6-42a5-9210-f8937a76d6d8","name":"INFORMAR usuário ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso haja vagas dispon&iacute;veis, informar sobre funcionamento do grupo. Caso n&atilde;o haja vagas informar sobre prazo de entrada no grupo.</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2554.0,"y":415.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"98df08e3-4e51-4b3a-959b-7092c2c0b15b","name":"Gateway inclusivo","elementImage":"files\\bpmnElements\\InclusiveGateway.png","imageBounds":{"points":[{"x":1770.0,"y":1019.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"InclusiveGateway","properties":[],"pageElements":[{"name":"Necessita de retorno","elementType":"SequenceFlow","properties":[]},{"name":"Não necessita de retorno ","elementType":"SequenceFlow","properties":[]},{"name":"Pré-natal ou puerpério ","elementType":"SequenceFlow","properties":[]}]},{"id":"6e97e015-0901-43c8-a826-d80e093799b9","name":"Usuário","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":74.0,"y":220.0}],"radius":0.0,"height":164.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"73a256ad-1dbd-42e7-a5f7-922e2d859136","name":"Recepção do Consultório Familiar","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">automatizada pelo sistema </span></p>","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":74.0,"y":384.0}],"radius":0.0,"height":272.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e6ff0903-1c74-45ab-bdc7-0f83c7685d13","name":"Equipe interprofissional de acolhimento do CF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":74.0,"y":656.8}],"radius":0.0,"height":248.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c480e5af-5f03-4db3-8a77-3ec2c6f9405c","name":"Profissional especializado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":74.0,"y":904.8}],"radius":0.0,"height":340.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d6eb8d5e-3e4f-4d24-92e2-98040ff7cde1","name":"Gerente administrativo CF ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":74.0,"y":1244.8}],"radius":0.0,"height":156.9,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"39a4a8d2-88c3-4694-bd93-536d1cbd4e66","name":"Serviço especializado de Mossoró","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":74.0,"y":1401.70007}],"radius":0.0,"height":282.299927,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"71320e61-0eda-4b86-ae74-588d671a0c63","name":"Recepção do usuário","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":74.0,"y":220.0}],"radius":0.0,"height":30.0,"width":627.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"5e954d2e-283c-4c17-8b7c-dab27ac468dc","name":"Acolhimento e classificação de risco ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Acolhimento com classifica&ccedil;&atilde;o de risco. (ACCR)</span></p>","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":701.0,"y":220.0}],"radius":0.0,"height":30.0,"width":615.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"db795180-3c32-46c0-ab53-26180f119edf","name":"Atendimento","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":1316.0,"y":220.0}],"radius":0.0,"height":30.0,"width":1460.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"resourcePage":{"id":"Resources","name":"Resources","isSubprocessPage":false,"elements":[{"id":"498092e8-cbdb-4ab6-9249-7f07d0a78903","name":"Escritório de Processos","rol":"Função"}]},"searchMap":[{"containerId":"820cf676-7cde-4e10-99dc-4c45c298526e","containerName":"Atendimento do usuário no Consultório Familiar","isSubprocess":false,"elements":[{"id":"b6488fc6-6061-43e3-80ae-914daa7319ce"},{"id":"9243e047-5916-4348-8be5-ffd49e72d935"},{"id":"358464e4-2eb8-484b-8a8c-e16931407002","value":"Atendimento do usuário no Consultório Familiar"},{"id":"6e97e015-0901-43c8-a826-d80e093799b9","value":"Usuário"},{"id":"73a256ad-1dbd-42e7-a5f7-922e2d859136","value":"Recepção do Consultório Familiar"},{"id":"e6ff0903-1c74-45ab-bdc7-0f83c7685d13","value":"Equipe interprofissional de acolhimento do CF"},{"id":"c480e5af-5f03-4db3-8a77-3ec2c6f9405c","value":"Profissional especializado"},{"id":"d6eb8d5e-3e4f-4d24-92e2-98040ff7cde1","value":"Gerente administrativo CF "},{"id":"39a4a8d2-88c3-4694-bd93-536d1cbd4e66","value":"Serviço especializado de Mossoró"},{"id":"71320e61-0eda-4b86-ae74-588d671a0c63","value":"Recepção do usuário"},{"id":"5e954d2e-283c-4c17-8b7c-dab27ac468dc","value":"Acolhimento e classificação de risco "},{"id":"db795180-3c32-46c0-ab53-26180f119edf","value":"Atendimento"},{"id":"4f484c88-3226-40db-bb8a-50c96c9faa09","value":"Início"},{"id":"85827b68-f209-4346-88d7-62183b714b48","value":""},{"id":"94760372-50ba-4135-aa6c-53035d71643a","value":"PREENCHER ficha"},{"id":"bda4d64b-fd80-485c-ac3e-fe62ae283885","value":"     PREENCHER ficha do usuário"},{"id":"def72e26-7994-491d-bd9d-493199567d94","value":"RECEBER usuário"},{"id":"523d7282-3af1-4305-aa30-a4c770644c73","value":"SOLICITAR atendimento"},{"id":"bc44f5ae-b48a-48be-9c93-f23b473908c1","value":"  ENCAMINHAR usuário "},{"id":"a4d51f2d-2a67-41fe-8c7c-c9ddcae66826","value":"IDENTIFICAR necessidades "},{"id":"d4c2dccf-5b73-47da-8c0e-5bf582b25388","value":"  AVALIAR usuário"},{"id":"1e510e77-a845-4b06-979c-7f9de3d62e86","value":"CONSULTAR usuário"},{"id":"f69bcf97-9434-4623-9522-70e729fceb35","value":""},{"id":"7e4f0c31-9fdf-44cc-a96d-3cc9e3c041dc","value":"         REALIZAR encaminham."},{"id":"77f99a0d-164d-4daf-b0c7-208baa65d1ff","value":"REGISTRAR atendimento"},{"id":"469cff49-1085-4459-ba52-d873c5ad18ef","value":""},{"id":"3200bb92-1023-4ca6-a098-82e93daec531","value":"RECEBER usuário "},{"id":"c4104813-47ce-4895-b343-4fdb81a6ae5f","value":"CONSULTAR usuário"},{"id":"cf8190d0-4650-48e4-816b-7e9e7f0caa2f","value":"            REGISTRAR atendimento"},{"id":"39556fc1-24f3-48ea-a4b8-28b581bb359f","value":"COMUNICAR equipe CF"},{"id":"39747808-6dd8-4a31-b510-6c95760d3158","value":"Contrarreferência enviada"},{"id":"a7d41237-4cf2-4843-97e9-1f2918cac30a","value":"        ENCAMINHAR p atendimento no CF"},{"id":"1b53d028-40bc-4da2-bdce-d36f48278a59","value":"REALIZAR encaminham. responsável"},{"id":"27a51aab-51fc-4b27-8081-649b4168bbaf","value":"Usuário liberado "},{"id":"7ed423cb-b6b0-4830-a4d0-9184a9541bca","value":" VERIFICAR agenda"},{"id":"837cf7d6-117c-4e9d-bbae-f27b9057f068","value":"    DIRECIONAR p/ recepção"},{"id":"1271b742-c2a0-4536-8b22-0a951f12ebad","value":"AGENDAR retorno"},{"id":"b8bf8813-5c51-4c91-a058-5bdef8333c25","value":"Retorno agendado"},{"id":"4438248e-932b-4b0e-994b-24c6b31e92c9","value":"   AGENDAR encaminham. p/ serv. esp.  "},{"id":"52493d1c-ae3e-4ba1-9918-bdea0f3bd834","value":"ENCAMINHAR p/ grupo de ação coletiva "},{"id":"deda0ca3-043d-4898-8ed7-2c4cdea47c7b","value":"PREENCHER cadastro "},{"id":"f69b78f8-b253-4415-83ee-b89d4f721a21","value":"  VERIFICAR disponibilidade de vagas "},{"id":"c329dfde-6397-470d-9373-94ef8976fb86","value":"Usuário liberado "},{"id":"70a079ed-2dd6-42a5-9210-f8937a76d6d8","value":"INFORMAR usuário "},{"id":"98df08e3-4e51-4b3a-959b-7092c2c0b15b","value":""}]}]}