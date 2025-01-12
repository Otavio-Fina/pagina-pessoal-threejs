'use client';
import './portfolio.css';
import Curriculo from "@/components/curriculo";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Home() {

  


  
  return (
      <div id="portfolio-container" style={{ width: '100%', height: '100%' }}>
        <Curriculo />
      </div>
  );
}
