function doGet(e) {
    var training = SpreadsheetApp.getActiveSpreadsheet()
    var superiores = training.getSheetByName("Superiores")
    var treinoSuperiores = superiores.getDataRange().getValues()
    var usuario = training.getSheetByName("Usuario")
    var usuarioData = usuario.getDataRange().getValues()
    var inferiores = training.getSheetByName("Inferiores")
    var abdomen = training.getSheetByName("Abdomen")
    var treinoInferiores = inferiores.getDataRange().getValues()
    var treinoAbdomen = abdomen.getDataRange().getValues()
    var response = ContentService.createTextOutput(JSON.stringify({usuarioData,treinoSuperiores,treinoInferiores,treinoAbdomen})).setMimeType(ContentService.MimeType.JSON)
    return response
}
function doPost(e) {
  try {
    const training = SpreadsheetApp.getActiveSpreadsheet();
    const requestData = JSON.parse(e.postData.contents);
    Logger.log('Dados recebidos: ' + JSON.stringify(requestData));
    if (!requestData.planilha || !requestData.linha || !requestData.coluna || !requestData.valor) {
      throw new Error("O payload deve conter 'planilha', 'linha', 'coluna' e 'valor'.");
    }
    const abaNome = requestData.planilha;
    const linha = requestData.linha;
    const coluna = requestData.coluna;
    const novoValor = requestData.valor;
    const sheet = training.getSheetByName(abaNome);
    if (!sheet) {
      throw new Error(`A aba "${abaNome}" não foi encontrada.`);
    }
    sheet.getRange(linha, coluna).setValue(novoValor);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'success',
        message: `Aba "${abaNome}", linha ${linha}, coluna ${coluna} foi atualizada com sucesso.`,
        novoValor: novoValor,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Erro: ' + error.message);
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'error',
        message: error.message,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
