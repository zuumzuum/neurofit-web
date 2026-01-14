// Web側の実装 (Next.jsの例)
'use client';

import { useEffect } from 'react';

export default function JoinPage({ params }: { params: { code: string } }) {
  useEffect(() => {
    // 🔴 修正前: neurofit://...
    // 🟢 修正後: weon://... (app.config.tsのschemeと一致させる)
    window.location.href = `weon://groups/join/${params.code}`;
    
    setTimeout(() => {
      // 実際のApp Store URLを入れてください
      window.location.href = 'https://apps.apple.com/jp/app/id...';
    }, 2000);
  }, [params.code]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 50 }}>
      <h1>Opening WE ON...</h1>
      <p>Redirecting to join group: {params.code}</p>
      <a href={`weon://groups/join/${params.code}`} style={{ padding: '10px 20px', background: '#000', color: '#fff', textDecoration: 'none', borderRadius: 20 }}>
        Open App
      </a>
    </div>
  );
}
