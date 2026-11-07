'use client';
import Link from 'next/link';
import {useLocale} from '@/lib/i18n';
import Workbench from '@/shared/launch/Workbench';
export default function Projects(){const {locale}=useLocale();return <main><div style={{maxWidth:1120,margin:'0 auto',padding:'20px 24px 0'}}><Link href="/">← PromptMan</Link></div><Workbench locale={locale} storageLabel={locale==='zh'?'项目保存在此桌面应用的本地存储中。导出文件可备份或交接；不会自动同步到云端。':'Projects stay in this desktop app’s local storage. Export for backup or handoff; they are not automatically synced to the cloud.'}/></main>}
