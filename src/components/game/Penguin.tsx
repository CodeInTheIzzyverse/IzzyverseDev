import { useEffect, useRef, useState } from 'react';
import './Penguin.scss';

const PENGUIN_SIZE = 48;
const MOVE_SPEED = 3.5;

interface Burst {
    id: number;
    direction: 'left' | 'right';
}

const Penguin = () => {
    const [position, setPosition] = useState({ x: 120, y: 160 });
    const [facing, setFacing] = useState<'left' | 'right'>('right');
    const [bursts, setBursts] = useState<Burst[]>([]);
    const [isMoving, setIsMoving] = useState(false);
    const pressedKeys = useRef<Record<string, boolean>>({});

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            if (key === 'p') {
                event.preventDefault();
                setBursts((current) => [
                    ...current,
                    {
                        id: Date.now() + Math.random(),
                        direction: facing,
                    },
                ]);
                return;
            }

            if (['w', 'a', 's', 'd'].includes(key)) {
                pressedKeys.current[key] = true;
            }
        };

        const onKeyUp = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            if (['w', 'a', 's', 'd'].includes(key)) {
                pressedKeys.current[key] = false;
            }
        };

        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        };
    }, [facing, position.x, position.y]);

    useEffect(() => {
        let frameId = 0;

        const getCollisionRect = (x: number, y: number) => ({
            left: x,
            top: y,
            right: x + PENGUIN_SIZE,
            bottom: y + PENGUIN_SIZE,
        });

        const intersects = (
            rectA: { left: number; right: number; top: number; bottom: number },
            rectB: { left: number; right: number; top: number; bottom: number },
        ) => rectA.left < rectB.right && rectA.right > rectB.left && rectA.top < rectB.bottom && rectA.bottom > rectB.top;

        const moveCharacter = () => {
            let dx = 0;
            let dy = 0;

            const currentlyMoving = Boolean(
                pressedKeys.current.w ||
                pressedKeys.current.a ||
                pressedKeys.current.s ||
                pressedKeys.current.d,
            );

            setIsMoving(currentlyMoving);

            if (pressedKeys.current.w) dy -= MOVE_SPEED;
            if (pressedKeys.current.s) dy += MOVE_SPEED;
            if (pressedKeys.current.a) {
                dx -= MOVE_SPEED;
                setFacing('left');
            }
            if (pressedKeys.current.d) {
                dx += MOVE_SPEED;
                setFacing('right');
            }

            setPosition((current) => {
                const nextX = Math.min(Math.max(current.x + dx, 0), window.innerWidth - PENGUIN_SIZE);
                const nextY = Math.min(Math.max(current.y + dy, 0), window.innerHeight - PENGUIN_SIZE);

                const obstacles = [
                    document.querySelector('header')?.getBoundingClientRect(),
                    document.querySelector('footer')?.getBoundingClientRect(),
                    ...Array.from(document.querySelectorAll('.floating-social-btn')).map((button) => button.getBoundingClientRect()),
                ].filter(Boolean) as DOMRect[];

                const nextRect = getCollisionRect(nextX, nextY);

                let resolvedX = nextX;
                let resolvedY = nextY;

                for (const obstacle of obstacles) {
                    const obstacleRect = {
                        left: obstacle.left,
                        right: obstacle.right,
                        top: obstacle.top,
                        bottom: obstacle.bottom,
                    };

                    if (intersects(nextRect, obstacleRect)) {
                        const horizontalOverlap = Math.min(nextRect.right, obstacleRect.right) - Math.max(nextRect.left, obstacleRect.left);
                        const verticalOverlap = Math.min(nextRect.bottom, obstacleRect.bottom) - Math.max(nextRect.top, obstacleRect.top);

                        if (horizontalOverlap > verticalOverlap) {
                            resolvedY = current.y;
                        } else {
                            resolvedX = current.x;
                        }
                    }
                }

                const clampedX = Math.min(Math.max(resolvedX, 0), window.innerWidth - PENGUIN_SIZE);
                const clampedY = Math.min(Math.max(resolvedY, 0), window.innerHeight - PENGUIN_SIZE);

                const finalRect = getCollisionRect(clampedX, clampedY);
                if (obstacles.some((obstacle) => {
                    const obstacleRect = {
                        left: obstacle.left,
                        right: obstacle.right,
                        top: obstacle.top,
                        bottom: obstacle.bottom,
                    };
                    return intersects(finalRect, obstacleRect);
                })) {
                    return current;
                }

                return {
                    x: clampedX,
                    y: clampedY,
                };
            });

            frameId = window.requestAnimationFrame(moveCharacter);
        };

        frameId = window.requestAnimationFrame(moveCharacter);

        return () => {
            window.cancelAnimationFrame(frameId);
        };
    }, []);

    useEffect(() => {
        if (bursts.length === 0) return;

        const timer = window.setTimeout(() => {
            setBursts((current) => current.slice(1));
        }, 500);

        return () => window.clearTimeout(timer);
    }, [bursts]);

    return (
        <div className="penguin" style={{ left: position.x, top: position.y }}>
            <div className={isMoving ? 'penguin__sprite penguin__sprite--moving' : 'penguin__sprite'}>
                <img
                    src="/Isotype.png"
                    alt="Penguin"
                    className={facing === 'left' ? 'penguin__img penguin__img--left' : 'penguin__img'}
                />
            </div>
            {bursts.map((burst) => (
                <span
                    key={burst.id}
                    className={burst.direction === 'left' ? 'penguin__burst penguin__burst--left' : 'penguin__burst penguin__burst--right'}
                >
                    {'<CODE_BURST />'}
                </span>
            ))}
        </div>
    );
};

export default Penguin;