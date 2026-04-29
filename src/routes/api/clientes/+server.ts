import { google } from 'googleapis';
import { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEETS_ID } from '$env/static/private';

export async function GET() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: GOOGLE_SHEETS_ID,
            range: 'CADASTRO CLIENTES!A2:Q', // começa na linha 2 para pular cabeçalho, vai até coluna Q (celular)
        });

        const rows = response.data.values || [];

        const clientes = rows
            .filter((row) => row[0])
            .map((row) => {
                
                return {
                    id:       row[0]  || '',
                    nome:     row[5]  || row[3] || '',
                    telefone: row[15] || row[16] || '',
                };
    });

        return new Response(JSON.stringify(clientes), {
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        return new Response(JSON.stringify({ error: 'Erro ao buscar clientes' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}