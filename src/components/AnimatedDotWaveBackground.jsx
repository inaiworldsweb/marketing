import { useEffect, useRef } from 'react';

/**
 * AnimatedDotWaveBackground - High-performance animated dot wave background
 * Subtle grey dots on dark background with gentle wave animation
 * Pure HTML5 Canvas implementation for minimal bundle size and max performance
 */
export default function AnimatedDotWaveBackground() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configuration - matching the subtle dot pattern from reference
        const config = {
            dotSpacing: 20,
            dotBaseRadius: 1.0,
            dotMaxRadius: 1.8,
            waveSpeed: 0.008,
            waveFrequency: 0.008,
            backgroundColor: '#08080f',
            dotBaseAlpha: 0.12,
            dotMaxAlpha: 0.35,
        };

        // Resize handler
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Initial size
        handleResize();
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            const { width, height } = canvas;

            // Clear with background color
            ctx.fillStyle = config.backgroundColor;
            ctx.fillRect(0, 0, width, height);

            // Calculate grid dimensions
            const cols = Math.ceil(width / config.dotSpacing) + 2;
            const rows = Math.ceil(height / config.dotSpacing) + 2;
            const offsetX = (width - (cols - 1) * config.dotSpacing) / 2;
            const offsetY = (height - (rows - 1) * config.dotSpacing) / 2;

            // Draw dots with subtle wave effect
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = offsetX + i * config.dotSpacing;
                    const y = offsetY + j * config.dotSpacing;

                    // Very subtle wave based on position and time
                    const wave1 = Math.sin(
                        (x * config.waveFrequency) +
                        (y * config.waveFrequency * 0.5) +
                        timeRef.current
                    );
                    const wave2 = Math.cos(
                        (y * config.waveFrequency * 0.8) -
                        timeRef.current * 0.6
                    );

                    // Combine waves gently
                    const combinedWave = (wave1 * 0.6 + wave2 * 0.4);

                    // Normalize to 0-1 range
                    const intensity = (combinedWave + 1) / 2;

                    // Calculate dynamic radius and alpha
                    const radius = config.dotBaseRadius +
                        (config.dotMaxRadius - config.dotBaseRadius) * intensity * 0.5;
                    const alpha = config.dotBaseAlpha +
                        (config.dotMaxAlpha - config.dotBaseAlpha) * intensity;

                    // Draw dot with subtle grey color
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(150, 150, 160, ${alpha})`;
                    ctx.fill();
                }
            }

            // Increment time for next frame
            timeRef.current += config.waveSpeed;

            // Continue animation loop
            animationRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animationRef.current = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
            }}
            aria-hidden="true"
        />
    );
}

