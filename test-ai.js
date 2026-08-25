console.log('1️⃣ El archivo ha empezado');

const API_KEY = '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';

console.log('2️⃣ API key cargada:', !!API_KEY);
console.log('3️⃣ Longitud:', API_KEY.length);

async function test() {
    console.log('4️⃣ Entrando en test()');

    try {
        console.log('5️⃣ Enviando petición a NVIDIA...');

        const response = await fetch(
            'https://integrate.api.nvidia.com/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: 'openai/gpt-oss-120b',
                    messages: [
                        {
                            role: 'user',
                            content: 'Di solamente Hola'
                        }
                    ],
                    max_tokens: 50
                })
            }
        );

        console.log('6️⃣ NVIDIA respondió');
        console.log('STATUS:', response.status);
        console.log('OK:', response.ok);

        const text = await response.text();

        console.log('7️⃣ RESPUESTA:');
        console.log(text);

    } catch (error) {
        console.error('❌ ERROR:');
        console.error(error);
    }
}

test();