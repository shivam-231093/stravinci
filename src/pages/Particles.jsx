import { useRef, useEffect, useState, memo } from "react"

const AWS_LOGO_PATH = "M 20.050 10.906 C 17.393 15.871 20.842 23.759 29.695 32.967 C 37.570 41.158 38.743 43.773 37.174 49.641 C 34.362 60.151 36.570 65.303 47.670 74.135 C 51.152 76.906 54.028 79.246 54.062 79.336 C 54.097 79.426 54.367 81.750 54.662 84.500 C 55.025 87.876 55.979 90.330 57.600 92.055 C 60.936 95.605 60.904 101.178 57.535 103.385 C 53.678 105.913 51.936 105.389 44.474 99.456 C 36.987 93.504 36.048 92.035 38.457 90.036 C 40.004 88.752 40.658 82.976 39.250 83.028 C 37.787 83.082 31.049 88.716 31.686 89.353 C 32.042 89.709 31.808 90 31.167 90 C 29.643 90 29.721 94.065 31.282 96.046 C 33.579 98.960 48.499 110.730 50.813 111.452 C 52.429 111.957 54.746 111.355 58.500 109.456 L 63.875 106.736 68.365 109.368 C 70.835 110.816 73.901 111.996 75.178 111.991 C 76.613 111.985 81.417 108.733 87.750 103.482 C 99.910 93.398 100.357 92.066 93.475 86.426 C 90.986 84.386 88.700 82.966 88.396 83.270 C 87.192 84.474 87.354 89.049 88.638 90.115 C 89.387 90.736 90 91.768 90 92.408 C 90 93.941 76.433 105 74.553 105 C 72.255 105 68.001 102.791 67.986 101.589 C 67.979 100.990 67.727 99.584 67.426 98.464 C 67.063 97.114 67.922 95.115 69.976 92.530 C 71.679 90.387 72.827 87.992 72.527 87.209 C 71.334 84.100 73.989 78.514 78.093 75.500 C 84.067 71.113 90.816 63.583 91.610 60.420 C 91.990 58.905 91.734 54.816 91.042 51.333 C 90.349 47.850 90.042 43.968 90.359 42.705 C 90.676 41.443 93.230 37.955 96.035 34.955 C 107.133 23.084 109.033 19.392 105.890 15.805 C 104.618 14.352 103.691 13.928 103.383 14.658 C 101.693 18.664 95.718 26.003 87.487 34.181 C 79.605 42.011 78 44.126 78 46.681 C 78 50.565 80.330 52.801 82.500 51 C 83.325 50.315 84 49.135 84 48.378 C 84 46.061 85.923 46.847 86.571 49.428 C 87.392 52.697 86.299 55.770 84.064 56.480 C 81.908 57.164 77.007 55.163 76.985 53.589 C 76.976 52.990 76.539 51.825 76.013 51 C 75.228 49.769 74.468 50.211 71.778 53.462 C 67.839 58.222 66 61.593 66 64.055 C 66 66.705 68.096 67.590 69.576 65.565 C 70.276 64.608 71.665 63.981 72.663 64.174 C 76.017 64.819 75.362 68.056 70.972 72.528 C 67.269 76.301 66.678 77.539 66.127 82.663 C 65.594 87.624 65.200 88.500 63.500 88.500 C 61.793 88.500 61.425 87.664 60.991 82.783 C 60.537 77.694 60.006 76.581 56.145 72.648 C 53.436 69.887 51.943 67.530 52.165 66.365 C 52.615 64.003 56.789 63.287 57.611 65.430 C 58.371 67.410 60.606 67.470 61.350 65.530 C 62.141 63.470 58.520 55.756 56.052 54.242 C 54.923 53.549 54 52.274 54 51.408 C 54 49.087 51.697 50.244 50.198 53.318 C 48.751 56.287 44.549 57.831 42.095 56.296 C 39.970 54.967 39.497 49.662 41.365 48.112 C 42.562 47.119 42.952 47.273 43.483 48.947 C 44.246 51.350 47.217 51.648 48.999 49.501 C 51.203 46.846 48.269 42.419 36.523 30.671 C 27.106 21.252 25.147 18.751 24.040 14.724 C 22.506 9.150 21.503 8.191 20.050 10.906 M 15.879 22.500 C 15.778 23.600 15.628 25.175 15.545 26 C 15.200 29.428 17.476 33.155 23.071 38.325 C 26.332 41.339 29 44.619 29 45.615 C 29 46.987 27.851 46.341 24.250 42.945 C 13.698 32.994 13.106 32.559 12.449 34.271 C 11.535 36.655 14.723 42.521 17.795 44.105 C 19.283 44.872 21.620 46.513 22.990 47.750 C 24.359 48.987 25.822 50 26.240 50 C 26.658 50 27 50.675 27 51.500 C 27 53.043 25.428 53.587 24.833 52.250 C 24.504 51.508 14.270 45 13.434 45 C 13.195 45 13.015 46.013 13.033 47.250 C 13.064 49.354 16.085 54 17.421 54 C 19.351 54 27 58.439 27 59.559 C 27 60.653 26.315 60.629 23.250 59.424 C 21.188 58.613 18.669 57.480 17.653 56.905 C 15.254 55.550 14.564 56.317 15.914 58.840 C 16.506 59.946 19.880 62.216 23.411 63.884 C 32.512 68.184 33.528 71.208 24.622 67.487 C 20.519 65.772 20.080 66.561 23.041 70.325 C 24.381 72.029 27.144 73.498 31.091 74.606 C 34.470 75.554 38.392 77.498 40.050 79.047 C 42.557 81.388 43 82.555 43 86.808 C 43 91.575 43.233 92.009 47.889 95.907 C 50.578 98.158 53.278 100 53.889 100 C 55.988 100 55.024 95.007 52.500 92.813 C 50.414 90.999 50 89.751 50 85.274 C 50 80.962 49.545 79.477 47.679 77.705 C 46.403 76.492 43.035 73.326 40.195 70.668 C 33.645 64.539 32.211 60.343 33.782 51.899 C 35.231 44.103 34.421 42.050 26.873 34.400 C 23.563 31.045 19.777 26.545 18.459 24.400 C 16.563 21.314 16.024 20.918 15.879 22.500 M 109.018 23.452 C 108.460 24.920 104.905 29.288 101.117 33.159 C 92.184 42.289 91.675 43.468 93.108 51.698 C 94.776 61.278 93.462 64.665 84.932 72.773 C 78.282 79.095 78 79.553 78 84.044 C 78 87.740 77.368 89.520 75 92.500 C 71.963 96.321 71.052 100 73.141 100 C 75.172 100 84.067 92.589 84.527 90.514 C 84.772 89.406 85.091 86.560 85.236 84.190 C 85.468 80.408 85.930 79.645 89 77.974 C 90.925 76.926 94.392 75.592 96.705 75.008 C 101.666 73.757 107 69.590 107 66.967 C 107 65.186 106.818 65.193 102.417 67.140 C 99.896 68.255 97.547 68.880 97.196 68.529 C 96.305 67.639 98.796 66.194 103.430 64.913 C 107.079 63.904 113 58.942 113 56.894 C 113 55.580 110.721 55.801 106.622 57.513 C 101.446 59.676 102.127 58.274 107.381 55.950 C 112.237 53.801 115 50.388 115 46.535 C 115 43.414 114.501 43.390 110.594 46.324 C 108.892 47.602 106.713 48.937 105.750 49.292 C 102.476 50.499 103.989 48.509 108.523 45.645 C 111.009 44.074 113.514 41.909 114.090 40.832 C 115.195 38.767 115.657 33.324 114.800 32.466 C 114.522 32.188 112.565 33.545 110.452 35.480 C 105.622 39.905 103.562 40.105 107.684 35.750 C 113.065 30.065 114.598 24.571 111.517 22.014 C 110.286 20.992 109.860 21.238 109.018 23.452 M 56.568 112.698 L 53.636 114.255 57.068 117.126 C 62.209 121.427 64.280 121.640 68.934 118.347 C 73.639 115.017 73.945 113.752 70.432 112.151 C 68.380 111.216 67.451 111.271 65.800 112.427 C 64.045 113.656 63.419 113.669 61.618 112.508 C 59.808 111.341 59.074 111.368 56.568 112.698"

const StravinciParticle = memo(() => {
  const canvasRef = useRef(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

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

    const createTextImage = () => {
      if (!ctx || !canvas) return 0

      ctx.fillStyle = "white"
      ctx.save()

      const fontSize = isMobile ? Math.min(canvas.width / 5, 70) : Math.min(canvas.width / 5, 120)
      ctx.font = `bold ${fontSize}px 'Bank-Gothic', Bank Gothic`

      const text = "Stravinci"
      const textMetrics = ctx.measureText(text)
      const textWidth = textMetrics.width

      const logoSize = fontSize * 2
      const totalWidth = logoSize + 10 + textWidth + 10 + logoSize
      const startX = (canvas.width - totalWidth) / 2
      const centerY = canvas.height / 2 + fontSize / 3

      ctx.save()
      ctx.translate(startX, centerY - logoSize)
      const logoScale = logoSize / 120
      ctx.scale(logoScale, logoScale)
      ctx.fill(new Path2D(AWS_LOGO_PATH))
      ctx.restore()

      ctx.fillText(text, startX + logoSize + 20, centerY - logoSize / 5)

      ctx.save()
      ctx.translate(startX + logoSize + 10 + textWidth + 10, centerY - logoSize)
      ctx.scale(logoScale, logoScale)
      ctx.fill(new Path2D(AWS_LOGO_PATH))
      ctx.restore()

      ctx.restore()

      const textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      return { textImageData, scaleFactor: fontSize / 120 }
    }

    const createParticle = (textImageData) => {
      if (!textImageData) return null

      const data = textImageData.data
      const canvasWidth = canvas.width

      for (let attempt = 0; attempt < 50; attempt++) {
        const x = Math.floor(Math.random() * canvasWidth)
        const y = Math.floor(Math.random() * canvas.height)
        const index = (y * canvasWidth + x) * 4

        if (data[index + 3] > 128) {
          return {
            x,
            y,
            baseX: x,
            baseY: y,
            size: Math.random() * 1.5 + 0.5,
            life: Math.random() * 100 + 50,
          }
        }
      }

      return null
    }

    const createInitialParticles = (textImageData) => {
      const baseParticleCount = isMobile ? 8000 : 10000
      const particleCount = Math.floor(
        baseParticleCount * Math.sqrt((canvas.width * canvas.height * 5) / (1920 * 1080))
      )
      
      const particles = []
      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(textImageData)
        if (particle) particles.push(particle)
      }
      
      return particles
    }

    const animate = (particles, textImageData) => {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY } = mousePositionRef.current
      const maxDistance = 200

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance && (isTouchingRef.current || !("ontouchstart" in window))) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 50
          const moveY = Math.sin(angle) * force * 50
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY
        } else {
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
        }

        ctx.fillStyle = "white"
        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          const newParticle = createParticle(textImageData)
          if (newParticle) {
            particles[i] = newParticle
          } else {
            particles.splice(i, 1)
            i--
          }
        }
      }

      const targetCount = isMobile ? 8000 : 10000
      while (particles.length < targetCount) {
        const newParticle = createParticle(textImageData)
        if (newParticle) particles.push(newParticle)
      }

      animationRef.current = requestAnimationFrame(() => animate(particles, textImageData))
    }

    const { textImageData } = createTextImage()
    const particles = createInitialParticles(textImageData)
    particlesRef.current = particles
    
    animate(particles, textImageData)

    const handleResize = () => {
      updateCanvasSize()
      const { textImageData } = createTextImage()
      particlesRef.current = createInitialParticles(textImageData)
    }

    const handleMove = (x, y) => {
      const rect = canvas.getBoundingClientRect()
      mousePositionRef.current = {
        x: x - rect.left,
        y: y - rect.top,
      }
    }

    const handleMouseMove = (e) => handleMove(e.clientX, e.clientY)
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    const handleTouchStart = () => { isTouchingRef.current = true }
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
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMobile])

  return (
    <canvas ref={canvasRef} className="w-full h-[65vh] bank-gothic" aria-label="Interactive particle effect with Stravinci text" />
  )
})

StravinciParticle.displayName = 'StravinciParticle'

export default StravinciParticle
