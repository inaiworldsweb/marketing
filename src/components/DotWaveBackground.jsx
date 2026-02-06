import { useEffect, useRef, useCallback } from 'react';

/**
 * DotWaveBackground - A high-performance animated dot wave background
 * Uses HTML5 Canvas for smooth 60fps animation with 3D sine wave effect
 */
export default function DotWaveBackground() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const timeRef = useRef(0);

    // Configuration
    const config = {
        dotSpacing: 30,        // Distance between dots
        dotBaseRadius: 1.5,    // Base dot size
        dotMaxRadius: 3,       // Max dot size during wave peak
        waveAmplitude: 0.8,    // Wave intensity (0-1)
        waveFrequency: 0.015,  // Wave frequency (lower = larger waves)
        waveSpeed: 0.02,       // Animation speed
        backgroundColor: '#0a0a12', // Deep dark blue-black
        dotColor: 'rgba(255, 255, 255, 0.4)', // Subtle white dots
        dotColorBright: 'rgba(255, 255, 255, 0.8)', // Brighter dots at wave peaks
    };

    const draw = useCallback((ctx, width, height, time) => {
        // Clear canvas
        ctx.fillStyle = config.backgroundColor;
        ctx.fillRect(0, 0, width, height);

        // Calculate grid
        const cols = Math.ceil(width / config.dotSpacing) + 2;
        const rows = Math.ceil(height / config.dotSpacing) + 2;
        const offsetX = (width - (cols - 1) * config.dotSpacing) / 2;
        const offsetY = (height - (rows - 1) * config.dotSpacing) / 2;

        // Draw dots with 3D wave effect
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const x = offsetX + i * config.dotSpacing;
                const y = offsetY + j * config.dotSpacing;

                // Calculate 3D wave displacement
                const distFromCenter = Math.sqrt(
                    Math.pow((x - width / 2) * 0.8, 2) +
                    Math.pow((y - height / 2) * 0.8, 2)
                );

                // Multiple overlapping sine waves for organic movement
                const wave1 = Math.sin(distFromCenter * config.waveFrequency + time);
                const wave2 = Math.sin(distFromCenter * config.waveFrequency * 0.7 - time * 0.8);
                const wave3 = Math.cos((x + y) * config.waveFrequency * 0.5 + time * 0.5);

                const combinedWave = (wave1 + wave2 * 0.5 + wave3 * 0.3) / 1.8;

                // Calculate dot properties based on wave
                const waveIntensity = (combinedWave + 1) / 2; // Normalize to 0-1
                const radius = config.dotBaseRadius +
                    (config.dotMaxRadius - config.dotBaseRadius) * waveIntensity * config.waveAmplitude;

                // Interpolate color based on wave intensity
                const alpha = 0.2 + waveIntensity * 0.6;

                // Draw dot
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fill();
            }
        }
    }, []);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        timeRef.current += config.waveSpeed;
        draw(ctx, canvas.width, canvas.height, timeRef.current);
        animationRef.current = requestAnimationFrame(animate);
    }, [draw]);

    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Set canvas size to match viewport
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, []);

    useEffect(() => {
        handleResize();

        // Start animation
        animationRef.current = requestAnimationFrame(animate);

        // Handle window resize
        window.addEventListener('resize', handleResize);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [animate, handleResize]);

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
                pointerEvents: 'none', // Ensures no interference with scrolling/clicks
            }}
            aria-hidden="true"
        />
    );
}
