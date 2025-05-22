import { useRef, useEffect, useState } from "react"



export const StravinciParticle = () => {
  const canvasRef = useRef(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      setIsMobile(window.innerWidth < 768)
       
    }

    updateCanvasSize()

    let particles = []
    let textImageData = null

    function createTextImage() {
      if (!ctx || !canvas) return 0;
    
      ctx.fillStyle = "white";
      ctx.save();
    
      const fontSize = isMobile ? Math.min(canvas.width /5, 55) : Math.min(canvas.width / 5, 120);
      ctx.font = `lighter ${fontSize}px 'Harlow', mono`;
    
      const text = "Stravinci";
      const textMetrics = ctx.measureText(text);
      const textWidth = textMetrics.width;
      const text2="Automotive";
      const textMetrics2 = ctx.measureText(text2);
      const textWidth2 = textMetrics2.width;
    
      // Calculate overall width including logos
      const logoSize = fontSize *1; // logo height roughly 80% of fontSize
      const totalWidth = !isMobile ? textWidth + 10 + textWidth2 : textWidth; // logos + spacing
    
      const startX = (canvas.width - totalWidth) / 3;
      const centerY = (isMobile?canvas.height /2.2: canvas.height/2) + fontSize / 3;
    
    
      
    
      // --- Draw Text ---
      const textX = !isMobile ? startX + logoSize -50 : startX+30;
      ctx.fillText(text, textX-50, centerY-logoSize/5);

      ctx.fillText(text2, isMobile ? startX : textX*3.5, isMobile ? (centerY-logoSize/5)*1.3 : (centerY-logoSize/5));
    
      
    
      ctx.restore();
    
      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      return fontSize /120; // Scale factor for particles
    }
    function createParticle() {
      if (!ctx || !canvas || !textImageData) return null

      const data = textImageData.data

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)

        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          // Determine if the particle is from the first or second half of the text
          const centerX = canvas.width / 2
          const group = x < centerX ? 0 : 1

          return {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 1.5 + 0.5,
            color: "white",
            scatteredColor: "white", // Yellow for "Stra", Green for "vinci"
            group: group,
            life: Math.random() * 100 + 50,
          }
        }
      }

      return null
    }

    function createInitialParticles(scale) {
      const baseParticleCount = 10000 // Adjusted for better performance in the banner
      const particleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height*10) / (1920 * 1080)))
      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(scale)
        if (particle) particles.push(particle)
      }
    }

    let animationFrameId

    function animate(scale) {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(0, 0, 0, 0)" // Slightly transparent background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY } = mousePositionRef.current
      const maxDistance = 240

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance && (isTouchingRef.current || !("ontouchstart" in window))) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 60
          const moveY = Math.sin(angle) * force * 60
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY

          ctx.fillStyle = p.scatteredColor
        } else {
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
          ctx.fillStyle = "white"
        }

        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          const newParticle = createParticle(scale)
          if (newParticle) {
            particles[i] = newParticle
          } else {
            particles.splice(i, 1)
            i--
          }
        }
      }

      const baseParticleCount = 10000
      const targetParticleCount = Math.floor(
        baseParticleCount * Math.sqrt((canvas.width * canvas.height*5) / (1920 * 1080)),
      )
      while (particles.length < targetParticleCount) {
        const newParticle = createParticle(scale)
        if (newParticle) particles.push(newParticle)
      }

      animationFrameId = requestAnimationFrame(() => animate(scale))
    }

    const scale = createTextImage()
    createInitialParticles(scale)
    animate(scale)

    const handleResize = () => {
      updateCanvasSize()
      const newScale = createTextImage()
      particles = []
      createInitialParticles(newScale)
    }

    const handleMove = (x, y) => {
      const rect = canvas.getBoundingClientRect()
      mousePositionRef.current = {
        x: x - rect.left,
        y: y - rect.top,
      }
    }

    const handleMouseMove = (e) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    const handleTouchStart = () => {
      isTouchingRef.current = true
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <canvas ref={canvasRef} className="w-full h-[60vh] md:h-[65vh]  bank-gothic" aria-label="Interactive particle effect with Stravinci text" />
  )
}

export default StravinciParticle
