"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState, ReactNode } from 'react';

export default function PageTransitionWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [displayChildren, setDisplayChildren] = useState<ReactNode>(children);
    const [stage, setStage] = useState<'fadeIn' | 'fadeOut'>('fadeIn');

    useEffect(() => {
        if (pathname) {
            setStage('fadeOut');
            const timer = setTimeout(() => {
                setDisplayChildren(children);
                setStage('fadeIn');
            }, 250); // Syncs with CSS fadeout duration
            return () => clearTimeout(timer);
        }
    }, [pathname, children]);

    return (
        <div className={`page-transition-${stage}`} style={{ width: '100%' }}>
            {displayChildren}
        </div>
    );
}
