import * as React from 'react';
import './Map.scss';

class CameraPoint {
  x: number;
  y: number;
  static radius = 8;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, CameraPoint.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
  }
}

interface BoundingRec {
  left: number;
  top: number;
}

interface Props {}

export const Map = (props: Props) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const pointCoordinates = [
    [300, 380],
    [80, 100],
    [200, 60],
    [500, 300],
    [300, 500],
    [400, 430],
    [50, 480],
    [40, 400],
    [580, 580],
    [580, 500],
    [100, 360],
    [250, 380],
    [120, 270],
    [480, 560],
    [188, 160],
    [550, 280],
    [500, 30],
    [400, 200]
  ];
  const [boundingRec, setBoundingRec] = React.useState<BoundingRec>({
    left: 0,
    top: 0
  });

  const drawCameraPoints = (ctx: CanvasRenderingContext2D) => {
    if (ctx !== null) {
      const points = pointCoordinates.map(
        coordinate => new CameraPoint(coordinate[0], coordinate[1])
      );
      points.forEach(point => point.draw(ctx));
    }
  };

  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (!!canvas) {
      console.log(canvas);
      const ctx = canvas.getContext('2d');
      canvas.width = 680;
      canvas.height = 600;

      const rec = canvas.getBoundingClientRect();
      setBoundingRec(rec);
      console.log(rec);
      ctx && drawCameraPoints(ctx);
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    console.log('x: ' + (event.clientX - boundingRec.left));
    console.log('y: ' + (event.clientY - boundingRec.top));
    console.log('clientX: ' + event.pageX);
    console.log('clientY: ' + event.pageY);
    console.log('left: ' + boundingRec.left);
    console.log('top: ' + boundingRec.top);
  };

  return <canvas ref={canvasRef} className="map" onClick={handleClick} />;
};
