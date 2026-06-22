import { useState, useMemo, useRef, useCallback, useEffect } from 'react'

/* ========== SVG Icon Components ========== */
const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
)
const IconSparkles = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/>
  </svg>
)
const IconPlay = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
)
const IconDownload = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)
const IconMaximize = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
  </svg>
)
const IconUpload = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
)
const IconTranslate = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l6 0"/><path d="M8 5l0 3"/><path d="M5.5 15a4.5 4.5 0 0 0 0 0L8 5"/><path d="M14.5 9a4.5 4.5 0 0 1 0 0L12 19"/><path d="M12 15h4"/><path d="M19.5 15a4.5 4.5 0 0 1 0 0L17 5"/>
  </svg>
)
const IconArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
  </svg>
)
const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
const IconImage = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
  </svg>
)
const IconFilm = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/>
  </svg>
)
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)
const IconRatio = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20"/><path d="M2 15h20"/>
  </svg>
)
const IconSettings = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
)
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)
const IconWand = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8L19 13"/><path d="M15 9h.01"/><path d="M17.8 6.2L19 5"/><path d="m3 21 9-9"/><path d="M12.2 6.2L11 5"/>
  </svg>
)
const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)
const IconChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
)
const IconChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)
const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)
const IconSend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)
const IconPlus = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
)
const IconFolder = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
)
const IconCredit = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v12"/><path d="M8 10l4-4 4 4"/><path d="M8 14l4 4 4-4"/>
  </svg>
)
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const IconWarning = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)
const IconUndo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
  </svg>
)
const IconRedo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
  </svg>
)
const IconExport = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
)

/* ========== Data ========== */
const templateCategories = [
  { id: 'all', name: '全部', icon: '🎬' },
  { id: 'food', name: '探店美食', icon: '🍜' },
  { id: 'travel', name: '旅行风景', icon: '✈️' },
  { id: 'fashion', name: '时尚穿搭', icon: '👗' },
  { id: 'tech', name: '科技数码', icon: '📱' },
  { id: 'life', name: '生活日常', icon: '🌿' },
]

const templates = [
  { id: 1, name: '探店美食', subtitle: '（菜品展示）', category: 'food', gradient: 'linear-gradient(135deg, #FD79A8 0%, #FDCB6E 100%)', rating: 4.8, usageCount: 12580, description: '适合美食博主探店拍摄，展示菜品细节和餐厅环境', scene: '美食探店、餐厅推广、菜品展示、美食博主', recommendParams: { ratio: '9:16', resolution: '1080P', duration: '10s' } },
  { id: 2, name: '探店打卡', subtitle: '（环境氛围）', category: 'food', gradient: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)', rating: 4.6, usageCount: 8930, description: '突出餐厅环境和氛围，适合打卡分享', scene: '网红餐厅打卡、咖啡店推广、环境展示', recommendParams: { ratio: '9:16', resolution: '1080P', duration: '10s' } },
  { id: 3, name: '旅行Vlog', subtitle: '（风景记录）', category: 'travel', gradient: 'linear-gradient(135deg, #00CEC9 0%, #81ECEC 100%)', rating: 4.9, usageCount: 23450, description: '记录旅途中的风景和人文，打造沉浸式旅行体验', scene: '旅行记录、风景展示、旅行博主、城市风光', recommendParams: { ratio: '16:9', resolution: '4K', duration: '15s' } },
  { id: 4, name: '城市漫步', subtitle: '（街拍随记）', category: 'travel', gradient: 'linear-gradient(135deg, #00B894 0%, #55EFC4 100%)', rating: 4.5, usageCount: 6720, description: '捕捉城市街头的瞬间，展现城市魅力', scene: '街拍记录、城市漫步、生活方式展示', recommendParams: { ratio: '9:16', resolution: '1080P', duration: '10s' } },
  { id: 5, name: '穿搭分享', subtitle: '（OOTD）', category: 'fashion', gradient: 'linear-gradient(135deg, #E17055 0%, #FAB1A0 100%)', rating: 4.7, usageCount: 15680, description: '展示每日穿搭，适合时尚博主和穿搭达人', scene: '时尚穿搭、OOTD分享、服装展示、时尚博主', recommendParams: { ratio: '9:16', resolution: '1080P', duration: '5s' } },
  { id: 6, name: '开箱测评', subtitle: '（数码产品）', category: 'tech', gradient: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)', rating: 4.4, usageCount: 9870, description: '数码产品开箱和测评，展示产品细节', scene: '数码测评、产品开箱、科技博主、产品展示', recommendParams: { ratio: '16:9', resolution: '1080P', duration: '10s' } },
  { id: 7, name: '日常记录', subtitle: '（生活碎片）', category: 'life', gradient: 'linear-gradient(135deg, #FD79A8 0%, #FDCB6E 100%)', rating: 4.8, usageCount: 18200, description: '记录日常生活碎片，展现温馨生活瞬间', scene: 'Vlog、日常记录、生活分享、温馨时刻', recommendParams: { ratio: '9:16', resolution: '1080P', duration: '10s' } },
  { id: 8, name: '美食教程', subtitle: '（烹饪过程）', category: 'food', gradient: 'linear-gradient(135deg, #00CEC9 0%, #81ECEC 100%)', rating: 4.6, usageCount: 11340, description: '展示烹饪过程和成品，适合美食教程', scene: '美食教程、烹饪展示、食谱分享、美食博主', recommendParams: { ratio: '9:16', resolution: '1080P', duration: '15s' } },
  { id: 9, name: '运动健身', subtitle: '（活力记录）', category: 'life', gradient: 'linear-gradient(135deg, #00B894 0%, #55EFC4 100%)', rating: 4.3, usageCount: 7560, description: '记录运动健身过程，展现活力与坚持', scene: '运动记录、健身打卡、运动博主、活力展示', recommendParams: { ratio: '9:16', resolution: '1080P', duration: '5s' } },
  { id: 10, name: '夜景航拍', subtitle: '（城市风光）', category: 'travel', gradient: 'linear-gradient(135deg, #E17055 0%, #FAB1A0 100%)', rating: 4.9, usageCount: 20100, description: '震撼的城市夜景航拍，展现城市之美', scene: '航拍视频、城市夜景、风光展示、旅行记录', recommendParams: { ratio: '16:9', resolution: '4K', duration: '15s' } },
]

const languages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'th', name: 'ไทย' },
]

const mockTranslations = {
  zh: '一只可爱的猫咪在阳光明媚的花园里追逐蝴蝶，背景是五彩缤纷的花朵和绿树',
  en: 'A cute cat chasing butterflies in a sunny garden, with colorful flowers and green trees in the background',
  ja: '日差しのあたる庭で可愛い猫が蝶を追いかけている、背景には色とりどりの花と緑の木々',
  ko: '햇살 좋은 정원에서 귀여운 고양이가 나비를 쫓고 있고, 배경에는 화려한 꽃과 초록 나무',
  fr: 'Un chat mignon poursuivant des papillons dans un jardin ensoleillé, avec des fleurs colorées et des arbres verts en arrière-plan',
  es: 'Un lindo gato persiguiendo mariposas en un jardín soleado, con flores coloridas y árboles verdes de fondo',
  de: 'Eine niedliche Katze jagt Schmetterlinge in einem sonnigen Garten, mit bunten Blumen und grünen Bäumen im Hintergrund',
  th: 'แมวน่ารักตัวหนึ่งไล่จับผีเสื้อในสวนที่แดดจัด พื้นหลังเป็นดอกไม้หลากสีและต้นไม้เขียวขจี',
}

const creditPackages = [
  { id: 1, credits: 50, price: 6 },
  { id: 2, credits: 200, price: 20 },
  { id: 3, credits: 500, price: 45 },
  { id: 4, credits: 1000, price: 80 },
  { id: 5, credits: 2000, price: 150 },
  { id: 6, credits: 5000, price: 350 },
]

const mockAIReplies = [
  '好的，我理解你的需求。建议在提示词中加入更多关于光线和色彩的描述，这样生成的视频效果会更好。',
  '这个提示词很不错！我建议可以尝试调整分辨率为4K，这样画面会更加清晰细腻。',
  '根据你的描述，我推荐使用9:16的竖屏比例，这样更适合在社交媒体上分享。',
  '你可以尝试在提示词中加入"电影级画质"、"柔和光线"等关键词来提升视频质感。',
  '建议使用10秒的时长，既能完整展示内容，又不会太长影响观看体验。',
]

/* ========== Toast Component ========== */
function Toast({ message, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onClose, 2000)
      return () => clearTimeout(t)
    }
  }, [visible, onClose])

  if (!visible) return null
  return (
    <div style={{
      position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)',
      background: 'linear-gradient(135deg, #00B894 0%, #55EFC4 100%)',
      color: '#fff', padding: '10px 24px', borderRadius: '12px',
      fontSize: '14px', fontWeight: 600, zIndex: 9999,
      boxShadow: '0 4px 20px rgba(0,184,148,0.4)',
      animation: 'slideDown 0.3s ease-out',
    }}>
      {message}
    </div>
  )
}

/* ========== Page 1: Login Page ========== */
function LoginPage({ onLogin }) {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (phone.trim() || password.trim()) {
      onLogin()
    }
  }

  return (
    <div className="login-page">
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '-120px', right: '-120px',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,92,231,0.3) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(162,155,254,0.2) 0%, transparent 70%)',
      }} />

      <div className="login-card">
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{
            width: 56, height: 56, borderRadius: '16px',
            background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '16px', boxShadow: '0 4px 20px rgba(108,92,231,0.4)',
          }}>
            <IconSparkles />
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 6px' }}>AI 视频创作</h1>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>登录以开始创作</p>
        </div>

        {/* Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
          <input
            type="text"
            placeholder="手机号 / 邮箱"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          style={{
            width: '100%', height: '48px', borderRadius: '14px', border: 'none',
            background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
            color: '#fff', fontSize: '16px', fontWeight: 600, cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(108,92,231,0.4)',
            transition: 'all 0.2s',
          }}
        >
          登录
        </button>

        {/* Register link */}
        <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)', marginTop: '20px', margin: '20px 0 0' }}>
          还没有账号？<a href="#" onClick={(e) => { e.preventDefault(); onLogin(); }} style={{ color: 'var(--primary-light)', textDecoration: 'none', fontWeight: 500 }}>立即注册</a>
        </p>
      </div>
    </div>
  )
}

/* ========== Page 2: Credits Page ========== */
function CreditsPage({ user, onBack, onChargeCredits, showToast }) {
  const handleCharge = (pkg) => {
    onChargeCredits(pkg.credits)
    showToast(`充值成功！已获得 ${pkg.credits} 积分`)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <button
          onClick={onBack}
          style={{
            width: 38, height: 38, borderRadius: '12px',
            border: '1px solid var(--border)', background: 'var(--bg-card)',
            color: 'var(--text)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <IconArrowLeft />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>积分中心</h2>
      </div>

      {/* Credit Card */}
      <div className="credit-card" style={{ marginBottom: '24px' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <IconCredit />
            </div>
            <div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>{user.name}</p>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0 }}>AI 视频创作会员</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '36px', fontWeight: 700 }}>{user.credits}</span>
            <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>积分</span>
          </div>
        </div>
      </div>

      {/* Packages */}
      <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 16px' }}>充值套餐</h3>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px',
      }}>
        {creditPackages.map(pkg => (
          <div
            key={pkg.id}
            className="animate-fadeIn"
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '16px', padding: '20px 16px',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: '8px', transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(108,92,231,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--primary-light)' }}>{pkg.credits}</span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>积分</span>
            <span style={{ fontSize: '18px', fontWeight: 600 }}>{"\u00A5"}{pkg.price}</span>
            <button
              onClick={() => handleCharge(pkg)}
              style={{
                width: '100%', height: '34px', borderRadius: '10px', border: 'none',
                background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
                color: '#fff', fontSize: '13px', fontWeight: 500, cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(108,92,231,0.3)',
                transition: 'all 0.2s',
              }}
            >
              充值
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ========== Page 3: Template Page ========== */
function TemplatePage({ onNavigateToCreate, onSelectTemplate, onNavigateToCredits, user }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedModal, setSelectedModal] = useState(null)

  const filteredTemplates = useMemo(() => {
    return templates.filter(t => {
      const matchCategory = activeCategory === 'all' || t.category === activeCategory
      const matchSearch = !searchQuery || t.name.includes(searchQuery) || t.subtitle.includes(searchQuery)
      return matchCategory && matchSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(108,92,231,0.15) 0%, transparent 100%)',
        padding: '16px 20px 12px',
        position: 'sticky', top: 0, zIndex: 100,
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: 36, height: 36, borderRadius: '10px',
              background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <IconFilm />
            </div>
            <div>
              <h1 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.3px', margin: 0 }}>AI 视频创作</h1>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0 }}>智能视频生成工具</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={onNavigateToCredits}
              style={{
                width: 38, height: 38, borderRadius: '12px',
                border: '1px solid var(--border)', background: 'var(--bg-card)',
                color: 'var(--text-secondary)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}
            >
              <IconUser />
              <span style={{
                position: 'absolute', top: '-4px', right: '-4px',
                background: 'var(--primary)', color: '#fff',
                fontSize: '9px', fontWeight: 600,
                padding: '1px 5px', borderRadius: '8px',
              }}>
                {user.credits}
              </span>
            </button>
            <button onClick={onNavigateToCreate} style={{
              height: 38, borderRadius: '12px', border: 'none',
              background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
              color: '#fff', cursor: 'pointer',
              padding: '0 16px', fontSize: '13px', fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: '6px',
              boxShadow: '0 2px 12px rgba(108,92,231,0.4)',
            }}>
              <IconSparkles /> 创作中心
            </button>
          </div>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: '12px' }}>
          <input
            type="text"
            placeholder="搜索模板..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%', height: 40, borderRadius: '12px',
              border: '1px solid var(--border)', background: 'var(--bg-input)',
              color: 'var(--text)', padding: '0 16px 0 40px', fontSize: '14px',
              outline: 'none', transition: 'border-color 0.2s',
            }}
          />
          <div style={{ position: 'absolute', left: 14, top: 12 }}>
            <IconSearch />
          </div>
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
          {templateCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                flexShrink: 0, height: 34, borderRadius: '10px', border: 'none',
                background: activeCategory === cat.id ? 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)' : 'var(--bg-card)',
                color: activeCategory === cat.id ? '#fff' : 'var(--text-secondary)',
                padding: '0 14px', fontSize: '13px', fontWeight: 500, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px',
                transition: 'all 0.2s',
                boxShadow: activeCategory === cat.id ? '0 2px 12px rgba(108,92,231,0.3)' : 'none',
              }}
            >
              <span style={{ fontSize: '14px' }}>{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Template Grid */}
      <div style={{ flex: 1, padding: '16px 20px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          {filteredTemplates.map((template, index) => (
            <div
              key={template.id}
              className="animate-fadeIn"
              style={{
                animationDelay: `${index * 0.05}s`,
                borderRadius: '16px', overflow: 'hidden',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }}
              onClick={() => setSelectedModal(template)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                e.currentTarget.style.borderColor = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <div style={{
                height: 120, background: template.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)',
                }} />
                <div style={{ fontSize: '40px', opacity: 0.6 }}>
                  {templateCategories.find(c => c.id === template.category)?.icon || '🎬'}
                </div>
                <div style={{
                  position: 'absolute', top: 8, right: 8,
                  background: 'rgba(0,0,0,0.4)', borderRadius: '8px',
                  padding: '2px 8px', fontSize: '11px', fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: '3px',
                  backdropFilter: 'blur(8px)',
                }}>
                  <IconStar /> {template.rating}
                </div>
              </div>
              <div style={{ padding: '10px 12px' }}>
                <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '2px' }}>{template.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{template.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
            <p style={{ fontSize: '14px' }}>没有找到匹配的模板</p>
          </div>
        )}
      </div>

      {/* Bottom Tab Bar */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: 'rgba(15,15,26,0.9)', backdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--border)',
        padding: '8px 20px', paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
        display: 'flex', justifyContent: 'space-around', zIndex: 100,
      }}>
        <button style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)',
        }}>
          <IconHome />
          <span style={{ fontSize: '11px', fontWeight: 600 }}>首页</span>
        </button>
        <button style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)',
        }}>
          <IconFilm />
          <span style={{ fontSize: '11px' }}>模板</span>
        </button>
        <button
          onClick={onNavigateToCreate}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
            background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)',
          }}
        >
          <div style={{
            width: 48, height: 48, borderRadius: '16px',
            background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginTop: '-20px',
            boxShadow: '0 4px 20px rgba(108,92,231,0.5)',
          }}>
            <IconSparkles />
          </div>
          <span style={{ fontSize: '11px' }}>创作</span>
        </button>
        <button style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)',
        }}>
          <IconUser />
          <span style={{ fontSize: '11px' }}>我的</span>
        </button>
      </div>

      {/* Template Detail Modal */}
      {selectedModal && (
        <div className="modal-overlay" onClick={() => setSelectedModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Preview */}
            <div style={{
              height: 200, background: selectedModal.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', borderRadius: '20px 20px 0 0', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)',
              }} />
              <span style={{ fontSize: '64px', opacity: 0.5 }}>
                {templateCategories.find(c => c.id === selectedModal.category)?.icon || '🎬'}
              </span>
              {/* Close button */}
              <button
                onClick={() => setSelectedModal(null)}
                style={{
                  position: 'absolute', top: 12, right: 12,
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'rgba(0,0,0,0.4)', border: 'none',
                  color: '#fff', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <IconX />
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>{selectedModal.name}</h3>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{selectedModal.subtitle}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <IconStar />
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>{selectedModal.rating}</span>
                </div>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {selectedModal.usageCount.toLocaleString()} 次使用
                </span>
              </div>

              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                {selectedModal.description}
              </p>

              {/* Scene */}
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>适用场景</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {selectedModal.scene.split('、').map((s, i) => (
                    <span key={i} style={{
                      padding: '4px 12px', borderRadius: '16px',
                      background: 'rgba(108,92,231,0.12)', border: '1px solid rgba(108,92,231,0.25)',
                      fontSize: '12px', color: 'var(--primary-light)',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended Params */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>推荐参数</h4>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{
                    padding: '8px 16px', borderRadius: '10px',
                    background: 'var(--bg-input)', border: '1px solid var(--border)',
                    fontSize: '13px', color: 'var(--text-secondary)',
                  }}>
                    比例: {selectedModal.recommendParams.ratio}
                  </div>
                  <div style={{
                    padding: '8px 16px', borderRadius: '10px',
                    background: 'var(--bg-input)', border: '1px solid var(--border)',
                    fontSize: '13px', color: 'var(--text-secondary)',
                  }}>
                    分辨率: {selectedModal.recommendParams.resolution}
                  </div>
                  <div style={{
                    padding: '8px 16px', borderRadius: '10px',
                    background: 'var(--bg-input)', border: '1px solid var(--border)',
                    fontSize: '13px', color: 'var(--text-secondary)',
                  }}>
                    时长: {selectedModal.recommendParams.duration}
                  </div>
                </div>
              </div>

              {/* Use Template Button */}
              <button
                onClick={() => {
                  onSelectTemplate(selectedModal)
                  onNavigateToCreate()
                  setSelectedModal(null)
                }}
                style={{
                  width: '100%', height: '48px', borderRadius: '14px', border: 'none',
                  background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
                  color: '#fff', fontSize: '15px', fontWeight: 600, cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(108,92,231,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}
              >
                <IconSparkles /> 使用此模板
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ========== Page 4: Create Page (Workspace) ========== */
function CreatePage({ selectedTemplate, onNavigateBack }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  // activePanelTab removed - tags and check now inline under prompt

  // Prompt state
  const [prompt, setPrompt] = useState(selectedTemplate ? `使用${selectedTemplate.name}模板，${selectedTemplate.subtitle}风格` : '')
  const [translatedPrompt, setTranslatedPrompt] = useState('')
  const [targetLang, setTargetLang] = useState('en')
  const [showTranslation, setShowTranslation] = useState(false)
  const [isTranslating, setIsTranslating] = useState(false)
  const [isOptimizing, setIsOptimizing] = useState(false)

  // Tags state
  const [tags, setTags] = useState([
    { id: 1, name: '风格', weight: 70 },
    { id: 2, name: '场景', weight: 85 },
    { id: 3, name: '光线', weight: 60 },
    { id: 4, name: '色调', weight: 50 },
    { id: 5, name: '运动', weight: 40 },
    { id: 6, name: '情绪', weight: 75 },
  ])
  const [newTagInput, setNewTagInput] = useState('')

  // Video params
  const [frameRate, setFrameRate] = useState('30fps')
  const [resolution, setResolution] = useState('1080P')
  const [duration, setDuration] = useState('10')
  const [aspectRatio, setAspectRatio] = useState('9:16')
  const [playSpeed, setPlaySpeed] = useState('1x')
  const [brightness, setBrightness] = useState(100)

  // Generation state
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)
  const [generatedVideo, setGeneratedVideo] = useState(false)

  // Chat state
  const [chatMessages, setChatMessages] = useState([
    { id: 1, role: 'assistant', content: '你好！我是 AI 视频创作助手，可以帮你优化提示词、选择参数。有什么需要帮助的吗？' }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [selectedModel, setSelectedModel] = useState('Kling 2.0')
  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages, isTyping])

  const handleTranslate = useCallback(() => {
    if (!prompt.trim()) return
    setIsTranslating(true)
    setShowTranslation(true)
    setTimeout(() => {
      setTranslatedPrompt(mockTranslations[targetLang] || prompt)
      setIsTranslating(false)
    }, 800)
  }, [prompt, targetLang])

  const handleOptimize = useCallback(() => {
    if (!prompt.trim()) return
    setIsOptimizing(true)
    setTimeout(() => {
      setPrompt(prev => prev + '，电影级画质，柔和自然光线，浅景深，4K超高清，专业色彩调色')
      setIsOptimizing(false)
    }, 1200)
  }, [prompt])

  const handleAddTag = useCallback(() => {
    if (!newTagInput.trim()) return
    const exists = tags.find(t => t.name === newTagInput.trim())
    if (exists) return
    setTags(prev => [...prev, { id: Date.now(), name: newTagInput.trim(), weight: 50 }])
    setNewTagInput('')
  }, [newTagInput, tags])

  const handleRemoveTag = useCallback((id) => {
    setTags(prev => prev.filter(t => t.id !== id))
  }, [])

  const handleTagWeightChange = useCallback((id, weight) => {
    setTags(prev => prev.map(t => t.id === id ? { ...t, weight } : t))
  }, [])

  const handleGenerate = useCallback(() => {
    if (!prompt.trim()) return
    setIsGenerating(true)
    setGenerationProgress(0)
    setGeneratedVideo(false)

    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsGenerating(false)
            setGeneratedVideo(true)
          }, 300)
          return 100
        }
        return prev + Math.random() * 3 + 1
      })
    }, 150)
  }, [prompt])

  const handleExport = useCallback(() => {
    alert('Demo：视频导出功能已触发')
  }, [])

  const handleChatSend = useCallback(() => {
    if (!chatInput.trim() || isTyping) return
    const userMsg = { id: Date.now(), role: 'user', content: chatInput.trim() }
    setChatMessages(prev => [...prev, userMsg])
    setChatInput('')
    setIsTyping(true)

    setTimeout(() => {
      const reply = mockAIReplies[Math.floor(Math.random() * mockAIReplies.length)]
      setChatMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: reply }])
      setIsTyping(false)
    }, 1000)
  }, [chatInput, isTyping])

  const handleChatKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleChatSend()
    }
  }, [handleChatSend])

  const projectData = {
    workspaceFolders: [
      { name: '品牌宣传片', icon: '📁', badge: 3 },
      { name: '产品发布视频', icon: '📁', badge: 2 },
      { name: '社交媒体短视频', icon: '📁', badge: 5 },
      { name: '个人创作', icon: '📁', badge: 1 },
    ],
    assetFolders: [
      { name: '图片素材', icon: '🖼️', badge: 12 },
      { name: '视频素材', icon: '🎬', badge: 8 },
      { name: '音频素材', icon: '🎵', badge: 3 },
      { name: '上传素材', icon: '➕', badge: 0 },
    ],
    libraryFolders: [
      { name: '已生成视频', icon: '💎', badge: 6 },
      { name: '收藏素材', icon: '⭐', badge: 4 },
    ],
    recentRecords: [
      { time: '10分钟前', name: '探店美食模板' },
      { time: '1小时前', name: '旅行Vlog模板' },
      { time: '昨天', name: '穿搭分享模板' },
    ],
  }

  return (
    <div className="workspace">
      {/* ===== Left Sidebar ===== */}
      <div className={`sidebar${sidebarCollapsed ? ' collapsed' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div style={{
            width: 32, height: 32, borderRadius: '8px', flexShrink: 0,
            background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <IconFilm />
          </div>
          {!sidebarCollapsed && (
            <span style={{ fontSize: '14px', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              AI 视频创作
            </span>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            style={{
              marginLeft: 'auto', width: 28, height: 28, borderRadius: '6px',
              border: 'none', background: 'var(--bg-input)',
              color: 'var(--text-secondary)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {sidebarCollapsed ? <IconChevronRight /> : <IconChevronLeft />}
          </button>
        </div>

        {/* Sidebar Nav */}
        <div className="sidebar-nav">
          {/* Workspace Section */}
          <div className="sidebar-section-title">{sidebarCollapsed ? '...' : '工作空间'}</div>
          {projectData.workspaceFolders.map((item, i) => (
            <div key={i} className="sidebar-item" style={{ cursor: 'pointer' }}>
              <span className="item-icon">{item.icon}</span>
              {!sidebarCollapsed && <span className="item-label">{item.name}</span>}
              {!sidebarCollapsed && item.badge > 0 && <span className="item-badge">{item.badge}</span>}
            </div>
          ))}

          {/* Asset Section */}
          <div className="sidebar-section-title" style={{ marginTop: '8px' }}>{sidebarCollapsed ? '...' : '素材库'}</div>
          {projectData.assetFolders.map((item, i) => (
            <div key={i} className="sidebar-item" style={{ cursor: 'pointer' }}>
              <span className="item-icon">{item.icon}</span>
              {!sidebarCollapsed && <span className="item-label">{item.name}</span>}
              {!sidebarCollapsed && item.badge > 0 && <span className="item-badge">{item.badge}</span>}
            </div>
          ))}

          {/* Library Section */}
          <div className="sidebar-section-title" style={{ marginTop: '8px' }}>{sidebarCollapsed ? '...' : '资产库'}</div>
          {projectData.libraryFolders.map((item, i) => (
            <div key={i} className="sidebar-item" style={{ cursor: 'pointer' }}>
              <span className="item-icon">{item.icon}</span>
              {!sidebarCollapsed && <span className="item-label">{item.name}</span>}
              {!sidebarCollapsed && item.badge > 0 && <span className="item-badge">{item.badge}</span>}
            </div>
          ))}

          {/* Recent Records */}
          <div className="sidebar-section-title" style={{ marginTop: '8px' }}>{sidebarCollapsed ? '...' : '最近记录'}</div>
          {projectData.recentRecords.map((item, i) => (
            <div key={i} className="sidebar-item" style={{ cursor: 'pointer', fontSize: '12px' }}>
              <span className="item-icon">🕐</span>
              {!sidebarCollapsed && (
                <span className="item-label" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span>{item.name}</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{item.time}</span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== Main Area ===== */}
      <div className="workspace-main">
        {/* Top Bar */}
        <div className="topbar">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            style={{
              width: 34, height: 34, borderRadius: '8px',
              border: '1px solid var(--border)', background: 'var(--bg-input)',
              color: 'var(--text-secondary)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <IconMenu />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <span>工作空间</span>
            <IconChevronRight />
            <span style={{ color: 'var(--text)' }}>{selectedTemplate ? selectedTemplate.name : '新建项目'}</span>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button style={{
              width: 34, height: 34, borderRadius: '8px',
              border: '1px solid var(--border)', background: 'var(--bg-input)',
              color: 'var(--text-secondary)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <IconUndo />
            </button>
            <button style={{
              width: 34, height: 34, borderRadius: '8px',
              border: '1px solid var(--border)', background: 'var(--bg-input)',
              color: 'var(--text-secondary)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <IconRedo />
            </button>
            <button
              onClick={handleExport}
              style={{
                height: 34, borderRadius: '8px', border: 'none',
                background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
                color: '#fff', cursor: 'pointer',
                padding: '0 14px', fontSize: '13px', fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: '6px',
                boxShadow: '0 2px 12px rgba(108,92,231,0.3)',
              }}
            >
              <IconExport /> 导出视频
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="workspace-content">
          {/* ===== Left Panel ===== */}
          <div className="left-panel">
            {/* Panel Header */}
            <div style={{
              padding: '12px 14px', borderBottom: '1px solid var(--border)',
              fontSize: '13px', fontWeight: 600, color: 'var(--text)',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}>
              <IconWand /> Prompt 编辑
            </div>

            {/* Panel Content - All in one scrollable view */}
            <div className="panel-content">
              {/* Prompt textarea */}
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="请输入视频描述提示词..."
                rows={4}
                style={{
                  width: '100%', borderRadius: '10px',
                  border: '1px solid var(--border)', background: 'var(--bg-input)',
                  color: 'var(--text)', padding: '10px 12px', fontSize: '13px',
                  outline: 'none', resize: 'none', lineHeight: '1.6',
                  fontFamily: 'inherit', marginBottom: '10px',
                }}
              />

              {/* AI Optimize + Translate */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <button
                  onClick={handleOptimize}
                  disabled={!prompt.trim() || isOptimizing}
                  style={{
                    flex: 1, height: 36, borderRadius: '10px', border: 'none',
                    background: prompt.trim() && !isOptimizing
                      ? 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)'
                      : 'var(--border)',
                    color: prompt.trim() && !isOptimizing ? '#fff' : 'var(--text-muted)',
                    fontSize: '13px', fontWeight: 500, cursor: prompt.trim() && !isOptimizing ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    transition: 'all 0.2s',
                  }}
                >
                  {isOptimizing ? (
                    <div style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 0.8s linear infinite' }} />
                  ) : (
                    <IconSparkles />
                  )}
                  {isOptimizing ? '优化中...' : 'AI 优化'}
                </button>
                <button
                  onClick={handleTranslate}
                  disabled={!prompt.trim() || isTranslating}
                  style={{
                    flex: 1, height: 36, borderRadius: '10px', border: 'none',
                    background: prompt.trim() && !isTranslating
                      ? 'var(--bg-card-hover)'
                      : 'var(--border)',
                    color: prompt.trim() && !isTranslating ? 'var(--text)' : 'var(--text-muted)',
                    fontSize: '13px', fontWeight: 500, cursor: prompt.trim() && !isTranslating ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    border: '1px solid var(--border)',
                  }}
                >
                  {isTranslating ? (
                    <div style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid rgba(108,92,231,0.3)', borderTopColor: 'var(--primary)', animation: 'spin 0.8s linear infinite' }} />
                  ) : (
                    <IconTranslate />
                  )}
                  {isTranslating ? '翻译中...' : '翻译'}
                </button>
              </div>

              {/* Language selector */}
              <select
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                style={{
                  width: '100%', height: 34, borderRadius: '8px',
                  border: '1px solid var(--border)', background: 'var(--bg-input)',
                  color: 'var(--text)', padding: '0 10px', fontSize: '12px',
                  outline: 'none', cursor: 'pointer', marginBottom: '10px',
                }}
              >
                {languages.map(l => (
                  <option key={l.code} value={l.code}>{l.name}</option>
                ))}
              </select>

              {/* Translation result */}
              {showTranslation && translatedPrompt && (
                <div style={{
                  background: 'rgba(0,206,201,0.08)', borderRadius: '10px',
                  border: '1px solid rgba(0,206,201,0.2)',
                  padding: '10px 12px', fontSize: '13px',
                  color: 'var(--accent-light)', lineHeight: '1.5',
                  animation: 'fadeIn 0.3s ease-out', marginBottom: '16px',
                }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    {languages.find(l => l.code === targetLang)?.name} 翻译结果：
                  </div>
                  {translatedPrompt}
                </div>
              )}

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border)', margin: '4px 0 16px' }} />

              {/* ===== Tags Section ===== */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <IconSettings /> 标签管理
                </div>
                {/* Existing tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                  {tags.map(tag => (
                    <div key={tag.id} className="tag-item" style={{ flexDirection: 'column', padding: '8px 12px', gap: '6px', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '100%' }}>
                        <span>{tag.name}</span>
                        <span className="tag-remove" onClick={() => handleRemoveTag(tag.id)}><IconX /></span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={tag.weight}
                        onChange={(e) => handleTagWeightChange(tag.id, parseInt(e.target.value))}
                        className="weight-slider"
                        style={{ width: '100%' }}
                      />
                      <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>权重: {tag.weight}</span>
                    </div>
                  ))}
                </div>
                {/* Add tag */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    value={newTagInput}
                    onChange={(e) => setNewTagInput(e.target.value)}
                    placeholder="添加标签..."
                    onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                    style={{
                      flex: 1, height: 34, borderRadius: '8px',
                      border: '1px solid var(--border)', background: 'var(--bg-input)',
                      color: 'var(--text)', padding: '0 10px', fontSize: '12px',
                      outline: 'none',
                    }}
                  />
                  <button
                    onClick={handleAddTag}
                    style={{
                      width: 34, height: 34, borderRadius: '8px',
                      border: '1px solid var(--border)', background: 'var(--bg-input)',
                      color: 'var(--primary-light)', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <IconPlus />
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border)', margin: '4px 0 16px' }} />

              {/* ===== AI Check Section ===== */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <IconCheck /> AI 检查
                </div>
                {/* Quality Score */}
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>提示词质量评分</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-light)' }}>85/100</span>
                  </div>
                  <div style={{
                    width: '100%', height: '6px', borderRadius: '3px',
                    background: 'var(--border)', overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%', borderRadius: '3px',
                      background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
                      width: '85%', transition: 'width 0.5s ease',
                    }} />
                  </div>
                </div>

                {/* Check Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
                    <span style={{ color: 'var(--success)' }}><IconCheck /></span>
                    <span>主体描述清晰</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
                    <span style={{ color: 'var(--success)' }}><IconCheck /></span>
                    <span>场景设定完整</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
                    <span style={{ color: 'var(--warning)' }}><IconWarning /></span>
                    <span style={{ color: 'var(--warning)' }}>建议添加光线描述</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
                    <span style={{ color: 'var(--warning)' }}><IconWarning /></span>
                    <span style={{ color: 'var(--warning)' }}>建议添加运动描述</span>
                  </div>
                </div>

                {/* Optimization Suggestions */}
                <div style={{
                  background: 'var(--bg-input)', borderRadius: '10px',
                  border: '1px solid var(--border)', padding: '10px 12px',
                  fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.6',
                }}>
                  <div style={{ fontWeight: 600, marginBottom: '4px', color: 'var(--text)', fontSize: '12px' }}>优化建议</div>
                  1. 在提示词中加入光线描述，如"柔和的黄金时段光线"<br/>
                  2. 添加运动描述，如"缓慢推进镜头"或"平滑过渡"<br/>
                  3. 可以增加色彩氛围描述，提升画面质感
                </div>
              </div>
            </div>
          </div>

          {/* ===== Center Area ===== */}
          <div className="center-area">
            {/* Preview */}
            <div className="center-preview">
              {isGenerating ? (
                <div style={{ textAlign: 'center', width: '100%', maxWidth: '500px' }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: '50%',
                    border: '3px solid var(--border)',
                    borderTopColor: 'var(--primary)',
                    margin: '0 auto 16px',
                    animation: 'spin 1s linear infinite',
                  }} />
                  <p style={{ fontSize: '15px', fontWeight: 500, marginBottom: '8px' }}>AI 生成中...</p>
                  <div style={{
                    width: '80%', height: '6px', borderRadius: '3px',
                    background: 'var(--border)', margin: '12px auto', overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%', borderRadius: '3px',
                      background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
                      width: `${Math.min(generationProgress, 100)}%`,
                      transition: 'width 0.3s ease',
                    }} />
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    {Math.min(Math.round(generationProgress), 100)}%
                  </p>
                </div>
              ) : generatedVideo ? (
                <div style={{
                  width: '100%', maxWidth: '500px',
                  aspectRatio: aspectRatio === '9:16' ? '9/16' : aspectRatio === '16:9' ? '16/9' : aspectRatio === '4:3' ? '4/3' : '1/1',
                  maxHeight: '400px',
                  background: 'linear-gradient(135deg, #1a1a3e 0%, #2d1b69 30%, #112 60%, #1a2a1a 100%)',
                  borderRadius: '12px', overflow: 'hidden',
                  position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {/* Play button */}
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', border: '2px solid rgba(255,255,255,0.3)',
                  }}>
                    <IconPlay />
                  </div>
                  {/* AI Badge */}
                  <div style={{
                    position: 'absolute', top: 10, left: 10,
                    background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)', borderRadius: '8px',
                    padding: '3px 10px', fontSize: '11px', fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: '4px',
                  }}>
                    <IconSparkles /> AI 生成
                  </div>
                  {/* Bottom controls */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    padding: '16px 12px 10px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <IconClock />
                        <span style={{ fontSize: '12px' }}>00:{duration.padStart(2, '0')}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button style={{
                          width: 30, height: 30, borderRadius: '8px',
                          background: 'rgba(255,255,255,0.15)', border: 'none',
                          color: '#fff', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <IconMaximize />
                        </button>
                        <button style={{
                          width: 30, height: 30, borderRadius: '8px',
                          background: 'rgba(255,255,255,0.15)', border: 'none',
                          color: '#fff', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <IconDownload />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{
                  width: '100%', maxWidth: '500px',
                  aspectRatio: aspectRatio === '9:16' ? '9/16' : aspectRatio === '16:9' ? '16/9' : aspectRatio === '4:3' ? '4/3' : '1/1',
                  maxHeight: '400px',
                  border: '2px dashed var(--border)', borderRadius: '12px',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: '12px',
                }}>
                  <div style={{ fontSize: '48px', opacity: 0.4 }}>
                    <IconFilm />
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>输入提示词开始创作</p>
                </div>
              )}
            </div>

            {/* Bottom Panel - Video Controls */}
            <div className="center-bottom">
              <div style={{ padding: '14px 16px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
                  {/* Frame Rate */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>帧率</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {['24fps', '30fps', '60fps'].map(f => (
                        <button key={f} onClick={() => setFrameRate(f)} style={{
                          padding: '4px 10px', borderRadius: '6px', border: 'none',
                          background: frameRate === f ? 'var(--primary)' : 'var(--bg-input)',
                          color: frameRate === f ? '#fff' : 'var(--text-secondary)',
                          fontSize: '11px', fontWeight: 500, cursor: 'pointer',
                        }}>
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Resolution */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>分辨率</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {['720P', '1080P', '4K'].map(r => (
                        <button key={r} onClick={() => setResolution(r)} style={{
                          padding: '4px 10px', borderRadius: '6px', border: 'none',
                          background: resolution === r ? 'var(--accent)' : 'var(--bg-input)',
                          color: resolution === r ? '#fff' : 'var(--text-secondary)',
                          fontSize: '11px', fontWeight: 500, cursor: 'pointer',
                        }}>
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Duration */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>时长</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {['5', '10', '15'].map(d => (
                        <button key={d} onClick={() => setDuration(d)} style={{
                          padding: '4px 10px', borderRadius: '6px', border: 'none',
                          background: duration === d ? 'var(--warning)' : 'var(--bg-input)',
                          color: duration === d ? '#000' : 'var(--text-secondary)',
                          fontSize: '11px', fontWeight: 500, cursor: 'pointer',
                        }}>
                          {d}s
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Aspect Ratio */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>比例</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {['9:16', '16:9', '1:1', '4:3'].map(ar => (
                        <button key={ar} onClick={() => setAspectRatio(ar)} style={{
                          padding: '4px 10px', borderRadius: '6px', border: 'none',
                          background: aspectRatio === ar ? 'var(--primary)' : 'var(--bg-input)',
                          color: aspectRatio === ar ? '#fff' : 'var(--text-secondary)',
                          fontSize: '11px', fontWeight: 500, cursor: 'pointer',
                        }}>
                          {ar}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Play Speed */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>速度</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {['0.5x', '1x', '1.5x', '2x'].map(s => (
                        <button key={s} onClick={() => setPlaySpeed(s)} style={{
                          padding: '4px 10px', borderRadius: '6px', border: 'none',
                          background: playSpeed === s ? 'var(--primary)' : 'var(--bg-input)',
                          color: playSpeed === s ? '#fff' : 'var(--text-secondary)',
                          fontSize: '11px', fontWeight: 500, cursor: 'pointer',
                        }}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Brightness */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>亮度</span>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={brightness}
                      onChange={(e) => setBrightness(parseInt(e.target.value))}
                      className="weight-slider"
                      style={{ width: '80px' }}
                    />
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{brightness}</span>
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  style={{
                    width: '100%', height: '44px', borderRadius: '12px', border: 'none',
                    background: prompt.trim() && !isGenerating
                      ? 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)'
                      : 'var(--border)',
                    color: prompt.trim() && !isGenerating ? '#fff' : 'var(--text-muted)',
                    fontSize: '15px', fontWeight: 600,
                    cursor: prompt.trim() && !isGenerating ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    boxShadow: prompt.trim() && !isGenerating ? '0 4px 20px rgba(108,92,231,0.4)' : 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  {isGenerating ? (
                    <>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 1s linear infinite' }} />
                      生成中... {Math.min(Math.round(generationProgress), 100)}%
                    </>
                  ) : generatedVideo ? (
                    <>
                      <IconSparkles /> 重新生成
                    </>
                  ) : (
                    <>
                      <IconSparkles /> 生成视频
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ===== Right Panel (Chat) ===== */}
          <div className="right-panel">
            {/* Chat Header */}
            <div className="chat-header">
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                style={{
                  height: 30, borderRadius: '8px',
                  border: '1px solid var(--border)', background: 'var(--bg-input)',
                  color: 'var(--text)', padding: '0 8px', fontSize: '12px',
                  outline: 'none', cursor: 'pointer',
                }}
              >
                <option>Kling 2.0</option>
                <option>Runway Gen-3</option>
                <option>Pika 1.0</option>
                <option>Sora</option>
              </select>
              <span style={{ fontSize: '13px', fontWeight: 600 }}>AI 助手</span>
            </div>

            {/* Chat Messages */}
            <div className="chat-messages">
              {chatMessages.map(msg => (
                <div key={msg.id} className={`chat-msg ${msg.role}`}>
                  {msg.content}
                </div>
              ))}
              {isTyping && (
                <div className="chat-msg assistant">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div className="chat-input-area">
              <textarea
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={handleChatKeyDown}
                placeholder="输入消息..."
                rows={1}
              />
              <button
                onClick={handleChatSend}
                disabled={!chatInput.trim() || isTyping}
                style={{
                  width: 36, height: 36, borderRadius: '10px', flexShrink: 0,
                  border: 'none',
                  background: chatInput.trim() && !isTyping
                    ? 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)'
                    : 'var(--border)',
                  color: chatInput.trim() && !isTyping ? '#fff' : 'var(--text-muted)',
                  cursor: chatInput.trim() && !isTyping ? 'pointer' : 'not-allowed',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
              >
                <IconSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ========== App Root ========== */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({ name: '创作者', avatar: '', credits: 500 })
  const [currentPage, setCurrentPage] = useState('login')
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const showToast = useCallback((msg) => {
    setToastMessage(msg)
    setToastVisible(true)
  }, [])

  const hideToast = useCallback(() => {
    setToastVisible(false)
  }, [])

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true)
    setCurrentPage('template')
  }, [])

  const handleChargeCredits = useCallback((amount) => {
    setUser(prev => ({ ...prev, credits: prev.credits + amount }))
  }, [])

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} />
        <Toast message={toastMessage} visible={toastVisible} onClose={hideToast} />
      </>
    )
  }

  return (
    <>
      {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
      {currentPage === 'credits' && (
        <CreditsPage
          user={user}
          onBack={() => setCurrentPage('template')}
          onChargeCredits={handleChargeCredits}
          showToast={showToast}
        />
      )}
      {currentPage === 'template' && (
        <TemplatePage
          onNavigateToCreate={() => setCurrentPage('create')}
          onSelectTemplate={(template) => setSelectedTemplate(template)}
          onNavigateToCredits={() => setCurrentPage('credits')}
          user={user}
        />
      )}
      {currentPage === 'create' && (
        <CreatePage
          selectedTemplate={selectedTemplate}
          onNavigateBack={() => setCurrentPage('template')}
        />
      )}
      <Toast message={toastMessage} visible={toastVisible} onClose={hideToast} />
    </>
  )
}

export default App
