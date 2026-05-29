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
            range: 'CADASTRO PRODUTOS!A2:B', // coluna A = código, B = descrição
        });

        const rows = response.data.values || [];

        const produtos = rows
            .filter((row) => row[1]) // ignora linhas sem descrição
            .map((row) => ({
                codigo: row[0] || '',
                descricao: row[1] || '',
            }));

        return new Response(JSON.stringify(produtos), {
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return new Response(JSON.stringify({ error: 'Erro ao buscar produtos' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}