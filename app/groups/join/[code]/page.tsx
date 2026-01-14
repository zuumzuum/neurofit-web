// Web側の実装 (Next.jsの例)
'use client';

import { useEffect } from 'react';

export default function JoinPage({ params }: { params: { code: string } }) {
  useEffect(() => {
    // ページが開かれたら、すぐにアプリのカスタムスキームへ飛ばす
    window.location.href = `neurofit://groups/join/${params.code}`;
    
    // タイムアウトを設定して、アプリが開かない場合はストアへ誘導する
    setTimeout(() => {
      window.location.href = 'https://apps.apple.com/app/id...'; // App Store URL
    }, 2000);
  }, [params.code]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 50 }}>
      <h1>Opening WE ON...</h1>
      <p>Redirecting to join group: {params.code}</p>
      <a href={`neurofit://groups/join/${params.code}`} style={{ padding: '10px 20px', background: '#000', color: '#fff', textDecoration: 'none', borderRadius: 20 }}>
        Open App
      </a>
    </div>
  );
}
