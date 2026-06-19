import { useState, useMemo, useRef, useCallback } from 'react'

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
  { id: 1, name: '探店美食', subtitle: '（菜品展示）', category: 'food', gradient: 'linear-gradient(135deg, #FD79A8 0%, #FDCB6E 100%)', rating: 4.8 },
  { id: 2, name: '探店打卡', subtitle: '（环境氛围）', category: 'food', gradient: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)', rating: 4.6 },
  { id: 3, name: '旅行Vlog', subtitle: '（风景记录）', category: 'travel', gradient: 'linear-gradient(135deg, #00CEC9 0%, #81ECEC 100%)', rating: 4.9 },
  { id: 4, name: '城市漫步', subtitle: '（街拍随记）', category: 'travel', gradient: 'linear-gradient(135deg, #00B894 0%, #55EFC4 100%)', rating: 4.5 },
  { id: 5, name: '穿搭分享', subtitle: '（OOTD）', category: 'fashion', gradient: 'linear-gradient(135deg, #E17055 0%, #FAB1A0 100%)', rating: 4.7 },
  { id: 6, name: '开箱测评', subtitle: '（数码产品）', category: 'tech', gradient: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)', rating: 4.4 },
  { id: 7, name: '日常记录', subtitle: '（生活碎片）', category: 'life', gradient: 'linear-gradient(135deg, #FD79A8 0%, #FDCB6E 100%)', rating: 4.8 },
  { id: 8, name: '美食教程', subtitle: '（烹饪过程）', category: 'food', gradient: 'linear-gradient(135deg, #00CEC9 0%, #81ECEC 100%)', rating: 4.6 },
  { id: 9, name: '运动健身', subtitle: '（活力记录）', category: 'life', gradient: 'linear-gradient(135deg, #00B894 0%, #55EFC4 100%)', rating: 4.3 },
  { id: 10, name: '夜景航拍', subtitle: '（城市风光）', category: 'travel', gradient: 'linear-gradient(135deg, #E17055 0%, #FAB1A0 100%)', rating: 4.9 },
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

/* ========== Template Page ========== */
function TemplatePage({ onNavigateToCreate, onSelectTemplate }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

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
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: 36, height: 36, borderRadius: '10px',
              background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <IconFilm />
            </div>
            <div>
              <h1 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.3px', margin: 0 }}>AI 视频创作</h1>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0 }}>智能视频生成工具</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{
              width: 38, height: 38, borderRadius: '12px', border: '1px solid var(--border)',
              background: 'var(--bg-card)', color: 'var(--text-secondary)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <IconUser />
            </button>
            <button onClick={onNavigateToCreate} style={{
              height: 38, borderRadius: '12px', border: 'none',
              background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)', color: '#fff', cursor: 'pointer',
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
        }}>
          {filteredTemplates.map((template, index) => (
            <div
              key={template.id}
              className="animate-fadeIn"
              style={{
                animationDelay: `${index * 0.05}s`,
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={() => {
                onSelectTemplate(template)
                onNavigateToCreate()
              }}
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
              {/* Template Preview */}
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
              {/* Template Info */}
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
    </div>
  )
}

/* ========== Creation Page ========== */
function CreationPage({ onNavigateBack, selectedTemplate }) {
  const [prompt, setPrompt] = useState(selectedTemplate ? `使用${selectedTemplate.name}模板，${selectedTemplate.subtitle}风格` : '')
  const [translatedPrompt, setTranslatedPrompt] = useState('')
  const [targetLang, setTargetLang] = useState('en')
  const [showTranslation, setShowTranslation] = useState(false)
  const [isTranslating, setIsTranslating] = useState(false)
  const [uploadedImages, setUploadedImages] = useState([])
  const [aspectRatio, setAspectRatio] = useState('9:16')
  const [resolution, setResolution] = useState('1080P')
  const [duration, setDuration] = useState('10')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)
  const [generatedVideo, setGeneratedVideo] = useState(false)
  const [showFullscreen, setShowFullscreen] = useState(false)
  const fileInputRef = useRef(null)

  const aspectRatios = [
    { value: '9:16', label: '竖版', icon: '📱', desc: '9:16' },
    { value: '16:9', label: '横屏', icon: '🖥️', desc: '16:9' },
    { value: '1:1', label: '方形', icon: '⬜', desc: '1:1' },
    { value: '4:3', label: '经典', icon: '📷', desc: '4:3' },
  ]

  const resolutions = [
    { value: '720P', label: '720P', desc: '高清' },
    { value: '1080P', label: '1080P', desc: '全高清' },
    { value: '4K', label: '4K', desc: '超高清' },
  ]

  const durations = [
    { value: '5', label: '5秒' },
    { value: '10', label: '10秒' },
    { value: '15', label: '15秒' },
  ]

  const handleTranslate = useCallback(() => {
    if (!prompt.trim()) return
    setIsTranslating(true)
    setShowTranslation(true)
    setTimeout(() => {
      setTranslatedPrompt(mockTranslations[targetLang] || prompt)
      setIsTranslating(false)
    }, 800)
  }, [prompt, targetLang])

  const handleImageUpload = useCallback((e) => {
    const files = Array.from(e.target.files)
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      url: URL.createObjectURL(file),
    }))
    setUploadedImages(prev => [...prev, ...newImages].slice(0, 9))
    e.target.value = ''
  }, [])

  const removeImage = useCallback((id) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id))
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

  const handleDownload = useCallback(() => {
    alert('Demo 模式：视频下载功能已模拟触发')
  }, [])

  const getAspectStyle = () => {
    if (aspectRatio === '9:16') return { aspectRatio: '9/16', maxHeight: '360px' }
    if (aspectRatio === '16:9') return { aspectRatio: '16/9', maxHeight: '220px' }
    if (aspectRatio === '4:3') return { aspectRatio: '4/3', maxHeight: '260px' }
    return { aspectRatio: '1/1', maxHeight: '300px' }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(108,92,231,0.12) 0%, transparent 100%)',
        padding: '12px 16px',
        position: 'sticky', top: 0, zIndex: 100,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={onNavigateBack}
            style={{
              width: 38, height: 38, borderRadius: '12px',
              border: '1px solid var(--border)', background: 'var(--bg-card)',
              color: 'var(--text)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <IconArrowLeft />
          </button>
          <h2 style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>视频创作</h2>
          <button
            style={{
              width: 38, height: 38, borderRadius: '12px',
              border: '1px solid var(--border)', background: 'var(--bg-card)',
              color: 'var(--text-secondary)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <IconUser />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '16px', overflowY: 'auto', paddingBottom: '120px' }}>

        {/* Video Preview / Generation Area */}
        <div
          className="animate-slideUp"
          style={{
            borderRadius: '20px', overflow: 'hidden',
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            marginBottom: '16px',
          }}
        >
          <div style={{
            ...getAspectStyle(),
            background: '#0a0a15',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Background pattern */}
            <div style={{
              position: 'absolute', inset: 0, opacity: 0.05,
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }} />

            {isGenerating ? (
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <div style={{
                  width: 60, height: 60, borderRadius: '50%',
                  border: '3px solid var(--border)',
                  borderTopColor: 'var(--primary)',
                  margin: '0 auto 16px',
                  animation: 'spin 1s linear infinite',
                }} />
                <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '8px' }}>AI 正在生成视频...</p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>预计需要 30-60 秒</p>
                {/* Progress Bar */}
                <div style={{
                  width: '80%', height: '4px', borderRadius: '2px',
                  background: 'var(--border)', margin: '12px auto 0', overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%', borderRadius: '2px',
                    background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
                    width: `${Math.min(generationProgress, 100)}%`,
                    transition: 'width 0.3s ease',
                  }} />
                </div>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px' }}>
                  {Math.min(Math.round(generationProgress), 100)}%
                </p>
              </div>
            ) : generatedVideo ? (
              <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}>
                {/* Mock Generated Video */}
                <div style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(135deg, #1a1a3e 0%, #2d1b69 30%, #112 60%, #1a2a1a 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', border: '2px solid rgba(255,255,255,0.3)',
                  }}>
                    <IconPlay />
                  </div>
                </div>
                {/* Video Controls Overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '20px 12px 10px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <IconClock />
                      <span style={{ fontSize: '12px' }}>00:{duration.padStart(2, '0')}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => setShowFullscreen(true)}
                        style={{
                          width: 32, height: 32, borderRadius: '8px',
                          background: 'rgba(255,255,255,0.15)', border: 'none',
                          color: '#fff', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >
                        <IconMaximize />
                      </button>
                      <button
                        onClick={handleDownload}
                        style={{
                          width: 32, height: 32, borderRadius: '8px',
                          background: 'rgba(255,255,255,0.15)', border: 'none',
                          color: '#fff', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >
                        <IconDownload />
                      </button>
                    </div>
                  </div>
                  {/* Timeline */}
                  <div style={{
                    height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.2)',
                    marginTop: '8px', overflow: 'hidden',
                  }}>
                    <div style={{ height: '100%', width: '35%', borderRadius: '2px', background: 'var(--primary)' }} />
                  </div>
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
              </div>
            ) : (
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'rgba(108,92,231,0.1)', border: '2px dashed var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px',
                }}>
                  <IconFilm />
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>输入提示词后生成视频</p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>支持中英文提示词</p>
              </div>
            )}
          </div>
        </div>

        {/* Prompt Input Section */}
        <div
          className="animate-slideUp"
          style={{
            animationDelay: '0.1s',
            background: 'var(--bg-card)', borderRadius: '16px',
            border: '1px solid var(--border)', padding: '16px',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{
              width: 28, height: 28, borderRadius: '8px',
              background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <IconWand />
            </div>
            <span style={{ fontSize: '15px', fontWeight: 600 }}>创作需求</span>
          </div>

          {/* Prompt Textarea */}
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="请输入视频描述提示词，例如：一只可爱的猫咪在阳光明媚的花园里追逐蝴蝶..."
            rows={3}
            style={{
              width: '100%', borderRadius: '12px',
              border: '1px solid var(--border)', background: 'var(--bg-input)',
              color: 'var(--text)', padding: '12px', fontSize: '14px',
              outline: 'none', resize: 'none', lineHeight: '1.6',
              transition: 'border-color 0.2s',
              fontFamily: 'inherit',
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
          />

          {/* Translation Section */}
          <div style={{ marginTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <IconTranslate />
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>提示词翻译</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  style={{
                    height: 30, borderRadius: '8px',
                    border: '1px solid var(--border)', background: 'var(--bg-input)',
                    color: 'var(--text)', padding: '0 8px', fontSize: '12px',
                    outline: 'none', cursor: 'pointer',
                  }}
                >
                  {languages.map(l => (
                    <option key={l.code} value={l.code}>{l.name}</option>
                  ))}
                </select>
                <button
                  onClick={handleTranslate}
                  disabled={!prompt.trim() || isTranslating}
                  style={{
                    height: 30, borderRadius: '8px', border: 'none',
                    background: prompt.trim() ? 'linear-gradient(135deg, #00CEC9 0%, #81ECEC 100%)' : 'var(--border)',
                    color: prompt.trim() ? '#fff' : 'var(--text-muted)',
                    padding: '0 12px', fontSize: '12px', fontWeight: 500,
                    cursor: prompt.trim() ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', gap: '4px',
                    transition: 'all 0.2s',
                  }}
                >
                  {isTranslating ? (
                    <div style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 0.8s linear infinite' }} />
                  ) : (
                    <IconTranslate />
                  )}
                  {isTranslating ? '翻译中...' : '翻译'}
                </button>
              </div>
            </div>
            {showTranslation && translatedPrompt && (
              <div style={{
                background: 'rgba(0,206,201,0.08)', borderRadius: '10px',
                border: '1px solid rgba(0,206,201,0.2)',
                padding: '10px 12px', fontSize: '13px',
                color: 'var(--accent-light)', lineHeight: '1.5',
                animation: 'fadeIn 0.3s ease-out',
              }}>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  {languages.find(l => l.code === targetLang)?.name} 翻译结果：
                </div>
                {translatedPrompt}
              </div>
            )}
          </div>
        </div>

        {/* Image Upload Section */}
        <div
          className="animate-slideUp"
          style={{
            animationDelay: '0.15s',
            background: 'var(--bg-card)', borderRadius: '16px',
            border: '1px solid var(--border)', padding: '16px',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconImage />
              <span style={{ fontSize: '15px', fontWeight: 600 }}>参考图片</span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>({uploadedImages.length}/9)</span>
            </div>
          </div>
          <div style={{
            display: 'flex', gap: '8px', overflowX: 'auto',
            paddingBottom: '4px', scrollbarWidth: 'none',
          }}>
            {uploadedImages.map(img => (
              <div key={img.id} style={{
                width: 80, height: 80, borderRadius: '12px',
                overflow: 'hidden', flexShrink: 0, position: 'relative',
                border: '1px solid var(--border)',
              }}>
                <img src={img.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <button
                  onClick={() => removeImage(img.id)}
                  style={{
                    position: 'absolute', top: 4, right: 4,
                    width: 20, height: 20, borderRadius: '50%',
                    background: 'rgba(0,0,0,0.6)', border: 'none',
                    color: '#fff', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <IconX />
                </button>
              </div>
            ))}
            {uploadedImages.length < 9 && (
              <button
                onClick={() => fileInputRef.current?.click()}
                style={{
                  width: 80, height: 80, borderRadius: '12px',
                  border: '2px dashed var(--border)', background: 'transparent',
                  color: 'var(--text-muted)', cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: '4px', flexShrink: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)'
                  e.currentTarget.style.color = 'var(--primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                }}
              >
                <IconUpload />
                <span style={{ fontSize: '10px' }}>上传</span>
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        {/* Settings Section */}
        <div
          className="animate-slideUp"
          style={{
            animationDelay: '0.2s',
            background: 'var(--bg-card)', borderRadius: '16px',
            border: '1px solid var(--border)', padding: '16px',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <IconSettings />
            <span style={{ fontSize: '15px', fontWeight: 600 }}>视频参数</span>
          </div>

          {/* Aspect Ratio */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <IconRatio />
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>画面比例</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {aspectRatios.map(ar => (
                <button
                  key={ar.value}
                  onClick={() => setAspectRatio(ar.value)}
                  style={{
                    flex: 1, height: 52, borderRadius: '12px',
                    border: aspectRatio === ar.value ? '2px solid var(--primary)' : '1px solid var(--border)',
                    background: aspectRatio === ar.value ? 'rgba(108,92,231,0.12)' : 'var(--bg-input)',
                    color: aspectRatio === ar.value ? 'var(--primary-light)' : 'var(--text-secondary)',
                    cursor: 'pointer', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: '2px',
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontSize: '18px' }}>{ar.icon}</span>
                  <span style={{ fontSize: '11px', fontWeight: 500 }}>{ar.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Resolution */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <IconFilm />
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>分辨率</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {resolutions.map(res => (
                <button
                  key={res.value}
                  onClick={() => setResolution(res.value)}
                  style={{
                    flex: 1, height: 42, borderRadius: '12px',
                    border: resolution === res.value ? '2px solid var(--accent)' : '1px solid var(--border)',
                    background: resolution === res.value ? 'rgba(0,206,201,0.12)' : 'var(--bg-input)',
                    color: resolution === res.value ? 'var(--accent-light)' : 'var(--text-secondary)',
                    cursor: 'pointer', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>{res.label}</span>
                  <span style={{ fontSize: '10px' }}>{res.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <IconClock />
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>视频时长</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {durations.map(d => (
                <button
                  key={d.value}
                  onClick={() => setDuration(d.value)}
                  style={{
                    flex: 1, height: 42, borderRadius: '12px',
                    border: duration === d.value ? '2px solid var(--warning)' : '1px solid var(--border)',
                    background: duration === d.value ? 'rgba(253,203,110,0.12)' : 'var(--bg-input)',
                    color: duration === d.value ? 'var(--warning)' : 'var(--text-secondary)',
                    cursor: 'pointer', fontSize: '14px', fontWeight: 600,
                    transition: 'all 0.2s',
                  }}
                >
                  {d.label}
                </button>
              ))}
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px' }}>
              * 接入 Kling 2.0 模型，最长支持 15 秒
            </p>
          </div>
        </div>

        {/* Current Settings Summary */}
        <div
          className="animate-slideUp"
          style={{
            animationDelay: '0.25s',
            display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px',
          }}
        >
          {[
            { label: '比例', value: aspectRatio, color: 'var(--primary)' },
            { label: '分辨率', value: resolution, color: 'var(--accent)' },
            { label: '时长', value: duration + 's', color: 'var(--warning)' },
          ].map(tag => (
            <div key={tag.label} style={{
              padding: '4px 12px', borderRadius: '20px',
              background: `${tag.color}15`, border: `1px solid ${tag.color}30`,
              fontSize: '12px', color: tag.color, fontWeight: 500,
            }}>
              {tag.label}: {tag.value}
            </div>
          ))}
        </div>
      </div>

      {/* Generate Button (Fixed Bottom) */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        padding: '12px 16px', paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        background: 'rgba(15,15,26,0.95)', backdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--border)', zIndex: 100,
      }}>
        <button
          onClick={handleGenerate}
          disabled={!prompt.trim() || isGenerating}
          style={{
            width: '100%', height: 52, borderRadius: '16px', border: 'none',
            background: prompt.trim() && !isGenerating
              ? 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)'
              : 'var(--border)',
            color: prompt.trim() && !isGenerating ? '#fff' : 'var(--text-muted)',
            fontSize: '16px', fontWeight: 600, cursor: prompt.trim() && !isGenerating ? 'pointer' : 'not-allowed',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            boxShadow: prompt.trim() && !isGenerating ? '0 4px 24px rgba(108,92,231,0.4)' : 'none',
            transition: 'all 0.3s',
          }}
        >
          {isGenerating ? (
            <>
              <div style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 1s linear infinite' }} />
              生成中... {Math.min(Math.round(generationProgress), 100)}%
            </>
          ) : generatedVideo ? (
            <>
              <IconSparkles /> 重新生成
            </>
          ) : (
            <>
              <IconSparkles /> 开始创作
            </>
          )}
        </button>
      </div>

      {/* Fullscreen Modal */}
      {showFullscreen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)',
            zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-out',
          }}
          onClick={() => setShowFullscreen(false)}
        >
          <div style={{
            width: '90%', maxWidth: 500,
            aspectRatio: aspectRatio === '9:16' ? '9/16' : aspectRatio === '16:9' ? '16/9' : aspectRatio === '4:3' ? '4/3' : '1/1',
            maxHeight: '85vh', borderRadius: '12px', overflow: 'hidden',
            background: 'linear-gradient(135deg, #1a1a3e 0%, #2d1b69 30%, #112 60%, #1a2a1a 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', border: '2px solid rgba(255,255,255,0.3)',
            }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setShowFullscreen(false); }}
              style={{
                position: 'absolute', top: 12, right: 12,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(0,0,0,0.5)', border: 'none',
                color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <IconX />
            </button>
            <div style={{
              position: 'absolute', top: 12, left: 12,
              background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)', borderRadius: '8px',
              padding: '4px 12px', fontSize: '12px', fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: '4px',
            }}>
              <IconSparkles /> AI 生成
            </div>
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              padding: '24px 16px 16px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px' }}>00:{duration.padStart(2, '0')}</span>
                <button
                  onClick={(e) => { e.stopPropagation(); handleDownload(); }}
                  style={{
                    padding: '6px 16px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)', border: 'none',
                    color: '#fff', fontSize: '13px', fontWeight: 500,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
                  }}
                >
                  <IconDownload /> 下载视频
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ========== App Root ========== */
function App() {
  const [currentPage, setCurrentPage] = useState('template')
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  return (
    <div>
      {currentPage === 'template' ? (
        <TemplatePage
          onNavigateToCreate={() => setCurrentPage('create')}
          onSelectTemplate={(template) => setSelectedTemplate(template)}
        />
      ) : (
        <CreationPage
          onNavigateBack={() => setCurrentPage('template')}
          selectedTemplate={selectedTemplate}
        />
      )}
    </div>
  )
}

export default App
