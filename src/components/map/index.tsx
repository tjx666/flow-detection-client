import * as React from 'react';
import Color from 'color';
import { Point } from '../../models/Point';
import { getStreets } from '../../api/streetApi';
import './style.scss';

interface MapProps {}

export const Map = (props: MapProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const WIDTH = 680;
    const HEIGHT = 600;
    let points: Point[];

    const loadStreets = async () => {
        const streets = await getStreets();
        points = streets.map(street => {
            return new Point(street);
        });
    };

    React.useLayoutEffect(() => {
        loadStreets();
    }, []);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            canvas.width = WIDTH;
            canvas.height = HEIGHT;
            if (ctx) {
                const timer = setInterval(() => {
                    // 清除画布
                    ctx.clearRect(0, 0, WIDTH, HEIGHT);
                    points.forEach(point => {
                        if (point.flag === 'small') {
                            point.color = Color(point.defaultColor)
                                .fade(0.2)
                                .toString();
                            point.radius = point.radius * 0.8;
                            point.flag = 'big';
                        } else {
                            point.color = point.defaultColor;
                            point.radius = Point.DEFAULT_RADIUS;
                            point.flag = 'small';
                        }
                        point.draw(ctx);
                    });
                }, 500);

                return () => {
                    clearInterval(timer);
                };
            }
        }
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {};

    return <canvas ref={canvasRef} className="map" onClick={handleClick} />;
};
