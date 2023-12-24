import {OPENAI_TOKEN} from '@env';

export async function postOpenAI(params) {
  try {
    const req = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    const res = await req.json();
    return res.choices[0].message.content;
  } catch (error) {
    console.log('gpt request error: ', error);
    return false;
  }
}
