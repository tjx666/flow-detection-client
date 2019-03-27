export class CameraPoint {
    x: number
    y: number
    static radius = 8

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, CameraPoint.radius, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = 'red'
        ctx.fill()
    }
}
