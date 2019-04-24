import * as React from 'react'
import { CameraPoint } from '../../models/CameraPoint'
import './Map.scss'

interface BoundingRec {
    left: number
    top: number
}

interface MapProps {}

export const Map = (props: MapProps) => {
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
        [400, 200],
    ]

    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const [boundingRec, setBoundingRec] = React.useState<BoundingRec>({
        left: 0,
        top: 0,
    })

    const drawCameraPoints = (ctx: CanvasRenderingContext2D) => {
        if (ctx !== null) {
            const points = pointCoordinates.map(
                coordinate => new CameraPoint(coordinate[0], coordinate[1])
            )
            points.forEach(point => point.draw(ctx))
        }
    }

    React.useEffect(() => {
        const canvas = canvasRef.current

        if (!!canvas) {
            const ctx = canvas.getContext('2d')
            canvas.width = 680
            canvas.height = 600

            const rec = canvas.getBoundingClientRect()
            setBoundingRec(rec)
            ctx && drawCameraPoints(ctx)
        }
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {}

    return <canvas ref={canvasRef} className="map" onClick={handleClick} />
}
