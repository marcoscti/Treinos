export function setLastUpdate(data?: Date | string): string {
    const date = data ? new Date(data) : new Date();
    const options = { 
        timeZone: 'America/Sao_Paulo', 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        // second: '2-digit', 
        hour12: false 
    };
    const dateInBrasilia = new Intl.DateTimeFormat('pt-BR', options).format(date);
    return dateInBrasilia;
}
