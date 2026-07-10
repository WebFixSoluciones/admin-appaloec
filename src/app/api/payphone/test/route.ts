import { NextResponse } from 'next/server';
import { getAdminDb } from '../../../../lib/firebase/admin';

export async function GET() {
  try {
    const db = getAdminDb();
    const snap = await db.collection('gateways').doc('payphone').get();

    if (!snap.exists) {
      return NextResponse.json({ error: 'Documento payphone no existe en Firestore' });
    }

    const data = snap.data()!;
    const token: string = data.secretKey ?? '';
    const storeId: string = data.publicKey ?? '';

    // Muestra solo los primeros/últimos caracteres para diagnóstico
    const tokenPreview = token.length > 0
      ? `${token.slice(0, 20)}...${token.slice(-10)} (${token.length} chars)`
      : 'VACÍO';

    // Intento real a Payphone con body mínimo (sin storeId ni caracteres especiales)
    const url = 'https://pay.payphonetodoesposible.com/api/Links';
    const body = {
      amount: 100,
      amountWithoutTax: 100,
      amountWithTax: 0,
      tax: 0,
      currency: 'USD',
      clientTransactionId: 'TEST001',
      reference: 'Test pago ALOEC',
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const responseText = await res.text();

    return NextResponse.json({
      firestoreFields: {
        isActive: data.isActive,
        environment: data.environment,
        tokenLength: token.length,
        tokenPreview,
        storeId,
      },
      payphoneRequest: {
        url,
        bodyEnviado: body,
      },
      payphoneResponse: {
        status: res.status,
        body: responseText.slice(0, 3000),
      },
    });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : String(err) });
  }
}
