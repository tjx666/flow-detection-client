import { Street } from './Street';
import _ from 'lodash';
import Color from 'color';

enum StreetStatus {
    NORMAL,
    CROWDED,
    VERY_CROWDED,
}

export class Point {
    static DEFAULT_RADIUS = 6;
    static mapStatusToColor = (status: StreetStatus): string => {
        const statusToColorMap = new Map<StreetStatus, string>([
            [StreetStatus.NORMAL, 'green'],
            [StreetStatus.CROWDED, 'yellow'],
            [StreetStatus.VERY_CROWDED, 'red'],
        ]);

        return statusToColorMap.get(status) || 'green';
    };

    street: Street;
    x: number;
    y: number;
    radius: number;
    defaultColor: string;
    color: string;
    status: StreetStatus;
    flag: string;

    constructor(street: Street) {
        this.street = street;
        this.x = street.x;
        this.y = street.y;
        this.status = this.computeStatus();
        this.color = this.defaultColor = Point.mapStatusToColor(this.status);
        this.radius = Point.DEFAULT_RADIUS;
        this.flag = Math.random() < 0.5 ? 'small' : 'big';
    }

    computeStatus = () => {
        const averageCarFlow = _.mean(this.street.cameras.map(camera => camera.carFlow)) || 0;
        if (averageCarFlow <= 5) {
            return StreetStatus.NORMAL;
        } else if (averageCarFlow > 5 && averageCarFlow <= 8) {
            return StreetStatus.CROWDED;
        } else {
            return StreetStatus.VERY_CROWDED;
        }
    };

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.font = '12px 黑体';
        ctx.fillStyle = 'white';
        ctx.fillText(this.street.name, this.x - 20, this.y + this.radius + 16);
    }
}
