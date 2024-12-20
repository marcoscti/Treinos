const api = "https://script.google.com/macros/s/AKfycbzrjwnrrUfhE6VDvv8CB1dmDFpm2ei0gckiCP6CSjjIv8iBlbMivSlfdugQ7ie8SwU/exec";
export async function getApiData() {
  try {
    const response = await fetch(api);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function setApiData(
  planilha: any,
  linha: any,
  coluna: any,
  valor: any
) {
  const payload = {
    planilha: planilha,
    linha: linha,
    coluna: coluna,
    valor: valor,
  };

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    console.log("Resposta do servidor:", data);
  } catch (error) {
    console.error("Erro ao atualizar a planilha:", error);
  }
}
