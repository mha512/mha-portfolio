import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    let rx = 0, ry = 0, mx = 0, my = 0
    const move = e => { mx = e.clientX; my = e.clientY; dot.current.style.left = mx+'px'; dot.current.style.top = my+'px' }
    const raf = () => {
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1
      ring.current.style.left = rx+'px'; ring.current.style.top = ry+'px'
      requestAnimationFrame(raf)
    }
    const big = () => { dot.current.style.width='4px'; dot.current.style.height='4px'; ring.current.style.width='48px'; ring.current.style.height='48px'; ring.current.style.opacity='0.7' }
    const small = () => { dot.current.style.width='8px'; dot.current.style.height='8px'; ring.current.style.width='32px'; ring.current.style.height='32px'; ring.current.style.opacity='0.4' }
    document.addEventListener('mousemove', move)
    document.querySelectorAll('a,button').forEach(el => { el.addEventListener('mouseenter', big); el.addEventListener('mouseleave', small) })
    raf()
    return () => document.removeEventListener('mousemove', move)
  }, [])
  return (<><div className="cursor" ref={dot}/><div className="cursor-ring" ref={ring}/></>)
}
